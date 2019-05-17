import { Section, Button, Repeater } from "cx/widgets";

import Controller from "./Controller";

export default (
    <cx>
        <h2 putInto="header">Home</h2>

        <Section mod="card" controller={Controller} title="Numbers drawn">
            <div style="display: flex; height: 320px; justify-content: center; align-items: center;">
                <Button text="Draw number" mod="primary" class="big-button" onClick="drawNumber" style="margin-right: 10px;" />
                <Button text="Reset" class="big-button" onClick="reset" />
            </div>
            <div style="display: flex; flex-wrap: wrap;">
                <Repeater records-bind="$page.numbers">
                    <div class="lottery-ball" text-bind="$record.value" />
                </Repeater>
            </div>
        </Section>
        <Section mod="card" title="Players" style="margin-top: 15px;">
            
        </Section>
    </cx>
);
