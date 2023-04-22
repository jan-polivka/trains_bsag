import * as fs from 'fs'
import { cwd } from 'process'

class MailerConfig {
    host: string
    port: number
    secure: boolean
    auth: {
        user: string
        pass: string
    }
}

export const loadConfig = (filename: string) => {
    console.log("{}/config/{}", cwd(), filename)
}