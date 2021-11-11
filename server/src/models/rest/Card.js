const card = (sequelize, DataTypes) => {
    const Card = sequelize.define(
        'card',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING
            },
            material: {
                type: DataTypes.TEXT
            }
        },
        {
            freezeTableName: true
        }
    );
    const Collection = sequelize.define(
        'collection',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            private: {
                type: DataTypes.BOOLEAN
            }
        },
        {
            freezeTableName: true
        }
    );
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
                type: DataTypes.STRING,
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
    Collection.belongsTo(User);
    User.hasMany(Collection);
    Card.belongsTo(Collection);
    Collection.hasMany(Card);
    Card.sync();
    return Card;
}

export default card;