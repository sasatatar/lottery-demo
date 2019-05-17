import {Controller} from "cx/ui";
import { queryUsers } from "../users/api";

export class PlayersController extends Controller {
    onInit() {
        this.addTrigger("computeHits", ["$page.players", "$page.numbers"], (players, numbers) => {
            if (!players || !numbers) return;
            let balls = numbers.map(n => n.value);
            let results = players.map(player => {
                let guesses = player.numbers.map(n => n.value);
                
                let hits = 0;
                guesses.forEach((guess) => {
                    if (balls.includes(guess)) {
                        hits++
                    }
                });
                
                return {
                    ...player,
                    hits: hits
                }
            });
            this.store.set("$page.results", results);
        });

        this.loadPlayers();
    }

    async loadPlayers() {
        let players = await queryUsers();
        this.store.set("$page.players", players);
    }
}