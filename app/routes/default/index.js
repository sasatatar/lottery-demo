import { Section, Button, Repeater, Grid } from "cx/widgets";

import {LotteryController} from "./LotteryController";
import {PlayersController} from "./PlayersController";
import { computable } from "cx/ui";

export default (
    <cx>
        <h2 putInto="header">Home</h2>
        <div style="display: flex; overflow: auto; flex: 1;">
            <Section mod="card" controller={LotteryController} style="flex: 1" bodyStyle="display: flex; flex-direction: column;"
                header={{ 
                    items: (
                        <cx>
                            <div style="display: flex;">
                                <h3>Numbers draw</h3>
                                <Button text="New game" onClick="reset" style="margin-left: auto;"/>
                            </div>
                        </cx>
                    )
                }}
            >
                <div style="display: flex; flex: 1; justify-content: center;">
                    <Button text="Draw number" mod="primary" class="big-button" onClick="drawNumber" style="margin-right: 10px;" />
                </div>
                <div style="display: flex; flex-wrap: wrap; min-height: 120px; background-color: seashell">
                    <Repeater records-bind="$page.numbers">
                        <div class="lottery-ball" mod-expr="{$page.numbers.length} > 13 && 'medium'" text-bind="$record.value" />
                    </Repeater>
                </div>
            </Section>
            <Section mod="card" title="Players" style="margin-left: 15px; flex: 1 1 0%;" bodyStyle="display: flex; flex-direction: column;" controller={PlayersController}>
                <Grid 
                    style="flex: 1;"
                    records-bind="$page.results"
                    columns={[
                        { field: "name", header: "Player name", sortable: true },
                        { 
                            field: "number", 
                            header: "Numbers",
                            align: "right",
                            items: (
                                <cx>
                                    <Repeater records-bind="$record.numbers">
                                        <div 
                                            class={{ 
                                                "lottery-ball": true, 
                                                hit: computable("$page.numbers", "$record.value", (numbers=[], val) => {
                                                    return numbers.map(n => n.value).includes(val)
                                                }) 
                                            }}
                                            mod="small" 
                                            text-bind="$record.value" 
                                        />  
                                    </Repeater>
                                </cx>
                            )
                        },
                        { field: "hits", header: "Hits", format: 'n', align: "right", sortable: true }
                    ]}
                    scrollable
                    defaultSortField="hits"
                    defaultSortDirection="DESC"
                />
            </Section>
        </div>
    </cx>
);
