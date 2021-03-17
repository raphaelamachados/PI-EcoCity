
module.exports = (sequelize, DataTypes) => {
    const usuario = sequelize.define(
      "Usuario",
      {
        nome: DataTypes.STRING,
        cpf: {
          type: DataTypes.STRING,
          unique: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        senha: DataTypes.STRING,
        imagem: DataTypes.STRING,
        pontuacao: DataTypes.NUMBER,
     
      },
      {
        tableName: "usuario",
        timestamps: false,
      }
    );
  
    return usuario;
  };