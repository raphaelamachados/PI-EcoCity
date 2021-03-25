module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define(
    "Item",
    {
      peso: DataTypes.FLOAT,
      material_id: DataTypes.STRING,
      pedido_id: DataTypes.INTEGER,
    },
    {
      tableName: "item",
      timestamps: false,
    }
  );
      item.associate = (models) => {
      item.belongsTo(models.Pedido, {
      foreignKey: "pedido_id",
      
    })
        item.belongsTo(models.Material, {
        foreignKey: "material_id",
        
      })
      
  }

    return item;
}
