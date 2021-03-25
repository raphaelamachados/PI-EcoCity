module.exports = (sequelize, DataTypes) => {
  const voucher = sequelize.define(
    "Voucher",
    {
      voucher: DataTypes.STRING,
      codigo: DataTypes.STRING,
      empresa_parceira_id: DataTypes.STRING,
      usuario_id: DataTypes.INTEGER,
    },
    {
      tableName: "voucher",
      timestamps: true,
    }
  );
      voucher.associate = (models) => {
      voucher.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
      
    })
        voucher.belongsTo(models.Empresa_Parceira, {
        foreignKey: "empresa_parceira_id",
        
      })
      
  }

    return voucher;
}
