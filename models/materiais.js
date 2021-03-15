
module.exports = (sequelize, DataTypes) => {
    const materiais = sequelize.define(
      "Materiais",
      {
        tipo: DataTypes.STRING,
        pontos_por_peso: DataTypes.NUMBER,
      },
      {
        tableName: "materiais",
        timestamps: false,
      }
    );
  
    return materiais;
  };