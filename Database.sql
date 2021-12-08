create database Clothing_Web
use Clothing_Web
go

create table Login(
	id_Login	numeric(18,0)		NOT NULL		IDENTiTY(1,1),
	Name		nvarchar(500)		NULL,
	Password	nvarchar(500)		NULL,
	Email		nvarchar(50)		NULL,
	Author		nvarchar(50)		NULL,
	TenKH		nvarchar(500)		NULL,
	DiaChi		nvarchar(500)		NULL,
	SDT			nvarchar(20)		NULL,
	Primary Key (id_Login)
)
go
create table SanPham(
	id			numeric(18,0)		NOT NULL		IDENTITY(1,1),
	Image		nvarchar(max)		NULL,
	Name		nvarchar(500)		NULL,
	Gia			smallmoney			NULL,
	Catid		numeric(18,0)		NULL,
	pIndex		numeric(18,0)		NULL,
	Mota		nvarchar(max)		NULL,
	Primary Key (id),
)
go
create table ImageS(
	Id_image	numeric(18,0)		NOT NULL		IDENTITY(1,1),
	id			numeric(18,0)		NULL,
	Path		nvarchar(max)		NULL,
	Primary key (Id_image),
	Foreign Key (id) References SanPham(id)
)
go
create table HoaDon(
	id_HD		numeric(18,0)		NOT NULL		IDENTITY(1,1),
	id_KH		numeric(18,0)		NOT NULL,
	NgayBan		nvarchar(30)		NULL,
	TongTien	smallmoney			NOT NULL,
	Primary Key (id_HD),
	Foreign Key (id_KH) references Login(id_Login)
)
go
create table ChiTietHoaDon(
	id_HD		numeric(18,0)		NULL,
	id			numeric(18,0)		NOT NULL,
	SoLuong		int					NULL,
	Gia			smallmoney			NULL,
	Foreign Key (id_HD) references HoaDon(id_HD),
	Foreign Key(id) references SanPham(id)
)
go
create table Blogs(
	id_blogs	numeric(18,0)		NOT NULL,
	Imag		nvarchar(max)		NULL,
	NoiDung		nvarchar(max)		NULL,
	Title		nvarchar(205)		NULL,
	Primary key (id_blogs)
)
go
create table Contact(
	ID_contact	numeric(18,0)		NOT NULL		IDENTITY(1,1),
	Ho			nvarchar(500)		NULL,
	Ten			nvarchar(500)		NULL,
	Email		nvarchar(500)		NULL,
	SDT			nchar(10)			NULL,
	Loi_nhan	nvarchar(500)		NULL,
	Primary key(ID_contact)
)
go
Insert Into SanPham( [Image], [Name], [Gia], [Catid], [pIndex], [Mota])Values
( 'Jordan Air NFH 1.png', 'Jordan Air NFH', 8.000000, 1, 1, 'Day la doi giay cao cap den tu Nike'),
( 'Jordan One Take 1.png', 'Jordan One Take', 7.000000, 1, 1, 'Day la doi giay cao cap den tu Nike'),
( 'Jordan Why Not 1.png', 'Jordan Why Not', 5.000000, 1, 1, 'Day la doi giay cao cap den tu Nike'),
( 'Nike Dunk High 1.png', 'Nike Dunk High', 4.000000, 1, 1, 'Day la doi giay cao cap den tu Nike'),
( 'Jordan 4 G 1.png', 'Jorndan 4 G', 4.000000, 1, 1, 'Day la doi giay cao cap den tu Nike'),
( 'Jumpman Box 1.jfif', 'Jumpman Box', 500.000, 2, 2, 'Day la ao den tu Nike'),
( 'New Legacy 1.jfif', 'New Legacy', 550.000, 2, 2, 'Day la ao den tu Nike'),
( 'Tee Engineered 1.jfif', 'Tee Engineered', 600.000, 2, 2, 'Day la ao den tu Nike'),
( 'Tee Wordmark 1.jfif', 'Tee Wordmark', 650.000, 2, 2, 'Day la ao den tu Nike'),
( 'T-Shirt Jumpman 1.jfif', 'T-Shirt Jumpman', 790.000, 2, 2, 'Day la ao den tu Nike'),
( 'Pants Solo 1.jfif', 'Pants Solo', 600.000, 3, 3, 'Day la quan den tu Nike'),
( 'Pants Swoosh 1.jfif', 'Pants Swoosh', 500.000, 3, 3, 'Day la quan den tu Nike'),
( 'Pants Tech 1.jfif', 'Pants Tech', 450.000, 3, 3, 'Day la quan den tu Nike'),
( 'LeBron 1.jfif', 'LeBron', 400.000, 3, 3, 'Day la quan den tu Nike'),
( 'PSG 1.jfif', 'PSG', 700.000, 3, 3, 'Day la quan den tu Nike');
go
INSERT INTO ImageS( [id], [Path]) Values
( 1, 'Jordan 4 G 2.png'),
( 1, 'Jordan 4 G 3.png'),
( 1, 'Jordan 4 G 4.jfif'),
( 2, 'Jordan Air NFH 2.png'),
( 2, 'Jordan Air NFH 3.png'),
( 2, 'Jordan Air NFH 4.jfif'),
( 3, 'Jordan One Take 2.png'),
( 3, 'Jordan One Take 3.png'),
( 3, 'Jordan One Take 4.jfif'),
( 4, 'Jordan Why Not 2.png'),
( 4, 'Jordan Why Not 3.png'),
( 4, 'Jordan Why Not 4.png'),
( 5, 'Nike Dunk High 2.png'),
( 5, 'Nike Dunk High 3.png'),
( 5, 'Nike Dunk High 4.jfif'),
( 6, 'Jumpman Box 2.jfif'),
( 6, 'Jumpman Box 3.jfif'),
( 6, 'Jumpman Box 4.jfif'),
( 7, 'New Legacy 2.jfif'),
( 7, 'New Legacy 3.jfif'),
( 8, 'Tee Engineered 2.jfif'),
( 8, 'Tee Engineered 3.jfif'),
( 8, 'Tee Engineered 4.jfif'),
( 9, 'Tee Wordmark 2.jfif'),
( 9, 'Tee Wordmark 3.jfif'),
( 9, 'Tee Wordmark 4.jfif'),
( 10, 'T-Shirt Jumpman 2.jfif'),
( 10, 'T-Shirt Jumpman 3.jfif'),
( 10, 'T-Shirt Jumpman 4.jfif'),
( 11, 'Pants Solo 2.png'),
( 11, 'Pants Solo 3.png'),
( 11, 'Pants Solo 4.jfif'),
( 12, 'Pants Swoosh 2.jfif'),
( 12, 'Pants Swoosh 3.png'),
( 12, 'Pants Swoosh 4.jfif'),
( 13, 'Pants Tech 2.jfif'),
( 13, 'Pants Tech 3.jfif'),
( 13, 'Pants Tech 4.jfif'),
( 14, 'LeBron 2.jfif'),
( 14, 'LeBron 3.jfif'),
( 14, 'LeBron 4.jfif'),
( 15, 'PSG 2.png'),
( 15, 'PSG 3.png'),
( 15, 'PSG 4.png');

go
INSERT INTO Blogs VALUES
(1, 'Xu Huong.jfif', N'What: An 18-piece collection that embodies a modern bohemian vibe to perfection. In short—sure, you could wear it freely roaming the fields with your horse, but it’d still look pretty damn good on a busy subway cart too. (Just close your eyes, you could be anywhere!!)<br/>Who: Australian social media star and entrepreneur Elle Ferguson and her jewelry designer sister Lucie Ferguson (founder of Baby Anything brand) teamed up with Australia’s sustainably-driven gypset-inspired label lifestyle label Spell on the capsule. And true to Elle Ferguson’s undeniable influence, it’s selling quicker than you could gallop through those wide open wields you’re dreaming about.<br/>Why: Feast your eyes! From carefree maxi dresses that can be dressed up or dressed down, to a vintage-style tee mini, loose printed shirting, and multi-tasking accessories, it’s feels like a mental vacay just donning one of these pieces.', N'Like Gwyneth, Street Style Loves a Power Suit'),
(2, 'Xu Huong 2.jfif', N'If you aspire to be a fashion designer or work in the fashion industry in any capacity, look to the key players in the industry who boldly forged their own career paths for inspiration. Even the biggest names in fashion design had to start somewhere, and often it was at the bottom. It was their commitment to developing their creative and business skills, persistence in the face of rejection, and their unwavering passion for design, that allowed them to break out and succeed. Here are the inspiring stories of a few fashion industry heavyweights who attained considerable success.<br/>Kate Spade Kate Spade - Fashion DesignerKate Spade was born in the 1962 in Kansas City, Missouri – not exactly the fashion capitol of the world. After graduating from Arizona State University in 1986, Spade took her dreams to New York, landing a job at Mademoiselle magazine and eventually becoming a senior fashion editor and head of accessories. In 1993, Spade decided to strike out on her own with a line of handbags. Her business blossomed over the years with her products selling through retail outlets and high end stores like Bloomingdale’s and Saks Fifth Avenue. Today, Spade’s company Kate Spade New York has 42 retail shops across the U.S. and her products are sold throughout the world.', N'Follow in the Footsteps of Greatness: Fashion Designer Success Stories'),
(3, 'Xu Huong 3.jfif', N'These highly trained specialists are responsible for helping athletes recover from both minor and major injuries, and making sure they are in top shape to win games and championships. Sports and rehabilitation therapists are well versed in the art and science of healing, possessing extensive knowledge about the science and the structure of the human body, as well as the techniques of touch needed to assess injuries and speed up healing.<br/>Professional sports teams hire sports and rehabilitation therapists with the highest level of training, therefore it is critical that you obtain your degree from a quality higher education program before seeking employment with a team. Such a program will give you the skills to develop injury preventing plans and other healthcare regimens for sports teams, as well as provide sports massage treatments after practices and events. Getting your degree from a quality institution of higher education will also provide you access to any career placement assistance they offer.<br/>Working for a professional sports team is undoubtedly a dream career, which means that the competition for jobs will be high. Not to worry – with hundreds of professional sports teams always on the lookout for talent, your well-written resume sent out to a variety of different organizations will eventually get you noticed. Of course living in a professional sports-crazy market like Los Angeles offers more opportunity, but even if you live in a smaller market like Memphis, your persistence can pay off. Rather than simply seeking out job interviews, in addition request informational interviews with hiring managers at organizations where you wish to work so you can ask and learn about the company and the culture, and let them know that you are a go-getter who is interested in future opportunities with them.', N'How to Become a Sports and Rehabilitation Therapis');
go
INSERT INTO Login VALUES
('phanletuan','20102002','tuan.207pm27538@vanlanguni.vn','Client','Phan Le Tuan','VanLang','12346'),
('nguyenxuananh','09012002','anh.207pm47612@vanlanguni.vn','Client','Nguyen Xuan Anh','VanLang','12346'),
('buixuanphuoc','14012002','phuoc.207pm27490@vanlanguni.vn','Client','Bui Xuan Phuoc','VanLang','12346'),
('admin','admin','admin','Admin',null,null,null);
go