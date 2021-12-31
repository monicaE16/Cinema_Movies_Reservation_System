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
      poster_url: 'https://play-lh.googleusercontent.com/-XqpOQr7mIFz5Cra9XmSLWMJd5p49YctErum6ySoWmJBCjR6JOLu2z_y8JM_0wIKh-hh',
      trailer_url: 'https://www.youtube.com/watch?v=_EXkWCtGGJo'
     },
     { title: 'spiderman',
     date: '2022-01-01',
     start_time:'19:30:10',
     end_time: '21:30:10', 
     room: '307',
     empty_seats_count: 5,
     poster_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z',
     trailer_url: 'https://www.youtube.com/watch?v=JfVOs4VSpmA'
    },
    { title: 'Home Alone',
    date: '2022-01-05',
    start_time:'19:30:10',
    end_time: '21:30:10', 
    room: '307',
    empty_seats_count: 20,
    poster_url: 'https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    trailer_url: 'https://www.youtube.com/watch?v=jEDaVHmw7r4'
   },
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('movies', null, {});

  }
};