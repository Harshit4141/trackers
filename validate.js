const express = require('express')
const validate = express();
var bodyParser=require("body-parser");
var cookieParser = require('cookie-parser')
const {MongoClient}=require('mongodb');
const ejs =require("ejs")
// const url = 'mongodb://localhost:27017/busTracking';
const url = "mongodb://127.0.0.1:27017/busTracking";
const client = new MongoClient(url);
const path = require("path")
const db_name='busTracking';
const app=express()
const port=3000
app.set("views", path.join(__dirname, '/Public/File/'))
app.set('view engine', 'ejs');
app.use(express.static('Public'))
const host_path={root:__dirname+'/Public/File/'}
//static path:the entire public directory is made static
app.use(express.static(__dirname+'/Public/File/'))
app.get('/:ID',async (req,res)=>{
    const collegeID = req.params.ID
    var user = await db.collection('track').findOne({ID : `${collegeID}`})
    res.status(200).render("main2.ejs",{
        user
    })

})
app.use(bodyParser.urlencoded({
extended: true
}));
const db=client.db(db_name)
app.post('/login', async function (req,res){
    var ID=req.body.ID
    var password=req.body.password
    var query = {ID: ID, password: password}
    var output = await db.collection('track').findOne(query)
        console.log(output)
        if(output){
                    // res.sendFile(`${__dirname}/Public/File/main2.ejs`);
                    res.redirect(`/${output.ID}`)
                    console.log('found');
                }else{
                    console.log('not found');

                }
})
app.listen(port,()=>{
console.log(`Example app listening on port ${port}!`)
})