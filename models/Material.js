
module.exports = (sequelize, DataTypes) => {
    const materiais = sequelize.define(
      "Material",
      {
        tipo: DataTypes.STRING,
        pontos_por_peso: DataTypes.NUMBER,
      },
      {
        tableName: "materiais",
        timestamps: false,
      }
    );
    materiais.associate = (models) => {
      materiais.hasMany(models.Item, {
      foreignKey: "item_id",
      as: "item",
    })
  }
  
    return materiais
}