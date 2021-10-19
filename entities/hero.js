module.exports = function hero({
    name,
    powers,
    color,
    sideKick,
    rank
}) {
    return {
        getHeroName: () => name,
        getHeroPowers: () => powers,
        getHeroColor: () => color,
        getHeroSidekicks: () => sideKick,
        getHeroRank: () => rank
    }
}