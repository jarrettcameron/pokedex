import { AppState } from "../AppState.js";
import { sandboxService } from "../services/SandboxService.js";
import { setHTML } from "../utils/Writer.js";

export class SandboxController {
    constructor() {
        AppState.on('account', this.getMyPokedex)
        AppState.on('myPokedex', this.drawMyPokedex)
    }

    async catchPokedex() {
        try {
            await sandboxService.catchPokedex()
        } catch (error) {

        }
    }

    async getMyPokedex() {
        try {
            await sandboxService.getMyPokedex()
        } catch (error) {

        }
    }

    async deletePokedex(id) {
        try {
            await sandboxService.deletePokedex(id)
        } catch (error) {

        }
    }

    drawMyPokedex() {
        console.log('draw')
        let pokedexContent = ''
        AppState.myPokedex.forEach(x => pokedexContent += x.pokedexInventoryTemplate)
        setHTML('my-inventory', pokedexContent)
    }
}