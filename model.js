const mysql = require("mysql");
const DB_CONFIG=require('./db_config')
class Model {
  static conn = null;
  static connect() {
    this.conn = mysql.createConnection(DB_CONFIG)
  }
  static end() {
    Model.conn.end();
  }
  static exeSql(sql) {
    let promise = new Promise((resolve, reject) => {
      this.connect();
      this.conn.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
        Model.end();
      });
    });
    return promise;
  }
  static exeSql2(sql,params=[]) {
    let promise = new Promise((resolve, reject) => {
      this.connect();
      this.conn.query(sql, params,(err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
        Model.end();
      });
    });
    return promise;
  }
}
module.exports = Model;
