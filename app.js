const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // main application
const router = express.Router(); // homepage router
const api = express.Router(); // api router

// user data (the json object which shoud be get from the backend api)
const users = [
  {
    id: 1,
    name: 'Joe',
    age: 18,
  },
  {
    id: 2,
    name: 'John',
    age: 22,
  },
];

app.use('/', router);
app.use('/', bodyParser.urlencoded({ extended: false }));
app.use('/', bodyParser.json());

app.use('/api', api);
app.use('/public', express.static(`${__dirname}/public`));

router.get('/', (req, res) => {
  res.send('<h1>首頁</h1>');
});

router.post('/', (req, res) => {
  res.send('Route post msg');
});

api.post('/body', (req, res) => {
  res.send(JSON.stringify(req.body));
});

api.get('/users/:id', (req, res) => {
  res.json(users[req.params.id - 1]);
});

api.get('/query', (req, res) => {
  res.json(req.query);
});

app.use((req, res) => {
  // res.status(404).redirect('/public/404.html');
  res.status(404).send('<h1>404: Page Not Found</h1>');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
