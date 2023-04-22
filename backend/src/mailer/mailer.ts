import * as fs from 'fs'
import * as yaml from 'js-yaml'
import { cwd } from 'process'
import * as nodemailer from 'nodemailer'

class MailerConfig {
    host: string
    port: number
    secure: boolean
    auth: Auth

    constructor(parsedYaml: any) {
        this.host = parsedYaml["host"]
        this.port = parsedYaml["port"]
        this.secure = parsedYaml["secure"]
        this.auth = parsedYaml["auth"]
    }
}

type Auth = {
    user: string
    pass: string
}

export const loadConfig = async (filename: string): Promise<MailerConfig> => {
    const path = `${cwd()}/config/${filename}`
    const file = await fs.promises.readFile(path)
    const parsedYaml = yaml.load(file.toString())
    return new MailerConfig(parsedYaml)
}