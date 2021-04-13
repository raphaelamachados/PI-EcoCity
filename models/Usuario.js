const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const usuario = sequelize.define(
      "Usuario",
      {
        nome: DataTypes.STRING,
        rule: "user",
        cpf: {
          type: DataTypes.STRING,
          unique: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        senha: DataTypes.STRING,
        imagem: DataTypes.STRING,
        pontuacao: DataTypes.NUMBER,
        createdAt: {type: DataTypes.DATE, defaultValue:Sequelize.NOW} ,
        updatedAt: {type: DataTypes.DATE, defaultValue:Sequelize.NOW} ,
      },
      {
        tableName: "usuario",
        timestamps: false,
      }
    );

    usuario.associate = (models) => {
      usuario.hasMany(models.Pedido, {
      foreignKey: "usuario_id",
      
    })
      usuario.hasMany(models.Voucher, {
      foreignKey: "usuario_id",
      
    })
  }
  
    return usuario
}