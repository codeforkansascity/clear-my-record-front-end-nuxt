<template>
    <div>
        <hr>
        <hr>
        <h3>{{ this.case_index }} - {{ this.charge_index }}</h3>
        <input-charge-field v-bind:i="this.case_index" v-bind:j="this.charge_index" f="type">What was the type?
            <template slot="help">
                How to resarch??
            </template>
        </input-charge-field>
        <input-charge-field v-bind:i="this.case_index" v-bind:j="this.charge_index" f="class">Class</input-charge-field>
        <input-charge-field v-bind:i="this.case_index" v-bind:j="this.charge_index" f="citation">Citation</input-charge-field>
        <input-charge-field v-bind:i="this.case_index" v-bind:j="this.charge_index" f="charge">Charge</input-charge-field>
        <input-charge-field v-bind:i="this.case_index" v-bind:j="this.charge_index" f="sentence">Sentence</input-charge-field>
        <input-charge-field v-bind:i="this.case_index" v-bind:j="this.charge_index" f="not_eligible">Not Eligible</input-charge-field>
        <hr>


    </div>
</template>

<script>
    import Charges from "./charges";
    import InputChargeField from "./input-charge-field";


    export default {
        components: {Charges, InputChargeField},
        name: "input-charge-fields",
        props: {
            charge: {
                type: Object,
                default: {},
            },
            case_index: {
                type: [Number,String],
                default: 0
            },
            charge_index: {
                type: [Number,String],
                default: 0
            },

        },
    }
</script>

