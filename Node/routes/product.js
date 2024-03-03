const express = require("express");
const mssql = require("mssql");
const app = express.Router();
const config = require("config");

const connectionSet = {
  server: config.connSetting.server, // Assuming the "host" config is for server
  database: config.connSetting.database,
  user: config.connSetting.user,
  password: config.connSetting.password,
  options: {
    trustServerCertificate: true,
  },
};

app.get("/", (request, response) => {
  var sqlquery = `select * from Product`;
  mssql
    .connect(connectionSet)
    .then((pool) => {
      return pool.request().query(sqlquery);
    })
    .then((result) => {
      response.json(result.recordset);
    })
    .catch((err) => {
      console.error("Error executing SQL query:", err);
      response.status(500).send("Internal Server Error");
    });
});

app.post("/", (request, response) => {
  console.log(request.body.PName);
  console.log(request.body.PImage);
  console.log(request.body.PDescription);
  console.log(request.body.PPrice);

  const escapedPName = request.body.PName.replace(/'/g, "''");
  const escapedPDescription = request.body.PDescription.replace(/'/g, "''");

  var sqlquery = `insert into Product (PName,PImage,PDescription,PPrice) values ('${request.body.PName}','${request.body.PImage}','${escapedPDescription}',${request.body.PPrice})`;
  mssql
    .connect(connectionSet)
    .then((pool) => {
      return pool.request().query(sqlquery);
    })
    .then((result) => {
      response.json(result.recordset);
    })
    .catch((err) => {
      console.error("Error executing SQL query:", err.message);
      response.status(500).send("Internal Server Error");
    });
});

app.delete("/:id", (request, response) => {
  console.log(request.params.id);
  var sqlquery = `delete from Product where ProductId= ${request.params.id}`;
  mssql
    .connect(connectionSet)
    .then((pool) => {
      return pool.request().query(sqlquery);
    })
    .then((result) => {
      response.json(result.recordset);
    })
    .catch((err) => {
      console.error("Error executing SQL query:", err);
      response.status(500).send("Internal Server Error");
    });
});

app.put("/", (request, response) => {
  console.log(request.body.ProductId);
  var sqlquery = `UPDATE Product SET PName = '${request.body.PName}', PDescription =  '${request.body.PDescription}', PPrice =  ${request.body.PPrice} WHERE ProductId= ${request.body.ProductId}`;
  mssql
    .connect(connectionSet)
    .then((pool) => {
      return pool.request().query(sqlquery);
    })
    .then((result) => {
      response.json(result.recordset);
    })
    .catch((err) => {
      console.error("Error executing SQL query:", err);
      response.status(500).send("Internal Server Error");
    });
});

module.exports = app;
