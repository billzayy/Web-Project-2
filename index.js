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

var app = express(); 

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
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
                    <div style="text-align:center"><input type="button" value="thêm vào giỏ hàng" onclick="addToCard(${row['id']})"/></div>

                 </div>
            `;
        });
        res.send(result);
    });
});

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

app.get('/admin', function (req, res) {
    res.sendFile(__dirname + "/admin.html");
});

app.get('/getProductAdmin', (req, res) => {
    admin.getProduct(req, res);
})

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
    sql.executeSQL(`select * from Blog where id_Blog = ${req.params.id}`, (recordset) => {
        var row = recordset.recordsets[0][0];
        console.log(".....................")
        console.log(row)
        if (row === null || row === undefined) {
            res.send("");
        } else {
            var result = "";
        
            result += `
                <div style='width:100%;float:center;margin-top:20px'>
                <div style="text-align:left;line-height:100px;margin-top:20px;font-size: 30px;"><b>${row['Title']}</b></div>
                    <img style="width:40%" class="center" src='/images/${row['image']}'/>
                    <div style="text-align:left;line-height: 30px;margin-top:20px;;font-size:18px;">${row['Noidung']}</div>
                </div>
                `;
            
            res.send(result);
        }

        
    });
    
});

app.get("/getNameBlogs",(req,res) => {
    // blogs.getName(req,res);
})

app.get('/contact', function (req, res) {
    res.sendFile(__dirname + "/contact.html");
});

app.get('/shoppingcart', (req, res) => {
    res.sendFile(__dirname + "/shoppingcart.html")
})

app.listen(3000, function () {
    console.log('Server is running..');
});