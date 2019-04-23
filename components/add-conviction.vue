<template>
    <button class="btn-success" style="margin-top: 1em" @click="add_conviction">Add Conviction</button>
</template>

<script>
    export default {
        name: "add-conviction",
        methods: {
            add_conviction: function () {
                this.$store.commit('addConviction', {
                    name: '',
                    case_number: '',
                    arrest_date: '',
                    agency: '',
                    court_name: '',
                    court_city_county: '',
                    judge: '',
                    record_name: '',
                    release_status: '',
                    release_date: null,
                    notes: '',
                    charges: [
                        {
                            charge: '',
                            citation: '',
                            conviction_class_type: '',
                            conviction_charge_type: '',
                            sentence: '',
                            convicted: '',
                            eligible: '',
                            please_expunge: '',
                            notes: '',
                        }
                    ]
                });

            }
        }
    }
</script>


