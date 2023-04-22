export const isConnectionCancelled = (): boolean => {
    return false
}

export const extractZerothConnection = (connections: Connections) => {
    const connection: Connection = connections.connection.at(0)
}