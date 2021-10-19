const heroDbRepository = require('../../../application/repository/heroDbRepository')
const heroDbRepositoryImpl = require('../../database/mongoDB/repositories/heroRepository')
const heroController = require('../../../adapters/controllers/heroControllers')

module.exports = function heroRouter(express){
    const router = express.Router()
    const controller = heroController(heroDbRepository, heroDbRepositoryImpl)
    // Hero routes
    router.post('/add', controller.addNewHero)
    router.get('/all', controller.findAllHeroes)
    router.get('/search/:id', controller.findHeroById)
    router.put('/update/:id', controller.updateHero)
    router.delete('/delete/:id', controller.deleteHero)

    return router
}