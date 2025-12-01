'use strict'

import mongoose from 'mongoose'
import { countConnect } from '../helpers/check.connect.js'

const {db: {host, port, name}} =  import('../configs/config.mongodb.js')

const MONGODB_URI = `mongodb://${host}:${port}/${name}`
// const MONGODB_URI = `mongodb+srv://quanpa2508:<db_password>@cluster0.5bsd6d2.mongodb.net/?appName=Cluster0`
class Database {
    constructor() {
        this.connect()
    }

    connect(type = 'mongodb') {
        if (1 === 1) { // dev environment
            mongoose.set('debug', true)
            mongoose.set('debug', {color: true})
        }
        mongoose.set('strictQuery', true)
        mongoose.connect(MONGODB_URI, {maxPoolSize: 50}).then(_ => {
            console.log('Connected Mongodb Success', countConnect())
        }).catch(err => {
            console.Error('Connected Mongodb Failed', err)
        })
        
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Database()
        }
        return this.instance
    }
}

const instanceDatabase = Database.getInstance()

export default instanceDatabase
