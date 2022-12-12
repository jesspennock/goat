const express = require('express')
const cors = require('cors')
const server = express()
const {User, Adventure, Category} = require('./util/models')

const {db} = require('./util/database')

server.use(express.json())
server.use(cors())

User.hasMany(Adventure)
Adventure.belongsTo(User)
Category.hasMany(Adventure)
Adventure.belongsTo(Category)

db.sync()

server.listen(4000, () => console.log('Running on port 4000'))