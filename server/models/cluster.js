const getClusterModel = (sequelize, { DataTypes }) => {
  const Cluster = sequelize.define('cluster', {
    connection_string: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    broker_ids: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
  });
  Cluster.associate = (models) => {
    Cluster.belongsTo(models.User);
  };

  return Cluster;
};

export default getClusterModel;
