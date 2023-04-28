import Fastify from 'fastify'
import cors from '@fastify/cors'
import { REPL_MODE_SLOPPY } from 'repl'
import { connectionGet, stationGet } from './loader/loader'
import * as fs from 'fs'
import * as fileHandle from 'fs/promises'
import { loadMailerConfig, sendMail } from './mailer/mailer'
import { extractZerothConnection, isConnectionCancelled, isConnectionDelayed } from './connection_processor/connection_processor'
import { loadConfig } from './config_loader/config_loader'
import { retrieveFromFile } from './persistence/file_persistence'

const fastify = Fastify({ logger: true })

fastify.register(cors)

fastify.get('/', (req, res) => {
    res.send({ hello: 'world' })
})

fastify.get('/trains', async (req, res) => {
    let stations = await stationGet()
    fs.writeFile('/workspaces/ubuntu-6/trains_service/backend/stations.json', JSON.stringify(stations), err => {
        if (err)
            console.log(err)
    })
    res.send('go away')
})

fastify.get('/station', async (req, res) => {
    let read = await fs.promises.readFile('/workspaces/ubuntu-6/trains_service/backend/stations.json', 'utf-8')
    console.log(read)
    res.send(read)
})
//{"locationX":"4.560614","locationY":"51.135758","id":"BE.NMBS.008821600","name":"Lier","@id":"http://irail.be/stations/NMBS/008821600","standardname":"Lier"},
//{"locationX":"4.421101","locationY":"51.2172","id":"BE.NMBS.008821006","name":"Antwerp-Central","@id":"http://irail.be/stations/NMBS/008821006","standardname":"Antwerpen-Centraal"}

fastify.get('/connection', async (req, res) => {
    let connection = await connectionGet()
    res.send(connection)
})

fastify.get('/mail', async (req, res) => {
    const config = loadConfig('config_default.yaml')
    const mailerConfig = loadMailerConfig(config['mail'])
    const connections = await connectionGet()
    const zerothConnection = extractZerothConnection(connections)
    const isConnectionBorked = isConnectionCancelled(zerothConnection) && isConnectionDelayed(zerothConnection)
    let mailRes = await sendMail(mailerConfig, isConnectionBorked)
    res.send(zerothConnection)
})

fastify.post('/submit_time_string', async (req, res) => {
    const parsed = +req.body["timeString"]
    const resp = Number.isNaN(parsed) ? "NOT OK" : "OK"
    res.send(resp)
})

fastify.get('/retrieve_time_string', async (req, res) => {
    const config = await loadConfig('config_default.yaml')
    const timeString = await retrieveFromFile(config['file'])
    console.log(timeString)
    res.send(timeString)
})

fastify.listen({ port: 8080 }, () => {
    console.log("doing the listen")
})
