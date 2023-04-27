import * as fs from 'fs'
import * as yaml from 'js-yaml'
import { cwd } from 'process'
import * as nodemailer from 'nodemailer'

class MailerConfig {
    host: string
    port: number
    secure: boolean
    auth: Auth
    email: string

    constructor(parsedYaml: any) {
        this.host = parsedYaml["host"]
        this.port = parsedYaml["port"]
        this.secure = parsedYaml["secure"]
        this.auth = parsedYaml["auth"]
        this.email = parsedYaml["email"]
    }
}

type Auth = {
    user: string
    pass: string
}

export const loadMailerConfig = (yamlMail: string): MailerConfig => {
    return new MailerConfig(yamlMail["mail"])
}

export const loadConfig = async (filename: string): Promise<MailerConfig> => {
    const path = `${cwd()}/config/${filename}`
    const file = await fs.promises.readFile(path)
    const parsedYaml = yaml.load(file.toString())
    return new MailerConfig(parsedYaml["mail"])
}

export const sendMail = async (config: MailerConfig, isConnectionBorked: boolean) => {
    const subject = isConnectionBorked ? "IT'S A NO GO, CHIEF" : "ALL GOOD, CHIEF"
    const transporter = nodemailer.createTransport(config)
    let info = await transporter.sendMail({
        from: `'Train Bot' <${config.auth.user}>`,
        to: `${config.email}`,
        subject: subject
    })
    console.log(info)
}