const youtubers = require('../../datasets/youtubers');
const youtubeVideos = require('../../datasets/youtube-videos')

const createYoutuber = (knex, youtuber) => {
  return knex('youtubers').insert({
    name: youtuber.name,
    subscribers: youtuber.subcribers
  }, 'id')
  .then(ids => {
    const youtuberId = ids[0];
    const vids = youtubeVideos.filter(video => {
      return video.creatorID === youtuber.id
    })

    const videoPromises = vids.map(video => createVideo(knex, video, youtuberId))

    return Promise.all(videoPromises)
  })
}

const createVideo = (knex, video, youtuberId) => {
  return knex('youtube_videos').insert({
    creator_id: youtuberId,
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

