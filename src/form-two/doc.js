import { registerComponent } from "@nextrap/doc-visualizer";
registerComponent({
    package: "form-two",
    description: "Form Components Two",
    title: "NXA Form Components Two",
    examples: [
        {
            title: "Form Examples",
            description: "Examples of classic form styles",
            lang: "html",
            code: `
<!-- Classic Form Style -->
<form action="/submit" method="post">
    <!-- Single Input -->
    <nxa-form-input-two
        label="Username"
        name="username"
        placeholder="Enter username"
        required>
    </nxa-form-input-two>

    <!-- Form Group with Two Inputs -->
    <nxa-form-group cols="1-2-3">
        <nxa-form-input-two
            label="First Name"
            name="firstname"
            placeholder="Enter first name">
        </nxa-form-input-two>
        <nxa-form-input-two
            label="Last Name"
            name="lastname"
            placeholder="Enter last name">
        </nxa-form-input-two>
    </nxa-form-group>

    <!-- Floating Labels with Different Sizes -->
    <nxa-form-group cols="1-2-3">
        <nxa-form-input-two
            floating
            label="Small Input"
            name="small-input"
            size="sm">
        </nxa-form-input-two>
        <nxa-form-input-two
            floating
            label="Regular Input"
            name="regular-input">
        </nxa-form-input-two>
        <nxa-form-input-two
            floating
            label="Large Input"
            name="large-input"
            size="lg">
        </nxa-form-input-two>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input-two
                label="Country"
                name="country1"
                type="select"
                select-options='[
                    {"key":"","value":"Select a country"},
                    {"key":"us","value":"United States"},
                    {"key":"uk","value":"United Kingdom"},
                    {"key":"ca","value":"Canada"}
                ]'>
            </nxa-form-input-two>

            <!-- Case 2: Object with key-value properties -->
            <nxa-form-input-two
                label="Country"
                name="country2"
                type="select"
                select-options='[
                    {"":"Select a country"},
                    {"us":"United States"},
                    {"uk":"United Kingdom"},
                    {"ca":"Canada"}
                ]'
                required>
            </nxa-form-input-two>

            <!-- Case 3: Simple string array -->
            <nxa-form-input-two
                label="Country"
                name="country3"
                type="select"
                select-options='["Select a country", "United States", "United Kingdom", "Canada"]'>
            </nxa-form-input-two>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input-two
            type="checkbox"
            label="Classic Checkbox"
            name="classic-check"
            required>
        </nxa-form-input-two>

        <nxa-form-input-two
            type="checkbox"
            label="Disabled Checkbox"
            name="disabled-check"
            disabled
            checked>
        </nxa-form-input-two>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input-two
            type="radio"
            name="required-group"
            label="Option 1"
            required>
        </nxa-form-input-two>
        <nxa-form-input-two
            type="radio"
            name="required-group"
            label="Option 2"
            required>
        </nxa-form-input-two>
    </nxa-form-group>

     <nxa-form-input-two
        type="textarea"
        label="Description"
        name="description"
        placeholder="Enter description"
        required
        rows="2"
        maxRows="5">
    </nxa-form-input-two>

    <button type="submit">Submit</button>
</form>
            `
        },
        {
            title: "Form Examples Modern",
            description: "Examples of modern form styles",
            lang: "html",
            code: `
<!-- Modern Form Style -->
<form action="/submit" method="post">
    <nxa-form-group cols="1-2-3">
        <nxa-form-input-two
            floating
            label="Email"
            name="email"
            inputStyle="modern"
            type="email">
        </nxa-form-input-two>
        <nxa-form-input-two
            floating
            label="Password"
            inputStyle="modern"
            type="password">
        </nxa-form-input-two>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input-two
            label="Address"
            name="address"
            inputStyle="modern"
            placeholder="Enter address">
        </nxa-form-input-two>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input-two
                label="Country"
                name="country1"
                type="select"
                inputStyle="modern"
                select-options='[
                    {"key":"","value":"Select a country"},
                    {"key":"us","value":"United States"},
                    {"key":"uk","value":"United Kingdom"},
                    {"key":"ca","value":"Canada"}
                ]'>
            </nxa-form-input-two>

            <!-- Case 2: Object with key-value properties -->
            <nxa-form-input-two
                label="Country"
                name="country2"
                type="select"
                inputStyle="modern"
                select-options='[
                    {"":"Select a country"},
                    {"us":"United States"},
                    {"uk":"United Kingdom"},
                    {"ca":"Canada"}
                ]'
                required>
            </nxa-form-input-two>

            <!-- Case 3: Simple string array -->
            <nxa-form-input-two
                label="Country"
                name="country3"
                type="select"
                inputStyle="modern"
                select-options='["Select a country", "United States", "United Kingdom", "Canada"]'>
            </nxa-form-input-two>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input-two
            type="checkbox"
            inputStyle="modern"
            label="Modern Switch"
            name="modern-switch"
            required>
        </nxa-form-input-two>

        <nxa-form-input-two
            type="checkbox"
            inputStyle="modern"
            label="Disabled Switch"
            disabled
            checked>
        </nxa-form-input-two>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input-two
            type="radio"
            inputStyle="modern"
            label="Modern Radio 1"
            name="modern-radio"
            checked>
        </nxa-form-input-two>

        <nxa-form-input-two
            type="radio"
            inputStyle="modern"
            label="Modern Radio 2"
            name="modern-radio">
        </nxa-form-input-two>
    </nxa-form-group>

    <nxa-form-input-two
        type="textarea"
        label="Description"
        name="description"
        inputStyle="modern"
        floating
        rows="1"
        maxRows="5"
        required>
    </nxa-form-input-two>

    <button type="submit">Submit</button>
</form>
            `
        }
    ]
});
