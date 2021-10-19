const addHero = require('../../application/usecases/hero/add')
const findAll = require('../../application/usecases/hero/findAll')
const findByid = require('../../application/usecases/hero/findById')
const updateById = require('../../application/usecases/hero/updateById')
const deleteById = require('../../application/usecases/hero/deleteById')

module.exports = function heroController(heroDbRepository, heroDbRepositoryImpl) {
    const dbRepository = heroDbRepository(heroDbRepositoryImpl())

    const addNewHero = (req, res, next) => {
        addHero({
            name: req.body.name,
            powers: req.body.powers,
            color: req.body.color,
            sideKick: req.body.sideKick,
            rank: req.body.rank,
            heroRepository: dbRepository
        }).then((hero) => {
            return res.json({ msg: 'new hero added', hero })
        }).catch((error) => {
            next(error)
        })
    }

    const findAllHeroes = (req, res, next) => {
        findAll(dbRepository).then((hero) => {
            if (!hero) return res.json({ msg: 'no heroes found' })
            res.json(hero)
        }).catch((error) => {
            next(error)
        })
    }

    const findHeroById = (req, res, next) => {
        findByid(req.params.id, dbRepository).then((hero) => {
            if (!hero) return res.json({ msg: `no hero found with id: ${id}` })
            res.json(hero)
        }).catch((error) => {
            next(error)
        })
    }

    const updateHero = (req, res, next) => {
        updateById({
            id: req.params.id,
            name: req.body.name,
            powers: req.body.powers,
            color: req.body.color,
            sideKick: req.body.sideKick,
            rank: req.body.rank,
            heroRepository: dbRepository
        }).then((hero) => {
            res.json(hero)
        }).catch((error) => {
            next(error)
        })
    }

    const deleteHero = (req, res, next) => {
        deleteById(req.params.id, dbRepository).then(()=>{
            res.json({msg: 'hero deleted successfully'})
        }).catch((error)=>{
            next(error)
        })
    }

    return {
        addNewHero,
        findAllHeroes,
        findHeroById,
        updateHero,
        deleteHero
    }
}