const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        coordenadaX: DataTypes.INTEGER,
        coordenadaY: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Cliente;
