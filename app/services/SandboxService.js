import { AppState } from "../AppState.js"
import { Pokedex } from "../models/Pokedex.js"
import { api } from "./AxiosService.js"

class SandboxService {
    constructor() {

    }

    async deletePokedex(id) {
        let poke = AppState.myPokedex.find(x => x.id == id)
        AppState.myPokedex.splice(AppState.myPokedex.findIndex(x => x == poke), 1)
        await api.delete('api/pokemon/' + id)
    }

    async catchPokedex() {
        let response = await api.post('api/pokemon', AppState.activePokedex)
        AppState.myPokedex.push(new Pokedex(response.data))
    }

    async getMyPokedex() {
        console.log("hi")
        const response = await api.get('api/pokemon')
        console.log(response.data)
        AppState.myPokedex = response.data.map(zzy => new Pokedex(zzy))
        AppState.emit('myPokedex')
    }
}

export const sandboxService = new SandboxService()