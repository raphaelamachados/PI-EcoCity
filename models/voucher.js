
module.exports = (sequelize, DataTypes) => {
    const voucher = sequelize.define(
      "Voucher",
      {
        descrição: DataTypes.STRING,
        pontos_necessarios: DataTypes.NUMBER,
        codigo: DataTypes.STRING,
      },
      {
        tableName: "voucher",
        timestamps: false,
        
      }
    );
  
    return voucher;
  };