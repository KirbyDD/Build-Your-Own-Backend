const youtubeVideos = [
  {
    "id": 1,
    "title": "Tron Kat reacts to Fire Force Ep 1",
    "runTime": "2:34",
    "views": 2500,
    "numOfLikes": 1100,
    "numOfDislikes": 34,
    "creatorID": 1
  },
  {
    "id": 2,
    "title": "El Gato Setup Tutorial",
    "runTime": "5:17",
    "views": 259500,
    "numOfLikes": 5100,
    "numOfDislikes": 134,
    "creatorID": 23
  },
  {
    "id": 3,
    "title": "Do you remember when...",
    "runTime": "6:14",
    "views": 25300,
    "numOfLikes": 3100,
    "numOfDislikes": 154,
    "creatorID": 9
  },
  {
    "id": 4,
    "title": "EVO 2019 Recap",
    "runTime": "13:34",
    "views": 42700,
    "numOfLikes": 35900,
    "numOfDislikes": 394,
    "creatorID": 24
  },
  {
    "id": 5,
    "title": "Abeln Wedding",
    "runTime": "5:45",
    "views": 318,
    "numOfLikes": 4,
    "numOfDislikes": 0,
    "creatorID": 17
  },
  {
    "id": 6,
    "title": "Meditation music 10 HOURS",
    "runTime": "10:00:00",
    "views": 99990,
    "numOfLikes": 6150,
    "numOfDislikes": 34,
    "creatorID": 15
  },
  {
    "id": 7,
    "title": "D.VA Ultimate Montage",
    "runTime": "6:54",
    "views": 630500,
    "numOfLikes": 91700,
    "numOfDislikes": 3444,
    "creatorID": 25
  },
  {
    "id": 8,
    "title": "What do you mean too many stickers?",
    "runTime": "4:49",
    "views": 15500,
    "numOfLikes": 690,
    "numOfDislikes": 420,
    "creatorID": 22
  },
  {
    "id": 9,
    "title": "MTG pack openings",
    "runTime": "7:01",
    "views": 20500,
    "numOfLikes": 590,
    "numOfDislikes": 31,
    "creatorID": 21
  },
  {
    "id": 10,
    "title": "7 Stretches for beginners",
    "runTime": "8:58",
    "views": 69500,
    "numOfLikes": 61100,
    "numOfDislikes": 3874,
    "creatorID": 18
  },
  {
    "id": 11,
    "title": "My Humans!",
    "runTime": "8:33",
    "views": 9370,
    "numOfLikes": 1122,
    "numOfDislikes": 54,
    "creatorID": 30
  },
  {
    "id": 12,
    "title": "Rainbow Six: Siege Highlights",
    "runTime": "10:23",
    "views": 519948,
    "numOfLikes": 13000,
    "numOfDislikes": 181,
    "creatorID": 23
  },
  {
    "id": 13,
    "title": "Michigan Trip Vlog",
    "runTime": "12:34",
    "views": 24500,
    "numOfLikes": 9700,
    "numOfDislikes": 1098,
    "creatorID": 2
  },
  {
    "id": 14,
    "title": "Beautify your Text Editor",
    "runTime": "6:05",
    "views": 46000,
    "numOfLikes": 19200,
    "numOfDislikes": 39,
    "creatorID": 7
  },
  {
    "id": 15,
    "title": "Tanking Firelands",
    "runTime": "4:24",
    "views": 12300,
    "numOfLikes": 4100,
    "numOfDislikes": 324,
    "creatorID": 19
  },
  {
    "id": 16,
    "title": "Me trying Yoga Masta's beginner stretches",
    "runTime": "5:34",
    "views": 232500,
    "numOfLikes": 19100,
    "numOfDislikes": 2844,
    "creatorID": 8
  },
  {
    "id": 17,
    "title": "Animation Tutorial",
    "runTime": "52:34",
    "views": 2100,
    "numOfLikes": 562,
    "numOfDislikes": 41,
    "creatorID": 12
  },
  {
    "id": 18,
    "title": "Vlog Time #82",
    "runTime": "8:32",
    "views": 9200,
    "numOfLikes": 1100,
    "numOfDislikes": 341,
    "creatorID": 26
  },
  {
    "id": 19,
    "title": "Buy vs Rent",
    "runTime": "17:34",
    "views": 29500,
    "numOfLikes": 1800,
    "numOfDislikes": 14,
    "creatorID": 16
  },
  {
    "id": 20,
    "title": "The 'I was thinking' Podcast",
    "runTime": "26:14",
    "views": 21500,
    "numOfLikes": 1100,
    "numOfDislikes": 34,
    "creatorID": 3
  },
  {
    "id": 21,
    "title": "Saison",
    "runTime": "2:06",
    "views": 96,
    "numOfLikes": 2,
    "numOfDislikes": 0,
    "creatorID": 17
  },
  {
    "id": 22,
    "title": "Things my husband does that annoys me",
    "runTime": "3:13",
    "views": 242500,
    "numOfLikes": 64100,
    "numOfDislikes": 3744,
    "creatorID": 10
  },
  {
    "id": 23,
    "title": "Medium City Street",
    "runTime": "3:13",
    "views": 45720300,
    "numOfLikes": 14601800,
    "numOfDislikes": 7814,
    "creatorID": 13
  },
  {
    "id": 24,
    "title": "Delinquent and Stuck Up",
    "runTime": "3:14",
    "views": 4765500,
    "numOfLikes": 2150000,
    "numOfDislikes": 7464,
    "creatorID": 13
  },
  {
    "id": 25,
    "title": "Hangin' with Philip DeFranco",
    "runTime": "11:14",
    "views": 8123500,
    "numOfLikes": 3261100,
    "numOfDislikes": 14074,
    "creatorID": 27
  },
  {
    "id": 26,
    "title": "John and Jude",
    "runTime": "1:49",
    "views": 9100,
    "numOfLikes": 1900,
    "numOfDislikes": 2,
    "creatorID": 17
  },
  {
    "id": 27,
    "title": "Loud music's affect on the mental",
    "runTime": "14:44",
    "views": 33500,
    "numOfLikes": 7100,
    "numOfDislikes": 234,
    "creatorID": 4
  },
  {
    "id": 28,
    "title": "Front 2 Front",
    "runTime": "4:32",
    "views": 17290500,
    "numOfLikes": 1112300,
    "numOfDislikes": 19234,
    "creatorID": 13
  },
  {
    "id": 29,
    "title": "Ragequit Compilation",
    "runTime": "6:34",
    "views": 266500,
    "numOfLikes": 13200,
    "numOfDislikes": 914,
    "creatorID": 25
  },
  {
    "id": 30,
    "title": "Trhe sound a bird makes",
    "runTime": "0:54",
    "views": 2100,
    "numOfLikes": 200,
    "numOfDislikes": 5,
    "creatorID": 28
  },
  {
    "id": 31,
    "title": "How gaming is ruining America",
    "runTime": "6:11",
    "views": 512200,
    "numOfLikes": 14100,
    "numOfDislikes": 312090,
    "creatorID": 6
  },
  {
    "id": 32,
    "title": "Manga vs Anime",
    "runTime": "6:55",
    "views": 9500,
    "numOfLikes": 8100,
    "numOfDislikes": 22,
    "creatorID": 1
  },
  {
    "id": 33,
    "title": "Top 10 Kitties of the Week #1903",
    "runTime": "5:34",
    "views": 9482500,
    "numOfLikes": 6183000,
    "numOfDislikes": 1,
    "creatorID": 5
  },
  {
    "id": 34,
    "title": "This is a <p> tag...",
    "runTime": "2:34",
    "views": 5700,
    "numOfLikes": 937,
    "numOfDislikes": 11,
    "creatorID": 29
  },
  {
    "id": 35,
    "title": "Motherly Love",
    "runTime": "12:34",
    "views": 28500,
    "numOfLikes": 11100,
    "numOfDislikes": 5,
    "creatorID": 11
  },
  {
    "id": 36,
    "title": "Spiderman: Far from home REVIEW!",
    "runTime": "6:24",
    "views": 93200,
    "numOfLikes": 37100,
    "numOfDislikes": 3044,
    "creatorID": 20
  },
  {
    "id": 37,
    "title": "Apex Stream Highlights",
    "runTime": "7:34",
    "views": 9810,
    "numOfLikes": 5100,
    "numOfDislikes": 84,
    "creatorID": 20
  },
  {
    "id": 38,
    "title": "Reacting to Ms Catmeme's videos",
    "runTime": "4:34",
    "views": 72500,
    "numOfLikes": 5100,
    "numOfDislikes": 804,
    "creatorID": 8
  },
  {
    "id": 39,
    "title": "Top 10 Kitties of the Week #1901",
    "runTime": "4:12",
    "views": 2426500,
    "numOfLikes": 98100,
    "numOfDislikes": 4400,
    "creatorID": 5
  },
  {
    "id": 40,
    "title": "How not to be terrible at testing",
    "runTime": "21:24",
    "views": 8500,
    "numOfLikes": 610,
    "numOfDislikes": 58,
    "creatorID": 14
  }
]

module.exports = youtubeVideos;