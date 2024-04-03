import { AccountController } from "./controllers/AccountController.js";
import { PokedexController } from "./controllers/PokedexController.js";
import { SandboxController } from "./controllers/SandboxController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [PokedexController, SandboxController],
    view: 'app/views/MainView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])
