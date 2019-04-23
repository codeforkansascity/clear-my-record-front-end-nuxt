<template>
    <b-container style="background-color: lightgoldenrodyellow;">
        <div class="row" style="background-color: lightgoldenrodyellow; margin-top: 1em; ">

            <div class="col-md-6">
                <h5>{{ this.charge.citation }} {{ this.charge.charge }} </h5>
            </div>
            <div class="col-md-2">
                <h5>
                    {{ this.charge.conviction_charge_type }} {{ this.charge.conviction_class_type }}
                    <span v-if="this.$store.state.convictions[this.conviction_index].charges[this.charge_index]['notes']"> [Note]</span>
                </h5>
            </div>
            <div class="col-md-1">

                <b-form-checkbox

                        v-model="convicted"

                        value="1"
                        unchecked-value="0"></b-form-checkbox>
                Convicted


            </div>
            <div class="col-md-1">


                <b-form-checkbox

                        v-model="eligible"

                        value="1"
                        unchecked-value="0"></b-form-checkbox>
                Eligible


            </div>
            <div class="col-md-1">


                <b-form-checkbox

                        v-model="please_expunge"

                        value="1"
                        unchecked-value="0"></b-form-checkbox>
                Expunge


            </div>


            <div class="col-md-1">
                <img v-show="isShowing" style="width: 1.8em; margin-left: .55em" v-on:click="isShowing ^= true"
                     src="/images/noun_collapse_2091048_000000.png" class="help-button">
                <img v-show="!isShowing" style="width: 1.5em; margin-left: .55em; margin-bottom: 1em"
                     v-on:click="isShowing ^= true"
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
                <a href="#" tabIndex="-1" class="float-left btn btn-outline-secondary btn-sm" @click="remove_charge">Remove</a>
            </div>

            <div class="col-md-7" style="padding-left: 2em; padding-bottom: 1em;">

            </div>

            <div class="col-md-2" :disabled="savingStatus === 1" style="padding-top: 1.25em; padding-bottom: 1em">
                <button class="float-right btn-success" @click="save_charge">Save</button>
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
                isShowing: false,
                savingStatus: 0,
                savingMessage: '',
                checked: false,
                conviction_charge_type_options: [
                    {
                        "name": "Felony",
                        "abbreviation": "Felony"
                    },
                    {
                        "name": "Misdemeanor",
                        "abbreviation": "Misdemeanor"
                    }
                ],
                conviction_class_type_options: [
                    {
                        "name": "No Class",
                        "abbreviation": ""
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
                    let q = this.$store.state.convictions[this.conviction_index].charges[this.charge_index]['convicted'];
                    console.log('convicted=' + q);
                    console.log(this.$store.state.convictions[this.conviction_index].charges[this.charge_index]['convicted']);
                    return q;
                },
                set(value) {

                    let bvalue = value;
                    console.log("set convicted to " + bvalue);
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


                    let q = this.$store.state.convictions[this.conviction_index].charges[this.charge_index]['eligible'];
                    console.log('eligible=' + q);
                    console.log(this.$store.state.convictions[this.conviction_index].charges[this.charge_index]['eligible']);
                    return q;
                },
                set(value) {

                    let bvalue = value;
                    console.log("set eligible to " + bvalue);
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
                    let q = this.$store.state.convictions[this.conviction_index].charges[this.charge_index]['please_expunge'];
                    console.log('please_expunge=' + q);
                    console.log(this.$store.state.convictions[this.conviction_index].charges[this.charge_index]['please_expunge']);
                    return q;

                },
                set(value) {
                    let bvalue = value;
                    console.log("set please_expunge to " + bvalue);
                    this.$store.commit('storeChargeField', {
                        conviction_index: this.conviction_index,
                        charge_index: this.charge_index,
                        field: 'please_expunge',
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

