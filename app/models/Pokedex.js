export class Pokedex {
    constructor(data) {
        this.id = data._id || ''
        this.name = data.name
        this.nickName = data.nickName || data.name
        this.img = data.sprites?.front_default || data.img
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        this.creatorId = data.creatorId
    }

    get pokedexInventoryTemplate() {
        return /*html*/`
        <div class="col-4 my-2 text-center">
        <button class="btn btn-outline-light m-2" onclick="app.PokedexController.selectPokedex('${this.name}')">
            <img class="img-fluid" src="${this.img}" alt="">
        </button>
        <button class="btn btn-danger w-100" onclick="app.SandboxController.deletePokedex('${this.id}')">Release</button>
        </div>
        `
    }

    get formatTypes() {
        let x = []
        this.types.forEach(y => x.push(y.type.name))
        return x.join(', ')
    }

    get activeTemplate() {
        return /*html*/`
            <h3 class="text-capitalize mt-4 mb-3">${this.name}</h3>
            <img class="img-fluid" src="${this.img}" alt="">
            <div class="p-3 mt-4 rounded shadow border border-2 bg-dark text-light row text-start">
                <div class="col-6">
                    Height: ${this.height}
                </div>
                <div class="col-6">
                    Weight: ${this.weight}
                </div>
                <div class="col-6">
                    Types: ${this.formatTypes}
                </div>
                <div class="col-12 text-end">
                    <button class="btn btn-danger" onclick="app.SandboxController.catchPokedex()">Catch</button>
                </div>
            </div>
        `
    }

    static getListTemplate(data) {
        return /*html*/`
        <button class="btn btn-outline-dark my-1" onclick="app.PokedexController.selectPokedex('${data.name}')">
        ${data.name}
        </button>
        `
    }
}