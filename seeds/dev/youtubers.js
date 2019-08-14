const youtubers = require('../../datasets/youtubers');
const youtubeVideos = require('../../datasets/youtube-videos')

const createYoutuber = (knex, youtuber) => {
  return knex('youtubers').insert({
    name: youtuber.name,
    subscribers: youtuber.subcribers
  }, 'id')
  // .then(ids => {
  //   const youtuberId = ids[0]

    // find all video asssociated with this youtuber
    // createVideo promise for each video youtuber has
    // push all promises into an array
    // return Promise.all
  // })
}

const createVideo = (knex, video) => {
  return knex('youtube_videos').insert({
    creator_id: video.creatorID,
    title: video.title,
    run_time: video.runTime,
    views: video.views,
    number_of_likes: video.numOfLikes,
    number_of_dislikes: video.numOfDislikes
  }, 'id')
}
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('youtube_videos').del()
    .then(() => knex('youtubers').del())
    .then(() => {
        let youtuberPromises = [];
        // let videoPromises = []

        youtubers.forEach(youtuber => {
          youtuberPromises.push(createYoutuber(knex, youtuber))
        })

        // youtubeVideos.forEach(video => {
        //   videoPromises.push(createVideos(knex, video))
        // })

        return Promise.all(youtuberPromises)
    })
    .catch(error => console.log(`There was an error seeding your data: ${error}`))
};

