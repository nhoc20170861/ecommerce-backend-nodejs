'use strict'

const dev = {
    app: {
        host: 'localhost',
        port: 3000,
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'dbDev'
    }
}
const product = {
    app: {
        host: 'localhost',
        port: 5000
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'dbPro'
    }
}
const config = {
    dev, product
}

const env = process.env.NODE_ENV || 'dev'

export default config[env]