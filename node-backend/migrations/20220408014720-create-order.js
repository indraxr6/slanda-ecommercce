'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      invoice_code: {
        type: Sequelize.STRING
      },
      id_user: {
        type: Sequelize.STRING
      },
      id_product: {
        type: Sequelize.STRING
      },
      id_payment: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.INTEGER
      },
      payment_method: {
        type: Sequelize.ENUM('bank','cod')
      },
      receipt: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('pending','packed','delivered','accepted')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};