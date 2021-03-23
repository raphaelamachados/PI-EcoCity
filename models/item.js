module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define(
    "Item",
    {
      peso: DataTypes.FLOAT,
      pedido: DataTypes.INTEGER,
      materiais_id: DataTypes.STRING,
      usuario_id: DataTypes.INTEGER,
      empresa_coletora_id: DataTypes.INTEGER,
    },
    {
      tableName: "item",
      timestamps: false,
    }
  );
      item.associate = (models) => {
      item.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
      as: "usuario",
    })
        item.belongsTo(models.Empresa_Coletora, {
        foreignKey: "empresa_coletora_id",
        as: "empresa_coletora",
      })
      item.belongsTo(models.Material, {
        foreignKey: "materiais_id",
        as: "material",
      })
  }

    return item;
}
