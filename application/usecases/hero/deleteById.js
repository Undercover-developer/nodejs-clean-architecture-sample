module.exports = function deleteById(id, heroRepository){
    return heroRepository.findById(id).then((found)=>{
        if(!found){
            throw new Error(`No hero found with the id: ${id}`)
        }

        return heroRepository.deleteById(id)
    })
}