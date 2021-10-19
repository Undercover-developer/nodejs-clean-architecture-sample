module.exports = function serverConfig(app, config) {
    function startServer() {
        app.listen(config.port, () => {
            console.log(`server running on Port ${config.port}`)
        })
    }
    return {
        startServer
    }
}