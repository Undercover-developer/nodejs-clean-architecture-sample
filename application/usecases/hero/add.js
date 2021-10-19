const hero =  require('../../../entities/hero')

module.exports = function addHero({
    name,
    powers,
    color,
    sideKick,
    rank,
    heroRepository
}) {
    // validate input
    if(!name || !powers || !color || !rank) {
        throw new Error ('name, powers, color and rank fields are required')
    }
    const newHero = hero({
        name,
        powers,
        color,
        sideKick,
        rank
    })

    return heroRepository.add(newHero)
}