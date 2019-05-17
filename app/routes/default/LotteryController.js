import {Controller} from "cx/ui";
import casual from "casual-browserify";
import { MIN_LOTTERY_VALUE, MAX_LOTTERY_VALUE } from "../users/api";

export class LotteryController extends Controller {
    onInit() {
        this.store.init("$page.numbers", []);
    }
    
    drawNumber() {
        this.store.update("$page.numbers", (numbers) => {
            let values = numbers.map(n => n.value);
            let num = casual.integer(MIN_LOTTERY_VALUE, MAX_LOTTERY_VALUE);
            while (values.includes(num)) {
                num = casual.integer(MIN_LOTTERY_VALUE, MAX_LOTTERY_VALUE);
            };

            return [
                ...numbers,
                {
                    id: numbers.length,
                    value: num
                }
            ];
        })
    }

    reset() {
        this.store.set("$page.numbers", []);
    }
}