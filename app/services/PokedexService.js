import { AppState } from "../AppState.js"
import { Pokedex } from "../models/Pokedex.js"

// @ts-ignore
const pokeApi = new axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    timeout: 8000
})

class PokedexService {
    constructor() {

    }

    async getPokedex() {
        const response = await pokeApi.get('?limit=100&offset=0')
        AppState.basicPokedex = response.data.results
    }

    async selectPokedex(name) {
        const response = await pokeApi.get(name)
        AppState.activePokedex = new Pokedex(response.data)
    }
}

export const pokedexService = new PokedexService()