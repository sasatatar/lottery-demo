import {Controller} from "cx/ui";
import { queryUsers } from "../users/api";

export class PlayersController extends Controller {
    onInit() {
        this.loadPlayers();
    }

    async loadPlayers() {
        let players = await queryUsers();
        this.store.set("$page.players", players);
    }
}