const {Category} = require('../util/models')

module.exports = {
    getCategories: async (req,res) => {
        let categories = await Category.findAll()
        res.status(200).send({categories})
    }
}