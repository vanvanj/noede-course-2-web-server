const express = require('express');
const hbs = require('hbs')
const fs = require('fs')
const port = process.env.PORT || 3000;

var app = express()

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  var now = new Date().toString()
  var log = now+req.method+req.url
  fs.appendFile('server.log', log + '\n', (err)=>{
    if (err) {
      console.log(err)
    }
  })
  next()
});

hbs.registerHelper('getCurrentYear', ()=>{
  return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text)=>{
  return text.toUpperCase()
})

app.get('/', (req, res)=>{
  res.render('home.hbs', {
    pageTitle:'home',
    welcomeMessage:'Welcome to my web',
  })
})

app.get('/about', (req,res)=>{
  res.render('about.hbs', {
    pageTitle:'About Page',
  })
})

app.get('/projects', function(req, res) {
  res.render('projects.hbs', {
    pageTitle:'Projects'
  })
});

app.get('/bad', (req,res)=>{
  res.send({
    errorMessage:'unable to handle'
  })
})

app.listen(port, ()=>{
  console.log('====================================');
  console.log('serve is up on port'+port);
  console.log('====================================');
})
