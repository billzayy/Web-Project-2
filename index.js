var express = require('express');
const sql = require('./sql');
const login = require('./login');
const path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
 

 
app.get('/', function (req, res) {
    sql.executeSQL("select * from SanPham order by pindex", (recordset) => {
        var result = "";
        recordset.recordsets[0].forEach(row => {
            result += `
                <div style='Display:inline-block ;width:350px;float:right; '>
                    <a href="/detail/${row['id']}"><img style="width:320px" src='/images/${row['Image']}'/></a>
                    <div style="text-align:center;line-height: 30px;"><b>${row['Name']}</b></div>
                    <div style="text-align:center"><span style="color:balck"> ${row['Gia']}$</span> </div>
                 </div>
                `;
        });
        res.send(result);
    });
});
app.post('/search', function (req, res) {
    var search = req.body.search;
    sql.executeSQL(`select * from SanPham where Name like '%${search}%' `, (recordset) => {
        var result = "";
        if (recordset.recordsets[0] === null || recordset.recordsets[0].length === 0) {
              res.send("Khong tim thay san pham");
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
    res.sendfile(__dirname+"/index.html");
});
 
app.get('/getDetailData/:id', function (req, res) {
    sql.executeSQL(`select * from SanPham where id = ${req.params.id}`, (recordset) => {
         var row = recordset.recordsets[0][0];
            res.send(row);
     });
});
 
app.get('/detail/:id', function (req, res) {
    res.sendfile(__dirname+"/detail.html");
});

app.post('/getlogin', function (req, res) {
    login.login(req.body.user, req.body.password, (user) =>{
        res.send(user);
    })
});

app.get('/login', function (req, res) {
    res.sendfile(__dirname+"/login.html");
});


app.get('/admin', function (req, res) {
    res.sendfile(__dirname+"/admin.html");
});
app.get('/blogs', function (req, res) {
    res.sendfile(__dirname+"/blogs.html");
});
app.get('/contact', function (req, res) {
    res.sendfile(__dirname+"/contact.html");
});
var server = app.listen(3000, function () {
    console.log('Server is running..');
});