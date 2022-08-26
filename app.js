const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");

})
app.post("/",function(req,res){
  res.sendFile(__dirname+"/landing.html");
// var fName=req.body.Fname;
// var lName=req.body.Lname;
// var email=req.body.email;
//     var data = {
//         members:[
//             {
//                 email_address: email,
//                 status: "subscribed",
//                 merge_fields:{
//                     FNAME: fName,
//                     LNAME: lName
//                 }
//             }
//         ]
//     }
//
//         var jsonData = JSON.stringify(data);
//
//         const url = "https://us8.api.mailchimp.com/3.0/lists/80578f2e59"
//         const options = {
//             method: "POST",
//             auth: "prajju:419e8277bf1530b2afc96b96f8f12694-us8"
//         }
//         const request = https.request(url, options, function(response)
//         {
//             if (response.statusCode === 200) {
//                 res.sendFile(__dirname+"/success.html");
//             }
//             else {
//                 res.sendFile(__dirname+"/failure.html");
//             }
//             response.on("data", function(data){
//                 console.log(JSON.parse(data));
//             });
//         });
//
//         request.write(jsonData);
//         request.end();
    });




app.listen(3000,function(req,res){
  console.log("Server is running at port 3000");
})

// 419e8277bf1530b2afc96b96f8f12694-us8- API KEY
//
//
// const express = require('express');
// const app = express();
// const bodyParser = require('body-Parser');
// const request = require('request');
// const https = require('https');
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extended : true}));
//
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });
//
// app.post('/', function(req, res)
// {
//     const fname = req.body.fname;
//     const lname = req.body.lname;
//     const email = req.body.emailID;
//
//     var data = {
//         members:[
//             {
//                 email_address: email,
//                 status: "subscribed",
//                 merge_fields:{
//                     FNAME: fname,
//                     LNAME: lname
//                 }
//             }
//         ]
//     }
//
//     var jsonData = JSON.stringify(data);
//
//     const url = "https://us8.api.mailchimp.com/3.0/lists/80578f2e59"
//     const options = {
//         method: "POST",
//         auth: "prajju:419e8277bf1530b2afc96b96f8f12694-us8"
//     }
//     const request = https.request(url, options, function(response)
//     {
//         if (response.statusCode === 200) {
//             res.sendFile(__dirname+"/success.html");
//         }
//         else {
//             res.sendFile(__dirname+"/failure.html");
//         }
//         response.on("data", function(data){
//             console.log(JSON.parse(data));
//         });
//     });
//
//     request.write(jsonData);
//     request.end();
// });
//
// //APIkey cb532acf25edafca2115c3cdcd1735f1-us14
// //ListID 1161e501e6
//
// app.listen(3000, function(req, res) {
//     console.log("server is running on heroku's port!");
// });
