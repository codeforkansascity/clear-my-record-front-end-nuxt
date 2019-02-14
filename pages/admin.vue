<template>
<div class="container">
    <div class="row">
        <div class="col">
            <button @click="clearData()">Clear data</button>
        </div>

        <section-work-sheet></section-work-sheet>
    </div>
</div>
</template>

<script>
    import SectionWorkSheet from "../components/section-work-sheet";
    export default {
        name: "admin",
        components: {SectionWorkSheet},
        methods: {
            clearData: function () {
                this.$store.dispatch('clearAll');
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


