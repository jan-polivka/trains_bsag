import { appendFile } from "fs"
import { getTodayDDMMYY } from "./utility"
import { Connections } from "../types/types"

const options = {
    headers: {
        "User-Agent": "trains_service/0.0 (https://github.com/jan-polivka/trains_service; j.polivka5@gmail.com"
    }
}

const url = "https://api.irail.be/"

export async function stationGet() {
    let api = 'stations?format=json'
    let resp = await fetch(url + api, options)
    resp = await resp.json()
    return resp
}

export async function connectionGet(): Promise<Connections> {
    const date = getTodayDDMMYY(new Date())
    const api = 'connections?from=BE.NMBS.008821600&to=BE.NMBS.008821006&format=json&time=0730&date=' + date
    let resp = await fetch(url + api, options)
    let connections: Connections = await resp.json()
    return connections
}
