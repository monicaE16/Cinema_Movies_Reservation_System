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
       }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('tickets', null, {});

  }
};