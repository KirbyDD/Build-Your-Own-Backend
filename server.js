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

app.get('api/v1/videos', (request, response) => {
  database('youtube_videos').select('*')
  .then(videos => response.status(200).json(videos))
  .catch(error => response.json('There was an error gathering the videos')) 
})

app.get('api/v1/youtubers/:id', (request, response) => {
  database('youtubers').select('*')
  .then(youtubers => youtubers.find(youtuber => {
    let { id } = match.params;
    return youtuber.id == id
  }))
  .then(youtuber => response.status(200).json(youtuber))
  .catch(error => response.json('There was an error gathering the videos'))
})

app.get('api/v1/videos/:id', (request, response) => {
  database('youtube_videos').select('*')
  .then(videos => videos.find(video => {
    let { id } = match.params;
    return video.id == id
  }))
  .then(video => response.status(200).json(video))
  .catch(error => response.json('There was an error gathering the videos'))
})

app.listen(app.get('port'), () => (
  console.log(` ${app.locals.title} is running on http://localhost:${app.get('port')}.`)
))