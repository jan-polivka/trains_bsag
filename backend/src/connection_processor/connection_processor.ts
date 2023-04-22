export const isConnectionCancelled = (connections: Connection): boolean => {
    return false
}

export const extractZerothConnection = (connections: Connections): Connection => {
    return connections.connection.at(0)
}