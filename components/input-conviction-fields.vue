<template>
    <div class="row" style="padding-top: 3em">

        <div class="col-md-6" style="padding-left: 2em;">
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
            <input-conviction-field v-bind:i="this.conviction_index" f="name_of_judge">What was the name of the Judge?
            </input-conviction-field>

        </div>
        <div class="col-md-6" style="padding-left: 2em;">

            <input-conviction-field v-bind:i="this.conviction_index" f="your_name_in_case">What was your name as it appeared on
                the court’s records?
            </input-conviction-field>
            <input-conviction-field v-bind:i="this.conviction_index" f="release_status">Release Status</input-conviction-field>
            <input-conviction-date-field v-bind:i="this.conviction_index" f="release_date">Release Date</input-conviction-date-field>
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

    export default {
        components: {InputConvictionDateField, AddCharge, InputChargeFields, Charges, InputConvictionField},
        name: "input-conviction-fields",
        props: {
            conviction: {
                type: Object,
                default: {},
            },
            conviction_index: {
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
    }
</script>

