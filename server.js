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

app.post('api/v1/videos', (request, response) => {
  const {newVideo} = request.body 
  database('youtube_videos').select('*')
  .then(videos => {
    if(newVideo){
      [...videos, newVideo]
      return response.status(201).json(newVideo)
    } else {
      return response.status(422).json('Error posting video. newVideo variable not found in body.')
    }
  })
  .catch(error => response.json('Error posting video to server'))
})

app.post('api/v1/youtubers', (request, response) => {
  const {newYoutuber} = request.body;
  database('youtubers').select('*')
  .then(youtubers => {
    if(newYoutuber){
      [...youtubers, newYoutuber]
      return response.status(201).json(youtuber)
    } else {
      return response.status(422).json('Error posting youtuber. newYoutuber variable not found in body.')
    }
  })
  .catch(error => response.json('Error posting youtuber to server'))
})

app.delete('api/v1/videos/:id', (request, response) => {
  const {id} = match.params;
  database('youtube_videos').select('*')
  .then(videos => {
    let vid = videos.find(video => video.id == id)
    if(vid){
      videos.filter(video => video.id != vid.id)
      return response.status(201).json(vidoes)
    } else {
      return response.status(422).json('Error deleting video. Video to delete variable not found.')
    }
  })
})

app.listen(app.get('port'), () => (
  console.log(` ${app.locals.title} is running on http://localhost:${app.get('port')}.`)
))