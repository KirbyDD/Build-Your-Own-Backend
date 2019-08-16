const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(express.json());
app.use(express.static('public'))
app.set('port', process.env.PORT || 3000 )

app.locals.title = 'Sim Youtube';

app.get('/', (request, response) => {
  response.json('Inital response setup is working')
})

app.get('/api/v1/youtubers', (request, response) => {
  database('youtubers').select('*')
  .then(youtubers => response.status(200).json(youtubers))
  .catch(error => response.json(`There was an error gathering the Youtubers`))
})

app.listen(app.get('port'), () => (
  console.log(` ${app.locals.title} is running on http://localhost:${app.get('port')}.`)
))