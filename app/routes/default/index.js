import { Section, Button, Repeater, Grid } from "cx/widgets";

import {LotteryController} from "./LotteryController";
import {PlayersController} from "./PlayersController";

export default (
    <cx>
        <h2 putInto="header">Home</h2>

        <Section mod="card" controller={LotteryController} title="Numbers drawn" style="height: 50%;" bodyStyle="display: flex; flex-direction: column;">
            <div style="display: flex; flex: 1; justify-content: center; align-items: center;">
                <Button text="Draw number" mod="primary" class="big-button" onClick="drawNumber" style="margin-right: 10px;" />
                <Button text="New game" class="big-button" onClick="reset" />
            </div>
            <div style="display: flex; flex-wrap: wrap; min-height: 120px; background-color: seashell">
                <Repeater records-bind="$page.numbers">
                    <div class="lottery-ball" text-bind="$record.value" />
                </Repeater>
            </div>
        </Section>
        <Section mod="card" title="Players" style="margin-top: 15px; height: calc(50% - 15px);" controller={PlayersController}>
            <Grid 
                style="height: 100%;"
                records-bind="$page.players"
                columns={[
                    { field: "name", header: "Player name" },
                    { field: "number", header: "Numbers" }
                ]}
                scrollable
            />
        </Section>
    </cx>
);
