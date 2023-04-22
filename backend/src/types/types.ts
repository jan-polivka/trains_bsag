type Connections = {
    connection: Connection[]
}

type Connection = {
    id: string
    departure: {
        delay: string
        time: string
        canceled: string
    }
}