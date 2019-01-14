<template>
    <div>
        <H5>
            Court: {{ this.ccase.date }},  {{ this.ccase.case_number }},   {{ this.ccase.court_name }}
            <span v-if="this.ccase.release_status"> -- {{ this.ccase.release_status }}  {{ this.ccase.release_date  }}</span>
        </H5>
        <ol>
            <charges v-for="charge in this.ccase.charges" :key="charge.id" :charge="charge">

            </charges>
        </ol>
    </div>
</template>

<script>
    import Charges from "./charges";
    export default {
        components: {Charges},
        name: "cases",
        props: {
            ccase: {
                type: Object,
                default: {},
            }

        },
        // data: function () {
        //     return {
        //         test: null
        //     }
        // },
        // mounted: function () {
        //
        //
        //
        // },
        // watch: {
        //
        // }
    }
</script>


