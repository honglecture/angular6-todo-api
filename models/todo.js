module.exports = (sequelize, DataTypes) => (
    sequelize.define('Todo',{
        id: {
            type: DataTypes.BIGINT(20),
            autoIncrement: true,
            primaryKey: true
        },
        content: DataTypes.STRING(200),
        writer: DataTypes.STRING(50),
        isCompleted: DataTypes.BOOLEAN,
        regDate:{
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
    })
);