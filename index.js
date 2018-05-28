var express = require('express');
var app = express();
var Raven = require('raven');

//Raven.config('https://11e1e425cd764f138d24571297e5c8c1@sentry.io/1197642', { sendTimeout: 5 }).install();
//Raven.config('https://7dfb6e4e54a9480cbdb0b554ba0254c4@hola.com/3').install();

//Raven.config('http://899ae76048f7417f9a493366f7f195ac:5f8e67f94a6149f39f00936dd43bf7ea@35.204.39.24:9000//4').install();

/*
try {
    doSomething(a[0]);
} catch (e) {
    Raven.captureException(e);
}
*/






app.listen(3000, function(){
	console.log('Servidor funcionando en http://localhost:3000');
});


app.get('/', function(req, res) {
   res.send('Buenos días');

  try {
  throw new Error();
} catch (e) {
  // You can get eventId either as the synchronous return value, or via the callback
  var eventId = Raven.captureException(e, function (sendErr, eventId) {
  	//console.log(eventId);
    // This callback fires once the report has been sent to Sentry
    if (sendErr) {
      console.error('Failed to send captured exception to Sentry');
    } else {
      console.log('Captured exception and send to Sentry successfully');
    }
  });
}





 });

//app.use(Raven.errorHandler());
