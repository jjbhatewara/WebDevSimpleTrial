const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const { request, response } = require('express');
//dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false}));
var db = require('./dbService');
app.set('view engine', 'ejs');

const connection = db.connect();
const data = {
  headers:['ID','Name','Roll','branch'],
  rows : {}
};

function getAllData(){
  try {
    const response =  new Promise((resolve,reject) =>{
        const query = 'SELECT * FROM `basic_name_roll` ';
        connection.query(query,(err,results) =>{
            if(err) reject(new Error(err.message));
            resolve(results);
        })
    });
    console.log(response);
    return response;
} catch (error) {
    console.log(error);
}
}



//const dataOfName = require('../Client/index');

//console.log(dataOfName.)

app.post('/insert/:name/:roll/:branch',(req,res,next) => {
    //console.log("Hello");
    var insertQuery = "INSERT INTO `basic_name_roll` (`Name`, `Roll`, `branch`) \
    VALUES (?,?,?)";
    connection.query(insertQuery,[req.params.name,req.params.roll,req.params.branch],(err,rows,field)=>{
      if(!err){
        console.log("INSERTED");
      }
    });
});



app.get('/getData',(request,response)=>{
    /* const result = getAllData();
    result.then(data => response.json({data : data}))
    .catch(err => console.log(err));
    console.log(result);
 */



  //console.log("hello");
   var getQuery = 'SELECT * FROM `basic_name_roll` ';
  connection.query(getQuery,(err,rows,fields)=>{
    if(!err){
      data.rows = rows;  
      //response.json(rows);  ../Client/EJS.ejs C:/Users/Aditya/Desktop/TY/Other/Project managment learning/12-2-21 simple databasee/Client/EJS.ejs
      response.render('C:/Users/Aditya/Desktop/TY/Other/Project managment learning/12-2-21 simple databasee/Client/Display.ejs',{ rows : rows } );
      console.log("Displayed");
      //console.log(rows);
    } 
  }); 
});

app.listen("5000", ()=> console.log("app is running on PORT 5000"));

module.exports.data = data;

