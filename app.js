var express = require('express');
var app=express();
app.set('view engine','ejs');

app.use('/assets',express.static('assets'));

app.get('/',function(req,res)
{
    res.send('you are using node js')
})



app.listen(3000);
var data={age:19, job:'maneger', hobbies:['ciyaaro','wax aqris','dalxiix','codding']}
app.get('/profile/:name',function(req,res)
{
    // res.send('you are at my profile and your ' +req.params.name);
    res.render('profile',{person:req.params.name, xog:data})
})

app.get('/contact', function(req,res){
    res.render('contact');
})