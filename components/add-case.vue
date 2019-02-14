<template>
    <button @click="add_case">Add Case</button>
</template>

<script>
    export default {
        name: "add-case",
        methods: {
            add_case: function () {
                this.$store.commit('addCase', {
                    case_number: '',
                    agancy: '',
                    court_id: '',
                    court_name: '',
                    city_county: '',
                    name_of_judge: '',
                    your_name_in_case: '',
                    release_status: '',
                    release_date: '',
                    charges: [
                        {
                            not_eligible: false,
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


