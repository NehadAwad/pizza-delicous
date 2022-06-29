var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var mysql = require('mysql')

mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pizza_node"
})

var app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(8080);
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "pizza_node"
    })
    con.query("SELECT * FROM products", (err, result) =>{
      if(err){
        console.log(err)
      }
      console.log(result[1])
      res.render('pages/index', {results:result});
    })    
    
}); 

const start = async () => {
    try {
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
};
  
start();