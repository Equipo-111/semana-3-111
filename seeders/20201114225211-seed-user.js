'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            name: 'carlos',
            email: 'ejemplo7@gmail.com',
            password: '2y$10$rkZjVbUvfo961sxLbjlv..rv67Qw8f2lLnTOaw66zIRKCSr0nU2Zm',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});

    }
};