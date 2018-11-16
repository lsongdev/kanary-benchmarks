const http = require('http');
const kelp = require('kelp')

const app = kelp();

app.use((req, res, next) => {
  res.end('hello');
});

http.createServer(app).listen(3000);