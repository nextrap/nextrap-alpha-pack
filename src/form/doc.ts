import { registerComponent } from "@nextrap/doc-visualizer";

registerComponent({
    package: "form",
    description: "Form Components",
    title: "NXA Form Components",
    examples: [
        {
            title: "Form Examples",
            description: "Examples of classic and modern form styles",
            lang: "html",
            code: `
<!-- Classic Form Style -->
<nxa-form action="/submit" method="post">
    <!-- Single Input -->
    <nxa-form-input
        label="Username"
        placeholder="Enter username"
        required>
    </nxa-form-input>

    <!-- Form Group with Two Inputs -->
    <nxa-form-group cols="1-2-3">
        <nxa-form-input
            label="First Name"
            placeholder="Enter first name">
        </nxa-form-input>
        <nxa-form-input
            label="Last Name"
            placeholder="Enter last name">
        </nxa-form-input>
    </nxa-form-group>

    <!-- Floating Labels with Different Sizes -->
    <nxa-form-group cols="1-2-3">
        <nxa-form-input
            floating
            label="Small Input"
            size="sm">
        </nxa-form-input>
        <nxa-form-input
            floating
            label="Regular Input">
        </nxa-form-input>
        <nxa-form-input
            floating
            label="Large Input"
            size="lg">
        </nxa-form-input>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input
            type="checkbox"
            label="Classic Checkbox"
            name="classic-check">
        </nxa-form-input>

        <nxa-form-input
            type="checkbox"
            label="Disabled Checkbox"
            disabled
            checked>
        </nxa-form-input>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input
            type="radio"
            name="required-group"
            label="Option 1"
            required>
        </nxa-form-input>
        <nxa-form-input
            type="radio"
            name="required-group"
            label="Option 2"
            required>
        </nxa-form-input>
    </nxa-form-group>

     <nxa-form-textarea
        label="Description"
        placeholder="Enter description"
        required
        rows="2"
        maxRows="5">
    </nxa-form-textarea>

    <button type="submit">Submit</button>
</nxa-form>

<hr style="margin: 2rem 0;">

<!-- Modern Form Style -->
<nxa-form action="/submit" method="post" modern>
    <nxa-form-group cols="1-2-3">
        <nxa-form-input
            floating
            label="Email"
            type="email">
        </nxa-form-input>
        <nxa-form-input
            floating
            label="Password"
            type="password">
        </nxa-form-input>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input
            label="Address"
            placeholder="Enter address">
        </nxa-form-input>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input
            type="checkbox"
            switchStyle="modern"
            label="Modern Switch"
            name="modern-switch">
        </nxa-form-input>

        <nxa-form-input
            type="checkbox"
            switchStyle="modern"
            label="Disabled Switch"
            disabled
            checked>
        </nxa-form-input>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input
            type="radio"
            switchStyle="modern"
            label="Modern Radio 1"
            name="modern-radio"
            checked>
        </nxa-form-input>

        <nxa-form-input
            type="radio"
            switchStyle="modern"
            label="Modern Radio 2"
            name="modern-radio">
        </nxa-form-input>
    </nxa-form-group>

    <nxa-form-textarea
        label="Description"
        floating
        rows="1"
        maxRows="5">
    </nxa-form-textarea>

    <nxa-form-input
        type="range"
        label="Volume"
        min="0"
        max="100"
        step="1"
        value="50">
    </nxa-form-input>
</nxa-form>
            `
        }
    ]
});
