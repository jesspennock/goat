const express = require('express')
const cors = require('cors')
const server = express()
const {User, Adventure, Category, Categorization, BucketList} = require('./util/models')
const {getCategories}= require('./controllers/category')
const {register, login} = require("./controllers/auth")

const {db} = require('./util/database')
const {seed} = require("./seed")

server.use(express.json())
server.use(cors())

User.hasMany(Adventure)
Adventure.belongsTo(User)
Adventure.belongsToMany(User, {through: BucketList})
Category.belongsToMany(Adventure, {through: Categorization})

server.get('/api/getCategories', getCategories)
server.post('/api/register', register)
server.post('/api/login', login)

// db
// .sync()
// .then(()=>seed())

server.listen(4000, () => console.log('Running on port 4000'))