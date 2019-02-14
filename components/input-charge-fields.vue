<template>
    <div class="row">
        <div class="col-md-6" style="padding-left: 2em;">
            <input-charge-field v-bind:i="this.case_index" v-bind:j="this.charge_index" f="charge">Charge
            </input-charge-field>
        </div>
        <div class="col-md-2">
            <input-charge-field v-bind:i="this.case_index" v-bind:j="this.charge_index" f="citation">Citation
            </input-charge-field>
        </div>
        <div class="col-md-2">
            <input-charge-field v-bind:i="this.case_index" v-bind:j="this.charge_index" f="type">Charge type?
                <template slot="help">
                    How to resarch??
                </template>
            </input-charge-field>
        </div>

        <div class="col-md-2">
            <input-charge-field v-bind:i="this.case_index" v-bind:j="this.charge_index" f="class">Class
            </input-charge-field>
        </div>
        <div class="col-md-6" style="padding-left: 2em;">
            <input-charge-field v-bind:i="this.case_index" v-bind:j="this.charge_index" f="sentence">Sentence
            </input-charge-field>
        </div>


        <div class="col-12" style="padding-left: 2em; padding-top: 1em; padding-bottom: 1em;">
<hr>
        </div>
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
                type: [Number, String],
                default: 0
            },
            charge_index: {
                type: [Number, String],
                default: 0
            },

        },
    }
</script>

