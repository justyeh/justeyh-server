var db = require('../database/dbUtil');

var User = function() {};

User.prototype.list = function(callback) {
    var sql = "SELECT * FROM users";
    db.pool(sql,[],function(err,results){
        if (err) {
            callback(true);
            return;
        }
        callback(false, results);
    });
};

User.prototype.one = function(userID,callback) {
    var sql = "SELECT * FROM users where id = ?";
    //连接池
    db.pool(sql,[userID],function(err,results){
        if (err) {
            callback(true);
            return;
        }
        callback(false, results);
    });
};

module.exports = User;