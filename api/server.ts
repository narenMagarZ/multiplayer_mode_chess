import express from 'express'
import http from 'node:http'

const PORT = process.env.PORT || 5000

const expressApp = express()
const httpServer = http.createServer(expressApp)

httpServer.listen(PORT)