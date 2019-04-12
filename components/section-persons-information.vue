<template>


        <div class="row">
            <div class="col-md-6" style="padding-left: 1em;">
                <p>&nbsp;</p>
                <pii-input field="full_name">What is your full name?</pii-input>

                <input-select-other field="sex" v-bind:options="sex_options">What is your sex</input-select-other>
                <input-select-other field="race" v-bind:options="race_options">What is your race?</input-select-other>
                <input-date field="dob">What is your date of birth?</input-date>

                <pii-input field="address">What is your current address?</pii-input>
            </div>
            <div class="col-md-6" style="padding-left: 1em;">
                <p>Your Driver’s License information?</p>
                <pii-input field="license_number">License number</pii-input>

                <!--<input-state field="license_issuing_state">Issuing state</input-state>-->
                <!--<input-date field="license_expiration_date">Expiration date</input-date>-->

            </div>
        </div>

</template>

<script>
    import PiiInput from "../components/pii-input";

    import InputDate from "./input-date";
    import InputState from "./input-state";
    import InputSelectOther from "./input-select-other";

    export default {
        name: "section-persons-information",
        components: {InputSelectOther, InputDate, PiiInput, InputState},
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
            }
        },

    }
</script>

