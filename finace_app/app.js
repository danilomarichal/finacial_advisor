const express = require('express');
//const methodOverride = require('method-override')
const app = express();
const pgp = require('pg-promise')();
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");
const session = require('express-session');
const methodOverride = require('method-override');

const bcrypt = require('bcrypt');
const salt = bcrypt.genSalt(10);

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/html');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use(session({
  secret: 'XXXXXXXX',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

var db = pgp('postgres://rcoppa@localhost:5432/finance');

app.get('/', function(req,res){
    if(req.session.user) {

      let data = {
        "logged_in": true,
        "email": req.session.user.email
      };
      res.render('index', data);

    } else {
      res.render('index');
    }
 });

//USES USER's ENTERED INFO AND COMPARES
//EMAIL AND PASSWORD
//TO ALLOW ACCESS OR DENY IT
app.post('/login', function(req, res){
  let data = req.body;
 db
  .one("SELECT * FROM users WHERE email = $1", [data.email])
  .catch(function(){
    res.render("error/index");
  })
  .then(function(user){
    bcrypt.compare(data.password, user.password_digest, function(err, cmp){
      if(cmp) {
        req.session.user = user;
        res.redirect("/");
      } else {
        res.render("error/index");
      }
    })
  })
});

//RENDERS SIGN UP PAGE
app.get('/signup', function(req, res){
  res.render('signup/index');
});


//ASKS FOR REQUIRED INFO IN ORDER TO SIGN UP
//CREATES NEW USER IN DATABASE
//AND HASHES PASSWORD IN DATABASE
app.post('/signup', function(req, res){
  let data = req.body;
  console.log(data)
  bcrypt
    .hash(data.password_digest, 10, function(err, hash){
      console.log(data.password_digest)
      db.none("INSERT INTO users(first_name, last_name, email, password_digest) VALUES($1, $2, $3, $4)",[data.first_name, data.last_name, data.email, hash])
      .then(function(){
        res.send("User created!");
    });
  });
});

//LOGOUT SESSION REDIRECTING TO HOME PAGE
app.get('/logout', function(req, res){
  req.session.user = false;
  res.redirect("/");
});

/*
 app.put('/user', function(req, res){
   db
     .none("UPDATE users SET password_digest = $1 WHERE password_digest = $2",
       [req.body.password_digest, req.session.user.password_digest])
     .catch(function(){
      console.log(password_digest)
       res.send('Failed to update user.');
     }).then(function(){
       res.send('User updated.');
     });
 });*/

//DELETE USER PROFINE
app.delete ('/user', function(req, res){
  console.log(req.session.user.email)
  db.none("DELETE FROM users WHERE email = $1", req.session.user.email)
  .then(function(){
    res.send('user deleted')
  })

 });
app.get('/home', function(req, res){
  res.render("index")
});

app.get('/cashflow', function(req, res){
  res.render("cashflow/index")
});

app.get('/investments', function(req, res){
  res.render("investments/index")
});

app.get('/realstate', function(req, res){
  res.render("realstate/index")
});

app.get('/profile',function(req, res){
  res.render("profile/index")
})

app.get('/', function(req,res){
  db.one("SELECT * FROM users")
  .then(function(data){
    var user ={
    name: data.first_name,
    last: data.last_name
  }
res.render("index", user);
  });
});

app.listen(3000, function() {
  console.log("Server Running {^-^}");
});
