module.exports = (sequelize, DataTypes) => (
    sequelize.define('Member',{
        id: {
            type: DataTypes.STRING(50),
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        nickname: DataTypes.STRING(50),
        regDate:{
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
    })
);