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

}