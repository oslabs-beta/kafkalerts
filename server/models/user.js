const getUserModel = (sequelize, { DataTypes }) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
    },
  });
  User.associate = (models) => {
    User.hasOne(models.Cluster, { onDelete: 'CASCADE' });
  };
  User.findByLogin = async (login) => {
    let user = await User.findOne({
      where: { username: login },
    });
    return user;
  };
  return User;
};

export default getUserModel;
