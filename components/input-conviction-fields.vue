<template>
    <b-container>
    <div class="row" style="padding-top: 2em">

        <div class="col-md-4">
            <h3><span style="color: lightgray;">CONVICTION:</span> {{ this.expungee_alias }}</h3>
        </div>
        <div class="col-md-5">
            <h3> {{ this.case_alias }}</h3>
        </div>
        <div class="col-md-2">
            <h3>
                {{ this.$store.state.convictions[this.conviction_index]['release_date'] }}
                <span v-if="this.$store.state.convictions[this.conviction_index]['notes']"> [Note]</span>
            </h3>
        </div>
        <div class="col-md-1">
            <img v-show="isShowing" style="width: 1.8em; margin-left: .1em" v-on:click="isShowing ^= true"
                 src="/images/noun_collapse_2091048_000000.png" class="help-button">
            <img v-show="!isShowing" style="width: 1.5em; margin-bottom: 1em;  margin-left: .1em" v-on:click="isShowing ^= true"
                 src="/images/noun_expand_1211939_000000.png" class="help-button">
        </div>


        <div class="col-md-6" v-show="isShowing" style="padding-left: 2em;">

            <input-conviction-field v-bind:i="this.conviction_index" f="name">What Applicant calls this (or your
                abreviation)?
                <template slot="help">
                    When speaking with the expungie, how they refer to this. "Car 2005".
                    Until someone meets with the expungie, a short but meaningful description.
                </template>
            </input-conviction-field>
            <input-conviction-field v-bind:i="this.conviction_index" f="arrest_date" style="width: 20em;">Approx. date
                of arrest per Applicant?
                <template slot="help">
                    Any format is ok, even just a year.
                </template>
            </input-conviction-field>

            <input-conviction-field v-bind:i="this.conviction_index" f="case_number">What was the case number?
                <template slot="help">
                    The best way to find your case number is by....
                </template>
            </input-conviction-field>
            <input-conviction-field v-bind:i="this.conviction_index" f="agency">Was the court a Missouri circuit
                (county) court
                or a municipal (city) court?
            </input-conviction-field>
            <input-conviction-field v-bind:i="this.conviction_index" f="court_city_county">What was the name of the
                County or
                City?
            </input-conviction-field>


        </div>
        <div class="col-md-6" v-show="isShowing" style="padding-left: 2em;">

            <input-conviction-field v-bind:i="this.conviction_index" f="record_name">What was your name as it
                appeared on
                the court’s records?
            </input-conviction-field>
            <input-conviction-field v-bind:i="this.conviction_index" f="release_status">Release Status
            </input-conviction-field>
            <input-conviction-field v-bind:i="this.conviction_index" f="approximate_date_of_charge" style="width: 20em;">Approximate Date of Charge - any format
            </input-conviction-field>
            <input-conviction-date-field v-bind:i="this.conviction_index" f="release_date" style="width: 10em;">Release
                Date
            </input-conviction-date-field>
            <input-conviction-field v-bind:i="this.conviction_index" f="judge">What was the name of the Judge?
            </input-conviction-field>
        </div>

        <div class="col-md-2" v-show="isShowing">
            &nbsp;
        </div>

        <div class="col-md-1" v-show="isShowing" style="padding-top: 1.25em;">
            Notes:
        </div>

        <div class="col-md-7" v-show="isShowing" style="padding-left: 2em; ">
            <input-conviction-note-field v-bind:i="this.conviction_index" f="notes">
            </input-conviction-note-field>
        </div>

        <div class="col-md-2" v-show="isShowing" style="padding-top: 1.25em;">

        </div>

        <div class="col-md-2" v-show="isShowing">
            &nbsp;
        </div>

        <div class="col-md-1" v-show="isShowing" style="padding-top: 1.25em;">
            <a href="#" tabIndex="-1" class="float-left btn btn-outline-secondary btn-sm" @click="remove_conviction">Remove</a>
        </div>

        <div class="col-md-7" v-show="isShowing" style="padding-left: 2em; padding-bottom: 1em;">

        </div>

        <div class="col-md-2" v-show="isShowing" :disabled="savingStatus === 1"
             style="padding-top: 1.25em; padding-bottom: 1em">
            <button class="float-right btn-success" @click="save_conviction">Save</button>
            <span v-show="this.savingMessage">{{ this.savingMessage }}</span>
        </div>


        <h4 style="padding-left: 1.5em; padding-top:2em; padding-bottom: 0px; margin-bottom: 0px;" v-show="isShowing">
            CHARGE(S)</h4>
        <div class="col-md-12" style="padding-left: 5em;">


            <input-charge-fields
                    v-for="(charge, charge_index) in this.$store.getters.chargesForConviction(conviction_index)"
                    :key="charge.id"
                    :charge_index="charge_index" :charge="charge"
                    :conviction_index="conviction_index"

            >
            </input-charge-fields>


            <add-charge v-show="isShowing" v-bind:conviction_index="this.conviction_index"></add-charge>
        </div>

    </div>
    </b-container>

</template>

<script>
    import Charges from "./charges";
    import InputConvictionField from "./input-conviction-field";
    import InputChargeFields from "./input-charge-fields";
    import AddCharge from "./add-charge";
    import InputConvictionDateField from "./input-conviction-date-field";
    import InputConvictionNoteField from "./input-conviction-note-field";

    export default {
        components: {
            InputConvictionNoteField,
            InputConvictionDateField, AddCharge, InputChargeFields, Charges, InputConvictionField
        },
        name: "input-conviction-fields",
        props: {
            conviction_index: {
                type: [Number, String],
                default: 0
            },
            client_id: {
                type: [Number, String],
                default: 0
            }

        },
        mounted() {

            let v = this.$store.state.convictions[this.conviction_index].id;
            if ( v === undefined ) {
                console.log( 'set is showing to true');
                this.isShowing = true;
            } else {
                console.log('not|' + v + '|');
            }


        },
        data() {
            return {
                gridState: 'wait',
                global_error_message: null,
                isShowing: false,
                savingStatus: 0,
                savingMessage: '',
            }
        },
        methods: {
            remove_conviction() {

                if (confirm("Remove this conviction?")) {
                    this.$store.dispatch('removeConviction', {
                            conviction_index: this.conviction_index,
                            conviction_id: this.$store.state.convictions[this.conviction_index].id,
                        }
                    );
                }

            },
            async save_conviction() {

                this.savingStatus = 1;
                this.savingMessage = "Saving";
                let client_id = this.$store.state.client.id;

                let data = this.$store.state.convictions[this.conviction_index];

                let conviction_payload = {};
                for (let property in data) {
                    if (data.hasOwnProperty(property)) {

                        switch (property) {
                            case 'charges':
                            case 'conviction_index':
                                break;

                            default:
                                conviction_payload[property] = data[property];
                                break;

                        }
                    }
                }


                let save_status = await this.$store.dispatch('saveConviction', {
                    data: conviction_payload,
                    conviction_index: this.conviction_index,
                    client_id: client_id
                });

                this.savingStatus = 0;

                if (save_status) {
                    this.savingMessage = "Saved";
                    setTimeout(() => {
                        this.savingMessage = "";
                    }, 5000);

                } else {
                    this.savingMessage = "Error";
                }


                console.log('done saveing conviction');


            }
        },
        computed: {
            expungee_alias() {
                const d = this.$store.state.convictions[this.conviction_index];
                return d.name + ', ' + d.arrest_date;
            },
            case_alias() {
                const d = this.$store.state.convictions[this.conviction_index];
                return d.case_number + ', ' + d.agency;
            }
        },
    }
</script>

