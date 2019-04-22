<template>

    <div style="border: #7f828b; margin-left: .1em; border-width: thin; border-style: solid;">

        <div class="row">
            <div class="col-md-11" style="padding-left: 1em; ">
                <h2>Circuit: {{ this.$store.state.client.filing_court }}</h2>
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
                    <pii-note-field field="petitioner_name">Petitioner Name/Address</pii-note-field>
                    <pii-note-field field="division_number">Division Number/Address</pii-note-field>
                    <pii-note-field field="city_name_here">Municipal Court Name/Address</pii-note-field>
                    <pii-note-field field="county_name">County of Prosecutor(s)/Address</pii-note-field>
            </div>
            <div class="col-md-6" style="padding-left: 1em;">

                <pii-note-field field="judge_name">Judge Name/Address</pii-note-field>
                <pii-note-field field="division_name">Division Name/Address</pii-note-field>
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


    import PiiNoteField from "./pii-note-field";
    export default {
        name: "section-circuit-information",
        components: {PiiNoteField},
        data() {
            return {
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

