import { AppState } from "../AppState.js";
import { Pokedex } from "../models/Pokedex.js";
import { pokedexService } from "../services/PokedexService.js";
import { setHTML } from "../utils/Writer.js";

export class PokedexController {
    constructor() {
        AppState.on('basicPokedex', this.drawPokedexList)
        AppState.on('activePokedex', this.drawActivePokedex)
        this.getPokedex()
    }

    async selectPokedex(name) {
        try {
            await pokedexService.selectPokedex(name)
        } catch (error) {

        }
    }

    async getPokedex() {
        await pokedexService.getPokedex()
    }

    drawPokedexList() {
        let explorerContent = ''
        AppState.basicPokedex.forEach(x => explorerContent += Pokedex.getListTemplate(x))
        setHTML('pokedex-explorer', explorerContent)
    }

    drawActivePokedex() {
        setHTML('active-pokedex', AppState.activePokedex.activeTemplate)
    }
}