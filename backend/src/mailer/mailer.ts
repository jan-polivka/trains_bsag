import * as fs from 'fs'
import * as yaml from 'js-yaml'
import { cwd } from 'process'
import * as nodemailer from 'nodemailer'

class MailerConfig {
    host: string
    port: number
    secure: boolean
    auth: {
        user: string
        pass: string
    }

    constructor(parsedYaml: any) {
        this.host = parsedYaml["host"] ? parsedYaml["host"] : null
        this.port = parsedYaml["port"] ? parsedYaml["port"] : null
        this.secure = parsedYaml["secure"] ? parsedYaml["secure"] : null
        // this.auth.user = parsedYaml["auth"]["user"] ? parsedYaml["auth"]["user"] : null
        // this.auth.pass = parsedYaml["auth"]["pass"] ? parsedYaml["auth"]["pass"] : null
    }
}

export const loadConfig = async (filename: string) => {
    const path = `${cwd()}/config/${filename}`
    console.log(path)
    const file = await fs.promises.readFile(path)
    console.log(file.toString())
    let res = yaml.load(file.toString())
    let config = new MailerConfig(res)
    let transporter = nodemailer.createTransport(config)
    console.log(res)
}