'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tickets', [
       { 
        username: "ayamahmoud",
        movie_id: 1,
        seat_number: 4
       },
       { 
        username: "ayamahmoud",
        movie_id: 1,
        seat_number: 5
       },
       { 
        username: "sara",
        movie_id: 2,
        seat_number: 4
       },
       { 
        username: "sara",
        movie_id: 2,
        seat_number: 5
       },
       { 
        username: "sara",
        movie_id: 2,
        seat_number: 6
       },
       { 
        username: "sara",
        movie_id: 2,
        seat_number: 7
       },
       { 
        username: "ayamahmoud",
        movie_id: 2,
        seat_number: 15
       },
       { 
        username: "ayamahmoud",
        movie_id: 2,
        seat_number: 16
       },
       { 
        username: "ayamahmoud",
        movie_id: 2,
        seat_number: 17
       },


    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('tickets', null, {});

  }
};