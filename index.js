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
const shoppingCard = require('./shoppingcard');
var app = express(); 

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
//hiện thi sản phẩm
app.get('/', function (req, res) {
    sql.executeSQL("select * from SanPham order by pindex", (recordset) => {
        var result = "";
        recordset.recordsets[0].forEach(row => {
            result +=
                `
                <div style='Display:inline-block;margin: 10px;'>
                    <a href="/detail/${row["id"]}"><img style="width:300px" src='/images/${row["Image"]}'/></a>
                    <div style="text-align:center;line-height: 30px;"><b>${row["Name"]}</b></div>
                    <div style="text-align:center"><span style="color:black"> ${row["Gia"]}$</span> </div>
               
                    <div class="product-content-right-product-button"><button   onclick="addToCard(${row['id']})" id = "test"><i class="fas fa-shopping-cart"></i> <p>thêm vào giỏ hàng</p></button> </div>
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
        var row = recordset.recordsets[0][0];
        res.send(row);
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
//trang blogs
app.get('/blogs', function (req, res) {
    res.sendFile(__dirname + "/blogs.html");
});
app.get('/getblogs', function (req, res) {
    blogs.blogs(req, res);
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
app.get('/getInfo', function (req, res) {
    shoppingCard.info(req, res);
});

app.listen(3000, function () {
    console.log('Server is running..');
});

