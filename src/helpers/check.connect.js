'use strict'
import mongoose from 'mongoose'
import os from 'os'
import process from 'process'

const _SECONDS = 5000

// count Connections
 function countConnect() {
    const numberOfConnections = mongoose.connections.length
    console.log(`Number of connections: ${numberOfConnections}`)
    return numberOfConnections
}

// check over load connections
const checkOverloadConnect = () => {
    setInterval(()=> {
        const numConnections = countConnect()
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss;
        // assumpt max connections per core is 5
        const maxConnections = numCores * 5
        
        console.log(`Memory Usage (RSS): ${(memoryUsage / 1024 / 1024).toFixed(2)} MB`)

        if(numConnections > maxConnections) {
            console.warn(`Overload connections: ${numConnections} / ${maxConnections}`)
            //TODO: send alert email or sms
        }
    }, _SECONDS) // Monitor every 5 seconds
}

export { countConnect, checkOverloadConnect }