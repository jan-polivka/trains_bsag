export const isConnectionCancelled = (): boolean => {
    return false
}

export const extractZerothConnection = (connections: Connections): Connection => {
    return connections.connection.at(0)
}