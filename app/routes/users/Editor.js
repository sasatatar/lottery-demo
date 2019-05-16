import {
    Section,
    Button,
    FlexRow,
    LinkButton,
    TextField,
    Checkbox,
    Rescope,
    ValidationGroup,
    NumberField
} from "cx/widgets";
import { LabelsTopLayout } from "cx/ui";

import Controller from "./EditorController";
import "cx/widgets/icons";

export default (
    <cx>
        <Rescope bind="$page" controller={Controller}>
            <h2 putInto="header">Edit User</h2>
            <Section
                mod="card"
                style="max-width: 300px"
                title-bind="user.display"
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
                    <NumberField
                        label="Guess"
                        value-bind="user.number"
                        style="width: 100%"
                        maxValue={100}
                        minValue={0}
                        required
                    />
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
