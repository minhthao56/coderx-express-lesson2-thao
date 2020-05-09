// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');
// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.render('index',{name:'Minh Thao'});
});

app.get('/todos', (request, response) => {
  response.render('todos/index',{
    todos:[
      {id: 0, work: 'Đi chợ' },
      {id: 1, work: 'Nấu cơm' },
      {id: 2, work: 'Rứa chén' },
      {id: 3, work: 'Học tại CoderX' },
    ]
  });
});



// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
