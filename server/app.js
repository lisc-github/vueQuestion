/**
 * Created by admin on 2017/5/24.
 */
var express = require("express")
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/login',function(req,res){
    var resMessage ;
    var obj = req.body
    if(obj.firstname == '123' && obj.password == '123'){
        resMessage = '0'
    } else if (obj.firstname != '123') {
        resMessage = '1'
    } else {
        resMessage = '2'
    }
    res.send({code: resMessage})
})
app.post('/chat', function(req,res){
    var msg = req.body.obj;
    var back;
    if(msg == '1'){
        back = '一'
    }
    res.send({back: back})
})

module.exports = app