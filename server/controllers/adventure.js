const {User, Adventure, Categorization} = require("../util/models")

module.exports = {
    getAllAdventures: async (req, res) => {
        try {
            const adventures = await Adventure.findAll({
                where: {private: false},
                include: [{
                    model: User,
                    required: true,
                    attributes: ['username']
                }]
            })
            res.status(200).send(adventures)
        }
        catch (error) {
            console.log('ERROR IN getAllAdventures')
            console.log(error)
            res.sendStatus(400)
        }
    },

    getAdventurebyId: async (req, res) => {
        try {
            const adventure = await Adventure.findOne({
                where: {id: req.body.adventureId},
                include: [{
                    model: User,
                    required: true,
                    attributes: ['username']
                }]
            })
            res.status(200).send(adventure)
        }
        catch (error) {
            console.log('ERROR IN getAdventureById')
            console.log(error)
            res.sendStatus(400)
        }
    },

    getCurrentUserAdventures: async (req, res) => {
        try {
            const {userId} = req.body
            const adventures = await Adventure.findAll({
                where: {userId: userId},
                include: [{
                    model: User,
                    required: true,
                    attributes: [`username`]
                }]
            })
            res.status(200).send(adventures)
        }
        catch (error) {
            console.log('ERROR IN get current user adventures')
            console.log(error)
            res.sendStatus(400)
        }
    },

    addAdventureCard: async (req, res) => {
        console.log(req.body)
        try{
            const {title, summary, locPin, locDetails, cost, costNotes, extras, imageUrl, link, categories, private, userId} = req.body
            const adventureData = {
                title: title,
                userId: parseInt(userId),
                summary: summary,
                locPin: locPin,
                locDetails: locDetails,
                cost: cost,
                costNotes: costNotes,
                extras: extras,
                imageUrl: imageUrl,
                link: link,
                private: private
            }
            await Adventure.create(adventureData)
            // the async .create method returns the latest created row -> we can pass it into .then
            .then(async (newAdventure) => {
                // map an array of categorization objects with the newly created adventureId
                if (categories.length > 0) {
                    const selectedCategories = categories.map((categoryId)=> {
                        return {
                            adventureId: parseInt(newAdventure.id),
                            categoryId: parseInt(categoryId)
                        }
                    })
                    await Categorization.bulkCreate(selectedCategories)
                }
            })
            res.status(200).send(adventureData)
        }
        catch (error){
            console.log(error)
            res.status(400).send('error making adventure card')
        }
    },

    editAdventureCard: async (req, res) => {
        try {
            const {id} = req.params
            const {status} = req.body
            await Adventure.update(
                {privateStatus: status},
                {where: {id: id}}
            )
            res.status(200).send("Adventure card updated")
        }
        catch (error) {
            console.log(error)
            res.status(400).send("error editing adventure card")
        }
    },

    deleteAdventureCard: async (req, res) => {
        try{
            const {id} = req.params
            await Adventure.destroy(
                {where: {id: id}}
            )
            res.status(200).send("Adventure Card Deleted")
        }
        catch (error) {
            console.log(error)
            res.status(400).send("Adventure Card was not deleted")
        }
    }
}