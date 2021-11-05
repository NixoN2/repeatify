const user = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: DataTypes.STRING,
            },
            first_name: {
                type: DataTypes.STRING,
                default: null
            },
            last_name: {
                type: DataTypes.STRING,
                default: null
            },
            role: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING
            },
            token: {
                type: DataTypes.STRING
            }
        },
        {
            freezeTableName: true
        }
    )
    User.sync();
    return User;
}

export default user;