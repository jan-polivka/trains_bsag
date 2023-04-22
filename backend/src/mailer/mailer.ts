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

export const loadConfig = async (filename: string) => {
    const path = `${cwd()}/config/${filename}`
    console.log(path)
    const file = await fs.promises.readFile(path)
    console.log(file.toString())
    let res = yaml.load(file.toString())
    let config = new MailerConfig(res)
    let transporter = nodemailer.createTransport(config)
    console.log(config.secure)
}