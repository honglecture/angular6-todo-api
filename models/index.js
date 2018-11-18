const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Member = require('./member')(sequelize, Sequelize);
db.Todo = require('./todo')(sequelize, Sequelize);

db.Member.hasMany(db.Todo, {foreignKey: 'writer', sourceKey: 'id'});
db.Todo.belongsTo(db.Member, {foreignKey: 'writer', targetKey: 'id'});

module.exports = db;