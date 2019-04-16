<template>
    <div class="row" style="padding-top: 3em">

        <div class="col-md-6" style="padding-left: 2em;">
            <input-conviction-field v-bind:i="this.conviction_index" f="name">Name that is is refered to as?
                <template slot="help">
                    When speaking with the expungie, how they refere to this.  "Car 2005"
                </template>
            </input-conviction-field>
            <input-conviction-field v-bind:i="this.conviction_index" f="arrest_date" style="width: 20em;">Approx. date of arrest?
                <template slot="help">
                    Any format is ok, even just year
                </template>
            </input-conviction-field>

            <input-conviction-field v-bind:i="this.conviction_index" f="case_number">What was the case number?
                <template slot="help">
                    The best way to find your case number is by....
                </template>
            </input-conviction-field>
            <input-conviction-field v-bind:i="this.conviction_index" f="agency">Was the court a Missouri circuit (county) court
                or a municipal (city) court?
            </input-conviction-field>
            <input-conviction-field v-bind:i="this.conviction_index" f="city_county">What was the name of the County or City?
            </input-conviction-field>


        </div>
        <div class="col-md-6" style="padding-left: 2em;">

            <input-conviction-field v-bind:i="this.conviction_index" f="your_name_in_case">What was your name as it appeared on
                the court’s records?
            </input-conviction-field>
            <input-conviction-field v-bind:i="this.conviction_index" f="release_status">Release Status</input-conviction-field>
            <input-conviction-date-field v-bind:i="this.conviction_index" f="release_date" style="width: 10em;">Release Date</input-conviction-date-field>
            <input-conviction-field v-bind:i="this.conviction_index" f="name_of_judge">What was the name of the Judge?
            </input-conviction-field>
        </div>

        <div class="col-md-2">
            &nbsp;
        </div>

        <div class="col-md-1" style="padding-top: 1.25em;">
            Notes:
        </div>

        <div class="col-md-7" style="padding-left: 2em; ">
            <input-conviction-note-field v-bind:i="this.conviction_index" f="note">
            </input-conviction-note-field>
        </div>

        <div class="col-md-2"  style="padding-top: 1.25em;">

        </div>

        <div class="col-md-2">
            &nbsp;
        </div>

        <div class="col-md-1" style="padding-top: 1.25em;">
            <button class="float-left" @click="remove_conviction">Remove</button>
        </div>

        <div class="col-md-7" style="padding-left: 2em; padding-bottom: 1em;">

        </div>

        <div class="col-md-2"  style="padding-top: 1.25em; padding-bottom: 1em">
            <button class="float-right" @click="save_conviction">Save</button>
        </div>



        <h4  style="padding-left: 1.5em; padding-top:2em; padding-bottom: 0px; margin-bottom: 0px;">CHARGE(S)</h4>
        <div class="col-md-12" style="padding-left: 5em;">



            <input-charge-fields v-for="(charge, charge_index) in this.conviction.charges" :key="charge.id"
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
            InputConvictionDateField, AddCharge, InputChargeFields, Charges, InputConvictionField},
        name: "input-conviction-fields",
        props: {
            conviction: {
                type: Object,
                default: {},
            },
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

                if ( confirm("Remove this conviction?")) {
                    alert('Code remove code')
                }

            },
            save_conviction() {
                alert('code save code client_id=' + this.client_id);


                   let data = this.$store.state.client.convictions[this.conviction_index];
                   data['client_id'] = this.client_id;
                   data['conviction_index'] = this.conviction_index;
                   delete data.charges;


                this.$store.dispatch('saveConviction',data);

                console.log('done saveing conviction');



            }
        },
    }
</script>

