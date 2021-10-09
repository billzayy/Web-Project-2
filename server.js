const express = require('express');
const path = require('path');
const sql = require('mssql/msnodesqlv8');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Main.html');
})

function executeSQL(strSQL, cb) {
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
        // console.log(db.config);
        if (err) {
            console.log(err);
        }

        var request = new sql.Request();
        
        request.query(strSQL, (err, recordset) => {
            console.log(recordset)
            if (err) {
                console.log(err)
            }
            cb(recordset);
        })
    })
}

app.get('/data', (req, res) => {

    executeSQL('Select * From Product_Image', (recordset) => {

         var result = `<table border = "2px solid green">`
            recordset.recordsets[0].forEach(row => {
                result +=
                    `<div style = "display: inline-block; border: 2px solid red; width : 300px">
                        <img style = "width:300px" src="./images/${row['Image']}" alt="">
                        <div style = "text-align: center; line-height: 30px">
                            <b>${row['Name']}</b>
                        </div>
                        <div style = "text-align: center">
                            <b>
                                <span style = "color:red">${row['Price']} vnd</span>
                            </b>
                            </div>
                    </div>`
            });

        result += "</table>"
        res.send(result);
    }) 
})

app.get('/data/:id', (req, res) => {
    executeSQL(`Select * From Product_Image where id = ${req.params['id']}`, (recordset) => {
        var result = `<table border = "2px solid green">`
            recordset.recordsets[0].forEach(row => {
                result +=
                    `<div style = "display: inline-block; border: 2px solid red; width : 300px">
                        <img style = "width:300px" src="/images/${row['Image']}" alt="">
                        <div style = "text-align: center; line-height: 30px">
                            <b>${row['Name']}</b>
                        </div>
                        <div style = "text-align: center">
                            <b>
                                <span style = "color:red">${row['Price']} vnd</span>
                            </b>
                            </div>
                    </div>`
            });

            result += "</table>"
            res.send(result);
    })
});

app.listen(3000, () => {
    console.log("Server is running ...");
}) 