<template>
    <div>
        <h3>{{ this.offset }}</h3>
        <input-case-field v-bind:i="this.offset" f="case_number">What was the case number?
            <template slot="help">
                The best way to find your case number is by....
            </template>
        </input-case-field>
        <input-case-field v-bind:i="this.offset" f="agency">Was the court a Missouri circuit (county) court or a municipal (city) court?</input-case-field>
        <input-case-field v-bind:i="this.offset" f="city_county">What was the name of the County or City?</input-case-field>
        <input-case-field v-bind:i="this.offset" f="name_of_judge">What was the name of the Judge?</input-case-field>
        <input-case-field v-bind:i="this.offset" f="your_name_in_case">What was your name as it appeared on the court’s records?</input-case-field>
        <input-case-field v-bind:i="this.offset" f="release_status">Release Status</input-case-field>
        <input-case-field v-bind:i="this.offset" f="release_date">Release Date</input-case-field>
        <hr>

        <H5>input
            Court Case: {{ this.ccase.case_number }}, {{ this.ccase.agency }}
            <span v-if="this.ccase.release_status"> -- {{ this.ccase.release_status }}  {{ this.ccase.release_date  }}</span>
        </H5>
        <ol>
            <charges v-for="charge in this.ccase.charges" :key="charge.id" :charge="charge">

            </charges>
        </ol>
    </div>
</template>

<script>
    import Charges from "./charges";
    import InputCaseField from "./input-case-field";

    export default {
        components: {Charges, InputCaseField},
        name: "input-case-fields",
        props: {
            ccase: {
                type: Object,
                default: {},
            },
            offset: {
                type: Number,
                default: 0
            }

        },
    }
</script>

