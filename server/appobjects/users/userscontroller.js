var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var users = require('./users');

router.get('/', function(req,res){
    users.getusers(function(err,rows){
        if(err){
            res.status(400).json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/', function(req,res){
    users.createusers(req.body,function(err,count){
        if(err){
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

module.exports = router;

