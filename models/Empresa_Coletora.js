
module.exports = (sequelize, DataTypes) => {
    const empresa_coletora = sequelize.define(
      "Empresa_Coletora",
      {
        nome: DataTypes.STRING,
        cnpj: DataTypes.NUMBER,
        cep: DataTypes.STRING,
        email: {
          type: DataTypes.STRING,
          unique: true,
      },
        senha: DataTypes.STRING,
        imagem: DataTypes.STRING,
      },
      {
        tableName: "empresa-coletora",
        timestamps: false,
      }
    );
  
    return empresa_coletora;
  };