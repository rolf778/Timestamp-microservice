var express=require('express');
var request=require('request');
var app=express();
var PORT=process.env.PORT || 3000;

app.use(express.static('public'));
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/:date?',function(req,res){
  date=new Date();
  if (req.params.date){
    date=isNaN(req.params.date)?  new Date(req.params.date):new Date(+req.params.date);
    if (!(date instanceof Date)||isNaN(date.getTime())){
      return res.json({error:"Invalid Date"})}
    };
  return res.json({unix:date.getTime(),utc:date.toUTCString()})
});






app.listen(PORT, () => console.log('Listening on ${ PORT }'));
