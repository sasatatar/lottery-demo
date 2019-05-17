import {Controller} from "cx/ui";
import casual from "casual-browserify";

export default class extends Controller {
    onInit() {
        this.store.init("$page.numbers", []);
    }
    
    drawNumber() {
        this.store.update("$page.numbers", (numbers) => {
            return [
                ...numbers,
                {
                    id: numbers.length,
                    value: casual.integer(0, 100)
                }
            ];
        })
    }

    reset() {
        this.store.set("$page.numbers", []);
    }
}