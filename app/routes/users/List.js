import {
    Section,
    FlexRow,
    TextField,
    Link,
    LinkButton,
    Repeater,
    Rescope
} from "cx/widgets";

import Controller from "./ListController";
import "cx/widgets/icons";

export default (
    <cx>
        <h2 putInto="header">Users</h2>
        <Rescope bind="$page" controller={Controller}>
            <div>
                <Section mod="card">
                    <FlexRow spacing>
                        <TextField
                            value-bind="search"
                            placeholder="Search..."
                            style="flex: 1 0 0"
                            inputStyle="border-color: transparent; box-shadow: none; font-size: 16px"
                            icon-expr="{status}=='loading' ? 'loading' : 'search'"
                            showClear
                        />
                        <LinkButton mod="hollow" href="~/users/new">
                            Add User
                        </LinkButton>
                    </FlexRow>
                </Section>
                <FlexRow spacing wrap style="margin-top: 15px">
                    <Repeater
                        records-bind="results"
                        recordAlias="$user"
                        idField="id"
                    >
                        <Link href-tpl="~/users/{$user.id}" class="user-card">
                            <Section mod="card" class="user-card-body" ws>
                                <h6 text-bind="$user.name" />
                                <div>Numbers:</div>
                                <Repeater records-bind="$user.numbers">
                                    <div class="lottery-ball" mod="small" text-bind="$record.value" />  
                                </Repeater>
                            </Section>
                        </Link>
                    </Repeater>
                </FlexRow>
            </div>
        </Rescope>
    </cx>
);
