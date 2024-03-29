USE [EComm]
GO
/****** Object:  Table [dbo].[Cart]    Script Date: 03-03-2024 17:49:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cart](
	[CartID] [int] IDENTITY(1,1) NOT NULL,
	[ProductId] [int] NOT NULL,
 CONSTRAINT [PK_Cart] PRIMARY KEY CLUSTERED 
(
	[CartID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 03-03-2024 17:49:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[ProductId] [int] IDENTITY(1,1) NOT NULL,
	[PName] [nvarchar](100) NULL,
	[PPrice] [int] NULL,
	[PImage] [nvarchar](500) NULL,
	[PDescription] [nvarchar](1000) NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Product] ON 

INSERT [dbo].[Product] ([ProductId], [PName], [PPrice], [PImage], [PDescription]) VALUES (1005, N'HP Laptop 15s', 37490, N'https://firebasestorage.googleapis.com/v0/b/timelesstreasure.appspot.com/o/images%2F13471f2lQ3ESWL._SX522_.jpg?alt=media&token=6600f7e7-76e6-43a0-8e35-a42bfc933514', N'?6-core 12th Gen Intel Core i3-1215U? 8 threads and 10MB L3 cache deliver high performance and instant responsiveness. The Intel UHD graphics help you dive into crisp, stunning visuals.')
INSERT [dbo].[Product] ([ProductId], [PName], [PPrice], [PImage], [PDescription]) VALUES (1006, N'boAt Airdopes Atom 81 TWS', 999, N'https://firebasestorage.googleapis.com/v0/b/timelesstreasure.appspot.com/o/images%2F12161yyQD1KLOL._SX522_.jpg?alt=media&token=3cd018d7-d9ea-454a-a347-d31e079ae089', N'Playback- Airdopes Atom 81 offer a total playtime of up to 50HRS, including up to 10HRS of playtime per earbud')
INSERT [dbo].[Product] ([ProductId], [PName], [PPrice], [PImage], [PDescription]) VALUES (1007, N'TVS Helmet', 1049, N'https://firebasestorage.googleapis.com/v0/b/timelesstreasure.appspot.com/o/images%2F9741d5frqhU2L._SX679_.jpg?alt=media&token=75402f8e-f884-4f24-b495-6b8328f97b2a', N'When it comes to product quality, TVS has always set the bar high without any compromise. The TVS Helmets, our latest line of premium quality headgear, proudly carries this mark of excellence.Designed with your safety in mind, these helmets feature an outer shell injected with a high-impact grade of engineering thermoplastic.')
INSERT [dbo].[Product] ([ProductId], [PName], [PPrice], [PImage], [PDescription]) VALUES (1009, N'3M Car wash Shampoo', 1489, N'https://firebasestorage.googleapis.com/v0/b/timelesstreasure.appspot.com/o/images%2F7271iFYl4R%2BqL._SX679_.jpg?alt=media&token=3ca9ba3a-d941-466c-bbac-08f89772b097', N'PROFESSIONAL CLEANING- Removes Tough Dirt & Road Grime on all types of Cars, Giving a clean and dust free look.')
INSERT [dbo].[Product] ([ProductId], [PName], [PPrice], [PImage], [PDescription]) VALUES (1013, N'Analog Full Diamond Silver Chronograph Unisex Watch', 595, N'https://firebasestorage.googleapis.com/v0/b/timelesstreasure.appspot.com/o/images%2F20061UeRvSyaqL._SX679_.jpg?alt=media&token=f8265810-f268-483b-b95d-4638168dbed6', N' Product description Analog Full Diamond Silver Chronograph Watch')
SET IDENTITY_INSERT [dbo].[Product] OFF
GO
/****** Object:  Index [UQ__Cart__B40CC6CC1F664CBF]    Script Date: 03-03-2024 17:49:31 ******/
ALTER TABLE [dbo].[Cart] ADD UNIQUE NONCLUSTERED 
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Cart]  WITH CHECK ADD  CONSTRAINT [FK_Cart_Product] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Product] ([ProductId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Cart] CHECK CONSTRAINT [FK_Cart_Product]
GO
