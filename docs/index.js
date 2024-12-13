/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.doc.ts":
/*!**********************!*\
  !*** ./index.doc.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_lead_button_doc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/lead-button/doc */ "./src/lead-button/doc.ts");
/* harmony import */ var _src_infiniscroll_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/infiniscroll/doc */ "./src/infiniscroll/doc.ts");
/* harmony import */ var _src_modal_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/modal/doc */ "./src/modal/doc.ts");
/* harmony import */ var _src_form_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/form/doc */ "./src/form/doc.ts");








/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NxaForm: () => (/* reexport safe */ _src_form_nxa_form__WEBPACK_IMPORTED_MODULE_0__.NxaForm),
/* harmony export */   NxaFormGroup: () => (/* reexport safe */ _src_form_nxa_form_group__WEBPACK_IMPORTED_MODULE_1__.NxaFormGroup),
/* harmony export */   NxaFormInput: () => (/* reexport safe */ _src_form_nxa_form_input__WEBPACK_IMPORTED_MODULE_2__.NxaFormInput),
/* harmony export */   NxaFormTextarea: () => (/* reexport safe */ _src_form_nxa_form_textarea__WEBPACK_IMPORTED_MODULE_3__.NxaFormTextarea),
/* harmony export */   NxaLeadButton: () => (/* reexport safe */ _src_lead_button_nxa_lead_button__WEBPACK_IMPORTED_MODULE_4__.NxaLeadButton),
/* harmony export */   NxaModal: () => (/* reexport safe */ _src_modal_nxa_modal__WEBPACK_IMPORTED_MODULE_6__.NxaModal)
/* harmony export */ });
/* harmony import */ var _src_form_nxa_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/form/nxa-form */ "./src/form/nxa-form.ts");
/* harmony import */ var _src_form_nxa_form_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/form/nxa-form-group */ "./src/form/nxa-form-group.ts");
/* harmony import */ var _src_form_nxa_form_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/form/nxa-form-input */ "./src/form/nxa-form-input.ts");
/* harmony import */ var _src_form_nxa_form_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/form/nxa-form-textarea */ "./src/form/nxa-form-textarea.ts");
/* harmony import */ var _src_lead_button_nxa_lead_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/lead-button/nxa-lead-button */ "./src/lead-button/nxa-lead-button.ts");
/* harmony import */ var _src_infiniscroll_nxa_infiniscroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/infiniscroll/nxa-infiniscroll */ "./src/infiniscroll/nxa-infiniscroll.ts");
/* harmony import */ var _src_infiniscroll_nxa_infiniscroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_infiniscroll_nxa_infiniscroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _src_infiniscroll_nxa_infiniscroll__WEBPACK_IMPORTED_MODULE_5__) if(["default","NxaForm","NxaFormGroup","NxaFormInput","NxaFormTextarea","NxaLeadButton"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _src_infiniscroll_nxa_infiniscroll__WEBPACK_IMPORTED_MODULE_5__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_modal_nxa_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/modal/nxa-modal */ "./src/modal/nxa-modal.ts");










/***/ }),

/***/ "./src/form/doc.ts":
/*!*************************!*\
  !*** ./src/form/doc.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextrap_doc_visualizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextrap/doc-visualizer */ "./workspaces/nextrap-doc-visualizer/index.ts");

(0,_nextrap_doc_visualizer__WEBPACK_IMPORTED_MODULE_0__.registerComponent)({
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
        <nxa-form-input type="checkbox" label="Classic Checkbox" name="classic-check">
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
</nxa-form>

<hr style="margin: 2rem 0;">

<!-- Modern Form Style -->
<nxa-form action="/submit" method="post" modern>
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
                checked
            />
        </nxa-form-input>

        <nxa-form-input type="radio" switchStyle="modern" label="Modern Radio 2">
            <input
                slot="input"
                type="radio"
                class="form-check-input"
                id="modernRadio2"
                name="modern-radio"
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
</nxa-form>
            `
    }
  ]
});


/***/ }),

/***/ "./src/form/nxa-form-group.ts":
/*!************************************!*\
  !*** ./src/form/nxa-form-group.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NxaFormGroup: () => (/* binding */ NxaFormGroup)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _style_form_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-form-group */ "./src/form/style-form-group.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



let NxaFormGroup = class extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  constructor() {
    super(...arguments);
    this.gap = 1;
    this.alignItems = "stretch";
    this.cols = "1-2-3";
  }
  // Format: "sm-md-lg" e.g., "1-2-3" means 1 column on small, 2 on medium, 3 on large
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
            <div
                class="form-group"
                style="
                    --gap: ${this.gap}rem;
                    --align-items: ${this.alignItems};
                    --cols-sm: ${this.cols.split("-")[0] || 1};
                    --cols-md: ${this.cols.split("-")[1] || this.cols.split("-")[0] || 1};
                    --cols-lg: ${this.cols.split("-")[2] || this.cols.split("-")[1] || this.cols.split("-")[0] || 1};
                "
            >
                <slot></slot>
            </div>
        `;
  }
};
NxaFormGroup.styles = _style_form_group__WEBPACK_IMPORTED_MODULE_2__.styleFormGroup;
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Number })
], NxaFormGroup.prototype, "gap", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaFormGroup.prototype, "alignItems", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaFormGroup.prototype, "cols", 2);
NxaFormGroup = __decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)("nxa-form-group")
], NxaFormGroup);


/***/ }),

/***/ "./src/form/nxa-form-input.ts":
/*!************************************!*\
  !*** ./src/form/nxa-form-input.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NxaFormInput: () => (/* binding */ NxaFormInput)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _style_form_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-form-input */ "./src/form/style-form-input.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



let NxaFormInput = class extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  constructor() {
    super(...arguments);
    this.label = "";
    this.name = "";
    this.type = "text";
    this.size = "md";
    this.required = false;
    this.floating = false;
    this.inline = false;
    this.helperText = "";
    this.switchStyle = "classic";
    this.invalidFeedback = "Please provide a valid value";
    this.validFeedback = "";
    this.selectOptions = [];
    this.touched = false;
    this.valid = false;
    this.invalid = false;
    this.isEmpty = true;
    this.input = null;
  }
  // Public property to get input
  get inputElement() {
    return this.input;
  }
  // Public validation method
  validateOnSubmit() {
    if (!this.input)
      return false;
    this.touched = true;
    return this._validate(this.input);
  }
  updateFloatingState(input) {
    var _a;
    if (!this.floating)
      return;
    const floatingDiv = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".form-floating");
    if (floatingDiv) {
      if (input.value) {
        floatingDiv.classList.add("has-value");
      } else {
        floatingDiv.classList.remove("has-value");
      }
    }
  }
  createRenderRoot() {
    const root = super.createRenderRoot();
    root.addEventListener("click", (e) => {
      var _a;
      const label = e.target;
      if (label.tagName === "LABEL") {
        const slot = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector('slot[name="input"]');
        if (slot) {
          const elements = slot.assignedElements();
          const input = elements[0];
          if (input) {
            input.focus();
            if (input instanceof HTMLInputElement && (input.type === "checkbox" || input.type === "radio")) {
              input.click();
            }
          }
        }
      }
    });
    return root;
  }
  firstUpdated() {
    var _a;
    const slot = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector('slot[name="input"]');
    if (slot) {
      slot.addEventListener("slotchange", () => {
        const elements = slot.assignedElements();
        this.input = elements[0];
        if (this.input) {
          this.input.id = this._uniqueId;
          this.required = this.input.hasAttribute("required");
          this.name = this.input.getAttribute("name") || this.name;
          if (this.input instanceof HTMLInputElement) {
            this.type = this.input.type || this.type;
          }
          if (this.selectOptions.length > 0 && this.input instanceof HTMLSelectElement) {
            this.updateSelectOptions(this.input);
          }
          this.input.addEventListener("input", (e) => {
            this._handleInput(e);
            this.updateFloatingState(this.input);
          });
          this.input.addEventListener("blur", (e) => this._handleBlur(e));
          this.input.addEventListener("change", (e) => this._handleInput(e));
          if (this.input.value) {
            this._validate(this.input);
            this.updateFloatingState(this.input);
          }
        }
      });
    }
  }
  updateSelectOptions(select) {
    select.innerHTML = "";
    if (!this.selectOptions || !Array.isArray(this.selectOptions)) {
      console.warn("selectOptions is not an array:", this.selectOptions);
      return;
    }
    this.selectOptions.forEach((option) => {
      var _a;
      const optionElement = document.createElement("option");
      if (typeof option === "string") {
        optionElement.value = option;
        optionElement.textContent = option;
      } else if ("key" in option && "value" in option) {
        optionElement.value = (_a = option.key) != null ? _a : "";
        optionElement.textContent = option.value;
      } else {
        const entries = Object.entries(option);
        if (entries.length === 1) {
          const [key, value] = entries[0];
          optionElement.value = key;
          optionElement.textContent = value;
        }
      }
      select.appendChild(optionElement);
    });
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("selectOptions")) {
      if (this.input instanceof HTMLSelectElement) {
        this.updateSelectOptions(this.input);
      }
    }
  }
  _handleInput(e) {
    const target = e.target;
    this.isEmpty = !target.value;
    this._validate(target);
  }
  _handleBlur(e) {
    this.touched = true;
    const target = e.target;
    this._validate(target);
  }
  _validate(input) {
    if (!input)
      return false;
    if (this.type === "range") {
      this.valid = true;
      this.invalid = false;
      this.style.setProperty("--show-valid-feedback", "none");
      this.style.setProperty("--show-invalid-feedback", "none");
      return true;
    }
    if (input instanceof HTMLInputElement && (this.type === "checkbox" || this.type === "radio")) {
      if (this.required) {
        this.valid = input.checked;
        this.invalid = !input.checked;
        if (this.touched) {
          if (this.valid) {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
            this.style.setProperty("--show-valid-feedback", "block");
            this.style.setProperty("--show-invalid-feedback", "none");
          } else {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
            this.style.setProperty("--show-valid-feedback", "none");
            this.style.setProperty("--show-invalid-feedback", "block");
          }
        }
      } else {
        input.classList.remove("is-invalid");
        this.valid = true;
        this.invalid = false;
        this.style.setProperty("--show-valid-feedback", "none");
        this.style.setProperty("--show-invalid-feedback", "none");
      }
      return this.valid;
    }
    this.isEmpty = !input.value;
    if (this.required && this.isEmpty) {
      this.valid = false;
      this.invalid = true;
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      this.style.setProperty("--show-valid-feedback", "none");
      this.style.setProperty("--show-invalid-feedback", "block");
      return false;
    }
    if (!this.required && this.isEmpty) {
      this.valid = false;
      this.invalid = false;
      input.classList.remove("is-valid", "is-invalid");
      this.style.setProperty("--show-valid-feedback", "none");
      this.style.setProperty("--show-invalid-feedback", "none");
      return true;
    }
    this.valid = input.checkValidity();
    this.invalid = !this.valid;
    if (this.valid) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
      this.style.setProperty("--show-valid-feedback", "block");
      this.style.setProperty("--show-invalid-feedback", "none");
    } else {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      this.style.setProperty("--show-valid-feedback", "none");
      this.style.setProperty("--show-invalid-feedback", "block");
    }
    return this.valid;
  }
  render() {
    if (!this.hasChildNodes()) {
      let inputElement = document.createElement("input");
      let copyVals = ["name", "type", "value", "placeholder", "required", "min", "max", "step", "pattern", "autocomplete", "autofocus", "disabled", "readonly", "size", "maxlength", "minlength", "multiple", "accept", "inputmode", "list", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"];
      copyVals.forEach((val) => {
        if (this.hasAttribute(val)) {
          inputElement.setAttribute(val, this.getAttribute(val));
        }
      });
      inputElement.setAttribute("slot", "input");
      if (this.type === "checkbox" || this.type === "radio") {
        inputElement.classList.add("form-check-input");
      } else {
        inputElement.classList.add("form-control");
      }
      this.appendChild(inputElement);
    }
    const uniqueId = this._uniqueId;
    if (this.type === "checkbox" || this.type === "radio") {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
                <div class="form-check ${this.switchStyle === "modern" ? "form-switch" : ""}">
                    <slot name="input"></slot>
                    <label class="form-check-label" for="${uniqueId}">
                        ${this.label}${this.required ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<span class="required-indicator">*</span>` : ""}
                    </label>
                    ${this.helperText ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
                        <div class="form-text">${this.helperText}</div>
                    ` : ""}
                    <div class="invalid-feedback">
                        ${this.invalidFeedback}
                    </div>
                </div>
            `;
    }
    if (!this.floating) {
      const content = (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
                <slot name="input"></slot>
                ${this.helperText ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
                    <div class="form-text">${this.helperText}</div>
                ` : ""}
                <div class="invalid-feedback">
                    ${this.invalidFeedback}
                </div>
                <div class="valid-feedback">
                    ${this.validFeedback}
                </div>
            `;
      if (this.inline) {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
                    <div class="form-inline">
                        ${this.label ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
                            <label class="form-label" for="${uniqueId}">
                                ${this.label}${this.required ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<span class="required-indicator">*</span>` : ""}
                            </label>
                        ` : ""}
                        <div class="input-wrapper">
                            ${content}
                        </div>
                    </div>
                `;
      }
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
                ${this.label ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
                    <label class="form-label" for="${uniqueId}">
                        ${this.label}${this.required ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<span class="required-indicator">*</span>` : ""}
                    </label>
                ` : ""}
                ${content}
            `;
    }
    const labelClasses = this.size !== "md" ? this.size === "sm" ? "small" : "large" : "";
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
            <div class="form-floating">
                <slot name="input"></slot>
                <label class="${labelClasses}" for="${uniqueId}">
                    ${this.label}${this.required ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<span class="required-indicator">*</span>` : ""}
                </label>
                ${this.helperText ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
                    <div class="form-text">${this.helperText}</div>
                ` : ""}
                <div class="invalid-feedback">
                    ${this.invalidFeedback}
                </div>
                <div class="valid-feedback">
                    ${this.validFeedback}
                </div>
            </div>
        `;
  }
  get _uniqueId() {
    var _a;
    if ((_a = this.input) == null ? void 0 : _a.id)
      return this.input.id;
    return this.name ? `nxa-${this.name}` : `nxa-${Math.random().toString(36).substring(2, 11)}`;
  }
};
NxaFormInput.styles = _style_form_input__WEBPACK_IMPORTED_MODULE_2__.styleInput;
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaFormInput.prototype, "label", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaFormInput.prototype, "name", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaFormInput.prototype, "type", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaFormInput.prototype, "size", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], NxaFormInput.prototype, "required", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], NxaFormInput.prototype, "floating", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], NxaFormInput.prototype, "inline", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaFormInput.prototype, "helperText", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaFormInput.prototype, "switchStyle", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaFormInput.prototype, "invalidFeedback", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaFormInput.prototype, "validFeedback", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({
    attribute: "select-options",
    converter: {
      fromAttribute: (value) => {
        if (!value)
          return [];
        try {
          return JSON.parse(value);
        } catch (e) {
          console.warn("Invalid JSON in select-options:", e);
          return [];
        }
      },
      toAttribute: (value) => {
        try {
          return JSON.stringify(value);
        } catch (e) {
          return "[]";
        }
      }
    }
  })
], NxaFormInput.prototype, "selectOptions", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], NxaFormInput.prototype, "touched", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], NxaFormInput.prototype, "valid", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], NxaFormInput.prototype, "invalid", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], NxaFormInput.prototype, "isEmpty", 2);
NxaFormInput = __decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)("nxa-form-input")
], NxaFormInput);


/***/ }),

/***/ "./src/form/nxa-form-textarea.ts":
/*!***************************************!*\
  !*** ./src/form/nxa-form-textarea.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NxaFormTextarea: () => (/* binding */ NxaFormTextarea)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _style_form_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-form-textarea */ "./src/form/style-form-textarea.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



let NxaFormTextarea = class extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  constructor() {
    super(...arguments);
    this.label = "";
    this.placeholder = "";
    this.value = "";
    this.name = "";
    this.size = "md";
    this.required = false;
    this.disabled = false;
    this.readonly = false;
    this.floating = false;
    this.helperText = "";
    this.rows = 3;
    this.maxRows = 10;
    this.touched = false;
    this.valid = false;
    this.invalid = false;
    this.isEmpty = true;
  }
  getTextareaClasses() {
    const classes = ["form-control"];
    if (this.size !== "md")
      classes.push(`form-control-${this.size}`);
    if (this.touched && (this.required || !this.isEmpty)) {
      if (this.valid)
        classes.push("is-valid");
      if (this.invalid)
        classes.push("is-invalid");
    }
    return classes.join(" ");
  }
  get _uniqueId() {
    return this.name || Math.random().toString(36).substring(2, 11);
  }
  _handleInput(e) {
    const target = e.target;
    this.value = target.value;
    this.isEmpty = !this.value;
    this._validate();
    requestAnimationFrame(() => {
      this._adjustHeight(target);
    });
    this.dispatchEvent(new CustomEvent("input", {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }
  _adjustHeight(textarea) {
    const scrollPos = window.pageYOffset;
    textarea.style.height = "auto";
    const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
    const minHeight = lineHeight * this.rows;
    const maxHeight = lineHeight * this.maxRows;
    const contentHeight = textarea.scrollHeight;
    const newHeight = Math.min(Math.max(contentHeight, minHeight), maxHeight);
    textarea.style.height = `${newHeight}px`;
    textarea.style.overflowY = contentHeight > maxHeight ? "auto" : "hidden";
    window.scrollTo(0, scrollPos);
  }
  _handleBlur() {
    this.touched = true;
    this._validate();
  }
  validateOnSubmit() {
    this.touched = true;
    this._validate();
    return this.valid;
  }
  _validate() {
    if (this.required && this.isEmpty) {
      this.valid = false;
      this.invalid = true;
      return;
    }
    if (!this.required && this.isEmpty) {
      this.valid = false;
      this.invalid = false;
      return;
    }
    this.valid = true;
    this.invalid = false;
  }
  firstUpdated() {
    requestAnimationFrame(() => {
      var _a;
      const textarea = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("textarea");
      if (textarea) {
        this._adjustHeight(textarea);
      }
    });
  }
  updated(changedProperties) {
    if (changedProperties.has("value")) {
      requestAnimationFrame(() => {
        var _a;
        const textarea = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("textarea");
        if (textarea) {
          this._adjustHeight(textarea);
        }
      });
    }
  }
  render() {
    if (!this.floating) {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
                ${this.label ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
                    <label class="form-label" for="textarea-${this._uniqueId}">
                        ${this.label}${this.required ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<span class="required-indicator">*</span>` : ""}
                    </label>
                ` : ""}
                <textarea
                    class="${this.getTextareaClasses()}"
                    id="textarea-${this._uniqueId}"
                    .value="${this.value}"
                    placeholder="${this.placeholder}"
                    ?required="${this.required}"
                    ?disabled="${this.disabled}"
                    ?readonly="${this.readonly}"
                    rows="${this.rows}"
                    @input="${this._handleInput}"
                    @blur="${this._handleBlur}"
                    style="overflow-y: hidden;"
                ></textarea>
                ${this.helperText ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
                    <div class="form-text">${this.helperText}</div>
                ` : ""}
                <div class="invalid-feedback">
                    <slot name="invalid-feedback">Please provide a valid value</slot>
                </div>
                <div class="valid-feedback">
                    <slot name="valid-feedback">Looks good!</slot>
                </div>
            `;
    }
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
            <div class="form-floating">
                <textarea
                    class="${this.getTextareaClasses()}"
                    id="textarea-${this._uniqueId}"
                    .value="${this.value}"
                    placeholder="${this.placeholder}"
                    ?required="${this.required}"
                    ?disabled="${this.disabled}"
                    ?readonly="${this.readonly}"
                    rows="${this.rows}"
                    @input="${this._handleInput}"
                    @blur="${this._handleBlur}"
                    style="overflow-y: hidden;"
                ></textarea>
                <label for="textarea-${this._uniqueId}">
                    ${this.label}${this.required ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<span class="required-indicator">*</span>` : ""}
                </label>
                ${this.helperText ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
                    <div class="form-text">${this.helperText}</div>
                ` : ""}
                <div class="invalid-feedback">
                    <slot name="invalid-feedback">Please provide a valid value</slot>
                </div>
                <div class="valid-feedback">
                    <slot name="valid-feedback">Looks good!</slot>
                </div>
            </div>
        `;
  }
};
NxaFormTextarea.styles = _style_form_textarea__WEBPACK_IMPORTED_MODULE_2__.styleTextarea;
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaFormTextarea.prototype, "label", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaFormTextarea.prototype, "placeholder", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaFormTextarea.prototype, "value", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaFormTextarea.prototype, "name", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaFormTextarea.prototype, "size", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], NxaFormTextarea.prototype, "required", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], NxaFormTextarea.prototype, "disabled", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], NxaFormTextarea.prototype, "readonly", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], NxaFormTextarea.prototype, "floating", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaFormTextarea.prototype, "helperText", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Number })
], NxaFormTextarea.prototype, "rows", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Number })
], NxaFormTextarea.prototype, "maxRows", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], NxaFormTextarea.prototype, "touched", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], NxaFormTextarea.prototype, "valid", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], NxaFormTextarea.prototype, "invalid", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], NxaFormTextarea.prototype, "isEmpty", 2);
NxaFormTextarea = __decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)("nxa-form-textarea")
], NxaFormTextarea);


/***/ }),

/***/ "./src/form/nxa-form.ts":
/*!******************************!*\
  !*** ./src/form/nxa-form.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NxaForm: () => (/* binding */ NxaForm)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _style_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-form */ "./src/form/style-form.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



let NxaForm = class extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  constructor() {
    super(...arguments);
    this.action = "";
    this.method = "post";
    this.enctype = "";
    this.target = "";
    this.novalidate = false;
    this.modern = false;
  }
  firstUpdated() {
    this.addEventListener("click", (e) => {
      const target = e.target;
      if (target.tagName === "BUTTON" && target.getAttribute("type") === "submit") {
        this._handleSubmit(e);
      }
    });
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
            <form
                action="${this.action}"
                method="${this.method}"
                enctype="${this.enctype}"
                target="${this.target}"
                ?novalidate="${this.novalidate}"
            >
                <slot></slot>
            </form>
        `;
  }
  _handleSubmit(e) {
    e.preventDefault();
    if (this.novalidate) {
      this._submitForm();
      return;
    }
    const formInputs = Array.from(this.querySelectorAll("nxa-form-input"));
    let isValid = true;
    formInputs.forEach((formInput) => {
      const inputValid = formInput.validateOnSubmit();
      if (!inputValid) {
        isValid = false;
      }
    });
    const submitEvent = new CustomEvent("form-submit", {
      detail: {
        valid: isValid,
        formData: this._getFormData()
      },
      bubbles: true,
      composed: true,
      cancelable: true
    });
    const eventResult = this.dispatchEvent(submitEvent);
    if (isValid && eventResult) {
      this._submitForm();
    }
  }
  _submitForm() {
    if (!this.action)
      return;
    const formData = this._getFormData();
    const tempForm = document.createElement("form");
    tempForm.method = this.method;
    tempForm.action = this.action;
    if (this.target)
      tempForm.target = this.target;
    if (this.enctype)
      tempForm.enctype = this.enctype;
    for (const [name, value] of Object.entries(formData)) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = String(value);
      tempForm.appendChild(input);
    }
    document.body.appendChild(tempForm);
    tempForm.submit();
    document.body.removeChild(tempForm);
  }
  _getFormData() {
    const formData = {};
    const formInputs = Array.from(this.querySelectorAll("nxa-form-input"));
    formInputs.forEach((formInput) => {
      if (!formInput.name)
        return;
      const inputElement = formInput.inputElement;
      if (!inputElement)
        return;
      if (formInput.type === "checkbox") {
        formData[formInput.name] = inputElement.checked;
      } else if (formInput.type === "radio") {
        if (inputElement.checked) {
          formData[formInput.name] = inputElement.value;
        }
      } else {
        formData[formInput.name] = inputElement.value;
      }
    });
    return formData;
  }
  validate() {
    const formInputs = Array.from(this.querySelectorAll("nxa-form-input"));
    return formInputs.every((formInput) => formInput.validateOnSubmit());
  }
};
NxaForm.styles = _style_form__WEBPACK_IMPORTED_MODULE_2__.styleForm;
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaForm.prototype, "action", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaForm.prototype, "method", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaForm.prototype, "enctype", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaForm.prototype, "target", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], NxaForm.prototype, "novalidate", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], NxaForm.prototype, "modern", 2);
NxaForm = __decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)("nxa-form")
], NxaForm);


/***/ }),

/***/ "./src/form/style-form-group.ts":
/*!**************************************!*\
  !*** ./src/form/style-form-group.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styleFormGroup: () => (/* binding */ styleFormGroup)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const styleFormGroup = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
    :host {
        display: block;
        box-sizing: border-box;
    }

    .form-group {
        display: flex;
        flex-wrap: wrap;
        gap: var(--nxa-group-gap);
        margin-bottom: var(--nxa-spacing-md);
        width: 100%;
        box-sizing: border-box;
        align-items: var(--align-items, stretch);
    }

    .form-group ::slotted(*) {
        min-width: 0;
    }

    /* Small devices (phones) */
    @media (max-width: 767px) {
        .form-group ::slotted(*) {
            flex: 0 0 calc((100% - (var(--cols-sm) - 1) * var(--gap)) / var(--cols-sm));
        }
    }

    /* Medium devices (tablets) */
    @media (min-width: 768px) and (max-width: 1023px) {
        .form-group ::slotted(*) {
            flex: 0 0 calc((100% - (var(--cols-md) - 1) * var(--gap)) / var(--cols-md));
        }
    }

    /* Large devices (desktops) */
    @media (min-width: 1024px) {
        .form-group ::slotted(*) {
            flex: 0 0 calc((100% - (var(--cols-lg) - 1) * var(--gap)) / var(--cols-lg));
        }
    }
`;


/***/ }),

/***/ "./src/form/style-form-input.ts":
/*!**************************************!*\
  !*** ./src/form/style-form-input.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styleInput: () => (/* binding */ styleInput)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const styleInput = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
    :host {
        display: block;
        /* Base variables */
        --nxa-primary: #0d6efd;
        --nxa-secondary: #6c757d;
        --nxa-success: #198754;
        --nxa-danger: #dc3545;

        /* Border styles */
        --nxa-border-color: #dee2e6;
        --nxa-border-width: 1px;
        --nxa-border-radius: 0.375rem;
        --nxa-border-bottom: var(--nxa-border-width) solid var(--nxa-border-color);

        /* Input styles */
        --nxa-input-font-size: 1rem;
        --nxa-input-padding-x: 0.75rem;
        --nxa-input-padding-y: 0.375rem;
        --nxa-input-line-height: 1.5;
        --nxa-input-bg: #fff;
        --nxa-input-disabled-bg: #e9ecef;
        --nxa-input-color: #212529;
        --nxa-input-border-color: var(--nxa-border-color, #ccc);

        /* Focus styles */
        --nxa-focus-border-color: #86b7fe;
        --nxa-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);

        /* Validation styles */
        --nxa-valid-color: var(--nxa-success, #198754);
        --nxa-valid-border-color: var(--nxa-success, #198754);
        --nxa-valid-focus-box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
        --nxa-invalid-color: var(--nxa-danger);
        --nxa-invalid-border-color: var(--nxa-danger);
        --nxa-invalid-focus-box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);

        /* Text styles */
        --nxa-form-text-color: var(--nxa-secondary);
        --nxa-placeholder-color: var(--nxa-secondary);
        --nxa-placeholder-opacity: 0.65;

        /* Spacing */
        --nxa-spacing-sm: 0.5rem;
        --nxa-spacing-md: 1rem;
        --nxa-spacing-lg: 1.5rem;

        /* Size variants */
        --nxa-font-size-sm: 0.875rem;
        --nxa-font-size-md: 1rem;
        --nxa-font-size-lg: 1.25rem;

        /* Component specific */
        --nxa-group-gap: 1rem;

        /* Check and switch styles */
        --nxa-check-input-size: 1em;
        --nxa-check-bg: #fff;
        --nxa-check-border-color: var(--nxa-border-color);
        --nxa-check-checked-bg: var(--nxa-primary);
        --nxa-check-checked-border-color: var(--nxa-primary);
        --nxa-switch-width: 2.5em;
        --nxa-switch-height: 1.5em;
        --nxa-switch-thumb-size: calc(var(--nxa-switch-height) - 4px);
        --nxa-switch-bg: var(--nxa-secondary);
        --nxa-switch-checked-bg: var(--nxa-primary);

        margin-bottom: var(--nxa-spacing-md);
    }

    /* Modern style overrides */
    :host([modern]) {
        --nxa-border-width: 0;
        --nxa-border-radius: 0;
        --nxa-border-color: #dee2e6;
        --nxa-focus-box-shadow: none;
        --nxa-border-bottom: 1px solid var(--nxa-border-color);
        --nxa-input-border-color: transparent;
    }


    /* Base Label Styles */
    .form-label {
        margin-bottom: var(--nxa-spacing-sm);
        font-size: var(--nxa-input-font-size);
        font-weight: 400;
        color: var(--nxa-input-color);
    }




    /* Base Input Styles */
    ::slotted(input.form-control) {
        display: block;
        width: 100%;
        padding: var(--nxa-input-padding-y) var(--nxa-input-padding-x);
        font-size: var(--nxa-input-font-size);
        font-weight: 400;
        line-height: var(--nxa-input-line-height);
        color: var(--nxa-input-color);
        background-color: var(--nxa-input-bg);
        background-clip: padding-box;
        border: 1px sold var(--nxa-input-border-color);
        border-bottom: var(--nxa-border-bottom);
        border-radius: var(--nxa-border-radius);
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    ::slotted(input.form-control:focus) {
        color: var(--nxa-input-color);
        background-color: var(--nxa-input-bg);
        border-color: var(--nxa-focus-border-color);
        outline: 0;
        box-shadow: var(--nxa-focus-box-shadow);
    }

    ::slotted(input.form-control::placeholder) {
        color: var(--nxa-placeholder-color);
        opacity: var(--nxa-placeholder-opacity);
    }

    ::slotted(input.form-control:disabled),
    ::slotted(input.form-control[readonly]) {
        background-color: var(--nxa-input-disabled-bg);
        opacity: 1;
    }

    /* Input Sizes */
    ::slotted(input.form-control-sm) {
        padding: 0.25rem 0.5rem;
        font-size: var(--nxa-font-size-sm);
        border-radius: calc(var(--nxa-border-radius) * 0.75);
    }

    ::slotted(input.form-control-lg) {
        padding: 0.5rem 1rem;
        font-size: var(--nxa-font-size-lg);
        border-radius: calc(var(--nxa-border-radius) * 1.25);
    }

    /* Common base styles for both checkbox and radio */
    .form-check {
        display: flex;
        align-items: center;
        min-height: 1.5rem;
        padding-left: 1.5em;
        margin-bottom: 0.125rem;
    }

    .form-check-label {
        margin-left: 0.5rem;
        margin-bottom: 0;
        cursor: pointer;
    }

    /* Base input styles for both */
    ::slotted(input[type="checkbox"].form-check-input),
    ::slotted(input[type="radio"].form-check-input) {
        float: left;
        margin-left: -1.5em;
        width: 1em;
        height: 1em;
        margin-top: 0.25em;
        vertical-align: top;
        background-color: #fff;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        border: 1px solid rgba(0, 0, 0, 0.25);
        appearance: none;
        border-radius: 0.25em; /* Make both checkbox and radio square */
    }

    /* Checked state - same for both */
    ::slotted(input[type="checkbox"].form-check-input:checked),
    ::slotted(input[type="radio"].form-check-input:checked) {
        background-color: var(--nxa-primary);
        border-color: var(--nxa-primary);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
    }

    /* Focus states */
    ::slotted(input[type="checkbox"].form-check-input:focus),
    ::slotted(input[type="radio"].form-check-input:focus) {
        border-color: var(--nxa-primary);
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }

    /* Hover states */
    ::slotted(input[type="checkbox"].form-check-input:hover),
    ::slotted(input[type="radio"].form-check-input:hover) {
        cursor: pointer;
    }

    /* Disabled states */
    ::slotted(input[type="checkbox"].form-check-input:disabled),
    ::slotted(input[type="radio"].form-check-input:disabled) {
        pointer-events: none;
        filter: none;
        opacity: 0.5;
    }

    ::slotted(input[type="checkbox"].form-check-input:disabled) ~ .form-check-label,
    ::slotted(input[type="radio"].form-check-input:disabled) ~ .form-check-label {
        opacity: 0.5;
        cursor: default;
    }

    /* Validation states */
    ::slotted(input[type="checkbox"].form-check-input.is-invalid),
    ::slotted(input[type="radio"].form-check-input.is-invalid) {
        border-color: var(--nxa-danger);
    }

    ::slotted(input[type="checkbox"].form-check-input.is-valid),
    ::slotted(input[type="radio"].form-check-input.is-valid) {
        border-color: var(--nxa-success);
    }

    /* Make sure the checkmark stays consistent when checked, even with validation */
    ::slotted(input[type="checkbox"].form-check-input.is-invalid:checked),
    ::slotted(input[type="radio"].form-check-input.is-invalid:checked),
    ::slotted(input[type="checkbox"].form-check-input.is-valid:checked),
    ::slotted(input[type="radio"].form-check-input.is-valid:checked) {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
    }

    /* Modern Switch Base Styles */
    .form-switch {
        padding-left: 3.5em;
        min-height: 2em;
    }

    .form-switch ::slotted(input.form-check-input) {
        width: 3em;
        height: 1.5em;
        margin-left: -3.5em;
        margin-top: 0.25em;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e") !important;
        background-position: left center;
        border-radius: 2em;
        transition: background-position .15s ease-in-out;
        border: 0;
        background-color: #e9ecef;  /* Light gray background for unchecked */
    }

    .form-switch ::slotted(input.form-check-input:checked) {
        background-position: right center;
        background-color: var(--nxa-primary);  /* Primary color when checked */
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e") !important;
    }

    /* Focus states */
    .form-switch ::slotted(input.form-check-input:focus) {
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }

    /* Disabled state */
    .form-switch ::slotted(input.form-check-input:disabled) {
        opacity: .5;
    }

    /* Modern Radio Buttons - same as switches */
    .form-switch ::slotted(input[type="radio"].form-check-input) {
        width: 3em;
        height: 1.5em;
        background-color: #e9ecef;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e") !important;
    }

    .form-switch ::slotted(input[type="radio"].form-check-input:checked) {
        background-position: right center;
        background-color: var(--nxa-primary);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e") !important;
    }

    /* Floating Labels */
    .form-floating {
        position: relative;
    }

    .form-floating > label {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        padding: 0.3rem 0.6rem;
        pointer-events: none;
        border: 1px solid transparent;
        transform-origin: 0 0;
        transition: opacity .1s ease-in-out, transform .1s ease-in-out;
        color: var(--nxa-placeholder-color);
        display: flex;
        align-items: center;
        margin-bottom: 0;
    }

    /* Base input styles */
    .form-floating ::slotted(input.form-control) {
        height: calc(3.5rem + 2px);
        min-height: calc(3.5rem + 2px);
        line-height: 1.25;
        padding: 1rem 0.75rem;
    }

    /* Focus state using :focus-within */
    .form-floating:focus-within ::slotted(input.form-control) {
        padding-top: 1.625rem;
        padding-bottom: 0.625rem;
    }

    .form-floating:focus-within > label {
        opacity: 0.65;
        transform: scale(0.85) translateY(-1rem) translateX(0.15rem);
    }

    /* Filled state using class */
    .form-floating.has-value ::slotted(input.form-control) {
        padding-top: 1.625rem;
        padding-bottom: 0.625rem;
    }

    .form-floating.has-value > label {
        opacity: 0.65;
        transform: scale(0.85) translateY(-1rem) translateX(0.15rem);
    }

    /* Small size variants */
    .form-floating ::slotted(input.form-control-sm) {
        height: calc(2.5rem + 2px);
        min-height: calc(2.5rem + 2px);
        padding: 0.75rem 0.75rem;
    }

    .form-floating:focus-within ::slotted(input.form-control-sm),
    .form-floating.has-value ::slotted(input.form-control-sm) {
        padding-top: 1.25rem;
        padding-bottom: 0.25rem;
    }

    .form-floating:focus-within > label.small,
    .form-floating.has-value > label.small {
        transform: scale(0.85) translateY(-0.7rem);
    }

    /* Large size variants */
    .form-floating ::slotted(input.form-control-lg) {
        height: calc(4.5rem + 2px);
        min-height: calc(4.5rem + 2px);
        padding: 1.25rem 0.75rem;
    }

    .form-floating:focus-within ::slotted(input.form-control-lg),
    .form-floating.has-value ::slotted(input.form-control-lg) {
        padding-top: 2rem;
        padding-bottom: 0.5rem;
    }

    .form-floating:focus-within > label.large,
    .form-floating.has-value > label.large {
        transform: scale(0.85) translateY(-1.3rem) translateX(0.35rem);
    }

    /* Select Styles */
    ::slotted(select.form-control) {
        display: block;
        width: 100%;
        padding: var(--nxa-input-padding-y) var(--nxa-input-padding-x);
        font-size: var(--nxa-input-font-size);
        font-weight: 400;
        line-height: var(--nxa-input-line-height);
        color: var(--nxa-input-color);
        background-color: var(--nxa-input-bg);
        background-clip: padding-box;
        border: var(--nxa-border-width) solid var(--nxa-input-border-color);
        border-bottom: var(--nxa-border-bottom);
        border-radius: var(--nxa-border-radius);
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        appearance: none;
        padding-right: 2.25rem;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 0.75rem center;
        background-size: 16px 12px;
    }

    /* Select Focus State */

    ::slotted(select.form-control:focus) {
        color: var(--nxa-input-color);
        background-color: var(--nxa-input-bg);
        border-color: var(--nxa-focus-border-color);
        outline: 0;
        box-shadow: var(--nxa-focus-box-shadow);
    }

    /* Select Sizes */

    ::slotted(select.form-control-sm) {
        padding: 0.25rem 0.5rem;
        padding-right: 2rem;
        font-size: var(--nxa-font-size-sm);
        border-radius: calc(var(--nxa-border-radius) * 0.75);
        background-position: right 0.5rem center;
        min-height: calc(1.5em + 0.5rem + 2px);
    }

    ::slotted(select.form-control-lg) {
        padding: 0.5rem 1rem;
        padding-right: 2.5rem;
        font-size: var(--nxa-font-size-lg);
        border-radius: calc(var(--nxa-border-radius) * 1.25);
        background-position: right 1rem center;
        min-height: calc(1.5em + 1rem + 2px);
    }

    /* Select Disabled State */

    ::slotted(select.form-control:disabled) {
        background-color: var(--nxa-input-disabled-bg);
        opacity: 1;
        cursor: not-allowed;
    }

    /* Select Validation States */

    ::slotted(select.form-control.is-valid) {
        border-color: var(--nxa-valid-border-color);
        padding-right: 4rem;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e"),
        url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
        background-position: right 0.75rem center, center right 2.25rem;
        background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    }

    ::slotted(select.form-control.is-invalid) {
        border-color: var(--nxa-invalid-border-color);
        padding-right: 4rem;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e"),
        url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
        background-position: right 0.75rem center, center right 2.25rem;
        background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    }

    /* Floating Label Support for Select */

    .form-floating ::slotted(select.form-control) {
        height: calc(3.5rem + 2px);
        min-height: calc(3.5rem + 2px);
        line-height: 1.25;
        padding: 1rem 0.75rem;
    }

    .form-floating ::slotted(select.form-control-sm) {
        height: calc(2.5rem + 2px);
        min-height: calc(2.5rem + 2px);
        padding: 0.75rem 0.75rem;
    }

    .form-floating ::slotted(select.form-control-lg) {
        height: calc(4.5rem + 2px);
        min-height: calc(4.5rem + 2px);
        padding: 1.25rem 0.75rem;
    }

    .form-floating:focus-within ::slotted(select.form-control),
    .form-floating.has-value ::slotted(select.form-control) {
        padding-top: 1.625rem;
        padding-bottom: 0.625rem;
    }

    .form-floating:focus-within ::slotted(select.form-control-sm),
    .form-floating.has-value ::slotted(select.form-control-sm) {
        padding-top: 1.25rem;
        padding-bottom: 0.25rem;
    }

    .form-floating:focus-within ::slotted(select.form-control-lg),
    .form-floating.has-value ::slotted(select.form-control-lg) {
        padding-top: 2rem;
        padding-bottom: 0.5rem;
    }

    /* Multiple Select Support */

    ::slotted(select[multiple].form-control),
    ::slotted(select[size].form-control) {
        height: auto;
        padding-right: 0.75rem;
        background-image: none;
    }

    /* Fix for Firefox Specific Issues */
    @-moz-document url-prefix() {
        ::slotted(select.form-control) {
            background-image: none !important;
            padding-right: 0.75rem;
        }

        ::slotted(select.form-control option) {
            color: var(--nxa-input-color);
            background-color: var(--nxa-input-bg);
        }
    }

    /* Range Input Styles */
    ::slotted(input[type="range"].form-control) {
        height: 1.5rem;
        padding: 0;
        background-color: transparent;
        appearance: none;
        border: none;
    }

    ::slotted(input[type="range"].form-control:focus) {
        box-shadow: none;
    }

    ::slotted(input[type="range"].form-control::-webkit-slider-thumb) {
        width: 1rem;
        height: 1rem;
        margin-top: -0.25rem;
        appearance: none;
        background-color: var(--nxa-primary);
        border: 0;
        border-radius: 1rem;
        cursor: pointer;
        transition: background-color .15s ease-in-out;
    }

    ::slotted(input[type="range"].form-control::-webkit-slider-runnable-track) {
        width: 100%;
        height: 0.5rem;
        color: transparent;
        cursor: pointer;
        background-color: var(--nxa-border-color);
        border-color: transparent;
        border-radius: var(--nxa-border-radius);
    }

    ::slotted(input[type="range"].form-control::-moz-range-thumb) {
        width: 1rem;
        height: 1rem;
        appearance: none;
        background-color: var(--nxa-primary);
        border: 0;
        border-radius: 1rem;
        cursor: pointer;
        transition: background-color .15s ease-in-out;
    }

    ::slotted(input[type="range"].form-control::-moz-range-track) {
        width: 100%;
        height: 0.5rem;
        color: transparent;
        cursor: pointer;
        background-color: var(--nxa-border-color);
        border-color: transparent;
        border-radius: var(--nxa-border-radius);
    }

    /* Validation States */
    ::slotted(input.is-valid) {
        border-color: var(--nxa-valid-border-color);
        padding-right: calc(1.5em + 0.75rem);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right calc(0.375em + 0.1875rem) center;
        background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    }

    ::slotted(input.is-valid:focus) {
        border-color: var(--nxa-valid-border-color);
        box-shadow: var(--nxa-valid-focus-box-shadow);
    }

    ::slotted(input.is-invalid) {
        border-color: var(--nxa-invalid-border-color);
        padding-right: calc(1.5em + 0.75rem);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right calc(0.375em + 0.1875rem) center;
        background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    }

    ::slotted(input.is-invalid:focus) {
        border-color: var(--nxa-invalid-border-color);
        box-shadow: var(--nxa-invalid-focus-box-shadow);
    }

    /* Feedback Messages */
    .valid-feedback,
    .invalid-feedback {
        display: none;
        width: 100%;
        margin-top: var(--nxa-spacing-sm);
        font-size: var(--nxa-font-size-sm);
    }

    .valid-feedback {
        color: var(--nxa-valid-color);
        display: var(--show-valid-feedback, none);
    }

    .invalid-feedback {
        color: var(--nxa-invalid-color);
        display: var(--show-invalid-feedback, none);
    }

    /* Helper Text */
    .form-text {
        margin-top: var(--nxa-spacing-sm);
        font-size: var(--nxa-font-size-sm);
        color: var(--nxa-form-text-color);
    }

    /* Required Indicator */
    .required-indicator {
        color: var(--nxa-danger);
        margin-left: var(--nxa-spacing-sm);
    }

    /* Disabled States for Checkboxes and Radios */
    ::slotted(input.form-check-input:disabled) {
        pointer-events: none;
        filter: none;
        opacity: 0.5;
    }

    ::slotted(input.form-check-input:disabled) ~ .form-check-label {
        opacity: 0.5;
        cursor: default;
    }

    /* Floating feedback positioning */
    .form-floating .valid-feedback,
    .form-floating .invalid-feedback {
        margin-top: 0.25rem;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
    }

    .form-floating .form-text {
        margin-top: calc(0.25rem + 1.5em);
    }

    /* Checkbox/Radio validation states */
    ::slotted(input.form-check-input.is-valid) {
        border-color: var(--nxa-valid-border-color);
    }

    ::slotted(input.form-check-input.is-invalid) {
        border-color: var(--nxa-invalid-border-color);
    }

    ::slotted(input.form-check-input.is-invalid) ~ .form-check-label {
        color: var(--nxa-invalid-color);
    }

    /* Position feedback for checkbox/radio groups */
    .form-check .invalid-feedback,
    .form-check .valid-feedback {
        position: absolute;
        left: 0;
        top: 100%;
        margin-top: 0.25rem;
    }

    .form-check ::slotted(input.form-check-input.is-invalid) ~ .invalid-feedback {
        display: none;
    }

    .form-check ::slotted(input.form-check-input.is-invalid:first-of-type) ~ .invalid-feedback {
        display: block;
    }

    /* Select specific styles */
    ::slotted(select.form-control) {
        appearance: none;
        padding-right: 2.25rem;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 0.75rem center;
        background-size: 16px 12px;
    }

    ::slotted(select.form-control:disabled) {
        background-color: var(--nxa-input-disabled-bg);
        opacity: 1;
    }

    /* Modern switch specific styles */
    .form-switch ::slotted(input[type="checkbox"].form-check-input) {
        background-size: contain;
    }

    .form-switch ::slotted(input[type="checkbox"].form-check-input:focus) {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255, 255, 255, 1)'/%3e%3c/svg%3e");
    }

    /* Modern radio specific styles */
    .form-switch ::slotted(input[type="radio"].form-check-input) {
        border-radius: var(--nxa-switch-height);
    }

    /* Focus states for checkboxes and radios */
    ::slotted(input[type="checkbox"].form-check-input:focus),
    ::slotted(input[type="radio"].form-check-input:focus) {
        border-color: var(--nxa-focus-border-color);
        outline: 0;
        box-shadow: var(--nxa-focus-box-shadow);
    }

    /* Handle readonly inputs */
    ::slotted(input[readonly].form-control),
    ::slotted(select[readonly].form-control) {
        background-color: var(--nxa-input-readonly-bg, var(--nxa-input-disabled-bg));
        opacity: 1;
        pointer-events: none;
    }

    /* Handle disabled range inputs */
    ::slotted(input[type="range"].form-control:disabled) {
        opacity: 0.5;
    }

    ::slotted(input[type="range"].form-control:disabled::-webkit-slider-thumb) {
        background-color: var(--nxa-secondary);
    }

    ::slotted(input[type="range"].form-control:disabled::-moz-range-thumb) {
        background-color: var(--nxa-secondary);
    }

    /* inline label */
    .form-inline {
        display: flex;
        align-items: start;
        gap: var(--nxa-spacing-md);
    }

    .form-inline .form-label {
        margin-bottom: 0;
        min-width: 120px;
        padding-top: calc(var(--nxa-input-padding-y) + 1px);
    }

    .form-inline .input-wrapper {
        flex: 1;
    }
`;


/***/ }),

/***/ "./src/form/style-form-textarea.ts":
/*!*****************************************!*\
  !*** ./src/form/style-form-textarea.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styleTextarea: () => (/* binding */ styleTextarea)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const styleTextarea = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
    :host {
        display: block;
        margin-bottom: var(--nxa-spacing-md);
    }

    /* Base Label Styles */
    .form-label {
        margin-bottom: var(--nxa-spacing-sm);
        font-size: var(--nxa-input-font-size);
        font-weight: 400;
        color: var(--nxa-input-color);
    }

    /* Base Textarea Styles */
    .form-control {
        display: block;
        width: 100%;
        padding: var(--nxa-input-padding-y) var(--nxa-input-padding-x);
        font-size: var(--nxa-input-font-size);
        font-weight: 400;
        line-height: var(--nxa-input-line-height);
        color: var(--nxa-input-color);
        background-color: var(--nxa-input-bg);
        background-clip: padding-box;
        border: var(--nxa-border-width) solid var(--nxa-input-border-color);
        border-bottom: var(--nxa-border-bottom);
        border-radius: var(--nxa-border-radius);
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, height 0.15s ease-in-out;
        resize: none;
        overflow-y: hidden;
        min-height: calc(var(--nxa-input-line-height) * 1em + 2 * var(--nxa-input-padding-y) + 2px);
    }

    .form-control:focus {
        color: var(--nxa-input-color);
        background-color: var(--nxa-input-bg);
        border-color: var(--nxa-focus-border-color);
        outline: 0;
        box-shadow: var(--nxa-focus-box-shadow);
    }

    .form-control::placeholder {
        color: var(--nxa-placeholder-color);
        opacity: var(--nxa-placeholder-opacity);
    }

    .form-control:disabled,
    .form-control[readonly] {
        background-color: var(--nxa-input-disabled-bg);
        opacity: 1;
    }

    /* Size Variants */
    .form-control-sm {
        padding: 0.25rem 0.5rem;
        font-size: var(--nxa-font-size-sm);
        border-radius: calc(var(--nxa-border-radius) * 0.75);
    }

    .form-control-lg {
        padding: 0.5rem 1rem;
        font-size: var(--nxa-font-size-lg);
        border-radius: calc(var(--nxa-border-radius) * 1.25);
    }

    /* Floating Label Styles */
    .form-floating {
        position: relative;
    }

    .form-floating > textarea.form-control {
        height: auto;
        min-height: calc(3.5rem + calc(var(--nxa-border-width) * 2));
    }

    .form-floating > label {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 1rem 0.75rem;
        overflow: hidden;
        text-align: start;
        text-overflow: ellipsis;
        white-space: nowrap;
        pointer-events: none;
        transform-origin: 0 0;
        transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
        color: var(--nxa-secondary);
    }

    .form-floating > .form-control:focus ~ label,
    .form-floating > .form-control:not(:placeholder-shown) ~ label {
        opacity: 0.65;
        transform: scale(0.85) translateY(-0.5rem) translateX(0.65rem);
        height: auto;
        padding: 0 0.5rem;
        margin-left: -0.25rem;
        border-radius: 0.25rem;
    }

    /* Validation States */
    .form-control.is-valid {
        border-color: var(--nxa-valid-border-color);
        padding-right: calc(1.5em + 0.75rem);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right calc(0.375em + 0.1875rem) top calc(0.375em + 0.1875rem);
        background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    }

    .form-control.is-valid:focus {
        border-color: var(--nxa-valid-border-color);
        box-shadow: var(--nxa-valid-focus-box-shadow);
    }

    .form-control.is-invalid {
        border-color: var(--nxa-invalid-border-color);
        padding-right: calc(1.5em + 0.75rem);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right calc(0.375em + 0.1875rem) top calc(0.375em + 0.1875rem);
        background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    }

    .form-control.is-invalid:focus {
        border-color: var(--nxa-invalid-border-color);
        box-shadow: var(--nxa-invalid-focus-box-shadow);
    }

    /* Feedback Messages */
    .valid-feedback {
        display: none;
        width: 100%;
        margin-top: var(--nxa-spacing-sm);
        font-size: var(--nxa-font-size-sm);
        color: var(--nxa-valid-color);
    }

    .invalid-feedback {
        display: none;
        width: 100%;
        margin-top: var(--nxa-spacing-sm);
        font-size: var(--nxa-font-size-sm);
        color: var(--nxa-invalid-color);
    }

    .is-valid ~ .valid-feedback {
        display: block;
    }

    .is-invalid ~ .invalid-feedback {
        display: block;
    }

    /* Helper Text */
    .form-text {
        margin-top: var(--nxa-spacing-sm);
        font-size: var(--nxa-font-size-sm);
        color: var(--nxa-form-text-color);
    }

    /* Required Indicator */
    .required-indicator {
        color: var(--nxa-danger);
        margin-left: var(--nxa-spacing-sm);
    }
`;


/***/ }),

/***/ "./src/form/style-form.ts":
/*!********************************!*\
  !*** ./src/form/style-form.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styleForm: () => (/* binding */ styleForm)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const styleForm = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
    :host {
        display: block;
        /* Base variables */
        --nxa-primary: #0d6efd;
        --nxa-secondary: #6c757d;
        --nxa-success: #198754;
        --nxa-danger: #dc3545;

        /* Border styles */
        --nxa-border-color: #dee2e6;
        --nxa-border-width: 1px;
        --nxa-border-radius: 0.375rem;
        --nxa-border-bottom: var(--nxa-border-width) solid var(--nxa-border-color);

        /* Input styles */
        --nxa-input-font-size: 1rem;
        --nxa-input-padding-x: 0.75rem;
        --nxa-input-padding-y: 0.375rem;
        --nxa-input-line-height: 1.5;
        --nxa-input-bg: #fff;
        --nxa-input-disabled-bg: #e9ecef;
        --nxa-input-color: #212529;
        --nxa-input-border-color: var(--nxa-border-color);

        /* Focus styles */
        --nxa-focus-border-color: #86b7fe;
        --nxa-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);

        /* Validation styles */
        --nxa-valid-color: var(--nxa-success);
        --nxa-valid-border-color: var(--nxa-success);
        --nxa-valid-focus-box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
        --nxa-invalid-color: var(--nxa-danger);
        --nxa-invalid-border-color: var(--nxa-danger);
        --nxa-invalid-focus-box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);

        /* Text styles */
        --nxa-form-text-color: var(--nxa-secondary);
        --nxa-placeholder-color: var(--nxa-secondary);
        --nxa-placeholder-opacity: 0.65;

        /* Spacing */
        --nxa-spacing-sm: 0.5rem;
        --nxa-spacing-md: 1rem;
        --nxa-spacing-lg: 1.5rem;

        /* Size variants */
        --nxa-font-size-sm: 0.875rem;
        --nxa-font-size-md: 1rem;
        --nxa-font-size-lg: 1.25rem;

        /* Component specific */
        --nxa-group-gap: 1rem;

        /* Check and switch styles */
        --nxa-check-input-size: 1em;
        --nxa-check-bg: #fff;
        --nxa-check-border-color: var(--nxa-border-color);
        --nxa-check-checked-bg: var(--nxa-primary);
        --nxa-check-checked-border-color: var(--nxa-primary);
        --nxa-switch-width: 2.5em;
        --nxa-switch-height: 1.5em;
        --nxa-switch-thumb-size: calc(var(--nxa-switch-height) - 4px);
        --nxa-switch-bg: var(--nxa-secondary);
        --nxa-switch-checked-bg: var(--nxa-primary);
    }

    /* Modern style overrides */
    :host([modern]) {
        --nxa-border-width: 0;
        --nxa-border-radius: 0;
        --nxa-border-color: #dee2e6;
        --nxa-focus-box-shadow: none;
        --nxa-border-bottom: 1px solid var(--nxa-border-color);
        --nxa-input-border-color: transparent;
    }

    form {
        width: 100%;
    }
`;


/***/ }),

/***/ "./src/infiniscroll/doc.ts":
/*!*********************************!*\
  !*** ./src/infiniscroll/doc.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextrap_doc_visualizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextrap/doc-visualizer */ "./workspaces/nextrap-doc-visualizer/index.ts");

(0,_nextrap_doc_visualizer__WEBPACK_IMPORTED_MODULE_0__.registerComponent)({
  package: "nxa-infiniscroll",
  description: "Lead Button Component",
  title: "NxaInfiniscroll",
  examples: [
    {
      title: "Buttonbar",
      description: "Basic example",
      lang: "html",
      // language=html
      code: `


<nxa-infiniscroll auto-scroll>
    <img src="https://cdn.leuffen.de//leu-kdnlogos/v2/20/267-128_267/MVZ-GG.svg" alt="MVZ GG" height="48">
    <img src="https://cdn.leuffen.de//leu-kdnlogos/v2/19/85-64_170/Praxis-Gromes.svg" alt="Praxis Gromes" height="48">
    <img src="https://cdn.leuffen.de//leu-kdnlogos/v2/18/57-32_228/Gefaess-Gallis.svg" alt="Gefaess Gallis" height="48">

</nxa-infiniscroll>
            `
    }
  ]
});


/***/ }),

/***/ "./src/infiniscroll/nxa-infiniscroll.ts":
/*!**********************************************!*\
  !*** ./src/infiniscroll/nxa-infiniscroll.ts ***!
  \**********************************************/
/***/ (() => {

var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _timer, _autoScroll;
const style = `

:host {
    --height: 80px;
    --space: 10px;
}

::slotted(img) {
    height: var(--height);
    margin: 10px !important;
    width: auto;
}

`;
class NxInfiniscroll extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _timer, null);
    __privateAdd(this, _autoScroll, false);
    const shadow = this.attachShadow({ mode: "open" });
    const styleElement = document.createElement("style");
    styleElement.textContent = style;
    shadow.appendChild(styleElement);
    const slot = document.createElement("slot");
    slot.name = "scrollslot";
    slot.style.display = "flex";
    slot.style.overflow = "hidden";
    slot.style.cursor = "grab";
    slot.style.userSelect = "none";
    shadow.appendChild(slot);
    this.container = slot;
    this.autoScroll = this.hasAttribute("auto-scroll");
    this.snap = this.hasAttribute("snap");
    this.stopOnHover = this.hasAttribute("stop-on-hover");
    this.easeStopOnDrag = this.hasAttribute("ease-stop-on-drag");
    this.slowDownOnStop = this.hasAttribute("slow-down-on-stop");
    this.accelerationFactor = parseFloat(this.getAttribute("acceleration-factor") || "0.1");
    this.scrollSpeed = parseFloat(this.getAttribute("scroll-speed") || "1");
    this.scrollInterval = null;
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.repopulate(entry.target);
        }
      });
    }, { threshold: 1 });
  }
  connectedCallback() {
    __privateSet(this, _timer, window.setInterval(() => {
      this.animateScroll();
    }, 60));
    Array.from(this.children).forEach((child) => {
      const clonedChild = child.cloneNode(true);
      clonedChild.draggable = false;
      clonedChild.setAttribute("slot", "scrollslot");
      clonedChild.style.userSelect = "none";
      this.appendChild(clonedChild);
      this.observer.observe(clonedChild);
    });
    this.addDragEvents();
    if (this.stopOnHover) {
      this.addHoverEvents();
    }
    if (this.autoScroll) {
      this.startAutoScroll();
    }
  }
  disconnectedCallback() {
    window.clearTimeout(__privateGet(this, _timer));
    this.stopAutoScroll();
  }
  repopulate(element) {
    if (this.container.scrollLeft + this.container.clientWidth >= this.container.scrollWidth) {
      element.draggable = false;
      element.style.userSelect = "none";
      this.appendChild(element);
    } else if (this.container.scrollLeft === 0) {
      element.draggable = false;
      element.style.userSelect = "none";
      this.insertBefore(element, this.firstChild);
    }
  }
  addDragEvents() {
    let isDragging = false;
    let top = null;
    this.container.addEventListener("pointerdown", (e) => {
      isDragging = true;
      top = null;
      this.startX = e.pageX - this.container.offsetLeft;
      this.scrollLeftStart = this.container.scrollLeft;
      this.container.style.cursor = "grabbing";
      this.stopAutoScroll();
    });
    this.container.addEventListener("pointerout", () => {
      isDragging = false;
      this.container.style.cursor = "grab";
      if (this.autoScroll) {
        this.startAutoScroll();
      }
    });
    this.container.addEventListener("pointerup", () => {
      isDragging = false;
      top = null;
      this.container.style.cursor = "grab";
      if (this.snap) {
        this.snapElements();
      }
      if (this.easeStopOnDrag) {
        this.container.scrollTo({ left: this.scrollLeftStart, behavior: "smooth" });
      }
      if (this.slowDownOnStop) {
        this.slowScrollStop();
      }
      if (this.autoScroll) {
        this.startAutoScroll();
      }
    });
    this.container.addEventListener("pointermove", (e) => {
      if (!isDragging)
        return;
      e.preventDefault();
      if (top !== null)
        window.scrollTo(0, top);
      const x = e.pageX - this.container.offsetLeft;
      if (top === null && (x > 10 || x < -10))
        top = window.scrollY;
      const walk = (x - this.startX) * 1;
      this.container.scrollLeft = this.scrollLeftStart - walk;
    });
    this.container.addEventListener("mouseleave", () => {
      isDragging = false;
      this.container.style.cursor = "grab";
      if (this.autoScroll) {
        this.startAutoScroll();
      }
    });
  }
  addHoverEvents() {
    this.container.addEventListener("mouseenter", () => {
      this.stopAutoScroll();
    });
    this.container.addEventListener("mouseleave", () => {
      if (this.autoScroll) {
        this.startAutoScroll();
      }
    });
  }
  animateScroll() {
    if (__privateGet(this, _autoScroll) === false)
      return;
    this.container.scrollLeft += this.scrollSpeed;
    if (this.container.scrollLeft + this.container.clientWidth >= this.container.scrollWidth) {
      this.container.scrollLeft = 0;
    }
  }
  startAutoScroll() {
    if (__privateGet(this, _autoScroll) === true)
      return;
    __privateSet(this, _autoScroll, true);
  }
  stopAutoScroll() {
    __privateSet(this, _autoScroll, false);
  }
  slowScrollStop() {
    let currentSpeed = this.scrollSpeed;
    const decelerate = () => {
      if (currentSpeed > 0.1) {
        currentSpeed *= 0.9;
        this.container.scrollLeft += currentSpeed;
        requestAnimationFrame(decelerate);
      }
    };
    decelerate();
  }
  snapElements() {
    const children = Array.from(this.querySelectorAll('[slot="scrollslot"]'));
    let closest = children[0];
    let minOffset = Math.abs(closest.offsetLeft - this.container.scrollLeft);
    children.forEach((child) => {
      const offset = Math.abs(child.offsetLeft - this.container.scrollLeft);
      if (offset < minOffset) {
        closest = child;
        minOffset = offset;
      }
    });
    this.container.scrollTo({ left: closest.offsetLeft, behavior: "smooth" });
  }
}
_timer = new WeakMap();
_autoScroll = new WeakMap();
customElements.define("nxa-infiniscroll", NxInfiniscroll);


/***/ }),

/***/ "./src/lead-button/doc.ts":
/*!********************************!*\
  !*** ./src/lead-button/doc.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextrap_doc_visualizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextrap/doc-visualizer */ "./workspaces/nextrap-doc-visualizer/index.ts");

(0,_nextrap_doc_visualizer__WEBPACK_IMPORTED_MODULE_0__.registerComponent)({
  package: "input",
  description: "Lead Button Component",
  title: "NxaLeadButton",
  examples: [
    {
      title: "Basic input",
      description: "Basic input example",
      lang: "html",
      // language=html
      code: `

<nxa-lead-button href="#test" spacer icon="bi bi-wrench shadow" title="Click here, dude" subtitle="Go on and on and on"></nxa-lead-button>
<nxa-lead-button class="icon-top" icon="bi bi-wrench shadow" title="Click here, dude" subtitle="Go on and on and on"></nxa-lead-button>

<nxa-lead-button class="" label="Input Label" placeholder="Input Placeholder">
    <i class="bi-alarm " slot="icon"></i>
    <div>Hello world</div>
    <div>second line</div>
</nxa-lead-button>

<nxa-lead-button class="inverted-icon wave" label="Input Label" placeholder="Input Placeholder">
    <i class="bi-alarm " slot="icon"></i>
    <div>Hello world</div>
    <div>second line</div>
</nxa-lead-button>
`
    },
    {
      title: "Input with value",
      description: "Input example with value",
      lang: "html",
      code: `<nx-input label="Input Label" placeholder="Input Placeholder" value="Input Value"></nx-input>`
    }
  ]
});


/***/ }),

/***/ "./src/lead-button/nxa-lead-button.ts":
/*!********************************************!*\
  !*** ./src/lead-button/nxa-lead-button.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NxaLeadButton: () => (/* binding */ NxaLeadButton)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/lead-button/style.ts");
/* harmony import */ var _kasimirjs_core_src_create_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kasimirjs/core/src/create-element */ "./workspaces/kasi-core/src/create-element.ts");
/* harmony import */ var _kasimirjs_core_src_await_dom_ready__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kasimirjs/core/src/await/dom-ready */ "./workspaces/kasi-core/src/await/dom-ready.ts");
/* harmony import */ var _kasimirjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kasimirjs/core */ "./workspaces/kasi-core/index.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _renderContent, renderContent_fn, _renderButton, renderButton_fn, _renderLink, renderLink_fn, _applyClasses, applyClasses_fn;






let NxaLeadButton = class extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _renderContent);
    __privateAdd(this, _renderButton);
    __privateAdd(this, _renderLink);
    __privateAdd(this, _applyClasses);
    this.href = "";
    this.target = "";
    this.title = "";
    this.spacer = false;
    this.subtitle = "";
    this.icon = "";
    this.type = "";
  }
  connectedCallback() {
    if (!this.hasChildNodes()) {
      console.log("No child nodes", this);
      if (this.icon) {
        this.append((0,_kasimirjs_core_src_create_element__WEBPACK_IMPORTED_MODULE_3__.ka_create_element)("i", { class: this.icon, slot: "icon" }));
      }
      if (this.title) {
        this.append((0,_kasimirjs_core_src_create_element__WEBPACK_IMPORTED_MODULE_3__.ka_create_element)("div", { class: "title" }, this.title));
      }
      if (this.spacer) {
        this.append((0,_kasimirjs_core_src_create_element__WEBPACK_IMPORTED_MODULE_3__.ka_create_element)("div", { class: "spacer" }));
      }
      if (this.subtitle) {
        this.append((0,_kasimirjs_core_src_create_element__WEBPACK_IMPORTED_MODULE_3__.ka_create_element)("div", { class: "subtitle" }, this.subtitle));
      }
    }
    super.connectedCallback();
  }
  render() {
    (() => __async(this, null, function* () {
      yield (0,_kasimirjs_core__WEBPACK_IMPORTED_MODULE_5__.ka_sleep)(100);
    }))();
    __privateMethod(this, _applyClasses, applyClasses_fn).call(this);
    return this.href ? __privateMethod(this, _renderLink, renderLink_fn).call(this) : __privateMethod(this, _renderButton, renderButton_fn).call(this);
  }
};
_renderContent = new WeakSet();
renderContent_fn = function() {
  return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
            <slot name="icon" class="icon-section"></slot>
            <div class="text-section">
                <slot></slot>
            </div>`;
};
_renderButton = new WeakSet();
renderButton_fn = function() {
  return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<button type="${this.type}" class="lead-button">${__privateMethod(this, _renderContent, renderContent_fn).call(this)}</button>`;
};
_renderLink = new WeakSet();
renderLink_fn = function() {
  return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<a href="${this.href}" target="${this.target}"><div class="lead-button">
            ${__privateMethod(this, _renderContent, renderContent_fn).call(this)}</div></a>`;
};
_applyClasses = new WeakSet();
applyClasses_fn = function() {
  return __async(this, null, function* () {
    yield (0,_kasimirjs_core_src_await_dom_ready__WEBPACK_IMPORTED_MODULE_4__.ka_dom_ready)();
    let classes = (getComputedStyle(this).getPropertyValue("--classes") || "").trim().split(" ").filter((c) => c.trim() !== "");
    this.classList.add(...classes);
  });
};
NxaLeadButton.styles = _style__WEBPACK_IMPORTED_MODULE_2__.style;
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaLeadButton.prototype, "href", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaLeadButton.prototype, "target", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaLeadButton.prototype, "title", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], NxaLeadButton.prototype, "spacer", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaLeadButton.prototype, "subtitle", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaLeadButton.prototype, "icon", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaLeadButton.prototype, "type", 2);
NxaLeadButton = __decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)("nxa-lead-button")
], NxaLeadButton);


/***/ }),

/***/ "./src/lead-button/style.ts":
/*!**********************************!*\
  !*** ./src/lead-button/style.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   style: () => (/* binding */ style)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const style = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`

    :host{
        --classes: 'icon-start shadow';
        --icon-background: #f5f5f5;
        --icon-text-color: #000;
        --background-color: #f5f5f5;
        --text-color: #000;
        --border-radius: 0.5em;
        --text-space: 1em;
        --title-font-size: 1.4em;
        --subtitle-font-size: 1em;
        --icon-font-size: 2.5em;
        --icon-padding: .8em;
        --border: 1px solid #000;
        --display: inline-block;
        --box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
        --white-space: wrap;
        --wave-color: #a34444;

        display: var(--display);

    }

    :host(.inverted-icon) {
        .lead-button {
            .icon-section {
                background-color: var(--text-color);
                color: var(--icon-text-color);
                &::slotted(i) {
                    color: var(--icon-background);
                }
            }
            .text-section {
                padding: 0 var(--text-space)  ; // Left and right
            }
        }
    }


    :host(.icon-top) {
        .lead-button {
            flex-direction: column;

            .icon-section {
                aspect-ratio: unset;
            }
            .text-section {
                margin: 0 var(--text-space) var(--text-space) var(--text-space);

            }
        }
    }


    :host(.shadow) {
        .lead-button {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        }
    }

    :host(.wave) {
        .lead-button {
            &:before {
                content: '';
                position: absolute;
                z-index: 1;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                    to right,
                    transparent 0%,
                    var(--wave-color) 50%,
                    transparent 100%
                );
                animation: wave 15s infinite;
            }
        }

    }

    a {
        text-decoration: none;
        font: inherit;
        display: inline-block;
        padding: 0;
        margin: 0;

        font-size: unset;
        width: 100%;
    }
    button {
        padding: 0;
        margin: 0;
        font: inherit;
        width: 100%;
        font-size: unset;
        border: none;
        background: none;
        cursor: pointer;

    }

    .lead-button {
        width: 100%;
        padding: 0;
        margin: 0;
        border: var(--border);
        border-radius: var(--border-radius);
        display: flex;
        align-items: center;
        box-shadow: var(--box-shadow);
        background-color: var(--background-color);
        color: var(--text-color);
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: filter 0.1s ease, transform 0.1s ease;


        &:hover {
            filter: brightness(0.93);
            transform: scale(1.02);
        }
        &:active {
            filter: brightness(0.8);
        }

        .icon-section {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--icon-background);
            color: var(--icon-text-color);
            width: auto;
            height: auto;


            padding: var(--icon-padding);
            aspect-ratio: 1;

            &::slotted(i) {
                color: var(--icon-color);
                font-size: var(--icon-font-size);


            }

        }

        .text-section {
            text-align: left;
            margin: 0 var(--text-space) 0 0; // default only right
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            white-space: var(--white-space); /* Prevents breaking the content */

            ::slotted(.title) {
                font-size: var(--title-font-size);
                font-weight: bold;
            }

            ::slotted(.subtitle) {
                font-size: var(--subtitle-font-size);
                color: lighten($primary-text-color, 20%);

            }
        }
    }

    @keyframes wave {
        0% {
            left: -100%;
        }
        25% {
            left: -100%;
        }
        35% {
            left: 100%;
        }
        60% {
            left: 100%;
        }
        100% {
            left: 100%;
        }
    }

    /* Optional Separator */

    .spacer {
        width: 100%;
        border: none;
        border-top: 1px solid lighten($primary-text-color, 20%);
        margin: 0.25em 0;
    }

`;


/***/ }),

/***/ "./src/modal/doc.ts":
/*!**************************!*\
  !*** ./src/modal/doc.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextrap_doc_visualizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextrap/doc-visualizer */ "./workspaces/nextrap-doc-visualizer/index.ts");

(0,_nextrap_doc_visualizer__WEBPACK_IMPORTED_MODULE_0__.registerComponent)({
  package: "nxa-modal",
  description: "Modal Component",
  title: "NxaModal",
  examples: [
    {
      title: "Modal Example",
      description: "Basic example",
      lang: "html",
      // language=html
      code: `

<nxa-modal id="modal1" title="Modal Title" subtitle="Modal Subtitle" body="Modal Body" size="md"></nxa-modal>
<nxa-modal id="modal2" size="md" title="Very long title that might overwrite the close button">
    <div slot="body">Body1</div>
</nxa-modal>
<nxa-modal id="modal3" size="fullscreen" title="Iframe" src="https://google.com"></nxa-modal>
<nxa-modal id="modal4" size="fullscreen" class="floating-header">
<form>
    No title
    <input type="text" placeholder="Type something">
    <button>Submit</button>
</form>
</nxa-modal>




<button onclick="document.querySelector('#modal1').openModal()">Open Modal1</button>
<button onclick="document.querySelector('#modal2').openModal()">Open Modal2</button>
<button onclick="document.querySelector('#modal3').openModal()">Open Modal3</button>
<button onclick="document.querySelector('#modal4').openModal()">Open Modal4</button>
            `
    }
  ]
});


/***/ }),

/***/ "./src/modal/nxa-modal.ts":
/*!********************************!*\
  !*** ./src/modal/nxa-modal.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NxaModal: () => (/* binding */ NxaModal)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/unsafe-html.js */ "./node_modules/lit-html/development/directives/unsafe-html.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/modal/style.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};




let NxaModal = class extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  constructor() {
    super(...arguments);
    this.src = "";
    this.srcWrap = "iframe";
    this.target = "";
    this.title = "";
    this.subtitle = "";
    this.body = "";
    this.icon = "";
    this.closeIcon = "\xD7";
    this.size = "md";
    this.open = false;
    this.srcContent = "";
  }
  /**
   * Fetches the content from src if srcWrap is 'div'.
   */
  _fetchSrcContent() {
    return __async(this, null, function* () {
      if (this.src && this.srcWrap === "div") {
        try {
          const response = yield fetch(this.src);
          this.srcContent = yield response.text();
        } catch (error) {
          console.error("Error fetching src content:", error);
          this.srcContent = "Error loading content";
        }
      }
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this._fetchSrcContent();
  }
  updated(changedProperties) {
    if (changedProperties.has("src") && this.srcWrap === "div") {
      this._fetchSrcContent();
    }
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`

        <dialog class="modal ${this.size}">
          <div class="modal-header">
            ${this.icon ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<span class="modal-icon">${this.icon}</span>` : ""}
            ${this.title ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<h2 class="modal-title">${this.title}</h2>` : ""}
            ${this.subtitle ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<h3 class="modal-subtitle">${this.subtitle}</h3>` : ""}
            <slot name="header"></slot>
            ${this.closeIcon ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<button class="modal-close" @click="${this._onCloseClick}">
                  <slot name="close">${this.closeIcon}</slot>
                </button>` : ""}
          </div>
          <div class="modal-body">
            ${this.src ? this._renderSrcContent() : ""}
            ${this.body ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<p>${this.body}</p>` : ""}
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </dialog>
    `;
  }
  /**
   * Renders the content based on src and srcWrap.
   */
  _renderSrcContent() {
    if (this.srcWrap === "iframe") {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<iframe src="${this.src}" .title="${this.title}"></iframe>`;
    } else if (this.srcWrap === "div") {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<div id="src-content">${(0,lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_2__.unsafeHTML)(this.srcContent)}</div>`;
    }
  }
  /**
   * Handles clicks on the backdrop to close the modal.
   */
  _onBackdropClick(e) {
    if (e.target === e.currentTarget) {
      this.close();
    }
  }
  /**
   * Handles clicks on the close button.
   */
  _onCloseClick(e) {
    e.stopPropagation();
    this.close();
  }
  /**
   * Closes the modal and dispatches a 'close' event.
   */
  close() {
    var _a;
    if (!this.open)
      return;
    const dialog = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("dialog");
    dialog == null ? void 0 : dialog.close();
    this.open = false;
  }
  /**
   * Opens the modal and dispatches an 'open' event.
   */
  openModal() {
    var _a;
    if (this.open)
      return;
    this.open = true;
    const dialog = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("dialog");
    dialog == null ? void 0 : dialog.showModal();
  }
};
NxaModal.styles = _style__WEBPACK_IMPORTED_MODULE_3__.style;
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaModal.prototype, "src", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], NxaModal.prototype, "srcWrap", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaModal.prototype, "target", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaModal.prototype, "title", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaModal.prototype, "subtitle", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaModal.prototype, "body", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaModal.prototype, "icon", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaModal.prototype, "closeIcon", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], NxaModal.prototype, "size", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], NxaModal.prototype, "open", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], NxaModal.prototype, "srcContent", 2);
NxaModal = __decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)("nxa-modal")
], NxaModal);


/***/ }),

/***/ "./src/modal/style.ts":
/*!****************************!*\
  !*** ./src/modal/style.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   style: () => (/* binding */ style)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const style = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
        :host {
            --modal-background: #fff;
            --modal-width-sm: 300px;
            --modal-width-md: 600px;
            --modal-width-fullscreen: 100%;
            --modal-max-height: 90vh;
            --backdrop-background: rgba(0, 0, 0, 0.5);
            --modal-header-background: #f1f1f1;
            --modal-footer-background: #f1f1f1;
            --modal-close-color: #000;
            --modal-border-radius: 5px;
            --animation-duration: 0.2s;

        }
        :host(.floating-header) {
            .modal-header {
                &::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    top: 0;
                    left: 0;
                }
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                z-index: 1;
            }
        }



        dialog[open] {
            opacity: 1;
            transform: scaleY(1);
            display: flex;
            flex-direction: column;
        }

        /*   Closed state of the dialog   */
        dialog {


            display: none;
            overscroll-behavior: contain;

            box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
            border-radius: var(--modal-border-radius);
            border: none;
            padding: 0;
            max-height: 100%;
            transform: translateY(20%);
            opacity: 0;
            transition:
                opacity var(--animation-duration) ease-out,
                transform var(--animation-duration) ease-out,
                overlay var(--animation-duration) ease-out allow-discrete,
                display var(--animation-duration) ease-out allow-discrete;
            /* Equivalent to
            transition: all 0.7s allow-discrete; */
        }


        dialog[open] {
            opacity: 1;
            transform: translateY(0);
        }

        /*   Before-open state  */
        /* Needs to be after the previous dialog[open] rule to take effect,
            as the specificity is the same */
        @starting-style {
            dialog[open] {
                opacity: 0;
                transform: translateY(20%);
            }
        }


        /* Transition the :backdrop when the dialog modal is promoted to the top layer */
        dialog::backdrop {
            background-color: rgb(0 0 0 / 0%);
            overscroll-behavior: contain;
            transition:
                display var(--animation-duration) allow-discrete,
                overlay var(--animation-duration) allow-discrete,
                background-color var(--animation-duration);
            /* Equivalent to
            transition: all 0.7s allow-discrete; */
        }

        dialog[open]::backdrop {
            background-color: rgb(0 0 0 / 25%);
        }

        /* This starting-style rule cannot be nested inside the above selector
        because the nesting selector cannot represent pseudo-elements. */

        @starting-style {
            dialog[open]::backdrop {
                background-color: rgb(0 0 0 / 0%);
            }
        }



        .modal.sm {
            width: var(--modal-width-sm);
        }

        .modal.md {
            width: var(--modal-width-md);
        }

        .modal.fullscreen {
            width: var(--modal-width-fullscreen);
            height: 100%;
        }

        .modal-header,
        .modal-footer {

            padding: 1em;
            background: var(--modal-header-background);

        }



        .modal-footer:has(slot:empty) {
            display: none;
        }


        .modal-body {
            padding: 1em;
            flex: 1 1 auto;
            overflow-y: auto;
            overscroll-behavior: none;
        }

        .modal-title {
            margin: 0;
        }

        .modal-subtitle {
            margin: 0;
            font-weight: normal;
            color: #666;
        }

        .modal-close {
            position: absolute;
            top: 0px;
            right: 0px;
            background: none;
            border: none;
            font-size: 2.0em;
            padding: 15px;
            color: var(--modal-close-color);
            cursor: pointer;
        }

        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
    `;


/***/ }),

/***/ "./workspaces/kasi-core/index.ts":
/*!***************************************!*\
  !*** ./workspaces/kasi-core/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Debouncer: () => (/* reexport safe */ _src_debouncer__WEBPACK_IMPORTED_MODULE_1__.Debouncer),
/* harmony export */   ka_body: () => (/* reexport safe */ _src_await_body__WEBPACK_IMPORTED_MODULE_5__.ka_body),
/* harmony export */   ka_create_element: () => (/* reexport safe */ _src_create_element__WEBPACK_IMPORTED_MODULE_3__.ka_create_element),
/* harmony export */   ka_defaultBreakpoints: () => (/* reexport safe */ _src_breakpoints__WEBPACK_IMPORTED_MODULE_0__.ka_defaultBreakpoints),
/* harmony export */   ka_dom_ready: () => (/* reexport safe */ _src_await_dom_ready__WEBPACK_IMPORTED_MODULE_4__.ka_dom_ready),
/* harmony export */   ka_getBreakPoint: () => (/* reexport safe */ _src_breakpoints__WEBPACK_IMPORTED_MODULE_0__.ka_getBreakPoint),
/* harmony export */   ka_position_widget: () => (/* reexport safe */ _src_widget_position__WEBPACK_IMPORTED_MODULE_2__.ka_position_widget),
/* harmony export */   ka_sleep: () => (/* reexport safe */ _src_await_sleep__WEBPACK_IMPORTED_MODULE_6__.ka_sleep)
/* harmony export */ });
/* harmony import */ var _src_breakpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/breakpoints */ "./workspaces/kasi-core/src/breakpoints.ts");
/* harmony import */ var _src_debouncer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/debouncer */ "./workspaces/kasi-core/src/debouncer.ts");
/* harmony import */ var _src_widget_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/widget-position */ "./workspaces/kasi-core/src/widget-position.ts");
/* harmony import */ var _src_create_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/create-element */ "./workspaces/kasi-core/src/create-element.ts");
/* harmony import */ var _src_await_dom_ready__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/await/dom-ready */ "./workspaces/kasi-core/src/await/dom-ready.ts");
/* harmony import */ var _src_await_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/await/body */ "./workspaces/kasi-core/src/await/body.ts");
/* harmony import */ var _src_await_sleep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/await/sleep */ "./workspaces/kasi-core/src/await/sleep.ts");









/***/ }),

/***/ "./workspaces/kasi-core/src/await/body.ts":
/*!************************************************!*\
  !*** ./workspaces/kasi-core/src/await/body.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_body: () => (/* binding */ ka_body)
/* harmony export */ });
class BodyElementWatcher {
  static waitForBodyElement() {
    if (document.body) {
      return Promise.resolve(document.body);
    }
    return new Promise((resolve) => {
      this.promises.push(resolve);
      if (!this.observer) {
        this.observer = new MutationObserver(() => {
          if (document.body) {
            this.observer.disconnect();
            this.observer = null;
            this.promises.forEach((callback) => callback(document.body));
            this.promises = [];
          }
        });
        this.observer.observe(document.documentElement, { childList: true });
      }
    });
  }
}
BodyElementWatcher.observer = null;
BodyElementWatcher.promises = [];
function ka_body() {
  return BodyElementWatcher.waitForBodyElement();
}


/***/ }),

/***/ "./workspaces/kasi-core/src/await/dom-ready.ts":
/*!*****************************************************!*\
  !*** ./workspaces/kasi-core/src/await/dom-ready.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_dom_ready: () => (/* binding */ ka_dom_ready)
/* harmony export */ });
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function ka_dom_ready() {
  return __async(this, null, function* () {
    return new Promise((resolve) => {
      if (document.readyState === "complete" || document.readyState === "interactive")
        return resolve("loaded");
      document.addEventListener("DOMContentLoaded", () => resolve("DOMContentLoaded"));
    });
  });
}


/***/ }),

/***/ "./workspaces/kasi-core/src/await/sleep.ts":
/*!*************************************************!*\
  !*** ./workspaces/kasi-core/src/await/sleep.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_sleep: () => (/* binding */ ka_sleep)
/* harmony export */ });
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function ka_sleep(sleepms) {
  return __async(this, null, function* () {
    return new Promise((resolve) => {
      window.setTimeout(() => {
        return resolve();
      }, sleepms);
    });
  });
}


/***/ }),

/***/ "./workspaces/kasi-core/src/breakpoints.ts":
/*!*************************************************!*\
  !*** ./workspaces/kasi-core/src/breakpoints.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_defaultBreakpoints: () => (/* binding */ ka_defaultBreakpoints),
/* harmony export */   ka_getBreakPoint: () => (/* binding */ ka_getBreakPoint)
/* harmony export */ });
let ka_defaultBreakpoints = {
  // Bootstrap breakpoints
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};
function ka_getBreakPoint(width = window.innerWidth, breakpoints = ka_defaultBreakpoints) {
  let bp = breakpoints;
  let sorted = Object.keys(bp).sort((a, b) => bp[a] - bp[b]);
  let current = width;
  let result = [];
  for (let key of sorted) {
    if (bp[key] <= current) {
      result.push(key);
    }
  }
  return {
    breakpoint: result[result.length - 1],
    matching_breakpoints: result,
    breakpoint_width: bp[result[result.length - 1]]
  };
}


/***/ }),

/***/ "./workspaces/kasi-core/src/create-element.ts":
/*!****************************************************!*\
  !*** ./workspaces/kasi-core/src/create-element.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_create_element: () => (/* binding */ ka_create_element)
/* harmony export */ });
function ka_create_element(tagName, attributes = null, children = null, appendToElement = null) {
  let e = document.createElement(tagName);
  if (attributes === null)
    attributes = {};
  for (let attName in attributes) {
    e.setAttribute(attName, attributes[attName]);
  }
  if (children instanceof NodeList) {
    children = Array.from(children);
  } else if (Array.isArray(children)) {
    for (let ce of children) {
      e.appendChild(ce);
    }
  } else if (typeof children === "string") {
    e.innerText = children;
  }
  if (appendToElement !== null) {
    appendToElement.appendChild(e);
  }
  return e;
}


/***/ }),

/***/ "./workspaces/kasi-core/src/debouncer.ts":
/*!***********************************************!*\
  !*** ./workspaces/kasi-core/src/debouncer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Debouncer: () => (/* binding */ Debouncer)
/* harmony export */ });
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _resolve, _interval, _time;
class Debouncer {
  constructor(min = 100, max = null) {
    this.min = min;
    this.max = max;
    __privateAdd(this, _resolve, []);
    __privateAdd(this, _interval, null);
    __privateAdd(this, _time, null);
  }
  debounce() {
    return __async(this, arguments, function* (min = this.min, max = this.max) {
      if (max === null)
        max = min;
      if (__privateGet(this, _interval) !== null) {
        window.clearInterval(__privateGet(this, _interval));
      }
      __privateSet(this, _interval, window.setInterval(() => {
        __privateGet(this, _resolve).forEach((r) => r());
        __privateSet(this, _resolve, []);
        window.clearInterval(__privateGet(this, _interval));
      }, min));
      return new Promise((resolve) => {
        __privateGet(this, _resolve).push(resolve);
      });
    });
  }
}
_resolve = new WeakMap();
_interval = new WeakMap();
_time = new WeakMap();


/***/ }),

/***/ "./workspaces/kasi-core/src/widget-position.ts":
/*!*****************************************************!*\
  !*** ./workspaces/kasi-core/src/widget-position.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_position_widget: () => (/* binding */ ka_position_widget)
/* harmony export */ });
const defaultModifiers = {
  sameWidth: (state) => {
    state.widget.style.width = `${state.reference.rect.width}px`;
  },
  sameHeight: (state) => {
    state.widget.style.height = `${state.reference.rect.height}px`;
  }
};
function ka_position_widget(widgetElement, referenceElement, positionOptions) {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const parentRect = referenceElement.getBoundingClientRect();
  let widgetRect = widgetElement.getBoundingClientRect();
  let state = {
    widget: {
      element: widgetElement,
      style: {},
      rect: widgetRect
    },
    reference: {
      element: referenceElement,
      style: {},
      rect: parentRect
    }
  };
  if (widgetRect.height === 0 && !widgetElement.style.height) {
    state.widget.style.height = "auto";
  }
  if (widgetRect.width === 0 && !widgetElement.style.width) {
    state.widget.style.width = "100px";
  }
  widgetRect = widgetElement.getBoundingClientRect();
  let top = 0, left = 0;
  switch (positionOptions.placement) {
    case "inset":
      top = parentRect.top;
      left = parentRect.left;
      break;
    case "outset":
      top = parentRect.bottom;
      left = parentRect.right;
      break;
  }
  if (widgetRect.height > windowHeight) {
    if (parentRect.top > windowHeight / 2) {
      top = parentRect.top - widgetRect.height;
    } else {
      top = parentRect.bottom;
    }
  } else {
    top = parentRect.bottom;
  }
  if (widgetRect.width > windowWidth) {
    if (parentRect.left > windowWidth / 2) {
      left = parentRect.left - widgetRect.width;
    } else {
      left = parentRect.right;
    }
  } else {
    left = parentRect.right;
  }
  state.widget.style.position = positionOptions.strategy;
  state.widget.style.top = `${top}px`;
  state.widget.style.left = `${left}px`;
  if (Array.isArray(positionOptions.modifiers)) {
    positionOptions.modifiers.forEach((modifier) => {
      if (typeof modifier === "string") {
        if (!defaultModifiers[modifier]) {
          throw new Error(`Modifier ${modifier} is not a valid modifier`);
        }
        defaultModifiers[modifier](state);
      } else if (modifier.enabled) {
        if (typeof modifier.fn === "function") {
          modifier.fn(state);
          return true;
        }
        if (!defaultModifiers[modifier.name]) {
          throw new Error(`Modifier ${modifier.name} is not a valid modifier`);
        }
        defaultModifiers[modifier.name](state);
      }
    });
  }
  Object.assign(widgetElement.style, state.widget.style);
}


/***/ }),

/***/ "./workspaces/nextrap-doc-visualizer/index.ts":
/*!****************************************************!*\
  !*** ./workspaces/nextrap-doc-visualizer/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nextrap: () => (/* reexport safe */ _src_nextrap_registry__WEBPACK_IMPORTED_MODULE_0__.Nextrap),
/* harmony export */   registerComponent: () => (/* reexport safe */ _src_nextrap_registry__WEBPACK_IMPORTED_MODULE_0__.registerComponent)
/* harmony export */ });
/* harmony import */ var _src_nextrap_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/nextrap-registry */ "./workspaces/nextrap-doc-visualizer/src/nextrap-registry.ts");
/* harmony import */ var _src_visualizer_nx_doc_visualizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/visualizer/nx-doc-visualizer */ "./workspaces/nextrap-doc-visualizer/src/visualizer/nx-doc-visualizer.ts");
/* harmony import */ var _src_visualizer_nx_doc_packages_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/visualizer/nx-doc-packages-list */ "./workspaces/nextrap-doc-visualizer/src/visualizer/nx-doc-packages-list.ts");





/***/ }),

/***/ "./workspaces/nextrap-doc-visualizer/src/nextrap-registry.ts":
/*!*******************************************************************!*\
  !*** ./workspaces/nextrap-doc-visualizer/src/nextrap-registry.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nextrap: () => (/* binding */ Nextrap),
/* harmony export */   registerComponent: () => (/* binding */ registerComponent)
/* harmony export */ });
const Nextrap = [];
function registerComponent(component) {
  Nextrap.push(component);
}


/***/ }),

/***/ "./workspaces/nextrap-doc-visualizer/src/visualizer/nx-doc-packages-list.ts":
/*!**********************************************************************************!*\
  !*** ./workspaces/nextrap-doc-visualizer/src/visualizer/nx-doc-packages-list.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _nextrap_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nextrap-registry */ "./workspaces/nextrap-doc-visualizer/src/nextrap-registry.ts");
/* harmony import */ var _kasimirjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kasimirjs/core */ "./workspaces/kasi-core/index.ts");
/* harmony import */ var _kasimirjs_core_src_await_dom_ready__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kasimirjs/core/src/await/dom-ready */ "./workspaces/kasi-core/src/await/dom-ready.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};





let PackageComponent = class extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  constructor() {
    super(...arguments);
    this.package = "undefined";
  }
  render() {
    (() => __async(this, null, function* () {
      yield (0,_kasimirjs_core_src_await_dom_ready__WEBPACK_IMPORTED_MODULE_4__.ka_dom_ready)();
      _nextrap_registry__WEBPACK_IMPORTED_MODULE_2__.Nextrap.map((description) => {
        this.appendChild((0,_kasimirjs_core__WEBPACK_IMPORTED_MODULE_3__.ka_create_element)("nx-doc-visualizer", { package: description.package }));
      });
    }))();
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
            <div id="component-container">
                <slot></slot>
            </div>
        `;
  }
};
PackageComponent.styles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
    .package-section {
      margin-bottom: 20px;
    }`;
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], PackageComponent.prototype, "package", 2);
PackageComponent = __decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)("nx-doc-packages-list")
], PackageComponent);


/***/ }),

/***/ "./workspaces/nextrap-doc-visualizer/src/visualizer/nx-doc-visualizer.ts":
/*!*******************************************************************************!*\
  !*** ./workspaces/nextrap-doc-visualizer/src/visualizer/nx-doc-visualizer.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _nextrap_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nextrap-registry */ "./workspaces/nextrap-doc-visualizer/src/nextrap-registry.ts");
/* harmony import */ var _kasimirjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kasimirjs/core */ "./workspaces/kasi-core/index.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};




const htmlCode = `

<style>
:host {
    display: block;
    font-size: 16px;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;


}
#wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;

}
#wrapper > div {
    flex: 1;
    margin: 0
    flex-basis: 50%;
    border: 1px solid #ccc;
}
.header {
    background-color: #ddd;
    padding: 0.2rem;
    border-bottom: 1px solid #ccc;
    display: block;
    line-height: 1;;
}
#html {
    border 1px solid #ccc;
    padding: 1rem;
    background: #fff;


}

#code {
    font-family:  monospace;
    /* display as pre element break where possible*/

    background: white;


    line-height: 1.2;
    font-size: 12px;
}

.line-numbers {
  counter-reset: linenumber;
  position: relative;
  padding-left: 40px; /* Adjust according to your needs */
}

.line-numbers code {
  display: block;
  background: white;
}

.line-numbers code:before {
  counter-increment: linenumber;
  content: counter(linenumber);
  display: inline-block;
  padding-right: 5px;
  width: 30px; /* Adjust according to your needs */
  margin-right: 10px;
  text-align: right;
  color: gray; /* Adjust according to your needs */
  background: #f0f0f0; /* Adjust according to your needs */
  position: absolute;
  left: 0;
}
</style>


`;
let PackageComponent = class extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  constructor() {
    super(...arguments);
    this.package = "undefined";
  }
  render() {
    let doc = _nextrap_registry__WEBPACK_IMPORTED_MODULE_2__.Nextrap.find((description) => description.package === this.package);
    if (!doc) {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
                <div>Package not found</div>`;
    }
    doc.examples.forEach((example) => {
      let e = (0,_kasimirjs_core__WEBPACK_IMPORTED_MODULE_3__.ka_create_element)("slot", { name: "html" + example.title }, example.code);
      e.innerHTML = example.code;
      this.appendChild(e);
    });
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
            <section class="package-section">
                <h2>${doc.title}</h2>
                <p>${doc.description}</p>
                ${doc.examples.map(
      (example) => (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
                        <section class="example-section">
                            <h3>${example.title}</h3>
                            <p>${example.description}</p>
                            <pre class="code-example line-numbers">${example.code.trim().split("\n").map((ex) => (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<code>${ex !== "" ? ex : (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<br>`}</code>`)}</pre>
                            <slot class="render-area" ..name=${"html1" + example.title}></slot>
                        </section>
                    `
    )}
            </section>
        `;
  }
};
PackageComponent.styles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`

        .package-section {
            background: white;
            box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
            padding: 1rem 2rem;
            margin-bottom: 2rem;
        }

        .example-section {
            margin-top: 40px;
        }
        h2,h3, p {
            font-family:  Arial, sans-serif;
        }




        .code-example {
            background-color: #f5f5f5;
            margin-top: 20px;
            margin-bottom: 20px;
            padding: 10px;
            white-space: pre-wrap;
        }

        .render-area {
            margin-top: 10px;
        }

        .line-numbers {
            counter-reset: linenumber;
            position: relative;
            padding-left: 40px; /* Adjust according to your needs */
        }

        .line-numbers code {
            display: block;
            background: white;
        }

        .line-numbers code:before {
            counter-increment: linenumber;
            content: counter(linenumber);
            display: inline-block;
            padding-right: 5px;
            width: 30px; /* Adjust according to your needs */
            margin-right: 10px;
            text-align: right;
            color: gray; /* Adjust according to your needs */
            background: #f0f0f0; /* Adjust according to your needs */
            position: absolute;
            left: 0;
        }
    `;
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], PackageComponent.prototype, "package", 2);
PackageComponent = __decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)("nx-doc-visualizer")
], PackageComponent);


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/css-tag.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/css-tag.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* binding */ CSSResult),
/* harmony export */   adoptStyles: () => (/* binding */ adoptStyles),
/* harmony export */   css: () => (/* binding */ css),
/* harmony export */   getCompatibleStyle: () => (/* binding */ getCompatibleStyle),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* binding */ supportsAdoptingStyleSheets),
/* harmony export */   unsafeCSS: () => (/* binding */ unsafeCSS)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const NODE_MODE = false;
// Allows minifiers to rename references to globalThis
const global = globalThis;
/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
const supportsAdoptingStyleSheets = global.ShadowRoot &&
    (global.ShadyCSS === undefined || global.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype;
const constructionToken = Symbol();
const cssTagCache = new WeakMap();
/**
 * A container for a string of CSS text, that may be used to create a CSSStyleSheet.
 *
 * CSSResult is the return value of `css`-tagged template literals and
 * `unsafeCSS()`. In order to ensure that CSSResults are only created via the
 * `css` tag and `unsafeCSS()`, CSSResult cannot be constructed directly.
 */
class CSSResult {
    constructor(cssText, strings, safeToken) {
        // This property needs to remain unminified.
        this['_$cssResult$'] = true;
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
        this._strings = strings;
    }
    // This is a getter so that it's lazy. In practice, this means stylesheets
    // are not created until the first element instance is made.
    get styleSheet() {
        // If `supportsAdoptingStyleSheets` is true then we assume CSSStyleSheet is
        // constructable.
        let styleSheet = this._styleSheet;
        const strings = this._strings;
        if (supportsAdoptingStyleSheets && styleSheet === undefined) {
            const cacheable = strings !== undefined && strings.length === 1;
            if (cacheable) {
                styleSheet = cssTagCache.get(strings);
            }
            if (styleSheet === undefined) {
                (this._styleSheet = styleSheet = new CSSStyleSheet()).replaceSync(this.cssText);
                if (cacheable) {
                    cssTagCache.set(strings, styleSheet);
                }
            }
        }
        return styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
const textFromCSSResult = (value) => {
    // This property needs to remain unminified.
    if (value['_$cssResult$'] === true) {
        return value.cssText;
    }
    else if (typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ` +
            `${value}. Use 'unsafeCSS' to pass non-literal values, but take care ` +
            `to ensure page security.`);
    }
};
/**
 * Wrap a value for interpolation in a {@linkcode css} tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => new CSSResult(typeof value === 'string' ? value : String(value), undefined, constructionToken);
/**
 * A template literal tag which can be used with LitElement's
 * {@linkcode LitElement.styles} property to set element styles.
 *
 * For security reasons, only literal string values and number may be used in
 * embedded expressions. To incorporate non-literal values {@linkcode unsafeCSS}
 * may be used inside an expression.
 */
const css = (strings, ...values) => {
    const cssText = strings.length === 1
        ? strings[0]
        : values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, strings, constructionToken);
};
/**
 * Applies the given styles to a `shadowRoot`. When Shadow DOM is
 * available but `adoptedStyleSheets` is not, styles are appended to the
 * `shadowRoot` to [mimic spec behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
 * Note, when shimming is used, any styles that are subsequently placed into
 * the shadowRoot should be placed *before* any shimmed adopted styles. This
 * will match spec behavior that gives adopted sheets precedence over styles in
 * shadowRoot.
 */
const adoptStyles = (renderRoot, styles) => {
    if (supportsAdoptingStyleSheets) {
        renderRoot.adoptedStyleSheets = styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
    }
    else {
        for (const s of styles) {
            const style = document.createElement('style');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const nonce = global['litNonce'];
            if (nonce !== undefined) {
                style.setAttribute('nonce', nonce);
            }
            style.textContent = s.cssText;
            renderRoot.appendChild(style);
        }
    }
};
const cssResultFromStyleSheet = (sheet) => {
    let cssText = '';
    for (const rule of sheet.cssRules) {
        cssText += rule.cssText;
    }
    return unsafeCSS(cssText);
};
const getCompatibleStyle = supportsAdoptingStyleSheets ||
    (NODE_MODE && global.CSSStyleSheet === undefined)
    ? (s) => s
    : (s) => s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;
//# sourceMappingURL=css-tag.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/base.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/base.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   desc: () => (/* binding */ desc)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Wraps up a few best practices when returning a property descriptor from a
 * decorator.
 *
 * Marks the defined property as configurable, and enumerable, and handles
 * the case where we have a busted Reflect.decorate zombiefill (e.g. in Angular
 * apps).
 *
 * @internal
 */
const desc = (obj, name, descriptor) => {
    // For backwards compatibility, we keep them configurable and enumerable.
    descriptor.configurable = true;
    descriptor.enumerable = true;
    if (
    // We check for Reflect.decorate each time, in case the zombiefill
    // is applied via lazy loading some Angular code.
    Reflect.decorate &&
        typeof name !== 'object') {
        // If we're called as a legacy decorator, and Reflect.decorate is present
        // then we have no guarantees that the returned descriptor will be
        // defined on the class, so we must apply it directly ourselves.
        Object.defineProperty(obj, name, descriptor);
    }
    return descriptor;
};
//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/custom-element.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customElement: () => (/* binding */ customElement)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```js
 * @customElement('my-element')
 * class MyElement extends LitElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The tag name of the custom element to define.
 */
const customElement = (tagName) => (classOrTarget, context) => {
    if (context !== undefined) {
        context.addInitializer(() => {
            customElements.define(tagName, classOrTarget);
        });
    }
    else {
        customElements.define(tagName, classOrTarget);
    }
};
//# sourceMappingURL=custom-element.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/event-options.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/event-options.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventOptions: () => (/* binding */ eventOptions)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifies event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * ```ts
 * class MyElement {
 *   clicked = false;
 *
 *   render() {
 *     return html`
 *       <div @click=${this._onClick}>
 *         <button></button>
 *       </div>
 *     `;
 *   }
 *
 *   @eventOptions({capture: true})
 *   _onClick(e) {
 *     this.clicked = true;
 *   }
 * }
 * ```
 * @category Decorator
 */
function eventOptions(options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ((protoOrValue, nameOrContext) => {
        const method = typeof protoOrValue === 'function'
            ? protoOrValue
            : protoOrValue[nameOrContext];
        Object.assign(method, options);
    });
}
//# sourceMappingURL=event-options.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/property.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   property: () => (/* binding */ property),
/* harmony export */   standardProperty: () => (/* binding */ standardProperty)
/* harmony export */ });
/* harmony import */ var _reactive_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reactive-element.js */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

const DEV_MODE = true;
let issueWarning;
if (DEV_MODE) {
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    const issuedWarnings = (globalThis.litIssuedWarnings ??= new Set());
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += ` See https://lit.dev/msg/${code} for more information.`;
        if (!issuedWarnings.has(warning)) {
            console.warn(warning);
            issuedWarnings.add(warning);
        }
    };
}
const legacyProperty = (options, proto, name) => {
    const hasOwnProperty = proto.hasOwnProperty(name);
    proto.constructor.createProperty(name, hasOwnProperty ? { ...options, wrapped: true } : options);
    // For accessors (which have a descriptor on the prototype) we need to
    // return a descriptor, otherwise TypeScript overwrites the descriptor we
    // define in createProperty() with the original descriptor. We don't do this
    // for fields, which don't have a descriptor, because this could overwrite
    // descriptor defined by other decorators.
    return hasOwnProperty
        ? Object.getOwnPropertyDescriptor(proto, name)
        : undefined;
};
// This is duplicated from a similar variable in reactive-element.ts, but
// actually makes sense to have this default defined with the decorator, so
// that different decorators could have different defaults.
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: _reactive_element_js__WEBPACK_IMPORTED_MODULE_0__.defaultConverter,
    reflect: false,
    hasChanged: _reactive_element_js__WEBPACK_IMPORTED_MODULE_0__.notEqual,
};
/**
 * Wraps a class accessor or setter so that `requestUpdate()` is called with the
 * property name and old value when the accessor is set.
 */
const standardProperty = (options = defaultPropertyDeclaration, target, context) => {
    const { kind, metadata } = context;
    if (DEV_MODE && metadata == null) {
        issueWarning('missing-class-metadata', `The class ${target} is missing decorator metadata. This ` +
            `could mean that you're using a compiler that supports decorators ` +
            `but doesn't support decorator metadata, such as TypeScript 5.1. ` +
            `Please update your compiler.`);
    }
    // Store the property options
    let properties = globalThis.litPropertyMetadata.get(metadata);
    if (properties === undefined) {
        globalThis.litPropertyMetadata.set(metadata, (properties = new Map()));
    }
    properties.set(context.name, options);
    if (kind === 'accessor') {
        // Standard decorators cannot dynamically modify the class, so we can't
        // replace a field with accessors. The user must use the new `accessor`
        // keyword instead.
        const { name } = context;
        return {
            set(v) {
                const oldValue = target.get.call(this);
                target.set.call(this, v);
                this.requestUpdate(name, oldValue, options);
            },
            init(v) {
                if (v !== undefined) {
                    this._$changeProperty(name, undefined, options);
                }
                return v;
            },
        };
    }
    else if (kind === 'setter') {
        const { name } = context;
        return function (value) {
            const oldValue = this[name];
            target.call(this, value);
            this.requestUpdate(name, oldValue, options);
        };
    }
    throw new Error(`Unsupported decorator location: ${kind}`);
};
/**
 * A class field or accessor decorator which creates a reactive property that
 * reflects a corresponding attribute value. When a decorated property is set
 * the element will update and render. A {@linkcode PropertyDeclaration} may
 * optionally be supplied to configure property features.
 *
 * This decorator should only be used for public fields. As public fields,
 * properties should be considered as primarily settable by element users,
 * either via attribute or the property itself.
 *
 * Generally, properties that are changed by the element should be private or
 * protected fields and should use the {@linkcode state} decorator.
 *
 * However, sometimes element code does need to set a public property. This
 * should typically only be done in response to user interaction, and an event
 * should be fired informing the user; for example, a checkbox sets its
 * `checked` property when clicked and fires a `changed` event. Mutating public
 * properties should typically not be done for non-primitive (object or array)
 * properties. In other cases when an element needs to manage state, a private
 * property decorated via the {@linkcode state} decorator should be used. When
 * needed, state properties can be initialized via public properties to
 * facilitate complex interactions.
 *
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */
function property(options) {
    return (protoOrTarget, nameOrContext
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) => {
        return (typeof nameOrContext === 'object'
            ? standardProperty(options, protoOrTarget, nameOrContext)
            : legacyProperty(options, protoOrTarget, nameOrContext));
    };
}
//# sourceMappingURL=property.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-all.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-all.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAll: () => (/* binding */ queryAll)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

// Shared fragment used to generate empty NodeLists when a render root is
// undefined
let fragment;
/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * ```ts
 * class MyElement {
 *   @queryAll('div')
 *   divs: NodeListOf<HTMLDivElement>;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function queryAll(selector) {
    return ((obj, name) => {
        return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(obj, name, {
            get() {
                const container = this.renderRoot ?? (fragment ??= document.createDocumentFragment());
                return container.querySelectorAll(selector);
            },
        });
    });
}
//# sourceMappingURL=query-all.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAssignedElements: () => (/* binding */ queryAssignedElements)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedElements` of the given `slot`. Provides a declarative
 * way to use
 * [`HTMLSlotElement.assignedElements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements).
 *
 * Can be passed an optional {@linkcode QueryAssignedElementsOptions} object.
 *
 * Example usage:
 * ```ts
 * class MyElement {
 *   @queryAssignedElements({ slot: 'list' })
 *   listItems!: Array<HTMLElement>;
 *   @queryAssignedElements()
 *   unnamedSlotEls!: Array<HTMLElement>;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *       <slot></slot>
 *     `;
 *   }
 * }
 * ```
 *
 * Note, the type of this property should be annotated as `Array<HTMLElement>`.
 *
 * @category Decorator
 */
function queryAssignedElements(options) {
    return ((obj, name) => {
        const { slot, selector } = options ?? {};
        const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`;
        return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(obj, name, {
            get() {
                const slotEl = this.renderRoot?.querySelector(slotSelector);
                const elements = slotEl?.assignedElements(options) ?? [];
                return (selector === undefined
                    ? elements
                    : elements.filter((node) => node.matches(selector)));
            },
        });
    });
}
//# sourceMappingURL=query-assigned-elements.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAssignedNodes: () => (/* binding */ queryAssignedNodes)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedNodes` of the given `slot`.
 *
 * Can be passed an optional {@linkcode QueryAssignedNodesOptions} object.
 *
 * Example usage:
 * ```ts
 * class MyElement {
 *   @queryAssignedNodes({slot: 'list', flatten: true})
 *   listItems!: Array<Node>;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *     `;
 *   }
 * }
 * ```
 *
 * Note the type of this property should be annotated as `Array<Node>`. Use the
 * queryAssignedElements decorator to list only elements, and optionally filter
 * the element list using a CSS selector.
 *
 * @category Decorator
 */
function queryAssignedNodes(options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ((obj, name) => {
        const { slot } = options ?? {};
        const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`;
        return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(obj, name, {
            get() {
                const slotEl = this.renderRoot?.querySelector(slotSelector);
                return (slotEl?.assignedNodes(options) ?? []);
            },
        });
    });
}
//# sourceMappingURL=query-assigned-nodes.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-async.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-async.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAsync: () => (/* binding */ queryAsync)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

// Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.
/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first: Promise<HTMLDivElement>;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */
function queryAsync(selector) {
    return ((obj, name) => {
        return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(obj, name, {
            async get() {
                await this.updateComplete;
                return this.renderRoot?.querySelector(selector) ?? null;
            },
        });
    });
}
//# sourceMappingURL=query-async.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   query: () => (/* binding */ query)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

const DEV_MODE = true;
let issueWarning;
if (DEV_MODE) {
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    const issuedWarnings = (globalThis.litIssuedWarnings ??= new Set());
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += code
            ? ` See https://lit.dev/msg/${code} for more information.`
            : '';
        if (!issuedWarnings.has(warning)) {
            console.warn(warning);
            issuedWarnings.add(warning);
        }
    };
}
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 *     once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first: HTMLDivElement;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function query(selector, cache) {
    return ((protoOrTarget, nameOrContext, descriptor) => {
        const doQuery = (el) => {
            const result = (el.renderRoot?.querySelector(selector) ?? null);
            if (DEV_MODE && result === null && cache && !el.hasUpdated) {
                const name = typeof nameOrContext === 'object'
                    ? nameOrContext.name
                    : nameOrContext;
                issueWarning('', `@query'd field ${JSON.stringify(String(name))} with the 'cache' ` +
                    `flag set for selector '${selector}' has been accessed before ` +
                    `the first update and returned null. This is expected if the ` +
                    `renderRoot tree has not been provided beforehand (e.g. via ` +
                    `Declarative Shadow DOM). Therefore the value hasn't been cached.`);
            }
            // TODO: if we want to allow users to assert that the query will never
            // return null, we need a new option and to throw here if the result
            // is null.
            return result;
        };
        if (cache) {
            // Accessors to wrap from either:
            //   1. The decorator target, in the case of standard decorators
            //   2. The property descriptor, in the case of experimental decorators
            //      on auto-accessors.
            //   3. Functions that access our own cache-key property on the instance,
            //      in the case of experimental decorators on fields.
            const { get, set } = typeof nameOrContext === 'object'
                ? protoOrTarget
                : descriptor ??
                    (() => {
                        const key = DEV_MODE
                            ? Symbol(`${String(nameOrContext)} (@query() cache)`)
                            : Symbol();
                        return {
                            get() {
                                return this[key];
                            },
                            set(v) {
                                this[key] = v;
                            },
                        };
                    })();
            return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(protoOrTarget, nameOrContext, {
                get() {
                    let result = get.call(this);
                    if (result === undefined) {
                        result = doQuery(this);
                        if (result !== null || this.hasUpdated) {
                            set.call(this, result);
                        }
                    }
                    return result;
                },
            });
        }
        else {
            // This object works as the return type for both standard and
            // experimental decorators.
            return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(protoOrTarget, nameOrContext, {
                get() {
                    return doQuery(this);
                },
            });
        }
    });
}
//# sourceMappingURL=query.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/state.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/state.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

/**
 * Declares a private or protected reactive property that still triggers
 * updates to the element when it changes. It does not reflect from the
 * corresponding attribute.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like closure compiler.
 * @category Decorator
 */
function state(options) {
    return (0,_property_js__WEBPACK_IMPORTED_MODULE_0__.property)({
        ...options,
        // Add both `state` and `attribute` because we found a third party
        // controller that is keying off of PropertyOptions.state to determine
        // whether a field is a private internal property or not.
        state: true,
        attribute: false,
    });
}
//# sourceMappingURL=state.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/reactive-element.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/reactive-element.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   ReactiveElement: () => (/* binding */ ReactiveElement),
/* harmony export */   adoptStyles: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   css: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   defaultConverter: () => (/* binding */ defaultConverter),
/* harmony export */   getCompatibleStyle: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   notEqual: () => (/* binding */ notEqual),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   unsafeCSS: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-tag.js */ "./node_modules/@lit/reactive-element/development/css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Use this module if you want to create your own base class extending
 * {@link ReactiveElement}.
 * @packageDocumentation
 */

// In the Node build, this import will be injected by Rollup:
// import {HTMLElement, customElements} from '@lit-labs/ssr-dom-shim';

// TODO (justinfagnani): Add `hasOwn` here when we ship ES2022
const { is, defineProperty, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, getPrototypeOf, } = Object;
const NODE_MODE = false;
// Lets a minifier replace globalThis references with a minified name
const global = globalThis;
if (NODE_MODE) {
    global.customElements ??= customElements;
}
const DEV_MODE = true;
let issueWarning;
const trustedTypes = global
    .trustedTypes;
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
const emptyStringForBooleanAttribute = trustedTypes
    ? trustedTypes.emptyScript
    : '';
const polyfillSupport = DEV_MODE
    ? global.reactiveElementPolyfillSupportDevMode
    : global.reactiveElementPolyfillSupport;
if (DEV_MODE) {
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    const issuedWarnings = (global.litIssuedWarnings ??=
        new Set());
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += ` See https://lit.dev/msg/${code} for more information.`;
        if (!issuedWarnings.has(warning)) {
            console.warn(warning);
            issuedWarnings.add(warning);
        }
    };
    issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
    // Issue polyfill support warning.
    if (global.ShadyDOM?.inUse && polyfillSupport === undefined) {
        issueWarning('polyfill-support-missing', `Shadow DOM is being polyfilled via \`ShadyDOM\` but ` +
            `the \`polyfill-support\` module has not been loaded.`);
    }
}
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
const debugLogEvent = DEV_MODE
    ? (event) => {
        const shouldEmit = global
            .emitLitDebugLogEvents;
        if (!shouldEmit) {
            return;
        }
        global.dispatchEvent(new CustomEvent('lit-debug', {
            detail: event,
        }));
    }
    : undefined;
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
/*@__INLINE__*/
const JSCompiler_renameProperty = (prop, _obj) => prop;
const defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
            case Boolean:
                value = value ? emptyStringForBooleanAttribute : null;
                break;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                value = value == null ? value : JSON.stringify(value);
                break;
        }
        return value;
    },
    fromAttribute(value, type) {
        let fromValue = value;
        switch (type) {
            case Boolean:
                fromValue = value !== null;
                break;
            case Number:
                fromValue = value === null ? null : Number(value);
                break;
            case Object:
            case Array:
                // Do *not* generate exception when invalid JSON is set as elements
                // don't normally complain on being mis-configured.
                // TODO(sorvell): Do generate exception in *dev mode*.
                try {
                    // Assert to adhere to Bazel's "must type assert JSON parse" rule.
                    fromValue = JSON.parse(value);
                }
                catch (e) {
                    fromValue = null;
                }
                break;
        }
        return fromValue;
    },
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => !is(value, old);
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual,
};
// Ensure metadata is enabled. TypeScript does not polyfill
// Symbol.metadata, so we must ensure that it exists.
Symbol.metadata ??= Symbol('metadata');
// Map from a class's metadata object to property options
// Note that we must use nullish-coalescing assignment so that we only use one
// map even if we load multiple version of this module.
global.litPropertyMetadata ??= new WeakMap();
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclasses to render updates as desired.
 * @noInheritDoc
 */
class ReactiveElement
// In the Node build, this `extends` clause will be substituted with
// `(globalThis.HTMLElement ?? HTMLElement)`.
//
// This way, we will first prefer any global `HTMLElement` polyfill that the
// user has assigned, and then fall back to the `HTMLElement` shim which has
// been imported (see note at the top of this file about how this import is
// generated by Rollup). Note that the `HTMLElement` variable has been
// shadowed by this import, so it no longer refers to the global.
 extends HTMLElement {
    /**
     * Adds an initializer function to the class that is called during instance
     * construction.
     *
     * This is useful for code that runs against a `ReactiveElement`
     * subclass, such as a decorator, that needs to do work for each
     * instance, such as setting up a `ReactiveController`.
     *
     * ```ts
     * const myDecorator = (target: typeof ReactiveElement, key: string) => {
     *   target.addInitializer((instance: ReactiveElement) => {
     *     // This is run during construction of the element
     *     new MyController(instance);
     *   });
     * }
     * ```
     *
     * Decorating a field will then cause each instance to run an initializer
     * that adds a controller:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   @myDecorator foo;
     * }
     * ```
     *
     * Initializers are stored per-constructor. Adding an initializer to a
     * subclass does not add it to a superclass. Since initializers are run in
     * constructors, initializers will run in order of the class hierarchy,
     * starting with superclasses and progressing to the instance's class.
     *
     * @nocollapse
     */
    static addInitializer(initializer) {
        this.__prepare();
        (this._initializers ??= []).push(initializer);
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     * @category attributes
     */
    static get observedAttributes() {
        // Ensure we've created all properties
        this.finalize();
        // this.__attributeToPropertyMap is only undefined after finalize() in
        // ReactiveElement itself. ReactiveElement.observedAttributes is only
        // accessed with ReactiveElement as the receiver when a subclass or mixin
        // calls super.observedAttributes
        return (this.__attributeToPropertyMap && [...this.__attributeToPropertyMap.keys()]);
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a {@linkcode PropertyDeclaration} for the property with the
     * given options. The property setter calls the property's `hasChanged`
     * property option or uses a strict identity check to determine whether or not
     * to request an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * ```ts
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */
    static createProperty(name, options = defaultPropertyDeclaration) {
        // If this is a state property, force the attribute to false.
        if (options.state) {
            options.attribute = false;
        }
        this.__prepare();
        this.elementProperties.set(name, options);
        if (!options.noAccessor) {
            const key = DEV_MODE
                ? // Use Symbol.for in dev mode to make it easier to maintain state
                    // when doing HMR.
                    Symbol.for(`${String(name)} (@property() cache)`)
                : Symbol();
            const descriptor = this.getPropertyDescriptor(name, key, options);
            if (descriptor !== undefined) {
                defineProperty(this.prototype, name, descriptor);
            }
        }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     * ```ts
     * class MyElement extends LitElement {
     *   static getPropertyDescriptor(name, key, options) {
     *     const defaultDescriptor =
     *         super.getPropertyDescriptor(name, key, options);
     *     const setter = defaultDescriptor.set;
     *     return {
     *       get: defaultDescriptor.get,
     *       set(value) {
     *         setter.call(this, value);
     *         // custom action.
     *       },
     *       configurable: true,
     *       enumerable: true
     *     }
     *   }
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */
    static getPropertyDescriptor(name, key, options) {
        const { get, set } = getOwnPropertyDescriptor(this.prototype, name) ?? {
            get() {
                return this[key];
            },
            set(v) {
                this[key] = v;
            },
        };
        if (DEV_MODE && get == null) {
            if ('value' in (getOwnPropertyDescriptor(this.prototype, name) ?? {})) {
                throw new Error(`Field ${JSON.stringify(String(name))} on ` +
                    `${this.name} was declared as a reactive property ` +
                    `but it's actually declared as a value on the prototype. ` +
                    `Usually this is due to using @property or @state on a method.`);
            }
            issueWarning('reactive-property-without-getter', `Field ${JSON.stringify(String(name))} on ` +
                `${this.name} was declared as a reactive property ` +
                `but it does not have a getter. This will be an error in a ` +
                `future version of Lit.`);
        }
        return {
            get() {
                return get?.call(this);
            },
            set(value) {
                const oldValue = get?.call(this);
                set.call(this, value);
                this.requestUpdate(name, oldValue, options);
            },
            configurable: true,
            enumerable: true,
        };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a `PropertyDeclaration` via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override
     * {@linkcode createProperty}.
     *
     * @nocollapse
     * @final
     * @category properties
     */
    static getPropertyOptions(name) {
        return this.elementProperties.get(name) ?? defaultPropertyDeclaration;
    }
    /**
     * Initializes static own properties of the class used in bookkeeping
     * for element properties, initializers, etc.
     *
     * Can be called multiple times by code that needs to ensure these
     * properties exist before using them.
     *
     * This method ensures the superclass is finalized so that inherited
     * property metadata can be copied down.
     * @nocollapse
     */
    static __prepare() {
        if (this.hasOwnProperty(JSCompiler_renameProperty('elementProperties', this))) {
            // Already prepared
            return;
        }
        // Finalize any superclasses
        const superCtor = getPrototypeOf(this);
        superCtor.finalize();
        // Create own set of initializers for this class if any exist on the
        // superclass and copy them down. Note, for a small perf boost, avoid
        // creating initializers unless needed.
        if (superCtor._initializers !== undefined) {
            this._initializers = [...superCtor._initializers];
        }
        // Initialize elementProperties from the superclass
        this.elementProperties = new Map(superCtor.elementProperties);
    }
    /**
     * Finishes setting up the class so that it's ready to be registered
     * as a custom element and instantiated.
     *
     * This method is called by the ReactiveElement.observedAttributes getter.
     * If you override the observedAttributes getter, you must either call
     * super.observedAttributes to trigger finalization, or call finalize()
     * yourself.
     *
     * @nocollapse
     */
    static finalize() {
        if (this.hasOwnProperty(JSCompiler_renameProperty('finalized', this))) {
            return;
        }
        this.finalized = true;
        this.__prepare();
        // Create properties from the static properties block:
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            const propKeys = [
                ...getOwnPropertyNames(props),
                ...getOwnPropertySymbols(props),
            ];
            for (const p of propKeys) {
                this.createProperty(p, props[p]);
            }
        }
        // Create properties from standard decorator metadata:
        const metadata = this[Symbol.metadata];
        if (metadata !== null) {
            const properties = litPropertyMetadata.get(metadata);
            if (properties !== undefined) {
                for (const [p, options] of properties) {
                    this.elementProperties.set(p, options);
                }
            }
        }
        // Create the attribute-to-property map
        this.__attributeToPropertyMap = new Map();
        for (const [p, options] of this.elementProperties) {
            const attr = this.__attributeNameForProperty(p, options);
            if (attr !== undefined) {
                this.__attributeToPropertyMap.set(attr, p);
            }
        }
        this.elementStyles = this.finalizeStyles(this.styles);
        if (DEV_MODE) {
            if (this.hasOwnProperty('createProperty')) {
                issueWarning('no-override-create-property', 'Overriding ReactiveElement.createProperty() is deprecated. ' +
                    'The override will not be called with standard decorators');
            }
            if (this.hasOwnProperty('getPropertyDescriptor')) {
                issueWarning('no-override-get-property-descriptor', 'Overriding ReactiveElement.getPropertyDescriptor() is deprecated. ' +
                    'The override will not be called with standard decorators');
            }
        }
    }
    /**
     * Takes the styles the user supplied via the `static styles` property and
     * returns the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * Styles are deduplicated preserving the _last_ instance in the list. This
     * is a performance optimization to avoid duplicated styles that can occur
     * especially when composing via subclassing. The last item is kept to try
     * to preserve the cascade order with the assumption that it's most important
     * that last added styles override previous styles.
     *
     * @nocollapse
     * @category styles
     */
    static finalizeStyles(styles) {
        const elementStyles = [];
        if (Array.isArray(styles)) {
            // Dedupe the flattened array in reverse order to preserve the last items.
            // Casting to Array<unknown> works around TS error that
            // appears to come from trying to flatten a type CSSResultArray.
            const set = new Set(styles.flat(Infinity).reverse());
            // Then preserve original order by adding the set items in reverse order.
            for (const s of set) {
                elementStyles.unshift((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(s));
            }
        }
        else if (styles !== undefined) {
            elementStyles.push((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(styles));
        }
        return elementStyles;
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */
    static __attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false
            ? undefined
            : typeof attribute === 'string'
                ? attribute
                : typeof name === 'string'
                    ? name.toLowerCase()
                    : undefined;
    }
    constructor() {
        super();
        this.__instanceProperties = undefined;
        /**
         * True if there is a pending update as a result of calling `requestUpdate()`.
         * Should only be read.
         * @category updates
         */
        this.isUpdatePending = false;
        /**
         * Is set to `true` after the first update. The element code cannot assume
         * that `renderRoot` exists before the element `hasUpdated`.
         * @category updates
         */
        this.hasUpdated = false;
        /**
         * Name of currently reflecting property
         */
        this.__reflectingProperty = null;
        this.__initialize();
    }
    /**
     * Internal only override point for customizing work done when elements
     * are constructed.
     */
    __initialize() {
        this.__updatePromise = new Promise((res) => (this.enableUpdating = res));
        this._$changedProperties = new Map();
        // This enqueues a microtask that ust run before the first update, so it
        // must be called before requestUpdate()
        this.__saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this.requestUpdate();
        this.constructor._initializers?.forEach((i) => i(this));
    }
    /**
     * Registers a `ReactiveController` to participate in the element's reactive
     * update cycle. The element automatically calls into any registered
     * controllers during its lifecycle callbacks.
     *
     * If the element is connected when `addController()` is called, the
     * controller's `hostConnected()` callback will be immediately called.
     * @category controllers
     */
    addController(controller) {
        (this.__controllers ??= new Set()).add(controller);
        // If a controller is added after the element has been connected,
        // call hostConnected. Note, re-using existence of `renderRoot` here
        // (which is set in connectedCallback) to avoid the need to track a
        // first connected state.
        if (this.renderRoot !== undefined && this.isConnected) {
            controller.hostConnected?.();
        }
    }
    /**
     * Removes a `ReactiveController` from the element.
     * @category controllers
     */
    removeController(controller) {
        this.__controllers?.delete(controller);
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */
    __saveInstanceProperties() {
        const instanceProperties = new Map();
        const elementProperties = this.constructor
            .elementProperties;
        for (const p of elementProperties.keys()) {
            if (this.hasOwnProperty(p)) {
                instanceProperties.set(p, this[p]);
                delete this[p];
            }
        }
        if (instanceProperties.size > 0) {
            this.__instanceProperties = instanceProperties;
        }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     *
     * @return Returns a node into which to render.
     * @category rendering
     */
    createRenderRoot() {
        const renderRoot = this.shadowRoot ??
            this.attachShadow(this.constructor.shadowRootOptions);
        (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles)(renderRoot, this.constructor.elementStyles);
        return renderRoot;
    }
    /**
     * On first connection, creates the element's renderRoot, sets up
     * element styling, and enables updating.
     * @category lifecycle
     */
    connectedCallback() {
        // Create renderRoot before controllers `hostConnected`
        this.renderRoot ??=
            this.createRenderRoot();
        this.enableUpdating(true);
        this.__controllers?.forEach((c) => c.hostConnected?.());
    }
    /**
     * Note, this method should be considered final and not overridden. It is
     * overridden on the element instance with a function that triggers the first
     * update.
     * @category updates
     */
    enableUpdating(_requestedUpdate) { }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     * @category lifecycle
     */
    disconnectedCallback() {
        this.__controllers?.forEach((c) => c.hostDisconnected?.());
    }
    /**
     * Synchronizes property values when attributes change.
     *
     * Specifically, when an attribute is set, the corresponding property is set.
     * You should rarely need to implement this callback. If this method is
     * overridden, `super.attributeChangedCallback(name, _old, value)` must be
     * called.
     *
     * See [using the lifecycle callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)
     * on MDN for more information about the `attributeChangedCallback`.
     * @category attributes
     */
    attributeChangedCallback(name, _old, value) {
        this._$attributeToProperty(name, value);
    }
    __propertyToAttribute(name, value) {
        const elemProperties = this.constructor.elementProperties;
        const options = elemProperties.get(name);
        const attr = this.constructor.__attributeNameForProperty(name, options);
        if (attr !== undefined && options.reflect === true) {
            const converter = options.converter?.toAttribute !==
                undefined
                ? options.converter
                : defaultConverter;
            const attrValue = converter.toAttribute(value, options.type);
            if (DEV_MODE &&
                this.constructor.enabledWarnings.includes('migration') &&
                attrValue === undefined) {
                issueWarning('undefined-attribute-value', `The attribute value for the ${name} property is ` +
                    `undefined on element ${this.localName}. The attribute will be ` +
                    `removed, but in the previous version of \`ReactiveElement\`, ` +
                    `the attribute would not have changed.`);
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this.__reflectingProperty = name;
            if (attrValue == null) {
                this.removeAttribute(attr);
            }
            else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /** @internal */
    _$attributeToProperty(name, value) {
        const ctor = this.constructor;
        // Note, hint this as an `AttributeMap` so closure clearly understands
        // the type; it has issues with tracking types through statics
        const propName = ctor.__attributeToPropertyMap.get(name);
        // Use tracking info to avoid reflecting a property value to an attribute
        // if it was just set because the attribute changed.
        if (propName !== undefined && this.__reflectingProperty !== propName) {
            const options = ctor.getPropertyOptions(propName);
            const converter = typeof options.converter === 'function'
                ? { fromAttribute: options.converter }
                : options.converter?.fromAttribute !== undefined
                    ? options.converter
                    : defaultConverter;
            // mark state reflecting
            this.__reflectingProperty = propName;
            this[propName] = converter.fromAttribute(value, options.type
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            );
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should be called
     * when an element should update based on some state not triggered by setting
     * a reactive property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored.
     *
     * @param name name of requesting property
     * @param oldValue old value of requesting property
     * @param options property options to use instead of the previously
     *     configured options
     * @category updates
     */
    requestUpdate(name, oldValue, options) {
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            if (DEV_MODE && name instanceof Event) {
                issueWarning(``, `The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()`);
            }
            options ??= this.constructor.getPropertyOptions(name);
            const hasChanged = options.hasChanged ?? notEqual;
            const newValue = this[name];
            if (hasChanged(newValue, oldValue)) {
                this._$changeProperty(name, oldValue, options);
            }
            else {
                // Abort the request if the property should not be considered changed.
                return;
            }
        }
        if (this.isUpdatePending === false) {
            this.__updatePromise = this.__enqueueUpdate();
        }
    }
    /**
     * @internal
     */
    _$changeProperty(name, oldValue, options) {
        // TODO (justinfagnani): Create a benchmark of Map.has() + Map.set(
        // vs just Map.set()
        if (!this._$changedProperties.has(name)) {
            this._$changedProperties.set(name, oldValue);
        }
        // Add to reflecting properties set.
        // Note, it's important that every change has a chance to add the
        // property to `__reflectingProperties`. This ensures setting
        // attribute + property reflects correctly.
        if (options.reflect === true && this.__reflectingProperty !== name) {
            (this.__reflectingProperties ??= new Set()).add(name);
        }
    }
    /**
     * Sets up the element to asynchronously update.
     */
    async __enqueueUpdate() {
        this.isUpdatePending = true;
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await this.__updatePromise;
        }
        catch (e) {
            // Refire any previous errors async so they do not disrupt the update
            // cycle. Errors are refired so developers have a chance to observe
            // them, and this can be done by implementing
            // `window.onunhandledrejection`.
            Promise.reject(e);
        }
        const result = this.scheduleUpdate();
        // If `scheduleUpdate` returns a Promise, we await it. This is done to
        // enable coordinating updates with a scheduler. Note, the result is
        // checked to avoid delaying an additional microtask unless we need to.
        if (result != null) {
            await result;
        }
        return !this.isUpdatePending;
    }
    /**
     * Schedules an element update. You can override this method to change the
     * timing of updates by returning a Promise. The update will await the
     * returned Promise, and you should resolve the Promise to allow the update
     * to proceed. If this method is overridden, `super.scheduleUpdate()`
     * must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```ts
     * override protected async scheduleUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.scheduleUpdate();
     * }
     * ```
     * @category updates
     */
    scheduleUpdate() {
        const result = this.performUpdate();
        if (DEV_MODE &&
            this.constructor.enabledWarnings.includes('async-perform-update') &&
            typeof result?.then ===
                'function') {
            issueWarning('async-perform-update', `Element ${this.localName} returned a Promise from performUpdate(). ` +
                `This behavior is deprecated and will be removed in a future ` +
                `version of ReactiveElement.`);
        }
        return result;
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * Call `performUpdate()` to immediately process a pending update. This should
     * generally not be needed, but it can be done in rare cases when you need to
     * update synchronously.
     *
     * @category updates
     */
    performUpdate() {
        // Abort any update if one is not pending when this is called.
        // This can happen if `performUpdate` is called early to "flush"
        // the update.
        if (!this.isUpdatePending) {
            return;
        }
        debugLogEvent?.({ kind: 'update' });
        if (!this.hasUpdated) {
            // Create renderRoot before first update. This occurs in `connectedCallback`
            // but is done here to support out of tree calls to `enableUpdating`/`performUpdate`.
            this.renderRoot ??=
                this.createRenderRoot();
            if (DEV_MODE) {
                // Produce warning if any reactive properties on the prototype are
                // shadowed by class fields. Instance fields set before upgrade are
                // deleted by this point, so any own property is caused by class field
                // initialization in the constructor.
                const ctor = this.constructor;
                const shadowedProperties = [...ctor.elementProperties.keys()].filter((p) => this.hasOwnProperty(p) && p in getPrototypeOf(this));
                if (shadowedProperties.length) {
                    throw new Error(`The following properties on element ${this.localName} will not ` +
                        `trigger updates as expected because they are set using class ` +
                        `fields: ${shadowedProperties.join(', ')}. ` +
                        `Native class fields and some compiled output will overwrite ` +
                        `accessors used for detecting changes. See ` +
                        `https://lit.dev/msg/class-field-shadowing ` +
                        `for more information.`);
                }
            }
            // Mixin instance properties once, if they exist.
            if (this.__instanceProperties) {
                // TODO (justinfagnani): should we use the stored value? Could a new value
                // have been set since we stored the own property value?
                for (const [p, value] of this.__instanceProperties) {
                    this[p] = value;
                }
                this.__instanceProperties = undefined;
            }
            // Trigger initial value reflection and populate the initial
            // changedProperties map, but only for the case of experimental
            // decorators on accessors, which will not have already populated the
            // changedProperties map. We can't know if these accessors had
            // initializers, so we just set them anyway - a difference from
            // experimental decorators on fields and standard decorators on
            // auto-accessors.
            // For context why experimentalDecorators with auto accessors are handled
            // specifically also see:
            // https://github.com/lit/lit/pull/4183#issuecomment-1711959635
            const elementProperties = this.constructor
                .elementProperties;
            if (elementProperties.size > 0) {
                for (const [p, options] of elementProperties) {
                    if (options.wrapped === true &&
                        !this._$changedProperties.has(p) &&
                        this[p] !== undefined) {
                        this._$changeProperty(p, this[p], options);
                    }
                }
            }
        }
        let shouldUpdate = false;
        const changedProperties = this._$changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.willUpdate(changedProperties);
                this.__controllers?.forEach((c) => c.hostUpdate?.());
                this.update(changedProperties);
            }
            else {
                this.__markUpdated();
            }
        }
        catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            // Ensure element can accept additional updates after an exception.
            this.__markUpdated();
            throw e;
        }
        // The update is no longer considered pending and further updates are now allowed.
        if (shouldUpdate) {
            this._$didUpdate(changedProperties);
        }
    }
    /**
     * Invoked before `update()` to compute values needed during the update.
     *
     * Implement `willUpdate` to compute property values that depend on other
     * properties and are used in the rest of the update process.
     *
     * ```ts
     * willUpdate(changedProperties) {
     *   // only need to check changed properties for an expensive computation.
     *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
     *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
     *   }
     * }
     *
     * render() {
     *   return html`SHA: ${this.sha}`;
     * }
     * ```
     *
     * @category updates
     */
    willUpdate(_changedProperties) { }
    // Note, this is an override point for polyfill-support.
    // @internal
    _$didUpdate(changedProperties) {
        this.__controllers?.forEach((c) => c.hostUpdated?.());
        if (!this.hasUpdated) {
            this.hasUpdated = true;
            this.firstUpdated(changedProperties);
        }
        this.updated(changedProperties);
        if (DEV_MODE &&
            this.isUpdatePending &&
            this.constructor.enabledWarnings.includes('change-in-update')) {
            issueWarning('change-in-update', `Element ${this.localName} scheduled an update ` +
                `(generally because a property was set) ` +
                `after an update completed, causing a new update to be scheduled. ` +
                `This is inefficient and should be avoided unless the next update ` +
                `can only be scheduled as a side effect of the previous update.`);
        }
    }
    __markUpdated() {
        this._$changedProperties = new Map();
        this.isUpdatePending = false;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super.getUpdateComplete()`, then any subsequent state.
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */
    get updateComplete() {
        return this.getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   override async getUpdateComplete() {
     *     const result = await super.getUpdateComplete();
     *     await this._myChild.updateComplete;
     *     return result;
     *   }
     * }
     * ```
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */
    getUpdateComplete() {
        return this.__updatePromise;
    }
    /**
     * Controls whether or not `update()` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    update(_changedProperties) {
        // The forEach() expression will only run when when __reflectingProperties is
        // defined, and it returns undefined, setting __reflectingProperties to
        // undefined
        this.__reflectingProperties &&= this.__reflectingProperties.forEach((p) => this.__propertyToAttribute(p, this[p]));
        this.__markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    updated(_changedProperties) { }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * ```ts
     * firstUpdated() {
     *   this.renderRoot.getElementById('my-text-area').focus();
     * }
     * ```
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    firstUpdated(_changedProperties) { }
}
/**
 * Memoized list of all element styles.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category styles
 */
ReactiveElement.elementStyles = [];
/**
 * Options used when calling `attachShadow`. Set this property to customize
 * the options for the shadowRoot; for example, to create a closed
 * shadowRoot: `{mode: 'closed'}`.
 *
 * Note, these options are used in `createRenderRoot`. If this method
 * is customized, options should be respected if possible.
 * @nocollapse
 * @category rendering
 */
ReactiveElement.shadowRootOptions = { mode: 'open' };
// Assigned here to work around a jscompiler bug with static fields
// when compiling to ES5.
// https://github.com/google/closure-compiler/issues/3177
ReactiveElement[JSCompiler_renameProperty('elementProperties', ReactiveElement)] = new Map();
ReactiveElement[JSCompiler_renameProperty('finalized', ReactiveElement)] = new Map();
// Apply polyfills if available
polyfillSupport?.({ ReactiveElement });
// Dev mode warnings...
if (DEV_MODE) {
    // Default warning set.
    ReactiveElement.enabledWarnings = [
        'change-in-update',
        'async-perform-update',
    ];
    const ensureOwnWarnings = function (ctor) {
        if (!ctor.hasOwnProperty(JSCompiler_renameProperty('enabledWarnings', ctor))) {
            ctor.enabledWarnings = ctor.enabledWarnings.slice();
        }
    };
    ReactiveElement.enableWarning = function (warning) {
        ensureOwnWarnings(this);
        if (!this.enabledWarnings.includes(warning)) {
            this.enabledWarnings.push(warning);
        }
    };
    ReactiveElement.disableWarning = function (warning) {
        ensureOwnWarnings(this);
        const i = this.enabledWarnings.indexOf(warning);
        if (i >= 0) {
            this.enabledWarnings.splice(i, 1);
        }
    };
}
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for ReactiveElement usage.
(global.reactiveElementVersions ??= []).push('2.0.4');
if (DEV_MODE && global.reactiveElementVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` +
        `is not recommended.`);
}
//# sourceMappingURL=reactive-element.js.map

/***/ }),

/***/ "./node_modules/lit-element/development/lit-element.js":
/*!*************************************************************!*\
  !*** ./node_modules/lit-element/development/lit-element.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   LitElement: () => (/* binding */ LitElement),
/* harmony export */   ReactiveElement: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement),
/* harmony export */   _$LE: () => (/* binding */ _$LE),
/* harmony export */   _$LH: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__._$LH),
/* harmony export */   adoptStyles: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   css: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   defaultConverter: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.defaultConverter),
/* harmony export */   getCompatibleStyle: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   html: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.html),
/* harmony export */   mathml: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.mathml),
/* harmony export */   noChange: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange),
/* harmony export */   notEqual: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.notEqual),
/* harmony export */   nothing: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.nothing),
/* harmony export */   render: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   svg: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.svg),
/* harmony export */   unsafeCSS: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * The main LitElement module, which defines the {@linkcode LitElement} base
 * class and related APIs.
 *
 * LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 * Import {@linkcode LitElement} and {@linkcode html} from this module to
 * create a component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends {@linkcode ReactiveElement} and adds lit-html
 * templating. The `ReactiveElement` class is provided for users that want to
 * build their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */




/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
/*@__INLINE__*/
const JSCompiler_renameProperty = (prop, _obj) => prop;
const DEV_MODE = true;
let issueWarning;
if (DEV_MODE) {
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    const issuedWarnings = (globalThis.litIssuedWarnings ??= new Set());
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += ` See https://lit.dev/msg/${code} for more information.`;
        if (!issuedWarnings.has(warning)) {
            console.warn(warning);
            issuedWarnings.add(warning);
        }
    };
}
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the {@linkcode LitElement.properties properties} property or the
 * {@linkcode property} decorator.
 */
class LitElement extends _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement {
    constructor() {
        super(...arguments);
        /**
         * @category rendering
         */
        this.renderOptions = { host: this };
        this.__childPart = undefined;
    }
    /**
     * @category rendering
     */
    createRenderRoot() {
        const renderRoot = super.createRenderRoot();
        // When adoptedStyleSheets are shimmed, they are inserted into the
        // shadowRoot by createRenderRoot. Adjust the renderBefore node so that
        // any styles in Lit content render before adoptedStyleSheets. This is
        // important so that adoptedStyleSheets have precedence over styles in
        // the shadowRoot.
        this.renderOptions.renderBefore ??= renderRoot.firstChild;
        return renderRoot;
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param changedProperties Map of changed properties with old values
     * @category updates
     */
    update(changedProperties) {
        // Setting properties in `render` should not trigger an update. Since
        // updates are allowed after super.update, it's important to call `render`
        // before that.
        const value = this.render();
        if (!this.hasUpdated) {
            this.renderOptions.isConnected = this.isConnected;
        }
        super.update(changedProperties);
        this.__childPart = (0,lit_html__WEBPACK_IMPORTED_MODULE_1__.render)(value, this.renderRoot, this.renderOptions);
    }
    /**
     * Invoked when the component is added to the document's DOM.
     *
     * In `connectedCallback()` you should setup tasks that should only occur when
     * the element is connected to the document. The most common of these is
     * adding event listeners to nodes external to the element, like a keydown
     * event handler added to the window.
     *
     * ```ts
     * connectedCallback() {
     *   super.connectedCallback();
     *   addEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * Typically, anything done in `connectedCallback()` should be undone when the
     * element is disconnected, in `disconnectedCallback()`.
     *
     * @category lifecycle
     */
    connectedCallback() {
        super.connectedCallback();
        this.__childPart?.setConnected(true);
    }
    /**
     * Invoked when the component is removed from the document's DOM.
     *
     * This callback is the main signal to the element that it may no longer be
     * used. `disconnectedCallback()` should ensure that nothing is holding a
     * reference to the element (such as event listeners added to nodes external
     * to the element), so that it is free to be garbage collected.
     *
     * ```ts
     * disconnectedCallback() {
     *   super.disconnectedCallback();
     *   window.removeEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * An element may be re-connected after being disconnected.
     *
     * @category lifecycle
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.__childPart?.setConnected(false);
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `ChildPart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     * @category rendering
     */
    render() {
        return lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange;
    }
}
// This property needs to remain unminified.
LitElement['_$litElement$'] = true;
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See @lit/reactive-element for more information.
 */
LitElement[JSCompiler_renameProperty('finalized', LitElement)] = true;
// Install hydration if available
globalThis.litElementHydrateSupport?.({ LitElement });
// Apply polyfills if available
const polyfillSupport = DEV_MODE
    ? globalThis.litElementPolyfillSupportDevMode
    : globalThis.litElementPolyfillSupport;
polyfillSupport?.({ LitElement });
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LE object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-html, since this module re-exports all of lit-html.
 *
 * @private
 */
const _$LE = {
    _$attributeToProperty: (el, name, value) => {
        // eslint-disable-next-line
        el._$attributeToProperty(name, value);
    },
    // eslint-disable-next-line
    _$changedProperties: (el) => el._$changedProperties,
};
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
(globalThis.litElementVersions ??= []).push('4.1.0');
if (DEV_MODE && globalThis.litElementVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` +
        `is not recommended.`);
}
//# sourceMappingURL=lit-element.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directive.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/development/directive.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Directive: () => (/* binding */ Directive),
/* harmony export */   PartType: () => (/* binding */ PartType),
/* harmony export */   directive: () => (/* binding */ directive)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const PartType = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
};
/**
 * Creates a user-facing directive function from a Directive class. This
 * function has the same parameters as the directive's render() method.
 */
const directive = (c) => (...values) => ({
    // This property needs to remain unminified.
    ['_$litDirective$']: c,
    values,
});
/**
 * Base class for creating custom directives. Users should extend this class,
 * implement `render` and/or `update`, and then pass their subclass to
 * `directive`.
 */
class Directive {
    constructor(_partInfo) { }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    /** @internal */
    _$initialize(part, parent, attributeIndex) {
        this.__part = part;
        this._$parent = parent;
        this.__attributeIndex = attributeIndex;
    }
    /** @internal */
    _$resolve(part, props) {
        return this.update(part, props);
    }
    update(_part, props) {
        return this.render(...props);
    }
}
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directives/unsafe-html.js":
/*!*********************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/unsafe-html.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsafeHTMLDirective: () => (/* binding */ UnsafeHTMLDirective),
/* harmony export */   unsafeHTML: () => (/* binding */ unsafeHTML)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


const HTML_RESULT = 1;
class UnsafeHTMLDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
    constructor(partInfo) {
        super(partInfo);
        this._value = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
        if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.CHILD) {
            throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`);
        }
    }
    render(value) {
        if (value === _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing || value == null) {
            this._templateResult = undefined;
            return (this._value = value);
        }
        if (value === _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange) {
            return value;
        }
        if (typeof value != 'string') {
            throw new Error(`${this.constructor.directiveName}() called with a non-string value`);
        }
        if (value === this._value) {
            return this._templateResult;
        }
        this._value = value;
        const strings = [value];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        strings.raw = strings;
        // WARNING: impersonating a TemplateResult like this is extremely
        // dangerous. Third-party directives should not do this.
        return (this._templateResult = {
            // Cast to a known set of integers that satisfy ResultType so that we
            // don't have to export ResultType and possibly encourage this pattern.
            // This property needs to remain unminified.
            ['_$litType$']: this.constructor
                .resultType,
            strings,
            values: [],
        });
    }
}
UnsafeHTMLDirective.directiveName = 'unsafeHTML';
UnsafeHTMLDirective.resultType = HTML_RESULT;
/**
 * Renders the result as HTML, rather than text.
 *
 * The values `undefined`, `null`, and `nothing`, will all result in no content
 * (empty string) being rendered.
 *
 * Note, this is unsafe to use with any user-provided input that hasn't been
 * sanitized or escaped, as it may lead to cross-site-scripting
 * vulnerabilities.
 */
const unsafeHTML = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(UnsafeHTMLDirective);
//# sourceMappingURL=unsafe-html.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/is-server.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/development/is-server.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isServer: () => (/* binding */ isServer)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @fileoverview
 *
 * This file exports a boolean const whose value will depend on what environment
 * the module is being imported from.
 */
const NODE_MODE = false;
/**
 * A boolean that will be `true` in server environments like Node, and `false`
 * in browser environments. Note that your server environment or toolchain must
 * support the `"node"` export condition for this to be `true`.
 *
 * This can be used when authoring components to change behavior based on
 * whether or not the component is executing in an SSR context.
 */
const isServer = NODE_MODE;
//# sourceMappingURL=is-server.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/lit-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/development/lit-html.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _$LH: () => (/* binding */ _$LH),
/* harmony export */   html: () => (/* binding */ html),
/* harmony export */   mathml: () => (/* binding */ mathml),
/* harmony export */   noChange: () => (/* binding */ noChange),
/* harmony export */   nothing: () => (/* binding */ nothing),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   svg: () => (/* binding */ svg)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const DEV_MODE = true;
const ENABLE_EXTRA_SECURITY_HOOKS = true;
const ENABLE_SHADYDOM_NOPATCH = true;
const NODE_MODE = false;
// Allows minifiers to rename references to globalThis
const global = globalThis;
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
const debugLogEvent = DEV_MODE
    ? (event) => {
        const shouldEmit = global
            .emitLitDebugLogEvents;
        if (!shouldEmit) {
            return;
        }
        global.dispatchEvent(new CustomEvent('lit-debug', {
            detail: event,
        }));
    }
    : undefined;
// Used for connecting beginRender and endRender events when there are nested
// renders when errors are thrown preventing an endRender event from being
// called.
let debugLogRenderId = 0;
let issueWarning;
if (DEV_MODE) {
    global.litIssuedWarnings ??= new Set();
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += code
            ? ` See https://lit.dev/msg/${code} for more information.`
            : '';
        if (!global.litIssuedWarnings.has(warning)) {
            console.warn(warning);
            global.litIssuedWarnings.add(warning);
        }
    };
    issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
}
const wrap = ENABLE_SHADYDOM_NOPATCH &&
    global.ShadyDOM?.inUse &&
    global.ShadyDOM?.noPatch === true
    ? global.ShadyDOM.wrap
    : (node) => node;
const trustedTypes = global.trustedTypes;
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
const policy = trustedTypes
    ? trustedTypes.createPolicy('lit-html', {
        createHTML: (s) => s,
    })
    : undefined;
const identityFunction = (value) => value;
const noopSanitizer = (_node, _name, _type) => identityFunction;
/** Sets the global sanitizer factory. */
const setSanitizer = (newSanitizer) => {
    if (!ENABLE_EXTRA_SECURITY_HOOKS) {
        return;
    }
    if (sanitizerFactoryInternal !== noopSanitizer) {
        throw new Error(`Attempted to overwrite existing lit-html security policy.` +
            ` setSanitizeDOMValueFactory should be called at most once.`);
    }
    sanitizerFactoryInternal = newSanitizer;
};
/**
 * Only used in internal tests, not a part of the public API.
 */
const _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
    sanitizerFactoryInternal = noopSanitizer;
};
const createSanitizer = (node, name, type) => {
    return sanitizerFactoryInternal(node, name, type);
};
// Added to an attribute name to mark the attribute as bound so we can find
// it easily.
const boundAttributeSuffix = '$lit$';
// This marker is used in many syntactic positions in HTML, so it must be
// a valid element name and attribute name. We don't support dynamic names (yet)
// but this at least ensures that the parse tree is closer to the template
// intention.
const marker = `lit$${Math.random().toFixed(9).slice(2)}$`;
// String used to tell if a comment is a marker comment
const markerMatch = '?' + marker;
// Text used to insert a comment marker node. We use processing instruction
// syntax because it's slightly smaller, but parses as a comment node.
const nodeMarker = `<${markerMatch}>`;
const d = NODE_MODE && global.document === undefined
    ? {
        createTreeWalker() {
            return {};
        },
    }
    : document;
// Creates a dynamic marker. We never have to search for these in the DOM.
const createMarker = () => d.createComment('');
const isPrimitive = (value) => value === null || (typeof value != 'object' && typeof value != 'function');
const isArray = Array.isArray;
const isIterable = (value) => isArray(value) ||
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof value?.[Symbol.iterator] === 'function';
const SPACE_CHAR = `[ \t\n\f\r]`;
const ATTR_VALUE_CHAR = `[^ \t\n\f\r"'\`<>=]`;
const NAME_CHAR = `[^\\s"'>=/]`;
// These regexes represent the five parsing states that we care about in the
// Template's HTML scanner. They match the *end* of the state they're named
// after.
// Depending on the match, we transition to a new state. If there's no match,
// we stay in the same state.
// Note that the regexes are stateful. We utilize lastIndex and sync it
// across the multiple regexes used. In addition to the five regexes below
// we also dynamically create a regex to find the matching end tags for raw
// text elements.
/**
 * End of text is: `<` followed by:
 *   (comment start) or (tag) or (dynamic tag binding)
 */
const textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
const COMMENT_START = 1;
const TAG_NAME = 2;
const DYNAMIC_TAG_NAME = 3;
const commentEndRegex = /-->/g;
/**
 * Comments not started with <!--, like </{, can be ended by a single `>`
 */
const comment2EndRegex = />/g;
/**
 * The tagEnd regex matches the end of the "inside an opening" tag syntax
 * position. It either matches a `>`, an attribute-like sequence, or the end
 * of the string after a space (attribute-name position ending).
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \t\n\f\r" are HTML space characters:
 * https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * So an attribute is:
 *  * The name: any character except a whitespace character, ("), ('), ">",
 *    "=", or "/". Note: this is different from the HTML spec which also excludes control characters.
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, 'g');
const ENTIRE_MATCH = 0;
const ATTRIBUTE_NAME = 1;
const SPACES_AND_EQUALS = 2;
const QUOTE_CHAR = 3;
const singleQuoteAttrEndRegex = /'/g;
const doubleQuoteAttrEndRegex = /"/g;
/**
 * Matches the raw text elements.
 *
 * Comments are not parsed within raw text elements, so we need to search their
 * text content for marker strings.
 */
const rawTextElement = /^(?:script|style|textarea|title)$/i;
/** TemplateResult types */
const HTML_RESULT = 1;
const SVG_RESULT = 2;
const MATHML_RESULT = 3;
// TemplatePart types
// IMPORTANT: these must match the values in PartType
const ATTRIBUTE_PART = 1;
const CHILD_PART = 2;
const PROPERTY_PART = 3;
const BOOLEAN_ATTRIBUTE_PART = 4;
const EVENT_PART = 5;
const ELEMENT_PART = 6;
const COMMENT_PART = 7;
/**
 * Generates a template literal tag function that returns a TemplateResult with
 * the given result type.
 */
const tag = (type) => (strings, ...values) => {
    // Warn against templates octal escape sequences
    // We do this here rather than in render so that the warning is closer to the
    // template definition.
    if (DEV_MODE && strings.some((s) => s === undefined)) {
        console.warn('Some template strings are undefined.\n' +
            'This is probably caused by illegal octal escape sequences.');
    }
    if (DEV_MODE) {
        // Import static-html.js results in a circular dependency which g3 doesn't
        // handle. Instead we know that static values must have the field
        // `_$litStatic$`.
        if (values.some((val) => val?.['_$litStatic$'])) {
            issueWarning('', `Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.\n` +
                `Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);
        }
    }
    return {
        // This property needs to remain unminified.
        ['_$litType$']: type,
        strings,
        values,
    };
};
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const header = (title: string) => html`<h1>${title}</h1>`;
 * ```
 *
 * The `html` tag returns a description of the DOM to render as a value. It is
 * lazy, meaning no work is done until the template is rendered. When rendering,
 * if a template comes from the same expression as a previously rendered result,
 * it's efficiently updated instead of replaced.
 */
const html = tag(HTML_RESULT);
/**
 * Interprets a template literal as an SVG fragment that can efficiently render
 * to and update a container.
 *
 * ```ts
 * const rect = svg`<rect width="10" height="10"></rect>`;
 *
 * const myImage = html`
 *   <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
 *     ${rect}
 *   </svg>`;
 * ```
 *
 * The `svg` *tag function* should only be used for SVG fragments, or elements
 * that would be contained **inside** an `<svg>` HTML element. A common error is
 * placing an `<svg>` *element* in a template tagged with the `svg` tag
 * function. The `<svg>` element is an HTML element and should be used within a
 * template tagged with the {@linkcode html} tag function.
 *
 * In LitElement usage, it's invalid to return an SVG fragment from the
 * `render()` method, as the SVG fragment will be contained within the element's
 * shadow root and thus not be properly contained within an `<svg>` HTML
 * element.
 */
const svg = tag(SVG_RESULT);
/**
 * Interprets a template literal as MathML fragment that can efficiently render
 * to and update a container.
 *
 * ```ts
 * const num = mathml`<mn>1</mn>`;
 *
 * const eq = html`
 *   <math>
 *     ${num}
 *   </math>`;
 * ```
 *
 * The `mathml` *tag function* should only be used for MathML fragments, or
 * elements that would be contained **inside** a `<math>` HTML element. A common
 * error is placing a `<math>` *element* in a template tagged with the `mathml`
 * tag function. The `<math>` element is an HTML element and should be used
 * within a template tagged with the {@linkcode html} tag function.
 *
 * In LitElement usage, it's invalid to return an MathML fragment from the
 * `render()` method, as the MathML fragment will be contained within the
 * element's shadow root and thus not be properly contained within a `<math>`
 * HTML element.
 */
const mathml = tag(MATHML_RESULT);
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = Symbol.for('lit-noChange');
/**
 * A sentinel value that signals a ChildPart to fully clear its content.
 *
 * ```ts
 * const button = html`${
 *  user.isAdmin
 *    ? html`<button>DELETE</button>`
 *    : nothing
 * }`;
 * ```
 *
 * Prefer using `nothing` over other falsy values as it provides a consistent
 * behavior between various expression binding contexts.
 *
 * In child expressions, `undefined`, `null`, `''`, and `nothing` all behave the
 * same and render no nodes. In attribute expressions, `nothing` _removes_ the
 * attribute, while `undefined` and `null` will render an empty string. In
 * property expressions `nothing` becomes `undefined`.
 */
const nothing = Symbol.for('lit-nothing');
/**
 * The cache of prepared templates, keyed by the tagged TemplateStringsArray
 * and _not_ accounting for the specific template tag used. This means that
 * template tags cannot be dynamic - they must statically be one of html, svg,
 * or attr. This restriction simplifies the cache lookup, which is on the hot
 * path for rendering.
 */
const templateCache = new WeakMap();
const walker = d.createTreeWalker(d, 129 /* NodeFilter.SHOW_{ELEMENT|COMMENT} */);
let sanitizerFactoryInternal = noopSanitizer;
function trustFromTemplateString(tsa, stringFromTSA) {
    // A security check to prevent spoofing of Lit template results.
    // In the future, we may be able to replace this with Array.isTemplateObject,
    // though we might need to make that check inside of the html and svg
    // functions, because precompiled templates don't come in as
    // TemplateStringArray objects.
    if (!isArray(tsa) || !tsa.hasOwnProperty('raw')) {
        let message = 'invalid template strings array';
        if (DEV_MODE) {
            message = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `
                .trim()
                .replace(/\n */g, '\n');
        }
        throw new Error(message);
    }
    return policy !== undefined
        ? policy.createHTML(stringFromTSA)
        : stringFromTSA;
}
/**
 * Returns an HTML string for the given TemplateStringsArray and result type
 * (HTML or SVG), along with the case-sensitive bound attribute names in
 * template order. The HTML contains comment markers denoting the `ChildPart`s
 * and suffixes on bound attributes denoting the `AttributeParts`.
 *
 * @param strings template strings array
 * @param type HTML or SVG
 * @return Array containing `[html, attrNames]` (array returned for terseness,
 *     to avoid object fields since this code is shared with non-minified SSR
 *     code)
 */
const getTemplateHtml = (strings, type) => {
    // Insert makers into the template HTML to represent the position of
    // bindings. The following code scans the template strings to determine the
    // syntactic position of the bindings. They can be in text position, where
    // we insert an HTML comment, attribute value position, where we insert a
    // sentinel string and re-write the attribute name, or inside a tag where
    // we insert the sentinel string.
    const l = strings.length - 1;
    // Stores the case-sensitive bound attribute names in the order of their
    // parts. ElementParts are also reflected in this array as undefined
    // rather than a string, to disambiguate from attribute bindings.
    const attrNames = [];
    let html = type === SVG_RESULT ? '<svg>' : type === MATHML_RESULT ? '<math>' : '';
    // When we're inside a raw text tag (not it's text content), the regex
    // will still be tagRegex so we can find attributes, but will switch to
    // this regex when the tag ends.
    let rawTextEndRegex;
    // The current parsing state, represented as a reference to one of the
    // regexes
    let regex = textEndRegex;
    for (let i = 0; i < l; i++) {
        const s = strings[i];
        // The index of the end of the last attribute name. When this is
        // positive at end of a string, it means we're in an attribute value
        // position and need to rewrite the attribute name.
        // We also use a special value of -2 to indicate that we encountered
        // the end of a string in attribute name position.
        let attrNameEndIndex = -1;
        let attrName;
        let lastIndex = 0;
        let match;
        // The conditions in this loop handle the current parse state, and the
        // assignments to the `regex` variable are the state transitions.
        while (lastIndex < s.length) {
            // Make sure we start searching from where we previously left off
            regex.lastIndex = lastIndex;
            match = regex.exec(s);
            if (match === null) {
                break;
            }
            lastIndex = regex.lastIndex;
            if (regex === textEndRegex) {
                if (match[COMMENT_START] === '!--') {
                    regex = commentEndRegex;
                }
                else if (match[COMMENT_START] !== undefined) {
                    // We started a weird comment, like </{
                    regex = comment2EndRegex;
                }
                else if (match[TAG_NAME] !== undefined) {
                    if (rawTextElement.test(match[TAG_NAME])) {
                        // Record if we encounter a raw-text element. We'll switch to
                        // this regex at the end of the tag.
                        rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, 'g');
                    }
                    regex = tagEndRegex;
                }
                else if (match[DYNAMIC_TAG_NAME] !== undefined) {
                    if (DEV_MODE) {
                        throw new Error('Bindings in tag names are not supported. Please use static templates instead. ' +
                            'See https://lit.dev/docs/templates/expressions/#static-expressions');
                    }
                    regex = tagEndRegex;
                }
            }
            else if (regex === tagEndRegex) {
                if (match[ENTIRE_MATCH] === '>') {
                    // End of a tag. If we had started a raw-text element, use that
                    // regex
                    regex = rawTextEndRegex ?? textEndRegex;
                    // We may be ending an unquoted attribute value, so make sure we
                    // clear any pending attrNameEndIndex
                    attrNameEndIndex = -1;
                }
                else if (match[ATTRIBUTE_NAME] === undefined) {
                    // Attribute name position
                    attrNameEndIndex = -2;
                }
                else {
                    attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
                    attrName = match[ATTRIBUTE_NAME];
                    regex =
                        match[QUOTE_CHAR] === undefined
                            ? tagEndRegex
                            : match[QUOTE_CHAR] === '"'
                                ? doubleQuoteAttrEndRegex
                                : singleQuoteAttrEndRegex;
                }
            }
            else if (regex === doubleQuoteAttrEndRegex ||
                regex === singleQuoteAttrEndRegex) {
                regex = tagEndRegex;
            }
            else if (regex === commentEndRegex || regex === comment2EndRegex) {
                regex = textEndRegex;
            }
            else {
                // Not one of the five state regexes, so it must be the dynamically
                // created raw text regex and we're at the close of that element.
                regex = tagEndRegex;
                rawTextEndRegex = undefined;
            }
        }
        if (DEV_MODE) {
            // If we have a attrNameEndIndex, which indicates that we should
            // rewrite the attribute name, assert that we're in a valid attribute
            // position - either in a tag, or a quoted attribute value.
            console.assert(attrNameEndIndex === -1 ||
                regex === tagEndRegex ||
                regex === singleQuoteAttrEndRegex ||
                regex === doubleQuoteAttrEndRegex, 'unexpected parse state B');
        }
        // We have four cases:
        //  1. We're in text position, and not in a raw text element
        //     (regex === textEndRegex): insert a comment marker.
        //  2. We have a non-negative attrNameEndIndex which means we need to
        //     rewrite the attribute name to add a bound attribute suffix.
        //  3. We're at the non-first binding in a multi-binding attribute, use a
        //     plain marker.
        //  4. We're somewhere else inside the tag. If we're in attribute name
        //     position (attrNameEndIndex === -2), add a sequential suffix to
        //     generate a unique attribute name.
        // Detect a binding next to self-closing tag end and insert a space to
        // separate the marker from the tag end:
        const end = regex === tagEndRegex && strings[i + 1].startsWith('/>') ? ' ' : '';
        html +=
            regex === textEndRegex
                ? s + nodeMarker
                : attrNameEndIndex >= 0
                    ? (attrNames.push(attrName),
                        s.slice(0, attrNameEndIndex) +
                            boundAttributeSuffix +
                            s.slice(attrNameEndIndex)) +
                        marker +
                        end
                    : s + marker + (attrNameEndIndex === -2 ? i : end);
    }
    const htmlResult = html +
        (strings[l] || '<?>') +
        (type === SVG_RESULT ? '</svg>' : type === MATHML_RESULT ? '</math>' : '');
    // Returned as an array for terseness
    return [trustFromTemplateString(strings, htmlResult), attrNames];
};
class Template {
    constructor(
    // This property needs to remain unminified.
    { strings, ['_$litType$']: type }, options) {
        this.parts = [];
        let node;
        let nodeIndex = 0;
        let attrNameIndex = 0;
        const partCount = strings.length - 1;
        const parts = this.parts;
        // Create template element
        const [html, attrNames] = getTemplateHtml(strings, type);
        this.el = Template.createElement(html, options);
        walker.currentNode = this.el.content;
        // Re-parent SVG or MathML nodes into template root
        if (type === SVG_RESULT || type === MATHML_RESULT) {
            const wrapper = this.el.content.firstChild;
            wrapper.replaceWith(...wrapper.childNodes);
        }
        // Walk the template to find binding markers and create TemplateParts
        while ((node = walker.nextNode()) !== null && parts.length < partCount) {
            if (node.nodeType === 1) {
                if (DEV_MODE) {
                    const tag = node.localName;
                    // Warn if `textarea` includes an expression and throw if `template`
                    // does since these are not supported. We do this by checking
                    // innerHTML for anything that looks like a marker. This catches
                    // cases like bindings in textarea there markers turn into text nodes.
                    if (/^(?:textarea|template)$/i.test(tag) &&
                        node.innerHTML.includes(marker)) {
                        const m = `Expressions are not supported inside \`${tag}\` ` +
                            `elements. See https://lit.dev/msg/expression-in-${tag} for more ` +
                            `information.`;
                        if (tag === 'template') {
                            throw new Error(m);
                        }
                        else
                            issueWarning('', m);
                    }
                }
                // TODO (justinfagnani): for attempted dynamic tag names, we don't
                // increment the bindingIndex, and it'll be off by 1 in the element
                // and off by two after it.
                if (node.hasAttributes()) {
                    for (const name of node.getAttributeNames()) {
                        if (name.endsWith(boundAttributeSuffix)) {
                            const realName = attrNames[attrNameIndex++];
                            const value = node.getAttribute(name);
                            const statics = value.split(marker);
                            const m = /([.?@])?(.*)/.exec(realName);
                            parts.push({
                                type: ATTRIBUTE_PART,
                                index: nodeIndex,
                                name: m[2],
                                strings: statics,
                                ctor: m[1] === '.'
                                    ? PropertyPart
                                    : m[1] === '?'
                                        ? BooleanAttributePart
                                        : m[1] === '@'
                                            ? EventPart
                                            : AttributePart,
                            });
                            node.removeAttribute(name);
                        }
                        else if (name.startsWith(marker)) {
                            parts.push({
                                type: ELEMENT_PART,
                                index: nodeIndex,
                            });
                            node.removeAttribute(name);
                        }
                    }
                }
                // TODO (justinfagnani): benchmark the regex against testing for each
                // of the 3 raw text element names.
                if (rawTextElement.test(node.tagName)) {
                    // For raw text elements we need to split the text content on
                    // markers, create a Text node for each segment, and create
                    // a TemplatePart for each marker.
                    const strings = node.textContent.split(marker);
                    const lastIndex = strings.length - 1;
                    if (lastIndex > 0) {
                        node.textContent = trustedTypes
                            ? trustedTypes.emptyScript
                            : '';
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for node parts
                        // We can't use empty text nodes as markers because they're
                        // normalized when cloning in IE (could simplify when
                        // IE is no longer supported)
                        for (let i = 0; i < lastIndex; i++) {
                            node.append(strings[i], createMarker());
                            // Walk past the marker node we just added
                            walker.nextNode();
                            parts.push({ type: CHILD_PART, index: ++nodeIndex });
                        }
                        // Note because this marker is added after the walker's current
                        // node, it will be walked to in the outer loop (and ignored), so
                        // we don't need to adjust nodeIndex here
                        node.append(strings[lastIndex], createMarker());
                    }
                }
            }
            else if (node.nodeType === 8) {
                const data = node.data;
                if (data === markerMatch) {
                    parts.push({ type: CHILD_PART, index: nodeIndex });
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        parts.push({ type: COMMENT_PART, index: nodeIndex });
                        // Move to the end of the match
                        i += marker.length - 1;
                    }
                }
            }
            nodeIndex++;
        }
        if (DEV_MODE) {
            // If there was a duplicate attribute on a tag, then when the tag is
            // parsed into an element the attribute gets de-duplicated. We can detect
            // this mismatch if we haven't precisely consumed every attribute name
            // when preparing the template. This works because `attrNames` is built
            // from the template string and `attrNameIndex` comes from processing the
            // resulting DOM.
            if (attrNames.length !== attrNameIndex) {
                throw new Error(`Detected duplicate attribute bindings. This occurs if your template ` +
                    `has duplicate attributes on an element tag. For example ` +
                    `"<input ?disabled=\${true} ?disabled=\${false}>" contains a ` +
                    `duplicate "disabled" attribute. The error was detected in ` +
                    `the following template: \n` +
                    '`' +
                    strings.join('${...}') +
                    '`');
            }
        }
        // We could set walker.currentNode to another node here to prevent a memory
        // leak, but every time we prepare a template, we immediately render it
        // and re-use the walker in new TemplateInstance._clone().
        debugLogEvent &&
            debugLogEvent({
                kind: 'template prep',
                template: this,
                clonableTemplate: this.el,
                parts: this.parts,
                strings,
            });
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @nocollapse */
    static createElement(html, _options) {
        const el = d.createElement('template');
        el.innerHTML = html;
        return el;
    }
}
function resolveDirective(part, value, parent = part, attributeIndex) {
    // Bail early if the value is explicitly noChange. Note, this means any
    // nested directive is still attached and is not run.
    if (value === noChange) {
        return value;
    }
    let currentDirective = attributeIndex !== undefined
        ? parent.__directives?.[attributeIndex]
        : parent.__directive;
    const nextDirectiveConstructor = isPrimitive(value)
        ? undefined
        : // This property needs to remain unminified.
            value['_$litDirective$'];
    if (currentDirective?.constructor !== nextDirectiveConstructor) {
        // This property needs to remain unminified.
        currentDirective?.['_$notifyDirectiveConnectionChanged']?.(false);
        if (nextDirectiveConstructor === undefined) {
            currentDirective = undefined;
        }
        else {
            currentDirective = new nextDirectiveConstructor(part);
            currentDirective._$initialize(part, parent, attributeIndex);
        }
        if (attributeIndex !== undefined) {
            (parent.__directives ??= [])[attributeIndex] =
                currentDirective;
        }
        else {
            parent.__directive = currentDirective;
        }
    }
    if (currentDirective !== undefined) {
        value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
    }
    return value;
}
/**
 * An updateable instance of a Template. Holds references to the Parts used to
 * update the template instance.
 */
class TemplateInstance {
    constructor(template, parent) {
        this._$parts = [];
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$template = template;
        this._$parent = parent;
    }
    // Called by ChildPart parentNode getter
    get parentNode() {
        return this._$parent.parentNode;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    // This method is separate from the constructor because we need to return a
    // DocumentFragment and we don't want to hold onto it with an instance field.
    _clone(options) {
        const { el: { content }, parts: parts, } = this._$template;
        const fragment = (options?.creationScope ?? d).importNode(content, true);
        walker.currentNode = fragment;
        let node = walker.nextNode();
        let nodeIndex = 0;
        let partIndex = 0;
        let templatePart = parts[0];
        while (templatePart !== undefined) {
            if (nodeIndex === templatePart.index) {
                let part;
                if (templatePart.type === CHILD_PART) {
                    part = new ChildPart(node, node.nextSibling, this, options);
                }
                else if (templatePart.type === ATTRIBUTE_PART) {
                    part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
                }
                else if (templatePart.type === ELEMENT_PART) {
                    part = new ElementPart(node, this, options);
                }
                this._$parts.push(part);
                templatePart = parts[++partIndex];
            }
            if (nodeIndex !== templatePart?.index) {
                node = walker.nextNode();
                nodeIndex++;
            }
        }
        // We need to set the currentNode away from the cloned tree so that we
        // don't hold onto the tree even if the tree is detached and should be
        // freed.
        walker.currentNode = d;
        return fragment;
    }
    _update(values) {
        let i = 0;
        for (const part of this._$parts) {
            if (part !== undefined) {
                debugLogEvent &&
                    debugLogEvent({
                        kind: 'set part',
                        part,
                        value: values[i],
                        valueIndex: i,
                        values,
                        templateInstance: this,
                    });
                if (part.strings !== undefined) {
                    part._$setValue(values, part, i);
                    // The number of values the part consumes is part.strings.length - 1
                    // since values are in between template spans. We increment i by 1
                    // later in the loop, so increment it by part.strings.length - 2 here
                    i += part.strings.length - 2;
                }
                else {
                    part._$setValue(values[i]);
                }
            }
            i++;
        }
    }
}
class ChildPart {
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        // ChildParts that are not at the root should always be created with a
        // parent; only RootChildNode's won't, so they return the local isConnected
        // state
        return this._$parent?._$isConnected ?? this.__isConnected;
    }
    constructor(startNode, endNode, parent, options) {
        this.type = CHILD_PART;
        this._$committedValue = nothing;
        // The following fields will be patched onto ChildParts when required by
        // AsyncDirective
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$startNode = startNode;
        this._$endNode = endNode;
        this._$parent = parent;
        this.options = options;
        // Note __isConnected is only ever accessed on RootParts (i.e. when there is
        // no _$parent); the value on a non-root-part is "don't care", but checking
        // for parent would be more code
        this.__isConnected = options?.isConnected ?? true;
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            // Explicitly initialize for consistent class shape.
            this._textSanitizer = undefined;
        }
    }
    /**
     * The parent node into which the part renders its content.
     *
     * A ChildPart's content consists of a range of adjacent child nodes of
     * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
     * `.endNode`).
     *
     * - If both `.startNode` and `.endNode` are non-null, then the part's content
     * consists of all siblings between `.startNode` and `.endNode`, exclusively.
     *
     * - If `.startNode` is non-null but `.endNode` is null, then the part's
     * content consists of all siblings following `.startNode`, up to and
     * including the last child of `.parentNode`. If `.endNode` is non-null, then
     * `.startNode` will always be non-null.
     *
     * - If both `.endNode` and `.startNode` are null, then the part's content
     * consists of all child nodes of `.parentNode`.
     */
    get parentNode() {
        let parentNode = wrap(this._$startNode).parentNode;
        const parent = this._$parent;
        if (parent !== undefined &&
            parentNode?.nodeType === 11 /* Node.DOCUMENT_FRAGMENT */) {
            // If the parentNode is a DocumentFragment, it may be because the DOM is
            // still in the cloned fragment during initial render; if so, get the real
            // parentNode the part will be committed into by asking the parent.
            parentNode = parent.parentNode;
        }
        return parentNode;
    }
    /**
     * The part's leading marker node, if any. See `.parentNode` for more
     * information.
     */
    get startNode() {
        return this._$startNode;
    }
    /**
     * The part's trailing marker node, if any. See `.parentNode` for more
     * information.
     */
    get endNode() {
        return this._$endNode;
    }
    _$setValue(value, directiveParent = this) {
        if (DEV_MODE && this.parentNode === null) {
            throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
        }
        value = resolveDirective(this, value, directiveParent);
        if (isPrimitive(value)) {
            // Non-rendering child values. It's important that these do not render
            // empty text nodes to avoid issues with preventing default <slot>
            // fallback content.
            if (value === nothing || value == null || value === '') {
                if (this._$committedValue !== nothing) {
                    debugLogEvent &&
                        debugLogEvent({
                            kind: 'commit nothing to child',
                            start: this._$startNode,
                            end: this._$endNode,
                            parent: this._$parent,
                            options: this.options,
                        });
                    this._$clear();
                }
                this._$committedValue = nothing;
            }
            else if (value !== this._$committedValue && value !== noChange) {
                this._commitText(value);
            }
            // This property needs to remain unminified.
        }
        else if (value['_$litType$'] !== undefined) {
            this._commitTemplateResult(value);
        }
        else if (value.nodeType !== undefined) {
            if (DEV_MODE && this.options?.host === value) {
                this._commitText(`[probable mistake: rendered a template's host in itself ` +
                    `(commonly caused by writing \${this} in a template]`);
                console.warn(`Attempted to render the template host`, value, `inside itself. This is almost always a mistake, and in dev mode `, `we render some warning text. In production however, we'll `, `render it, which will usually result in an error, and sometimes `, `in the element disappearing from the DOM.`);
                return;
            }
            this._commitNode(value);
        }
        else if (isIterable(value)) {
            this._commitIterable(value);
        }
        else {
            // Fallback, will render the string representation
            this._commitText(value);
        }
    }
    _insert(node) {
        return wrap(wrap(this._$startNode).parentNode).insertBefore(node, this._$endNode);
    }
    _commitNode(value) {
        if (this._$committedValue !== value) {
            this._$clear();
            if (ENABLE_EXTRA_SECURITY_HOOKS &&
                sanitizerFactoryInternal !== noopSanitizer) {
                const parentNodeName = this._$startNode.parentNode?.nodeName;
                if (parentNodeName === 'STYLE' || parentNodeName === 'SCRIPT') {
                    let message = 'Forbidden';
                    if (DEV_MODE) {
                        if (parentNodeName === 'STYLE') {
                            message =
                                `Lit does not support binding inside style nodes. ` +
                                    `This is a security risk, as style injection attacks can ` +
                                    `exfiltrate data and spoof UIs. ` +
                                    `Consider instead using css\`...\` literals ` +
                                    `to compose styles, and do dynamic styling with ` +
                                    `css custom properties, ::parts, <slot>s, ` +
                                    `and by mutating the DOM rather than stylesheets.`;
                        }
                        else {
                            message =
                                `Lit does not support binding inside script nodes. ` +
                                    `This is a security risk, as it could allow arbitrary ` +
                                    `code execution.`;
                        }
                    }
                    throw new Error(message);
                }
            }
            debugLogEvent &&
                debugLogEvent({
                    kind: 'commit node',
                    start: this._$startNode,
                    parent: this._$parent,
                    value: value,
                    options: this.options,
                });
            this._$committedValue = this._insert(value);
        }
    }
    _commitText(value) {
        // If the committed value is a primitive it means we called _commitText on
        // the previous render, and we know that this._$startNode.nextSibling is a
        // Text node. We can now just replace the text content (.data) of the node.
        if (this._$committedValue !== nothing &&
            isPrimitive(this._$committedValue)) {
            const node = wrap(this._$startNode).nextSibling;
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(node, 'data', 'property');
                }
                value = this._textSanitizer(value);
            }
            debugLogEvent &&
                debugLogEvent({
                    kind: 'commit text',
                    node,
                    value,
                    options: this.options,
                });
            node.data = value;
        }
        else {
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                const textNode = d.createTextNode('');
                this._commitNode(textNode);
                // When setting text content, for security purposes it matters a lot
                // what the parent is. For example, <style> and <script> need to be
                // handled with care, while <span> does not. So first we need to put a
                // text node into the document, then we can sanitize its content.
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(textNode, 'data', 'property');
                }
                value = this._textSanitizer(value);
                debugLogEvent &&
                    debugLogEvent({
                        kind: 'commit text',
                        node: textNode,
                        value,
                        options: this.options,
                    });
                textNode.data = value;
            }
            else {
                this._commitNode(d.createTextNode(value));
                debugLogEvent &&
                    debugLogEvent({
                        kind: 'commit text',
                        node: wrap(this._$startNode).nextSibling,
                        value,
                        options: this.options,
                    });
            }
        }
        this._$committedValue = value;
    }
    _commitTemplateResult(result) {
        // This property needs to remain unminified.
        const { values, ['_$litType$']: type } = result;
        // If $litType$ is a number, result is a plain TemplateResult and we get
        // the template from the template cache. If not, result is a
        // CompiledTemplateResult and _$litType$ is a CompiledTemplate and we need
        // to create the <template> element the first time we see it.
        const template = typeof type === 'number'
            ? this._$getTemplate(result)
            : (type.el === undefined &&
                (type.el = Template.createElement(trustFromTemplateString(type.h, type.h[0]), this.options)),
                type);
        if (this._$committedValue?._$template === template) {
            debugLogEvent &&
                debugLogEvent({
                    kind: 'template updating',
                    template,
                    instance: this._$committedValue,
                    parts: this._$committedValue._$parts,
                    options: this.options,
                    values,
                });
            this._$committedValue._update(values);
        }
        else {
            const instance = new TemplateInstance(template, this);
            const fragment = instance._clone(this.options);
            debugLogEvent &&
                debugLogEvent({
                    kind: 'template instantiated',
                    template,
                    instance,
                    parts: instance._$parts,
                    options: this.options,
                    fragment,
                    values,
                });
            instance._update(values);
            debugLogEvent &&
                debugLogEvent({
                    kind: 'template instantiated and updated',
                    template,
                    instance,
                    parts: instance._$parts,
                    options: this.options,
                    fragment,
                    values,
                });
            this._commitNode(fragment);
            this._$committedValue = instance;
        }
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @internal */
    _$getTemplate(result) {
        let template = templateCache.get(result.strings);
        if (template === undefined) {
            templateCache.set(result.strings, (template = new Template(result)));
        }
        return template;
    }
    _commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If value is an array, then the previous render was of an
        // iterable and value will contain the ChildParts from the previous
        // render. If value is not an array, clear this part and make a new
        // array for ChildParts.
        if (!isArray(this._$committedValue)) {
            this._$committedValue = [];
            this._$clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this._$committedValue;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            if (partIndex === itemParts.length) {
                // If no existing part, create a new one
                // TODO (justinfagnani): test perf impact of always creating two parts
                // instead of sharing parts between nodes
                // https://github.com/lit/lit/issues/1266
                itemParts.push((itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options)));
            }
            else {
                // Reuse an existing part
                itemPart = itemParts[partIndex];
            }
            itemPart._$setValue(item);
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // itemParts always have end nodes
            this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
        }
    }
    /**
     * Removes the nodes contained within this Part from the DOM.
     *
     * @param start Start node to clear from, for clearing a subset of the part's
     *     DOM (used when truncating iterables)
     * @param from  When `start` is specified, the index within the iterable from
     *     which ChildParts are being removed, used for disconnecting directives in
     *     those Parts.
     *
     * @internal
     */
    _$clear(start = wrap(this._$startNode).nextSibling, from) {
        this._$notifyConnectionChanged?.(false, true, from);
        while (start && start !== this._$endNode) {
            const n = wrap(start).nextSibling;
            wrap(start).remove();
            start = n;
        }
    }
    /**
     * Implementation of RootPart's `isConnected`. Note that this method
     * should only be called on `RootPart`s (the `ChildPart` returned from a
     * top-level `render()` call). It has no effect on non-root ChildParts.
     * @param isConnected Whether to set
     * @internal
     */
    setConnected(isConnected) {
        if (this._$parent === undefined) {
            this.__isConnected = isConnected;
            this._$notifyConnectionChanged?.(isConnected);
        }
        else if (DEV_MODE) {
            throw new Error('part.setConnected() may only be called on a ' +
                'RootPart returned from render().');
        }
    }
}
class AttributePart {
    get tagName() {
        return this.element.tagName;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    constructor(element, name, strings, parent, options) {
        this.type = ATTRIBUTE_PART;
        /** @internal */
        this._$committedValue = nothing;
        /** @internal */
        this._$disconnectableChildren = undefined;
        this.element = element;
        this.name = name;
        this._$parent = parent;
        this.options = options;
        if (strings.length > 2 || strings[0] !== '' || strings[1] !== '') {
            this._$committedValue = new Array(strings.length - 1).fill(new String());
            this.strings = strings;
        }
        else {
            this._$committedValue = nothing;
        }
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            this._sanitizer = undefined;
        }
    }
    /**
     * Sets the value of this part by resolving the value from possibly multiple
     * values and static strings and committing it to the DOM.
     * If this part is single-valued, `this._strings` will be undefined, and the
     * method will be called with a single value argument. If this part is
     * multi-value, `this._strings` will be defined, and the method is called
     * with the value array of the part's owning TemplateInstance, and an offset
     * into the value array from which the values should be read.
     * This method is overloaded this way to eliminate short-lived array slices
     * of the template instance values, and allow a fast-path for single-valued
     * parts.
     *
     * @param value The part value, or an array of values for multi-valued parts
     * @param valueIndex the index to start reading values from. `undefined` for
     *   single-valued parts
     * @param noCommit causes the part to not commit its value to the DOM. Used
     *   in hydration to prime attribute parts with their first-rendered value,
     *   but not set the attribute, and in SSR to no-op the DOM operation and
     *   capture the value for serialization.
     *
     * @internal
     */
    _$setValue(value, directiveParent = this, valueIndex, noCommit) {
        const strings = this.strings;
        // Whether any of the values has changed, for dirty-checking
        let change = false;
        if (strings === undefined) {
            // Single-value binding case
            value = resolveDirective(this, value, directiveParent, 0);
            change =
                !isPrimitive(value) ||
                    (value !== this._$committedValue && value !== noChange);
            if (change) {
                this._$committedValue = value;
            }
        }
        else {
            // Interpolation case
            const values = value;
            value = strings[0];
            let i, v;
            for (i = 0; i < strings.length - 1; i++) {
                v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
                if (v === noChange) {
                    // If the user-provided value is `noChange`, use the previous value
                    v = this._$committedValue[i];
                }
                change ||=
                    !isPrimitive(v) || v !== this._$committedValue[i];
                if (v === nothing) {
                    value = nothing;
                }
                else if (value !== nothing) {
                    value += (v ?? '') + strings[i + 1];
                }
                // We always record each value, even if one is `nothing`, for future
                // change detection.
                this._$committedValue[i] = v;
            }
        }
        if (change && !noCommit) {
            this._commitValue(value);
        }
    }
    /** @internal */
    _commitValue(value) {
        if (value === nothing) {
            wrap(this.element).removeAttribute(this.name);
        }
        else {
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                if (this._sanitizer === undefined) {
                    this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'attribute');
                }
                value = this._sanitizer(value ?? '');
            }
            debugLogEvent &&
                debugLogEvent({
                    kind: 'commit attribute',
                    element: this.element,
                    name: this.name,
                    value,
                    options: this.options,
                });
            wrap(this.element).setAttribute(this.name, (value ?? ''));
        }
    }
}
class PropertyPart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = PROPERTY_PART;
    }
    /** @internal */
    _commitValue(value) {
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            if (this._sanitizer === undefined) {
                this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'property');
            }
            value = this._sanitizer(value);
        }
        debugLogEvent &&
            debugLogEvent({
                kind: 'commit property',
                element: this.element,
                name: this.name,
                value,
                options: this.options,
            });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.element[this.name] = value === nothing ? undefined : value;
    }
}
class BooleanAttributePart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = BOOLEAN_ATTRIBUTE_PART;
    }
    /** @internal */
    _commitValue(value) {
        debugLogEvent &&
            debugLogEvent({
                kind: 'commit boolean attribute',
                element: this.element,
                name: this.name,
                value: !!(value && value !== nothing),
                options: this.options,
            });
        wrap(this.element).toggleAttribute(this.name, !!value && value !== nothing);
    }
}
class EventPart extends AttributePart {
    constructor(element, name, strings, parent, options) {
        super(element, name, strings, parent, options);
        this.type = EVENT_PART;
        if (DEV_MODE && this.strings !== undefined) {
            throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with ` +
                'invalid content. Event listeners in templates must have exactly ' +
                'one expression and no surrounding text.');
        }
    }
    // EventPart does not use the base _$setValue/_resolveValue implementation
    // since the dirty checking is more complex
    /** @internal */
    _$setValue(newListener, directiveParent = this) {
        newListener =
            resolveDirective(this, newListener, directiveParent, 0) ?? nothing;
        if (newListener === noChange) {
            return;
        }
        const oldListener = this._$committedValue;
        // If the new value is nothing or any options change we have to remove the
        // part as a listener.
        const shouldRemoveListener = (newListener === nothing && oldListener !== nothing) ||
            newListener.capture !==
                oldListener.capture ||
            newListener.once !==
                oldListener.once ||
            newListener.passive !==
                oldListener.passive;
        // If the new value is not nothing and we removed the listener, we have
        // to add the part as a listener.
        const shouldAddListener = newListener !== nothing &&
            (oldListener === nothing || shouldRemoveListener);
        debugLogEvent &&
            debugLogEvent({
                kind: 'commit event listener',
                element: this.element,
                name: this.name,
                value: newListener,
                options: this.options,
                removeListener: shouldRemoveListener,
                addListener: shouldAddListener,
                oldListener,
            });
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.name, this, oldListener);
        }
        if (shouldAddListener) {
            // Beware: IE11 and Chrome 41 don't like using the listener as the
            // options object. Figure out how to deal w/ this in IE11 - maybe
            // patch addEventListener?
            this.element.addEventListener(this.name, this, newListener);
        }
        this._$committedValue = newListener;
    }
    handleEvent(event) {
        if (typeof this._$committedValue === 'function') {
            this._$committedValue.call(this.options?.host ?? this.element, event);
        }
        else {
            this._$committedValue.handleEvent(event);
        }
    }
}
class ElementPart {
    constructor(element, parent, options) {
        this.element = element;
        this.type = ELEMENT_PART;
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$parent = parent;
        this.options = options;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    _$setValue(value) {
        debugLogEvent &&
            debugLogEvent({
                kind: 'commit to element binding',
                element: this.element,
                value,
                options: this.options,
            });
        resolveDirective(this, value);
    }
}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports mangled in the
 * client side code, we export a _$LH object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-element, which re-exports all of lit-html.
 *
 * @private
 */
const _$LH = {
    // Used in lit-ssr
    _boundAttributeSuffix: boundAttributeSuffix,
    _marker: marker,
    _markerMatch: markerMatch,
    _HTML_RESULT: HTML_RESULT,
    _getTemplateHtml: getTemplateHtml,
    // Used in tests and private-ssr-support
    _TemplateInstance: TemplateInstance,
    _isIterable: isIterable,
    _resolveDirective: resolveDirective,
    _ChildPart: ChildPart,
    _AttributePart: AttributePart,
    _BooleanAttributePart: BooleanAttributePart,
    _EventPart: EventPart,
    _PropertyPart: PropertyPart,
    _ElementPart: ElementPart,
};
// Apply polyfills if available
const polyfillSupport = DEV_MODE
    ? global.litHtmlPolyfillSupportDevMode
    : global.litHtmlPolyfillSupport;
polyfillSupport?.(Template, ChildPart);
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
(global.litHtmlVersions ??= []).push('3.2.0');
if (DEV_MODE && global.litHtmlVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. ` +
        `Loading multiple versions is not recommended.`);
}
/**
 * Renders a value, usually a lit-html TemplateResult, to the container.
 *
 * This example renders the text "Hello, Zoe!" inside a paragraph tag, appending
 * it to the container `document.body`.
 *
 * ```js
 * import {html, render} from 'lit';
 *
 * const name = "Zoe";
 * render(html`<p>Hello, ${name}!</p>`, document.body);
 * ```
 *
 * @param value Any [renderable
 *   value](https://lit.dev/docs/templates/expressions/#child-expressions),
 *   typically a {@linkcode TemplateResult} created by evaluating a template tag
 *   like {@linkcode html} or {@linkcode svg}.
 * @param container A DOM container to render to. The first render will append
 *   the rendered value to the container, and subsequent renders will
 *   efficiently update the rendered value if the same result type was
 *   previously rendered there.
 * @param options See {@linkcode RenderOptions} for options documentation.
 * @see
 * {@link https://lit.dev/docs/libraries/standalone-templates/#rendering-lit-html-templates| Rendering Lit HTML Templates}
 */
const render = (value, container, options) => {
    if (DEV_MODE && container == null) {
        // Give a clearer error message than
        //     Uncaught TypeError: Cannot read properties of null (reading
        //     '_$litPart$')
        // which reads like an internal Lit error.
        throw new TypeError(`The container to render into may not be ${container}`);
    }
    const renderId = DEV_MODE ? debugLogRenderId++ : 0;
    const partOwnerNode = options?.renderBefore ?? container;
    // This property needs to remain unminified.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let part = partOwnerNode['_$litPart$'];
    debugLogEvent &&
        debugLogEvent({
            kind: 'begin render',
            id: renderId,
            value,
            container,
            options,
            part,
        });
    if (part === undefined) {
        const endNode = options?.renderBefore ?? null;
        // This property needs to remain unminified.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        partOwnerNode['_$litPart$'] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, undefined, options ?? {});
    }
    part._$setValue(value);
    debugLogEvent &&
        debugLogEvent({
            kind: 'end render',
            id: renderId,
            value,
            container,
            options,
            part,
        });
    return part;
};
if (ENABLE_EXTRA_SECURITY_HOOKS) {
    render.setSanitizer = setSanitizer;
    render.createSanitizer = createSanitizer;
    if (DEV_MODE) {
        render._testOnlyClearSanitizerFactoryDoNotCallOrElse =
            _testOnlyClearSanitizerFactoryDoNotCallOrElse;
    }
}
//# sourceMappingURL=lit-html.js.map

/***/ }),

/***/ "./node_modules/lit/decorators.js":
/*!****************************************!*\
  !*** ./node_modules/lit/decorators.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customElement: () => (/* reexport safe */ _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__.customElement),
/* harmony export */   eventOptions: () => (/* reexport safe */ _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__.eventOptions),
/* harmony export */   property: () => (/* reexport safe */ _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property),
/* harmony export */   query: () => (/* reexport safe */ _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__.query),
/* harmony export */   queryAll: () => (/* reexport safe */ _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__.queryAll),
/* harmony export */   queryAssignedElements: () => (/* reexport safe */ _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__.queryAssignedElements),
/* harmony export */   queryAssignedNodes: () => (/* reexport safe */ _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__.queryAssignedNodes),
/* harmony export */   queryAsync: () => (/* reexport safe */ _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__.queryAsync),
/* harmony export */   standardProperty: () => (/* reexport safe */ _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.standardProperty),
/* harmony export */   state: () => (/* reexport safe */ _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__.state)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element/decorators/custom-element.js */ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js");
/* harmony import */ var _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit/reactive-element/decorators/property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");
/* harmony import */ var _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lit/reactive-element/decorators/state.js */ "./node_modules/@lit/reactive-element/development/decorators/state.js");
/* harmony import */ var _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lit/reactive-element/decorators/event-options.js */ "./node_modules/@lit/reactive-element/development/decorators/event-options.js");
/* harmony import */ var _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lit/reactive-element/decorators/query.js */ "./node_modules/@lit/reactive-element/development/decorators/query.js");
/* harmony import */ var _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-all.js */ "./node_modules/@lit/reactive-element/development/decorators/query-all.js");
/* harmony import */ var _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-async.js */ "./node_modules/@lit/reactive-element/development/decorators/query-async.js");
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-elements.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js");
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-nodes.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js");

//# sourceMappingURL=decorators.js.map


/***/ }),

/***/ "./node_modules/lit/index.js":
/*!***********************************!*\
  !*** ./node_modules/lit/index.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.CSSResult),
/* harmony export */   LitElement: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.LitElement),
/* harmony export */   ReactiveElement: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.ReactiveElement),
/* harmony export */   _$LE: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LE),
/* harmony export */   _$LH: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LH),
/* harmony export */   adoptStyles: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.adoptStyles),
/* harmony export */   css: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.css),
/* harmony export */   defaultConverter: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.defaultConverter),
/* harmony export */   getCompatibleStyle: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.getCompatibleStyle),
/* harmony export */   html: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.html),
/* harmony export */   isServer: () => (/* reexport safe */ lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__.isServer),
/* harmony export */   mathml: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.mathml),
/* harmony export */   noChange: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.noChange),
/* harmony export */   notEqual: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.notEqual),
/* harmony export */   nothing: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.nothing),
/* harmony export */   render: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.render),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.supportsAdoptingStyleSheets),
/* harmony export */   svg: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.svg),
/* harmony export */   unsafeCSS: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element/lit-element.js */ "./node_modules/lit-element/development/lit-element.js");
/* harmony import */ var lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/is-server.js */ "./node_modules/lit-html/development/is-server.js");

//# sourceMappingURL=index.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./docs/index.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_doc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.doc */ "./index.doc.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./index.ts");





})();

/******/ })()
;
//# sourceMappingURL=index.js.map