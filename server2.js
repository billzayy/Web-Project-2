const express = require('express');
const path = require('path');
const sql = require('mssql/msnodesqlv8');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/test.html');
})

app.get('/data', (req, res) => {
    
     var config = {
        user: 'sa',
        password: 'tuanhdangiu',
        server: 'BILL\\BILLZAY',
        database: 'Lesson 5 of Web',
        driver: "msnodesqlv8"
    };

    const conn = new sql.ConnectionPool(config).connect().then(pool => {
        return pool;
    });

    module.exports = {
        conn: conn,
        sql: sql
    }

    sql.connect(config, (err, db) => {
        console.log(db.config);
        if (err) {
            console.log(err);
        }

        var request = new sql.Request();
        
        request.query('select * From Product_Image', (err, recordset) => {
            console.log(recordset)
            if (err) {
                console.log(err)
            }

            var result = `<div class="product-content-item item">`

            recordset.recordsets[0].forEach(row => {
                result +=
                    `
                    <img src="./images/${row['Image']}" alt="">
                    <div class="product-content-item-text">
                        <div class="product-content-item-text-top">
                            <h1>${row['Name']}</h1>
                            <p>${row['Price']}<sup>đ</sup></p>
                        </div>
                        <button>Thêm vào giỏ</button>
                        <div class="product-content-item-text-social">
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                        </div>
                    `
            });

            result += "</div>"
            res.send(result);
        })
    }) 
})

app.listen(3100, () => {
    console.log("Server is running ...");
}) 