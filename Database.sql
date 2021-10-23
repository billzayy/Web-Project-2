use Clothing_Web;
go
/* Create table */
create table tblNhanVien (
	MaNV		char(10)		NOT NULL,
	TenNV		nvarchar(50)	NOT NULL,
	GioiTinh	BIT				NULL,
	DiaChi		nvarchar(50)	NULL,
	Dienthoai	nvarchar(11)	NULL,
	NgaySinh	Date			NULL,
	Primary Key (MaNV)
)
go
create table tblKhach(
	MaKhach		char(10)		NOT NULL,
	TenKhach	nvarchar(50)	NOT NULL,
	Diachi		nvarchar(50)	NULL,
	Dienthoai	nvarchar(11)	NULL,
	Primary Key (MaKhach)
)
go
create table tblHang(
	MaHang		char(10)		NOT NULL,
	TenHang		nvarchar(50)	NOT NULL,
	SoLuong		int				NULL,
	DongiaNhap	float			NULL,
	DongiaBan	float			NULL,
	Anh			nvarchar(max)	NULL,
	Ghichu		nvarchar(max)	NULL,
	Primary key (MaHang)
)
go
create table tblHDBan(
	MaHDBan		char(10)		NOT NULL,
	MaNV		char(10)		NOT NULL,
	Ngayban		datetime		NULL,
	MaKhach		char(10)		NOT NULL,
	Tongtien	decimal(4,2)	NULL,
	Primary key (MaHDBan),
	Foreign Key (MaNV) references tblNhanVien(MaNV),
	Foreign Key (MaKhach) references tblKhach(MaKhach)
)
go
create table tblChitietHDBan(
	MaHDBan		char(10)		NOT NULL,
	MaHang		char(10)		NOT NULL,
	SoLuong		int				NOT NULL,
	DonGia		int				NULL,
	GiamGia		int				NULL,
	ThanhTien	float			NULL,
	Primary key (MaHDBan, MaHang),
	Foreign Key (MaHDBan) references tblHDBan(MaHDBan),
	Foreign Key (MaHang) references tblHang(MaHang)
)
go
create table login_form(
	username		nvarchar(50)		NOT NULL,
	password		nvarchar(50)		NOT NULL,
	email			nvarchar(50)		NOT NULL,
	primary key (username)
)
go
/* Insert values */
Insert into tblNhanVien values 
('NV001','Phan Le Tuan',1,'Q2','0932149716','10-20-2002'),
('NV002','Nguyen Xuan Anh',1,'QBT','0932149716','10-20-2002'),
('NV003','Bui Xuan Phuoc',1,'Q2','0932149716','10-20-2002')
go
Insert into login_form values
('phanletuan','20102002','tuan.207pm27538@vanlanguni.vn'),
('nguyenxuananh','09012002','anh.207pm47612@vanlanguni.vn'),
('buixuanphuoc','14012002','phuoc.207pm27490@vanlanguni.vn')
go
Insert into tblHang values
('0001','Quan 1',2,100000,150000,'Quần 1.jfif',NULL),
('0002','Quan 2',2,800000,900000,'Quần 2.jfif',NULL),
('0003','Quan 3',2,600000,890000,'Quần 3.jfif',NULL),
('0004','Quan 4',2,600000,700000,'Quần 4.jfif',NULL),
('0005','Quan 5',2,800000,950000,'Quần 5.jfif',NULL),
('0006','Quan 6',2,900000,950000,'Quần 6.jfif',NULL),
('0007','Quan 7',2,800000,780000,'Quần 7.jfif',NULL),
('0008','Quan 8',2,800000,980000,'Quần 8.jfif',NULL),
('0009','Quan 9',2,600000,700000,'Quần 9.jfif',NULL),
('0010','Quan 10',2,500000,800000,'Quần 10.jfif',NULL)
go
Insert into tblKhach values
('0001','Tuan','Q2','123145167'),
('0002','Xanh','QBT','12332123'),
('0003','Phuoc','Q2','456654456')
go
Insert into tblHDBan values
('00A1','NV001','10-20-2002','0001',300000),
('00A2','NV002','10-01-2002','0003',900000),
('00A3','NV003','01-01-2002','0002',1400000)
go
Insert into tblChitietHDBan values
('00A1','0001',2,150000,NULL,300000),
('00A2','0002',1,900000,NULL,900000),
('00A3','0003',2,700000,NULL,1400000)