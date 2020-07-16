var bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/src'));
//app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(port);
console.log(`App listening on port ${port}`);
console.log('Press Ctrl+C to quit.');
