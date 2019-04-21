<template>

    <div style="border: #7f828b; margin-left: .1em; border-width: thin; border-style: solid;">

        <div class="row">
            <div class="col-md-11" style="padding-left: 1em; ">
                <h2>{{ this.$store.state.client.full_name }}</h2>
            </div>
            <div>
                <img v-show="isShowing" style="width: 1.8em" v-on:click="isShowing ^= true"
                     src="/images/noun_collapse_2091048_000000.png" class="help-button">
                <img v-show="!isShowing" style="width: 1.5em; margin-bottom: 1em" v-on:click="isShowing ^= true"
                     src="/images/noun_expand_1211939_000000.png" class="help-button">


            </div>
        </div>
        <div class="row" v-show="isShowing">
            <div class="col-md-6" style="padding-left: 1em;">
                <p>&nbsp;</p>
                <pii-input field="full_name">What is your full name?</pii-input>
                <pii-input field="filing_court">Court where expungement will be filed.</pii-input>


                <input-select-other field="sex" v-bind:options="sex_options">What is your sex</input-select-other>
                <input-select-other field="race" v-bind:options="race_options">What is your race?</input-select-other>
                <p>Address</p>
                <pii-input field="address_line_1">Address Line 1</pii-input>
                <pii-input field="address_line_2">Address Line 2</pii-input>
                <pii-input field="city">City?</pii-input>
                <input-state field="state" style="width: 20em;display: inline-block">State?</input-state>
                <pii-input field="zip_code"
                           style="width: 10em; display: inline-block; padding-right: 0em;"
                >Zip?
                </pii-input>

            </div>
            <div class="col-md-6" style="padding-left: 1em;">
                <p style="display: inline">Your Driver’s License information?</p>

                <pii-input field="license_number">License number</pii-input>

                <input-state field="license_issuing_state">Issuing state</input-state>
                <input-date field="license_expiration_date">Expiration date</input-date>
                <input-date field="dob">What is your date of birth?</input-date>

                <pii-input field="judicial_ciruit_number">Judicial Circuit Number</pii-input>
                <pii-input field="count_name">County Name</pii-input>
                <pii-note-field field="judge_name">Judge Name/Address</pii-note-field>
                <pii-note-field field="division_name">Division Name/Address</pii-note-field>

            </div>
            <div class="col-md-6" style="padding-left: 1em;">
                <pii-note-field field="petitioner_name">Petitioner Name/Address</pii-note-field>
                <pii-note-field field="division_number">Division Number/Address</pii-note-field>
                <pii-note-field field="city_name_here">Municipal Court Name/Address</pii-note-field>
                <pii-note-field field="county_name">County of Prosecutor(s)/Address</pii-note-field>

            </div>

            <div class="col-md-6" style="padding-left: 1em;">
                <pii-note-field field="arresting_county">Arresting County Name/Address</pii-note-field>
                <pii-note-field field="prosecuting_county">County of Prosecutor(s)/Address</pii-note-field>
                <pii-note-field field="arresting_municipality">Arresting Municipality/Address</pii-note-field>

                <pii-note-field field="other_agencies_name">
                    Other Agencies Names and Addreses
                </pii-note-field>
            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <div class="col-md-6">
                    <button v-on:click="update" type="submit" class="btn btn-primary btn-sm">
                        Save
                    </button>
                </div>
                <div class="col-md-6 text-right">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import PiiInput from "../components/pii-input";

    import InputDate from "./input-date";
    import InputState from "./input-state";
    import InputSelectOther from "./input-select-other";
    import PiiNoteField from "./pii-note-field";

    export default {
        name: "section-persons-information",
        components: {PiiNoteField, InputSelectOther, InputDate, PiiInput, InputState},
        data() {
            return {
                race_options: [
                    {
                        "name": "Please select a race or other",
                        "abbreviation": ""
                    },
                    {
                        "name": "White",
                        "abbreviation": "White"
                    },
                    {
                        "name": "Black or African American",
                        "abbreviation": "Black or African American"
                    },
                    {
                        "name": "American Indian or Alaska Native",
                        "abbreviation": "American Indian or Alaska Native"
                    },
                    {
                        "name": "Asian",
                        "abbreviation": "Asian"
                    },
                    {
                        "name": "Native Hawaiian or Other Pacific Islander",
                        "abbreviation": "Native Hawaiian or Other Pacific Islander"
                    },
                    {
                        "name": "Other",
                        "abbreviation": "Other"
                    }
                ],
                sex_options: [
                    {
                        "name": "Please indicate your sex",
                        "abbreviation": ""
                    },
                    {
                        "name": "Female",
                        "abbreviation": "Female"
                    },
                    {
                        "name": "Intersex",
                        "abbreviation": "Intersex"
                    },
                    {
                        "name": "Male",
                        "abbreviation": "Male"
                    },
                    {
                        "name": "Other",
                        "abbreviation": "Other"
                    }
                ],
                isShowing: true,
            }
        },
        methods: {
            update() {
                this.$store.dispatch('updateClient',this.$store.state.client);  // Fix: need to pass the correct client_id
            },
        },

    }
</script>

