<template>
    <b-container style="background-color: lightgoldenrodyellow;">
        <div class="row" style="background-color: lightgoldenrodyellow; margin-top: 2em; padding-top: 1em;">

            <div class="col-md-5" >
                <h5>{{ this.charge.citation }} {{ this.charge.charge }}</h5>
            </div>
            <div class="col-md-3" >

                <b-form-checkbox v-show="eligible" v-model="eligible" name="check-button" switch>
                    Is Expungable
                </b-form-checkbox>

                <b-form-checkbox v-show="!eligible" v-model="eligible" name="check-button" switch>
                    Is NOT Expungable
                </b-form-checkbox>

            </div>
            <div class="col-md-3" v-show="eligible">

                <b-form-checkbox v-show="!expunge" v-model="expunge" name="check-button" switch>
                    Do NOT Expunge
                </b-form-checkbox>

                <b-form-checkbox v-show="expunge" v-model="expunge" name="check-button" switch>
                    Expunge
                </b-form-checkbox>

            </div>
            <div class="col-md-3" v-show="!eligible">
                &nbsp;
            </div>


            <div class="col-md-1" >
                <img v-show="isShowing" style="width: 1.8em" v-on:click="isShowing ^= true" src="/images/noun_collapse_2091048_000000.png" class="help-button">
                <img v-show="!isShowing" style="width: 1.5em; margin-bottom: 1em" v-on:click="isShowing ^= true" src="/images/noun_expand_1211939_000000.png" class="help-button">
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


            <div class="col-md-2">
                <input-charge-field v-bind:i="this.conviction_index" v-bind:j="this.charge_index" f="type">Charge type?
                    <template slot="help">
                        How to resarch??
                    </template>
                </input-charge-field>
            </div>

            <div class="col-md-2">
                <input-charge-field v-bind:i="this.conviction_index" v-bind:j="this.charge_index" f="class">Class
                </input-charge-field>
            </div>
            <div class="col-md-6" style="padding-left: 2em;">
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
                <input-charge-note-field v-bind:i="this.conviction_index" v-bind:j="this.charge_index" f="note">
                </input-charge-note-field>
            </div>

            <div class="col-md-2"  style="padding-top: 1.25em;">

            </div>

            <div class="col-md-2">
                &nbsp;
            </div>

            <div class="col-md-1" style="padding-top: 1.25em;">
                <button class="float-left" @click="remove_charge">Remove</button>
            </div>

            <div class="col-md-7" style="padding-left: 2em; padding-bottom: 1em;">

            </div>

            <div class="col-md-2"  style="padding-top: 1.25em; padding-bottom: 1em">
                <button class="float-right" @click="save_charge">Save</button>
            </div>

        </div>
    </b-container>
</template>

<script>
    import Charges from "./charges";
    import InputChargeField from "./input-charge-field";
    import InputChargeNoteField from "./input-charge-note-field";
    import BContainer from "bootstrap-vue/src/components/layout/container";


    export default {
        components: {BContainer, Charges, InputChargeField, InputChargeNoteField},
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
                checked: false
            }
        },
        computed: {
            eligible: {
                get() {
                    const q = this.$store.state.client.convictions[this.conviction_index].charges[this.charge_index];
                    return q ? q['eligible'] : '';
                },
                set(value) {
                    this.$store.commit('storeChargeField', {
                        conviction_index: this.conviction_index,
                        charge_index: this.charge_index,
                        field: 'eligible',
                        value: value
                    });
                },
            },
            expunge: {
                get() {
                    const q = this.$store.state.client.convictions[this.conviction_index].charges[this.charge_index];
                    return q ? q['expunge'] : '';
                },
                set(value) {
                    this.$store.commit('storeChargeField', {
                        conviction_index: this.conviction_index,
                        charge_index: this.charge_index,
                        field: 'expunge',
                        value: value
                    });
                },
            },
        },
        methods: {
            remove_charge() {

                if ( confirm("Remove this charge")) {
                    alert('Code remove code')
                }

            },
            save_charge() {
                alert('code save code')
            }
        },
    }
</script>

