import { storageService } from "./async-storage.service"

const API_URL = 'https://api.spacexdata.com/v4/launches'
const KEY = 'landingsDB'

export const landingService = {
    query,
    getById
}

async function query(filterBy = null) {
    let landings = await storageService.query(KEY)
    if (!landings || !landings.length) {
        try {
            const response = await (await fetch(API_URL)).json()
            landings = response.slice(0, 20)

            localStorage.setItem(KEY, JSON.stringify(landings))
            return landings
        } catch (err) {
            console.error('ERROR: Cannot retrieve your landings', err)
        }
    }
    return landings
}

async function getById(id) {
    const landing = await storageService.get(KEY, id)
    console.log('landing in getbyid', landing);
}