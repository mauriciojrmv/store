/* const connection = require('../conn_DB');
 */
const Request = require('tedious').Request;

async function InsertUser(req, res) {
    var sql = 'SELECT * FROM USUARIOS'
    var request = new Request(sql,
        function(err, rowCount) {
            if(err) {
                console.log(err);
            }else{
                console.log(rowCount + ' row(s) inserted');
            }
        }
    );
    connection.execSql(request);
    console.log(request);
}



/* function(err, rowCount, rows) {
    if(err) {
        console.log(err);
    }else{
        console.log(rowCount + ' row(s) inserted');
    }
} */

module.exports = {InsertUser};