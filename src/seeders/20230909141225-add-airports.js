'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

   //  await queryInterface.bulkInsert('Airports', [
   //    {
   //       name: "Surat International Airport",
   //       address: "Surat, Gujarat",
   //       cityId: 23,
   //       createdAt: new Date(),
   //       updatedAt: new Date()
   //    },
   //    {
   //       name: "Daman Airport",
   //       address: "Domestic Airport, Daman",
   //       cityId: 24, 
   //       createdAt: new Date(),
   //       updatedAt: new Date()
   //    },
   //    {
   //       name: "Nashik International Airport",
   //       address: "Ojhar, Maharashtra",
   //       cityId: 25,
   //       createdAt: new Date(),
   //       updatedAt: new Date()
   //    },
   //    {
   //       name: "Rajiv Gandhi International Airport",
   //       address: "Hyderabad, Telangana",
   //       cityId: 5,
   //       createdAt: new Date(),
   //       updatedAt: new Date()
   //    },
   //    {
   //       name: "Mumbai Airport",
   //       address: "Mumbai, Maharashtra",
   //       cityId: 8,
   //       createdAt: new Date(),
   //       updatedAt: new Date()
   //    },
   //  ], {});


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
