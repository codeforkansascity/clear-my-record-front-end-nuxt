<template>
    <div class="row" style="padding-top: 3em">

        <div class="col-md-6" style="padding-left: 2em;">
            <h1>{{ this. conviction_index}}</h1>
            <input-conviction-field v-bind:i="this.conviction_index" f="court_name">Court Name, used for printing
            </input-conviction-field>
            <input-conviction-field v-bind:i="this.conviction_index" f="name">Name that is is refered to as?
                <template slot="help">
                    When speaking with the expungie, how they refere to this. "Car 2005"
                </template>
            </input-conviction-field>
            <input-conviction-field v-bind:i="this.conviction_index" f="arrest_date" style="width: 20em;">Approx. date
                of arrest?
                <template slot="help">
                    Any format is ok, even just year
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
        <div class="col-md-6" style="padding-left: 2em;">

            <input-conviction-field v-bind:i="this.conviction_index" f="record_name">What was your name as it
                appeared on
                the court’s records?
            </input-conviction-field>
            <input-conviction-field v-bind:i="this.conviction_index" f="release_status">Release Status
            </input-conviction-field>
            <input-conviction-date-field v-bind:i="this.conviction_index" f="release_date" style="width: 10em;">Release
                Date
            </input-conviction-date-field>
            <input-conviction-field v-bind:i="this.conviction_index" f="judge">What was the name of the Judge?
            </input-conviction-field>
        </div>

        <div class="col-md-2">
            &nbsp;
        </div>

        <div class="col-md-1" style="padding-top: 1.25em;">
            Notes:
        </div>

        <div class="col-md-7" style="padding-left: 2em; ">
            <input-conviction-note-field v-bind:i="this.conviction_index" f="notes">
            </input-conviction-note-field>
        </div>

        <div class="col-md-2" style="padding-top: 1.25em;">

        </div>

        <div class="col-md-2">
            &nbsp;
        </div>

        <div class="col-md-1" style="padding-top: 1.25em;">
            <button class="float-left" @click="remove_conviction">Remove</button>
        </div>

        <div class="col-md-7" style="padding-left: 2em; padding-bottom: 1em;">

        </div>

        <div class="col-md-2" style="padding-top: 1.25em; padding-bottom: 1em">
            <button class="float-right" @click="save_conviction">Save</button>
        </div>


        <h4 style="padding-left: 1.5em; padding-top:2em; padding-bottom: 0px; margin-bottom: 0px;">CHARGE(S)</h4>
        <div class="col-md-12" style="padding-left: 5em;">


            <input-charge-fields
                    v-for="(charge, charge_index) in this.$store.getters.chargesForConviction(conviction_index)"
                    :key="charge.id"
                    :charge_index="charge_index" :charge="charge"
                    :conviction_index="conviction_index"
            >
            </input-charge-fields>


            <add-charge v-bind:conviction_index="this.conviction_index"></add-charge>
        </div>

    </div>

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
        data() {
            return {
                gridState: 'wait',
                global_error_message: null,
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
            save_conviction() {

                // let data = this.$store.state.convictions[this.conviction_index];
                //
                // data['client_id'] = this.$store.state.client.id;
                // data['conviction_index'] = this.conviction_index;

                //  let client = this.$store.state.client;          // TODO: we should get the client id from the parms
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


                this.$store.dispatch('saveConviction', {
                    data: conviction_payload,
                    conviction_index: this.conviction_index,
                    client_id: client_id
                });

                console.log('done saveing conviction');


            }
        },
    }
</script>

