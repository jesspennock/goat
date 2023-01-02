const {Category, Categorization} = require('../util/models')

module.exports = {
    getCategories: async (req,res) => {
        try {
            let categories = await Category.findAll()
            res.status(200).send(categories)
        }
        catch (error) {
            console.log('ERROR IN getAllAdventures')
            console.log(error)
            res.sendStatus(400)
        }
    },
    getCategorizations: async (req, res) => {
        try {
            let categorizations = await Categorization.findAll()
            res.status(200).send(categorizations)
        }
        catch (err) {
            console.log(err)
            res.sendStatus(400)
        }
    }
}