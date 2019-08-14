exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('youtubers', table => {
      table.increments('id').primary();
      table.string('name');
      table.integer('subscribers').unsigned();
      table.timestamps(true, true);
    }),

    knex.schema.createTable('youtube_videos', table => {
      table.increments('id').primary();
      table.integer('creator_id').unsigned()
      table.foreign('creator_id').references('youtubers.id');
      table.string('title');
      table.string('run_time');
      table.integer('views').unsigned();
      table.integer('number_of_likes').unsigned();
      table.integer('number_of_dislikes').unsigned();
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('youtube_videos'),
    knex.schema.dropTable('youtubers')
  ])
};
