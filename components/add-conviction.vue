<template>
    <button @click="add_conviction">Add Conviction</button>
</template>

<script>
    export default {
        name: "add-conviction",
        methods: {
            add_conviction: function () {
                this.$store.commit('addConviction', {
                    case_number: '',
                    agancy: '',
                    court_name: '',
                    count_city_county: '',
                    name_of_judge: '',
                    your_name_in_case: '',
                    release_status: '',
                    release_date: '',
                    charges: [
                        {
                            eligible: true,
                            type: '',
                            class: '',
                            citation: '',
                            charge: '',
                            sentence: '',
                        }
                    ]
                });

            }
        }
    }
</script>


