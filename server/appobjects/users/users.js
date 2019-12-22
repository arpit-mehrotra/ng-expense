var db = require('../../db');

var users = {
    getusers : function(callback){
        return db.query('select * from users',callback)
    },

    createusers : function(users, callback){
        return db.query('insert into users(firstname,lastname,email,gender,dob) values(?,?,?,?,?)',
        [
            users.firstname, users.lastname, users.email, users.gender, users.dob
        ], callback)
    }
}


module.exports = users;