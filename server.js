const express = require('express');
const path = require('path');
const sql = require('mssql/msnodesqlv8');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/trangchu.html');
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

            var result =
                `<table border = "2px solid green">
                    <tr text-align = 'center'>
                        <td>Images</td>
                        <td>name</td>
                    </tr>`;

            recordset.recordsets[0].forEach(row => {
                result +=
                    `<tr>
                    <td> ${row['Image']} </td>
                    <td> ${row['Name']} </td>
                </tr>`
            });

            result += "</table>"
            res.send(result);
        })
    }) 
})

app.listen(3000, () => {
    console.log("Server is running ...");
}) 