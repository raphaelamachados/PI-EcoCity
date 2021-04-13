
module.exports = (sequelize, DataTypes) => {
    const material = sequelize.define(
      "Material",
      {
        tipo: DataTypes.STRING,
        pontos_por_peso: DataTypes.NUMBER,
      },
      {
        tableName: "material",
        timestamps: false,
      }
    );
    material.associate = (models) => {
      material.belongsToMany(models.Pedido, {
      through: 'item',
      foreignKey: "material_id",
      as: "pedidos"
    })
  }
  
    return material
}

