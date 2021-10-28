create database Clothing_Web
use Clothing_Web;
go
Insert Into SanPham( [Image], [Name], [Gia], [Catid], [pIndex], [Mota])Values
( 'Jordan Air NFH 1.png', 'Jordan Air NFH', 8.000000, 1, 1, 'Day la doi giay cao cap den tu Nike'),
( 'Jordan One Take 1.png', 'Jordan One Take', 7.000000, 1, 1, 'Day la doi giay cao cap den tu Nike'),
( 'Jordan Why Not 1.png', 'Jordan Why Not', 5.000000, 1, 1, 'Day la doi giay cao cap den tu Nike'),
( 'Nike Dunk High 1.png', 'Nike Dunk High', 4.000000, 1, 1, 'Day la doi giay cao cap den tu Nike'),
( 'Jumpman Box 1.jfif', 'Jumpman Box', 500.000, 2, 2, 'Day la ao den tu Nike'),
( 'New Legacy 1.jfif', 'New Legacy', 550.000, 2, 2, 'Day la ao den tu Nike'),
( 'Tee Engineered 1.jfif', 'Tee Engineered', 600.000, 2, 2, 'Day la ao den tu Nike'),
( 'Tee Wordmark 1.jfif', 'Tee Wordmark', 650.000, 2, 2, 'Day la ao den tu Nike'),
( 'T-Shirt Jumpman 1.jfif', 'T-Shirt Jumpman', 790.000, 2, 2, 'Day la ao den tu Nike'),
( 'Pants Solo 1.jfif', 'Pants Solo', 600.000, 3, 3, 'Day la quan den tu Nike'),
( 'Pants Swoosh 1.jfif', 'Pants Swoosh', 500.000, 3, 3, 'Day la quan den tu Nike'),
( 'Pants Tech 1.jfif', 'Pants Tech', 450.000, 3, 3, 'Day la quan den tu Nike'),
( ' 1.jfifLeBron 1.jfif', 'LeBron', 400.000, 3, 3, 'Day la quan den tu Nike'),
( 'PSG', 'PSG', 700.000, 3, 3, 'Day la quan den tu Nike');

go
INSERT INTO ImageS( [id], [Path]) Values
( 1, 'Jordan 4 G 2.png'),
( 1, 'Jordan 4 G 3.png'),
( 1, 'Jordan 4 G 4.png'),
( 2, 'Jordan Air NFH 2.png'),
( 2, 'Jordan Air NFH 3.png'),
( 2, 'Jordan Air NFH 4.png'),
( 3, 'Jordan One Take 2.png'),
( 3, 'Jordan One Take 3.png'),
( 3, 'Jordan One Take 4.png'),
( 4, 'Jordan Why Not 2.png'),
( 4, 'Jordan Why Not 3.png'),
( 4, 'Jordan Why Not 4.png'),
( 5, 'Nike Dunk High 2.png'),
( 5, 'Nike Dunk High 3.png'),
( 5, 'Nike Dunk High 4.png'),
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
( 11, 'Pants Solo 2.jfif'),
( 11, 'Pants Solo 3.jfif'),
( 11, 'Pants Solo 4.jfif'),
( 12, 'Pants Swoosh 2.jfif'),
( 12, 'Pants Swoosh 3.jfif'),
( 12, 'Pants Swoosh 4.jfif'),
( 13, 'Pants Tech 2.jfif'),
( 13, 'Pants Tech 3.jfif'),
( 13, 'Pants Tech 4.jfif'),
( 14, 'LeBron 2.jfif'),
( 14, 'LeBron 3.jfif'),
( 14, 'LeBron 4.jfif'),
( 15, 'PSG 2.jfif'),
( 15, 'PSG 3.jfif'),
( 15, 'PSG 4.jfif');

go
INSERT INTO Blogs VALUES
( 'Xu Hướng.jfif', 'Considered a modern fashion trend along with an extremely creative combination has produced a new fashion set.'),
('Xu Hướng 2.jfif', 'Recently, fashion styles have emerged that combine hoodies and jackets with a classic but no less fashionable style'),
( 'Xu Hướng 3.jfif', 'A Polo shirt with a vest gives the wearer a sense of luxury and elegance');
go
INSERT INTO Login VALUES
('phanletuan','20102002','tuan.207pm27538@vanlanguni.vn'),
('nguyenxuananh','09012002','anh.207pm47612@vanlanguni.vn'),
('buixuanphuoc','14012002','phuoc.207pm27490@vanlanguni.vn');

select * From SanPham