const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const pedido = sequelize.define(
    "Pedido",
    {
      usuario_id: DataTypes.INTEGER,
      empresa_coletora_id: DataTypes.INTEGER,
      createdAt: {type: DataTypes.DATE, defaultValue:Sequelize.NOW} ,
      updatedAt: {type: DataTypes.DATE, defaultValue:Sequelize.NOW} ,
    },
    {
      tableName: "pedido",
      timestamps: false,
    }
  );
      pedido.associate = (models) => {
      pedido.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
      as: 'pedido'
      
    })
        pedido.belongsTo(models.Empresa_Coletora, {
        foreignKey: "empresa_coletora_id",
      })
      pedido.belongsToMany(models.Material, {
        through: 'item',
        foreignKey: "pedido_id",
        as: 'materiais'
      })
  }

    return pedido;
}
