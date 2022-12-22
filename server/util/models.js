const {db} = require("./database")
const {DataTypes} = require('sequelize')

module.exports = {
    User: db.define("user", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: DataTypes.STRING,
        hashedPass: DataTypes.STRING
    }),
    Adventure: db.define("adventure", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: DataTypes.STRING,
        locPin: DataTypes.STRING,
        locDetails: DataTypes.STRING,
        cost: DataTypes.INTEGER,
        costNotes: DataTypes.STRING,
        summary: DataTypes.STRING,
        extras: DataTypes.STRING,
        imageUrl: DataTypes.STRING,
        link: DataTypes.STRING,
        private: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }),
    Category: db.define("category", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: DataTypes.STRING
    }),
    // Junction tables
    Categorization: db.define("categorization", {}),
    BucketList: db.define("bucketList", {})
}