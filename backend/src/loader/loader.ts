import { appendFile } from "fs"
import { getTodayDDMMYY } from "./utility"
import { Connections } from "../types/types"
import { loadConfig } from "../config_loader/config_loader"

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

export const connectionGetBremen = async (): Promise<String> => {
    const config = loadConfig('config_default.yaml')
    const apiKey = config['api_key']
    const start = '53.169621000000,8.627897000000'
    const destination = '53.103839000000,8.786177000000'
    const urlBremen = `http://gtfsr.vbn.de/api/routers/connect/plan?arriveBy=false&date=07-25-2019&fromPlace=53.08287,8.81334&toPlace=53.05270,8.78617&time=13:00:00&mode=WALK,TRANSIT&maxWalkDistance=300`
    // const urlBremen = `http://gtfsr.vbn.de/api/routers/connect/plan?arriveBy=false&date=05-10-2023&fromPlace=${start}&toPlace=${destination}&time=13:00:00&mode=TRANSIT`

    const optionsBremen = {
        headers: {
            "Authorization": apiKey,
            "Host": 'gtfsr.vbn.de'
        }
    }
    let resp = await fetch(urlBremen, optionsBremen)
    console.log(resp)
    return ""
}