module.exports = function connection(mongoose, config, options) {
    function connectToMongo() {
        mongoose.connect(config.mongo.uri, options).then(() => { },
            (err) => {
                console.info('Mongodb Error', err)
            })
            .catch((err) => {
                console.log('ERROR:', err)
            });
    }

    mongoose.connection.on('connected', () => {
        console.info('connected to MongoDB')
    })

    mongoose.connection.on('reconnected', () => {
        console.info('connected to MongoDB')
    })

    mongoose.connection.on('error', (err) => {
        console.error(`error in MongoDB connection ${err}`)
        mongoose.disconnect()
    })

    // mongoose.connection.on('disconnected', () => {
    //     console.error(
    //         `MongoDB disconnected! Reconnecting in ${options.reconnectInterval / 1000
    //         }s...`
    //     );
    //     setTimeout(() => connectToMongo(), options.reconnectInterval);
    // });

    return {
        connectToMongo
    }
}