#! /usr/bin/env node --experimental-import-meta-resolve

import fs from 'fs'
import path from 'path'
import chalk from 'chalk'

import { startServer } from '../src/server.js'

const configPath = path.join(process.cwd(), 'graphql-kit.config.js')

startServer(configPath).then(server => {
  fs.watchFile(configPath, async () => {
    console.log(chalk.cyan('Config file has been changed, server will be reload'))
    server.close()
    server = await startServer(configPath)
  })
})