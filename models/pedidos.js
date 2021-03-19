
module.exports = (sequelize, DataTypes) => {
    const pedido = sequelize.define(
      "Pedido",
      {
        cpf: DataTypes.STRING,
        material: DataTypes.STRING,
        peso :DataTypes.NUMBER,
        
      },
      {
        tableName: "pedido",
        timestamps: true,
      }
    );
  
    return pedido;
  };