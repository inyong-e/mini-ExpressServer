var express = require('express');
const cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json());



app.get('/getTest', function(req,res){

   res.send({a:'pass2'})
})

app.use('/postTest', require('./middleware').postTest);

app.get('/getTest', (req,res)=>{
  res.send(data);
});
app.post('/postTest', function(req,res){

  var a = req.body;
  new Promise(resolve => {
    setTimeout(function (){
      resolve(a);
    },1000)
    
  }).then(data=>{
    console.log(data);
    res.send(data);
  })
})






app.listen(3000);
