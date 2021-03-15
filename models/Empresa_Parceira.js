
module.exports = (sequelize, DataTypes) => {
    const empresa_parceira = sequelize.define(
      "Empresa_Parceira",
      {
        nome: DataTypes.STRING,
        cnpj: DataTypes.NUMBER,
        imagem: DataTypes.STRING,
      },
      {
        tableName: "empresa-parceira",
        timestamps: false,
      }
    );
  
    return empresa_parceira;
  };