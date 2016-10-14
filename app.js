/* eslint-disable new-cap */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

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
app.use('/public', express.static(`${__dirname}/public`));

router.use('/', bodyParser.urlencoded({ extended: false }));
router.use('/', bodyParser.json());

router.get('/', (req, res) => {
  res.send('<h1>首頁</h1>');
});

router.post('/', (req, res) => {
  res.send('Route post msg');
});

router.post('/api/body', (req, res) => {
  res.send(JSON.stringify(req.body));
});

router.use('/api/user/:id', (req, res) => {
  res.json(users[req.params.id - 1]);
});

router.use('/api', (req, res) => {
  res.json(req.query);
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
