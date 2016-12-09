// load the things we need
var express = require('express');  
var app = express();
var firebase = require("firebase");

//要用這個firebase去連結到firebase中專案的database，則先要去設定四個config的值，才可以連結到database
var config = {
    apiKey : "AIzaSyD_Esg7BYisTGhA4Ws7Mu9ker8xvb5HQA0",
    authDomain : "mboard-2bd47.firebaseapp.com",
    databaseURL : "https://mboard-2bd47.firebaseio.com",
    storageBucket : "mboard-2bd47.appspot.com",
}

//初始化firebase
firebase.initializeApp(config);

//set the view engine to ejs 
//how we send a view to the user by using res.render(), res.render() will look in a views folder for the view, so we only have to define "page/index"
app.set('view engine', 'ejs');  
app.set('port', (process.env.PORT || 3000));

 //use res.render渲染 to load up an ejs view file 

 //index page
 app.get('/', function(req, res) {  
 	//取得的資料程式
	var db = firebase.database(); 
 	var drinks = [
        { name: 'Hobby Lee', number: 'M1043303' },
        { name: 'JingTing', number: 'A1023306' },
    ];
    
    res.render('pages/index', {
        
    });
 });


var server = app.listen(app.get('port'), function(){  
  console.log('Listening on port 3000');  
 });