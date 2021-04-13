const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    const empresa_parceira = sequelize.define(
      "Empresa_Parceira",
      {
        nome: DataTypes.STRING,
        cnpj: DataTypes.NUMBER,
        imagem: DataTypes.STRING,
        createdAt: {type: DataTypes.DATE, defaultValue:Sequelize.NOW} ,
        updatedAt: {type: DataTypes.DATE, defaultValue:Sequelize.NOW} ,
      },
      {
        tableName: "empresa_parceira",
        timestamps: false,
      }
    )
     empresa_parceira.associate = (models) => {
     empresa_parceira.hasMany(models.Voucher, {
      foreignKey: "empresa_parceira_id",
      
    })
  }
    return empresa_parceira;
  }