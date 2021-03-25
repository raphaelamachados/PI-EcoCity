
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
        timestamps: true,
      }
    )
     empresa_parceira.associate = (models) => {
     empresa_parceira.hasMany(models.Voucher, {
      foreignKey: "empresa_parceira_id",
      
    })
  }
    return empresa_parceira;
  }