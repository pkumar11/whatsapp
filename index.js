const express=require("express");
const bodyParser = require('body-parser');
const path=require("path");

const app=express();

port=process.env.PORT ||3010;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

 app.set('views', path.join(__dirname, '/views'));
app.use(express.static("views"));

app.post("/",(req,res)=>{
        console.log(req.body);
        var name = req.body.name;
        var phone = '91'+req.body.phone;
        var subj = req.body.subject;
        var msg = req.body.message;
        //res.send("files are uploaed to your database..")
        res.redirect('https://wa.me/'+phone+'?text=Name : %20'+name+'%0A subject:%20'+subj+'%0A message:%20'+msg);
        console.log(name, phone, subj, msg);
});

app.listen(port,()=>{
    console.log("the server has started at "+port);
});