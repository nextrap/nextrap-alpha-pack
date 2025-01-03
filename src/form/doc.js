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
<form action="/submit" method="post">
    <!-- Single Input -->
    <nxa-form-input label="Username">
        <input
            slot="input"
            type="text"
            class="form-control"
            placeholder="Enter username"
            id="username"
            name="username"
            required
        />
    </nxa-form-input>

    <!-- With custom feedback messages -->
    <nxa-form-group cols="1-2-3">
        <nxa-form-input
            label="Username"
            inline
            invalidFeedback="This username is already taken!"
            validFeedback="This username is available!">
            <input slot="input" type="text" class="form-control" required />
        </nxa-form-input>
    </nxa-form-group>

    <!-- Form Group with Two Inputs -->
    <nxa-form-group cols="1-2-3">
        <nxa-form-input label="First Name">
            <input
                slot="input"
                type="text"
                class="form-control"
                placeholder="Enter first name"
                id="firstName"
                name="firstName"
            />
        </nxa-form-input>
        <nxa-form-input label="Last Name">
            <input
                slot="input"
                type="text"
                class="form-control"
                placeholder="Enter last name"
                id="lastName"
                name="lastName"
            />
        </nxa-form-input>
    </nxa-form-group>

    <!-- Floating Labels with Different Sizes -->
    <nxa-form-group cols="1-2-3">
        <nxa-form-input floating label="Small Input" size="sm">
            <input
                slot="input"
                type="text"
                class="form-control form-control-sm"
                placeholder=" "
                id="smallInput"
                name="smallInput"
            />
        </nxa-form-input>
        <nxa-form-input floating label="Regular Input">
            <input
                slot="input"
                type="text"
                class="form-control"
                placeholder=" "
                id="regularInput"
                name="regularInput"
            />
        </nxa-form-input>
        <nxa-form-input floating label="Large Input" size="lg">
            <input
                slot="input"
                type="text"
                class="form-control form-control-lg"
                placeholder=" "
                id="largeInput"
                name="largeInput"
            />
        </nxa-form-input>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input label="Country" type="select">
            <select slot="input" class="form-control" name="country" required>
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
            </select>
        </nxa-form-input>

        <nxa-form-input
            label="Country"
            type="select"
            select-options='[
                {"key":"","value":"Select a country"},
                {"key":"us","value":"United States"},
                {"key":"uk","value":"United Kingdom"},
                {"key":"ca","value":"Canada"}
            ]'>
            <select slot="input" class="form-control" name="country" required></select>
        </nxa-form-input>

        <!-- Case 2: Object with key-value properties -->
        <nxa-form-input
            label="Country"
            type="select"
            select-options='[
                {"":"Select a country"},
                {"us":"United States"},
                {"uk":"United Kingdom"},
                {"ca":"Canada"}
            ]'>
            <select slot="input" class="form-control" name="country" required></select>
        </nxa-form-input>

        <!-- Case 3: Simple string array -->
        <nxa-form-input
            label="Country"
            type="select"
            select-options='["Select a country", "United States", "United Kingdom", "Canada"]'>
            <select slot="input" class="form-control" name="country" required></select>
        </nxa-form-input>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input type="checkbox" label="Classic Checkbox" name="classic-check" required>
            <input
                slot="input"
                type="checkbox"
                class="form-check-input"
                id="classicCheck"
                name="classic-check"
            />
        </nxa-form-input>

        <nxa-form-input type="checkbox" label="Disabled Checkbox">
            <input
                slot="input"
                type="checkbox"
                class="form-check-input"
                id="disabledCheck"
                name="disabled-check"
                disabled
                checked
            />
        </nxa-form-input>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input type="radio" label="Option 1" required>
            <input
                slot="input"
                type="radio"
                class="form-check-input"
                id="option1"
                name="required-group"
                required
            />
        </nxa-form-input>
        <nxa-form-input type="radio" label="Option 2" required>
            <input
                slot="input"
                type="radio"
                class="form-check-input"
                id="option2"
                name="required-group"
                required
            />
        </nxa-form-input>
    </nxa-form-group>

     <nxa-form-textarea label="Description" required>
        <textarea
            slot="input"
            class="form-control"
            placeholder="Enter description"
            id="description"
            name="description"
            rows="2"
            maxlength="5"
            required
        ></textarea>
    </nxa-form-textarea>

    <button type="submit">Submit</button>
</form>

<hr style="margin: 2rem 0;">

<!-- Modern Form Style -->
<form action="/submit" method="post" modern>
    <nxa-form-group cols="1-2-3">
        <nxa-form-input label="Country" type="select">
            <select slot="input" class="form-control" name="country" required>
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
            </select>
        </nxa-form-input>

        <nxa-form-input
            label="Country"
            type="select"
            select-options='[
                {"key":"","value":"Select a country"},
                {"key":"us","value":"United States"},
                {"key":"uk","value":"United Kingdom"},
                {"key":"ca","value":"Canada"}
            ]'>
            <select slot="input" class="form-control" name="country" required>
            </select>
        </nxa-form-input>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input floating label="Email">
            <input
                slot="input"
                type="email"
                class="form-control"
                placeholder=" "
                id="email"
                name="email"
            />
        </nxa-form-input>
        <nxa-form-input floating label="Password">
            <input
                slot="input"
                type="password"
                class="form-control"
                placeholder=" "
                id="password"
                name="password"
            />
        </nxa-form-input>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input label="Address">
            <input
                slot="input"
                type="text"
                class="form-control"
                placeholder="Enter address"
                id="address"
                name="address"
            />
        </nxa-form-input>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input type="checkbox" switchStyle="modern" label="Modern Switch" name="modern-switch">
            <input
                slot="input"
                type="checkbox"
                class="form-check-input"
                id="modernSwitch"
                name="modern-switch"
                required
            />
        </nxa-form-input>

        <nxa-form-input type="checkbox" switchStyle="modern" label="Disabled Switch">
            <input
                slot="input"
                type="checkbox"
                class="form-check-input"
                id="disabledSwitch"
                name="disabled-switch"
                disabled
                checked
            />
        </nxa-form-input>
    </nxa-form-group>

    <nxa-form-group cols="1-2-3">
        <nxa-form-input type="radio" switchStyle="modern" label="Modern Radio 1">
            <input
                slot="input"
                type="radio"
                class="form-check-input"
                id="modernRadio1"
                name="modern-radio"
                required
            />
        </nxa-form-input>

        <nxa-form-input type="radio" switchStyle="modern" label="Modern Radio 2">
            <input
                slot="input"
                type="radio"
                class="form-check-input"
                id="modernRadio2"
                name="modern-radio"
                required
            />
        </nxa-form-input>
    </nxa-form-group>

    <nxa-form-textarea label="Description" floating>
        <textarea
            slot="input"
            class="form-control"
            placeholder=" "
            id="modernDescription"
            name="modernDescription"
            rows="1"
            maxlength="5"
        ></textarea>
    </nxa-form-textarea>

    <nxa-form-input type="range" label="Volume">
        <input
            slot="input"
            type="range"
            class="form-control"
            id="volume"
            name="volume"
            min="0"
            max="100"
            step="1"
            value="50"
        />
    </nxa-form-input>

    <button type="submit">Submit</button>
</form>
            `
        }
    ]
});
