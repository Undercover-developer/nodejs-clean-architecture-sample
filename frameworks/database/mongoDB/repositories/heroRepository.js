const Hero = require('../models/hero')

module.exports = function heroRepository(){
    const add = (heroEntity) => {
        const newHero = new Hero({
            name: heroEntity.getHeroName(),
            powers: heroEntity.getHeroPowers(),
            color: heroEntity.getHeroColor(),
            sideKick: heroEntity.getHeroSidekicks(),
            rank: heroEntity.getHeroRank()
        })

        return newHero.save()
    }

    const findAll = () => Hero.find()

    const findById = (id) => Hero.findById(id)

    const updateById = (id, heroEntity) => {
        const updatedHero = {
            name: heroEntity.getHeroName(),
            powers: heroEntity.getHeroPowers(),
            color: heroEntity.getHeroColor(),
            sideKick: heroEntity.getHeroSidekicks(),
            rank: heroEntity.getHeroRank()
        }

        return Hero.findOneAndUpdate({_id: id}, updatedHero)
    }

    const deleteById = (id) => Hero.findOneAndDelete({_id: id})

    return {
        add,
        findAll,
        findById,
        updateById,
        deleteById
    }
}