var User = require('../models/User')

var user = new User();

var list = function(callback){
    user.list(function(err,result){
        if(err){
            callback({code:404,msg:'no result'});
        }
        callback({code:200, msg:'success',list:result});
    });
    return;
}

var getUserById = function(userID,callback){
    user.one(userID,function(err,result){
        if(err){
            callback({code:404,msg:'no result'});
        }
        callback({code:200, msg:'success',list:result});
    });
    return;
}

module.exports.list = list;
module.exports.getUserById = getUserById;
