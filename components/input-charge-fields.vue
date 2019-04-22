<template>
    <b-container style="background-color: lightgoldenrodyellow;">
        <div class="row" style="background-color: lightgoldenrodyellow; margin-top: 2em; padding-top: 1em;">

            <div class="col-md-5">
                <h5>{{ this.charge.citation }} {{ this.charge.charge }}</h5>
            </div>
            <div class="col-md-3">

                <b-form-checkbox v-show="convicted" v-model="convicted" name="check-button" switch>
                    Is Convicted
                </b-form-checkbox>

                <b-form-checkbox v-show="!convicted" v-model="convicted" name="check-button" switch>
                    Was NOT Convicted
                </b-form-checkbox>

            </div>
            <div class="col-md-3" v-show="convicted">

                <b-form-checkbox v-show="eligible" v-model="eligible" name="check-button" switch>
                    Is Expungable
                </b-form-checkbox>

                <b-form-checkbox v-show="!eligible" v-model="eligible" name="check-button" switch>
                    Is NOT Expungable
                </b-form-checkbox>

            </div>
            <div class="col-md-3" v-show="eligible">

                <b-form-checkbox v-show="!please_expunge" v-model="please_expunge" name="check-button" switch>
                    Do NOT Expunge
                </b-form-checkbox>

                <b-form-checkbox v-show="please_expunge" v-model="please_expunge" name="check-button" switch>
                    Expunge
                </b-form-checkbox>

            </div>

            <div class="col-md-3" v-show="please_expunge">

                <b-form-checkbox v-show="!please_print" v-model="please_print" name="check-button" switch>
                    Do NOT print
                </b-form-checkbox>

                <b-form-checkbox v-show="please_print" v-model="please_print" name="check-button" switch>
                    Print
                </b-form-checkbox>

            </div>


            <div class="col-md-3" v-show="!eligible">
                &nbsp;
            </div>


            <div class="col-md-1">
                <img v-show="isShowing" style="width: 1.8em" v-on:click="isShowing ^= true"
                     src="/images/noun_collapse_2091048_000000.png" class="help-button">
                <img v-show="!isShowing" style="width: 1.5em; margin-bottom: 1em" v-on:click="isShowing ^= true"
                     src="/images/noun_expand_1211939_000000.png" class="help-button">
            </div>

        </div>

        <div class="row" v-show="isShowing" style="background-color: lightgoldenrodyellow; margin-top: 1em">
            <div class="col-md-2">
                <input-charge-field v-bind:i="this.conviction_index" v-bind:j="this.charge_index" f="citation">Citation
                </input-charge-field>
            </div>
            <div class="col-md-10" style="padding-bottom: 1em">
                <input-charge-field v-bind:i="this.conviction_index" v-bind:j="this.charge_index" f="charge">Charge
                </input-charge-field>
            </div>
            <div class="col-md-2">
            </div>


            <input-charge-select-other class="mb-2" v-bind:i="this.conviction_index" v-bind:j="this.charge_index"
                                       f="conviction_charge_type" v-bind:options="conviction_charge_type_options">Charge
                type?
            </input-charge-select-other>
            <input-charge-select-other class="mb-2" v-bind:i="this.conviction_index" v-bind:j="this.charge_index"
                                       f="conviction_class_type" v-bind:options="conviction_class_type_options">Class?
            </input-charge-select-other>

            <div class="col-md-5" style="padding-left: 2em;">
                <input-charge-field v-bind:i="this.conviction_index" v-bind:j="this.charge_index" f="sentence">Sentence
                </input-charge-field>
            </div>

            <div class="col-md-2">
                &nbsp;
            </div>

            <div class="col-md-1" style="padding-top: 1.25em;">
                Notes:
            </div>

            <div class="col-md-7" style="padding-left: 2em; ">
                <input-charge-note-field v-bind:i="this.conviction_index" v-bind:j="this.charge_index" f="notes">
                </input-charge-note-field>
            </div>

            <div class="col-md-2" style="padding-top: 1.25em;">

            </div>

            <div class="col-md-2">
                &nbsp;
            </div>

            <div class="col-md-1" style="padding-top: 1.25em;">
                <button class="float-left" @click="remove_charge">Remove</button>
            </div>

            <div class="col-md-7" style="padding-left: 2em; padding-bottom: 1em;">

            </div>

            <div class="col-md-2" :disabled="savingStatus === 1" style="padding-top: 1.25em; padding-bottom: 1em">
                <button class="float-right" @click="save_charge">Save</button>
                <span v-show="this.savingMessage">{{ this.savingMessage }}</span>
            </div>

        </div>
    </b-container>
</template>

<script>
    import Charges from "./charges";
    import InputChargeField from "./input-charge-field";
    import InputChargeNoteField from "./input-charge-note-field";
    import BContainer from "bootstrap-vue/src/components/layout/container";
    import InputChargeSelectOther from "./input-charge-select-other";


    export default {
        components: {InputChargeSelectOther, BContainer, Charges, InputChargeField, InputChargeNoteField},
        name: "input-charge-fields",
        props: {
            charge: {
                type: Object,
                default: {},
            },
            conviction_index: {
                type: [Number, String],
                default: 0
            },
            charge_index: {
                type: [Number, String],
                default: 0
            },

        },
        data() {
            return {
                isShowing: true,
                savingStatus: 0,
                savingMessage: '',
                checked: false,
                conviction_charge_type_options: [
                    {
                        "name": "felony",
                        "abbreviation": "felony"
                    },
                    {
                        "name": "misdemeanor",
                        "abbreviation": "misdemeanor"
                    }
                ],
                conviction_class_type_options: [
                    {
                        "name": "No Class",
                        "abbreviation": "UNDEFINED"
                    },
                    {
                        "name": "A",
                        "abbreviation": "A"
                    },
                    {
                        "name": "B",
                        "abbreviation": "B"
                    },
                    {
                        "name": "C",
                        "abbreviation": "C"
                    },
                    {
                        "name": "D",
                        "abbreviation": "B"
                    },
                    {
                        "name": "E",
                        "abbreviation": "C"
                    }
                ],
            }
        },
        computed: {
            convicted: {
                get() {
                    const q = this.$store.state.convictions[this.conviction_index].charges[this.charge_index];
                    return q ? q['convicted'] : '';
                },
                set(value) {

                    let bvalue = value ? true : false;
                    this.$store.commit('storeChargeField', {
                        conviction_index: this.conviction_index,
                        charge_index: this.charge_index,
                        field: 'convicted',
                        value: bvalue
                    });
                },
            },
            eligible: {
                get() {
                    const q = this.$store.state.convictions[this.conviction_index].charges[this.charge_index];
                    return q ? q['eligible'] : '';
                },
                set(value) {

                    let bvalue = value ? true : false;
                    this.$store.commit('storeChargeField', {
                        conviction_index: this.conviction_index,
                        charge_index: this.charge_index,
                        field: 'eligible',
                        value: bvalue
                    });
                },
            },
            please_expunge: {
                get() {
                    const q = this.$store.state.convictions[this.conviction_index].charges[this.charge_index];
                    return q ? q['please_expunge'] : '';
                },
                set(value) {
                    let bvalue = value ? true : false;
                    this.$store.commit('storeChargeField', {
                        conviction_index: this.conviction_index,
                        charge_index: this.charge_index,
                        field: 'please_expunge',
                        value: bvalue
                    });
                },
            },
            please_print: {
                get() {
                    const q = this.$store.state.convictions[this.conviction_index].charges[this.charge_index];
                    return q ? q['please_print'] : '';
                },
                set(value) {
                    let bvalue = value ? true : false;
                    this.$store.commit('storeChargeField', {
                        conviction_index: this.conviction_index,
                        charge_index: this.charge_index,
                        field: 'please_print',
                        value: bvalue
                    });
                },
            },
        },
        methods: {
            remove_charge() {

                if (confirm("Remove this charge")) {
                    this.$store.dispatch('removeCharge', {
                            conviction_index: this.conviction_index,
                            charge_index: this.charge_index,
                            charge_id: this.$store.state.convictions[this.conviction_index].charges[this.charge_index].id,
                        }
                    );
                }

            },
            async save_charge() {

                this.savingStatus = 1;
                this.savingMessage = "Saving";

                let client_id = this.$store.state.client.id;
                let conviction_id = this.$store.state.convictions[this.conviction_index].id;

                let data = this.$store.state.convictions[this.conviction_index].charges[this.charge_index];

                let save_status = await this.$store.dispatch('saveCharge', {
                        data: data,
                        conviction_index: this.conviction_index,
                        charge_index: this.charge_index,
                        client_id: client_id,
                        conviction_id: conviction_id
                    }
                );

                this.savingStatus = 0;

                if (save_status) {
                    this.savingMessage = "Saved";
                    setTimeout(() => {
                        this.savingMessage = "";
                    }, 5000);

                } else {
                    this.savingMessage = "Error";
                }


                console.log('done saveing charge');
            }
        },
    }
</script>

