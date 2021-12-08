//Module
var express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//Import File
const sql = require('./sql');
const login = require('./login');
const getImage = require('./getImage');
const search = require('./search');
const blogs = require('./Blogs');
const admin = require('./admin')
const adminClient = require('./adminClient')
const adminBill = require('./adminBill')
const adminBillDetail = require('./adminBillDetail')
const adminContact = require('./adminContact')
const shoppingCard = require('./shoppingcard');
const homepage = require('./homepage');
const contacts = require('./contact');
const profile = require('./profile')


var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
//hiện thi sản phẩm
app.get('/', function (req, res) {
    res.redirect('/index');
});

app.get('/all', function (req, res) {
    sql.executeSQL("select * from SanPham order by pindex", (recordset) => {
        var result = "";
        recordset.recordsets[0].forEach(row => {
            result +=
                `
                <div style='Display:inline-block;margin: 10px;'>
                    <a href="/detail/${row["id"]}"><img style="width:300px" src='/images/${row["Image"]}'/></a>
                    <div style="text-align:center;line-height: 30px;"><b>${row["Name"]}</b></div>
                    <div style="text-align:center"><span style="color:black"> ${row["Gia"]}$</span> </div>
                    <div class="product-content-right-product-button"><button   onclick="addToCard(${row['id']})" id = "test"><i class="fas fa-shopping-cart"></i> <p> Thêm vào giỏ hàng</p></button> </div>
                 </div>
            `;
        });
        res.send(result);
    });
});
     // <div style="text-align:center"><input type="button" value="thêm vào giỏ hàng" onclick="addToCard(${row['id']})"/></div>
// tiềm kiếm sản phẩm
app.post('/search', function (req, res) {
    search.search(req.body.search, res);
});

app.post('/getProducByCatId', function (req, res) {
    var catId = req.body.catId;
    sql.executeSQL(`select * from SanPham where catId='${catId}' order by pindex`, (recordset) => {
        var result = "";
        if (recordset.recordsets[0] === null || recordset.recordsets[0].length === 0) {
            res.send("Chua co san pham");
        }
        else {
            recordset.recordsets[0].forEach(row => {
                result += `
                <div style='Display: inline-block ;width:400px;float:left; '>
                    <a href="/detail/${row['id']}"><img style="width:300px" src='/images/${row['Image']}'/></a>
                    <div style="text-align:center;line-height: 30px;"><b>${row['Name']}</b></div>
                    <div style="text-align:center"><span style="color:red"> ${row['Gia']}$</span> </div>
                  
                    
                 </div>
                `;
            });
            res.send(result);
        }
    });
});

app.get('/index', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
// detail
app.get('/getDetailData/:id', function (req, res) {
    sql.executeSQL(`select * from SanPham where id = ${req.params.id}`, (recordset) => {
        var result = "";
        recordset.recordsets[0].forEach(row => {
            result +=
                `  <div class="product-content row">             
                 <div class="product-content-left row">
                    <div class="product-content-left-big-img">
                    <img  src='/images/${row["Image"]}'/></a>
                    </div>
                    <div class="product-content-left-small-img">
                        <div id="smalling"></div>
                    </div>
                </div>
                <div class="product-content-right">
                    <div class="product-content-right-product-name">
                    <div >${row["Name"]}</div>
                    </div>
                    <div class="product-content-right-product-price">
                    <div ><span style="color:black"> ${row["Gia"]}$</span> </div>
                    </div>

                    
                    <div class="product-content-right-product-button">
                    <button   onclick="addToCard(${row['id']})" id = "test"><i class="fas fa-shopping-cart"></i> <p>Thêm vào giỏ hàng</p></button> 
    
                    </div>
                    <div class="product-content-right-product-icon">
                <div class="product-content-right-product-icon-item">
                    <i class="fas fa-phone-alt"></i> <p>Hotline</p>
                </div>
                <div class="product-content-right-product-icon-item">
                    <i class="far fa-comments"></i> <p>Chat</p>
                </div>
                <div class="product-content-right-product-icon-item">
                    <i class="far fa-envelope"></i><p>Mail</p>
                </div>
                 </div>   
                    <div id ="a2" > <h3>chi tiết Sản phẩm</h3> <br>${row["Mota"]}</div>
            `;
        });
        res.send(result);
    });
});

app.get('/detail/:id', function (req, res) {
    res.sendFile(__dirname + "/detail.html");
});
app.get("/getImage/:id", function (req, res) {
    getImage.getImage(req, res);
});
// app.get('/getTypeProduct', function (req, res) {
//     getImage.getTypeProduct(req, res);
// });

// login
app.post('/getlogin', function (req, res) {
    login.login(req.body.user, req.body.password, (user) => {
        res.send(user);

    })

});

app.get('/login', function (req, res) {
    res.sendFile(__dirname + "/login.html");
});

app.get('/getsignUp/:username/:password/:email', (req, res) => {
    var userName = req.params['username'];
    var password = req.params['password'];
    var email = req.params['email'];

    login.signUp(userName, password, email, (rowsAffected) => {
        res.send(rowsAffected.toString());
    })
})
//admin
app.get('/admin', function (req, res) {
    res.sendFile(__dirname + "/admin.html");
});

// Admin - Product
app.get('/getProductAdmin', (req, res) => {
    admin.getProduct(req, res);
})

app.get('/addProductAdmin/:Name/:Gia/:Img', (req, res) => {
    admin.addProduct(req, res);
})

app.get('/updateProductAdmin/:id/:Name/:Gia/:Img', (req, res) => {
    admin.updateProduct(req,res);
})

app.get('/deleteProductAdmin/:id', (req, res) => {
    admin.deleteProduct(req, res);
})

//Admin - Bills
app.get('/getBillAdmin', (req, res) => {
    adminBill.getBill(req, res);
})

app.get('/deleteBillAdmin/:id', (req, res) => {
    adminBill.deleteBill(req, res);
})

app.get('/updateBillAdmin/:id_HD/:id_KH/:Date/:Price', (req, res) => {
    adminBill.updateBill(req, res);
})

app.get('/addBillAdmin/:id_KH/:Date/:Price', (req, res) => {
    adminBill.addBill(req, res);
})

app.get('/getBillDetailAdmin', (req, res) => {
    adminBillDetail.getBillDetail(req, res);
})

app.get('/addBillDetailAdmin/:id_HD/:SoLuong/:Price', (req, res) => {
    adminBillDetail.addBillDetail(req, res);
})

app.get('/updateBillDetailAdmin/:id_HD/:id_CTHD/:SoLuong/:Price', (req, res) => {
    adminBillDetail.updateBillDetail(req, res);
})
app.get('/deleteBillDetailAdmin/:id', (req, res) => {
    adminBillDetail.deleteBillDetail(req, res);
})
// Admin - Client
app.get('/getClientAdmin', (req, res) => {
    adminClient.getClient(req, res);
})

app.get('/addClientAdmin/:Name/:Password/:Email/:Author/:TenKH/:DiaChi/:SDT', (req, res) => {
    adminClient.addClient(req, res);
})

app.get('/updateClientAdmin/:id/:Name/:Password/:Email/:Author/:TenKH/:DiaChi/:SDT', (req, res) => {
    adminClient.updateClient(req,res);
})

app.get('/deleteClientAdmin/:id',(req,res) => {
    adminClient.deleteClient(req, res);
})

app.get('/getContactAdmin', (req, res) => {
    adminContact.getContact(req, res);
})

app.get('/deleteContactAdmin/:id', (req, res) => {
    adminContact.deleteContact(req, res);
})
//trang blogs

app.get('/blogs', function (req, res) {
    res.sendFile(__dirname + "/blogs.html");
});
app.get('/getblogs', function (req, res) {
    blogs.blogs(req, res);
});
app.get('/blogs/:id', function (req, res) {
    res.sendFile(__dirname + "/blog.html");
});
app.get('/getblog/:id', function (req, res) {
    sql.executeSQL(`select * from Blogs where id_blogs = ${req.params.id}`, (recordset) => {
        var row = recordset.recordsets[0][0];
        if (row === null || row === undefined) {
            res.send("");
            }
            else {
                var result = "";
                result += `
                <div style='width:100%;float:center;margin-top:20px'>
                    <div style="text-align:left;line-height:100px;margin-top:20px;font-size: 30px;"><b>${row['Title']}</b></div>
                    <img style="width:40%" class="center" src='/images/${row['Imag']}'/>
                    <div style="text-align:left;line-height: 30px;margin-top:20px;font-size:18px;">${row['NoiDung']}</div>
                </div>
                `;
                res.send(result);
            }
        })
    });

// contact
app.get('/contact', function (req, res) {
    res.sendFile(__dirname + "/contact.html");
});
//shoppingcard

app.post('/getshoppingCard', function (req, res)  {
    shoppingCard.getShoppingCard(req.body.arrProductId, (result) => {
        res.send(result);
    })
})
app.get('/shoppingcard', function (req, res) {
    res.sendFile(__dirname+"/shoppingcard.html");
})
app.post('/buyProduct', async function (req, res) {
    await shoppingCard.buyProduct(req.body.id_KH,req.body.TongTien, req.body.arrSP);
    res.send("ok")
});
app.get('/getInfo/:id', function (req, res) {
    shoppingCard.info(req, res);
});

// homepage
app.get('/homepage', function (req, res) {
    res.sendFile(__dirname+"/homepage.html");
})
app.get('/homepage', function (req, res) {
    homepage.homepage(req, res);
});
//Profile

app.get('/profile', (req, res) => {
    res.sendFile(__dirname + '/profile.html')
})

app.get('/getProfile/:id', (req, res) => {
    profile.getProfile(req,res)
})
app.get('/updateProfile/:id/:Name/:Password/:Email/:TenKH/:DiaChi/:SDT', (req, res) => {
    profile.updateProfile(req,res)
})

//contact
app.get('/addcontact/:Ho/:Ten/:Email/:SDT/:Loi_nhan', (req, res) => {
    contacts.addcontact(req, res);
})
app.listen(3000, function () {
    console.log('Server is running..');
});

