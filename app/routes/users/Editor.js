import {
    Section,
    Button,
    FlexRow,
    LinkButton,
    TextField,
    Checkbox,
    Rescope,
    ValidationGroup,
    NumberField,
    Repeater
} from "cx/widgets";
import { LabelsTopLayout } from "cx/ui";

import Controller from "./EditorController";
import "cx/widgets/icons";
import { MAX_LOTTERY_VALUE, MIN_LOTTERY_VALUE } from "./api";

export default (
    <cx>
        <Rescope bind="$page" controller={Controller}>
            <h2 putInto="header">Edit User</h2>
            <Section
                mod="card"
                style="max-width: 300px; height: 485px;"
                title-tpl="{user.name|New user}"
            >
                <ValidationGroup
                    layout={{
                        type: LabelsTopLayout,
                        mod: "stretch",
                        vertical: true
                    }}
                    invalid-bind="invalid"
                >
                    <TextField
                        label="Player name"
                        value-bind="user.name"
                        style="width: 100%"
                        required
                    />
                    <Repeater records-bind="user.numbers">
                        <NumberField
                            label-expr="'Number ' + ({$index} + 1)"
                            value-bind="$record.value"
                            style="width: 100%"
                            maxValue={MAX_LOTTERY_VALUE}
                            minValue={MIN_LOTTERY_VALUE}
                            required
                        />
                    </Repeater>
                    <hr />
                    <FlexRow spacing>
                        <Button
                            mod="primary"
                            onClick="onSave"
                            disabled-bind="invalid"
                        >
                            Save
                        </Button>
                        <LinkButton mod="hollow" href="~/users">
                            Cancel
                        </LinkButton>
                        <Button
                            visible-expr="{$root.$route.userId} != 'new'"
                            mod="hollow"
                            onClick="onDelete"
                            style="margin-left: auto; color: red"
                            confirm="Are you sure that you want to delete this user?"
                        >
                            Delete
                        </Button>
                    </FlexRow>
                </ValidationGroup>
            </Section>
        </Rescope>
    </cx>
);
