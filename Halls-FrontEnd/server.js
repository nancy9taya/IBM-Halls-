const express = require('express');
const os = require('os');
const v8 = require('v8');

console.log('node options:', process.execArgv);
console.log('V8 heap limit: %d MB',
  v8.getHeapStatistics().heap_size_limit / (1024 * 1024));

const app = express();
app.set('json spaces', 2);

function useMem(size) {
  return new Array(size + 1).join('a');
}

app.use('/', (req, res, next) => {
  let m = useMem(+req.query.size || 1000);
  setTimeout(() => {
    let mem = process.memoryUsage();
    console.log(mem);
    res.send(mem);
  }, 1);
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port %d', port);