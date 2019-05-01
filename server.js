var express = require('express');
const sessionParser = require('express-session');
const cors = require('cors');
var app = express();

//app.use(cors());
app.use(express.json());

const corsOptions = {
    origin: true,
    credentials: true
};

app.use(cors(corsOptions));
app.use(sessionParser({
  secret:'inyong',
  resave: false,
  saveUninitialized: true
}))

//app.use('/postTest', require('./middleware').postTest);

app.post('/postTest', function(req,res){
  req.session.user = req.body.a;
  console.log(req.session);
  req.session.save(() => {
    res.send({result : 'hi '+req.session.user});
  })
})

app.get('/getTest', (req,res) => {
  console.log(req.session.user);
  //  res.send(req.session.user);
  //  res.redirect('/test');

  if(req.session.user){
    console.log(111);
  }else{
    console.log(222);
  }
  res.send(req.session.user);
})
app.get('/test', function(req,res){
  console.log('sss');
  res.send({a:1});
})

app.listen(3000);
