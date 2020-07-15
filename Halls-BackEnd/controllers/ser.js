
const env = require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/src'));

app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});