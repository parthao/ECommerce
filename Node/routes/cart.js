const express = require("express");
const mssql = require("mssql");
const app = express.Router();
const config = require("config");

const connectionSet = {
  server: config.get("connSetting.server"), // Assuming the "host" config is for server
  database: config.get("connSetting.database"),
  user: config.get("connSetting.user"),
  password: config.get("connSetting.password"),
  options: {
    trustServerCertificate: true,
  },
};

app.get("/", (request, response) => {
  var sqlquery = `select * from Cart`;
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

app.get("/productincart", (request, response) => {
  var sqlquery = `select *  from Product,Cart where Product.ProductId = Cart.ProductId`;
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

app.get("/cartproduct", (request, response) => {
  var sqlquery = `  select * from Product WHERE NOT EXISTS (
    SELECT ProductId 
    FROM Cart 
    WHERE Product.ProductId = Cart.ProductId
);`;
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

app.post("/:id", (request, response) => {
  var sqlquery = `insert into Cart (ProductId) values (${request.params.id})`;
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

app.delete("/:id", (request, response) => {
  console.log(request.params.id);
  var sqlquery = `delete from Cart where ProductId= ${request.params.id}`;
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
  var sqlquery = `UPDATE Product SET PName = '${request.body.PName}', PImage =  '${request.body.PImage}', PDescription =  '${request.body.PDescription}' WHERE ProductId= ${request.body.ProductId}`;
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
