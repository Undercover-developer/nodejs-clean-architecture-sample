const hero = require('../../../entities/hero')

module.exports = function updateById({
    id,
    name,
    powers,
    color,
    sideKick,
    rank,
    heroRepository
}) {
    //validate inputes
    const updatedHero = hero({
        name,
        powers,
        color,
        sideKick,
        rank,
    })
    return heroRepository.findById(id).then((found)=> {
        if(!found){
            throw new Error(`No hero found with the id: ${id}`)
        }
        return heroRepository.updateById(id, updatedHero)
    })
}