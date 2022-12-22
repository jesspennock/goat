const {User, Adventure} = require("../util/models")

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
        } catch (error) {
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
        } catch (error) {
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
        } catch (error) {
            console.log('ERROR IN get current user adventures')
            console.log(error)
            res.sendStatus(400)
        }
    },

    addAdventureCard: async (req, res) => {
        try{
            const {title, summary, locPin, locDetails, cost, costNotes, extras, images, link, categories, userId} = req.body
            await Adventure.create({
                title: title,
                content: content,
                privateStatus: status,
                userId: userId
            })
            res.status(200).send('adventure card added')
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
           const {id}= req.params
           await Adventure.destroy(
            {where: {id: id}}
           )
           res.status(200).send("Adventure Card Deleted")
        }
        catch (error) {
            console.log(error)
            res.status(400).send("Adventure Card was not deleted")
        }
        console.log('delete post')
    }
}