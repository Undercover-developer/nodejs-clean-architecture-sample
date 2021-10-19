module.exports = function findById(id, heroRepository){
    return heroRepository.findById(id)
}