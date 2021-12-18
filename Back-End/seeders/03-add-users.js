'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: "ayamagdy",
        firstName: 'aya',
        lastName: 'magdy',
        role: 'D',
        currentPractice:1,
        points:50,
        hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
        image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
        position: 'junior developer'
    },
    {
      username: "admin1",
      firstName: 'mahmoud',
      lastName: 'mostafa',
      role: 'A',
      currentPractice:null,
      points:0,
      hash: "$2a$10$S/3TFqQSg9fT0DlcE2a6iuTLDunhLbqGxtbpUyoq7byAQqKhYvC7a",
      image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
      position: 'competition admin '
  },
  {

    username:"ahmed",
    firstName: 'ahmed',
    lastName: 'mohamed',
    role: 'D',
    currentPractice:3,
    points:40,
    hash: "$2a$10$GC848CX5w6nKMZLgoXE2tOCnLmQygkp9eIJQBlxgbEtaH3hcSAT5G",
    image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
    position: 'junior developer'
},
{
  username: "ayaelewa",
  firstName: 'aya',
  lastName: 'mahmoud',
  role: 'D',
  currentPractice:2,
  points:0,
  hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
  image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
  position: 'junior developer'
},
{
  username: "ayawahba",
  firstName: 'aya',
  lastName: 'abdulwahab',
  role: 'D',
  currentPractice:1,
  points:20,
  hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
  image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
  position: 'junior developer'
},
{
  username: "hebamohsen",
  firstName: 'heba',
  lastName: 'mohsen',
  role: 'D',
  currentPractice:1,
  points:0,
  hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
  image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
  position: 'junior developer'
},
{
  username: "ibrahimkamal",
  firstName: 'ibrahim',
  lastName: 'kamal',
  role: 'D',
  currentPractice:1,
  points:0,
  hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
  image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
  position: 'junior developer'
},
{
  username: "joe",
  firstName: 'youssef',
  lastName: 'ahmed',
  role: 'N',
  currentPractice:1,
  points:50,
  hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
  image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
  position: 'business analyst'
},

{
  username: "john",
  firstName: 'john',
  lastName: 'william',
  role: 'N',
  currentPractice:2,
  points:40,
  hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
  image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
  position: 'financial specialist'
},
{
  username: "moh",
  firstName: 'mohamed',
  lastName: 'salem',
  role: 'D',
  currentPractice:3,
  points:0,
  hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
  image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
  position: 'junior developer'
},
{
  username: "mohsamy",
  firstName: 'mohamed',
  lastName: 'samy',
  role: 'N',
  currentPractice:2,
  points:0,
  hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
  image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
  position: 'project manager'
},
{
  username: "monaahmed",
  firstName: 'mona',
  lastName: 'ahmed',
  role: 'N',
  currentPractice:1,
  points:0,
  hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
  image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
  position: 'sales specialist'
},
{
  username: "monicaehab",
  firstName: 'monica',
  lastName: 'ehab',
  role: 'D',
  currentPractice:1,
  points:0,
  hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
  image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
  position: 'junior developer'
},
{
  username: "mostafa",
  firstName: 'mostafa',
  lastName: 'ahmed',
  role: 'N',
  currentPractice:3,
  points:0,
  hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
  image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
  position: 'marketing analyst'
},
{
  username: "nohagamal",
  firstName: 'noha',
  lastName: 'gamal',
  role: 'N',
  currentPractice:1,
  points:0,
  hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
  image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
  position: 'HR trainer'
},
{
  username: "ranime",
  firstName: 'ranime',
  lastName: 'hossam',
  role: 'D',
  currentPractice:2,
  points:20,
  hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
  image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
  position: 'junior developer'
},
{
  username: "samir",
  firstName: 'samir',
  lastName: 'mahmoud',
  role: 'D',
  currentPractice:2,
  points:20,
  hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
  image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
  position: 'junior developer'
},
{
  username: "sandy",
  firstName: 'sandy',
  lastName: 'salem',
  role: 'D',
  currentPractice:1,
  points:20,
  hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
  image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
  position: 'junior developer'
},
{
  username: "tamerfahmy",
  firstName: 'tamer',
  lastName: 'fahmy',
  role: 'D',
  currentPractice:1,
  points:0,
  hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
  image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
  position: 'junior developer'
},
{
  username: "wael",
  firstName: 'wael',
  lastName: 'elsayed',
  role: 'D',
  currentPractice:1,
  points:0,
  hash: "$2a$10$kEw.An2P54MM/44/Zxq4AOx02Fe1m1NLYBlxq7x9Y6KfLwIgKm9bG",
  image_url: "https://image.flaticon.com/icons/png/512/2583/2583338.png",
  position: 'junior developer'
},

  ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};

