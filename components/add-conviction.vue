<template>
    <button @click="add_conviction">Add Conviction</button>
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
                    release_date: '',
                    note: '',
                    charges: [
                        {
                            charge: '',
                            citation: '',
                            class: '',
                            type: '',
                            sentence: '',
                            convicted: '',
                            eligible: '',
                            expunge: '',
                            note: '',
                        }
                    ]
                });

            }
        }
    }
</script>


