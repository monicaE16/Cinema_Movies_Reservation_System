'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('movies', [
      { title: 'El-Lembi',
      date: '2021-12-30',
      start_time:'19:30:10',
      end_time: '21:30:10', 
      room: '307',
      empty_seats_count: 5,
      poster_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.wikipedia.org%2Fwiki%2F%25D8%25A7%25D9%2584%25D9%2584%25D9%2585%25D8%25A8%25D9%258A_(%25D9%2581%25D9%258A%25D9%2584%25D9%2585)&psig=AOvVaw1JdXnI2Ov7Ud3oELQ2J11h&ust=1640093723172000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOi-kLG_8vQCFQAAAAAdAAAAABAD',
      trailer_url: 'https://www.youtube.com/watch?v=_EXkWCtGGJo'
     },
     { title: 'El-Lembi',
     date: '2022-01-01',
     start_time:'19:30:10',
     end_time: '21:30:10', 
     room: '307',
     empty_seats_count: 5,
     poster_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.wikipedia.org%2Fwiki%2F%25D8%25A7%25D9%2584%25D9%2584%25D9%2585%25D8%25A8%25D9%258A_(%25D9%2581%25D9%258A%25D9%2584%25D9%2585)&psig=AOvVaw1JdXnI2Ov7Ud3oELQ2J11h&ust=1640093723172000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOi-kLG_8vQCFQAAAAAdAAAAABAD',
     trailer_url: 'https://www.youtube.com/watch?v=_EXkWCtGGJo'
    },
    { title: 'El-Lembi',
    date: '2022-01-05',
    start_time:'19:30:10',
    end_time: '21:30:10', 
    room: '307',
    empty_seats_count: 20,
    poster_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.wikipedia.org%2Fwiki%2F%25D8%25A7%25D9%2584%25D9%2584%25D9%2585%25D8%25A8%25D9%258A_(%25D9%2581%25D9%258A%25D9%2584%25D9%2585)&psig=AOvVaw1JdXnI2Ov7Ud3oELQ2J11h&ust=1640093723172000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOi-kLG_8vQCFQAAAAAdAAAAABAD',
    trailer_url: 'https://www.youtube.com/watch?v=_EXkWCtGGJo'
   },
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('movies', null, {});

  }
};