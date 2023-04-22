export const isConnectionCancelled = (connection: Connection): boolean => {
    return connection.departure.canceled !== "0" ? true : false
}

export const extractZerothConnection = (connections: Connections): Connection => {
    return connections.connection.at(0)
}