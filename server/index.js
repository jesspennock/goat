const express = require('express')
const cors = require('cors')
const server = express()
const {User, Adventure, Category, Categorization, BucketList} = require('./util/models')
const {getCategories, getCategorizations}= require('./controllers/category')
const { 
    getAllAdventures, 
    getAdventureById, 
    getCurrentUserAdventures, 
    addAdventureCard, 
    deleteAdventureCard, 
    addBucketListItem,
    getBucketListByUserId 
} = require('./controllers/adventure')
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
server.get('/api/getCategorizations', getCategorizations)
server.get('/api/getAllAdventures', getAllAdventures)
server.get('/api/getAdventureById/:id', getAdventureById)
server.post('/api/getBucketListByUserId', getBucketListByUserId)
server.post('/api/getCurrentUserAdventures', getCurrentUserAdventures)
server.post('/api/register', register)
server.post('/api/login', login)
server.post('/api/createAdventureCard', addAdventureCard)
server.post('/api/addBucketListItem', addBucketListItem)
server.delete('/api/deleteAdventureCard/:id', deleteAdventureCard)


// db
// .sync()
// .then(()=>seed())

server.listen(4000, () => console.log('Running on port 4000'))