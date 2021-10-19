module.exports = function heroRepository(repository){
    const add = (hero) => repository.add(hero)
    const findAll = () => repository.findAll()
    const findById = (params) => repository.findById(params)
    const updateById = (id, hero) => repository.updateById(id, hero)
    const deleteById = (id) => repository.deleteById(id)

    return {
        add,
        findAll,
        findById,
        updateById,
        deleteById
    }
}