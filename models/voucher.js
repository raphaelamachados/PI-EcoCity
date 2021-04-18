const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const voucher = sequelize.define(
    "Voucher",
    {
      codigo: DataTypes.STRING,
      descricao: DataTypes.STRING,
      pontos_troca: DataTypes.NUMBER,
      empresa_parceira_id: DataTypes.STRING,
      usuario_id: DataTypes.INTEGER,
      createdAt: {type: DataTypes.DATE, defaultValue:Sequelize.NOW} ,
      updatedAt: {type: DataTypes.DATE, defaultValue:Sequelize.NOW} ,
    },
    {
      tableName: "voucher",
      timestamps: false,
    }
  );
      voucher.associate = (models) => {
      voucher.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
      
    })
        voucher.belongsTo(models.Empresa_Parceira, {
        foreignKey: "empresa_parceira_id",
        
      })
      
  }

    return voucher;
}
