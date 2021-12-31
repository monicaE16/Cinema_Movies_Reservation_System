'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
       { 
        username: "ayamahmoud",
        firstName: "Aya",
        lastName: "Mahmoud",
        email:"ayamahmoudabdelfatah99@gmail.com",
        role: "user",
        hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
        requesting_managerial: false
       }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});

  }
};