module.exports = (sequelize, DataTypes) => {
  const pedido = sequelize.define(
    "Pedido",
    {
      usuario_id: DataTypes.INTEGER,
      empresa_coletora_id: DataTypes.INTEGER,
    },
    {
      tableName: "pedido",
      timestamps: true,
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
      pedido.hasMany(models.Item, {
        foreignKey: "pedido_id",
        as: 'item'
      })
  }

    return pedido;
}
