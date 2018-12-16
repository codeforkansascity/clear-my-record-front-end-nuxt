<template>
    <div>
        <H5>
            Case: {{ this.ccase.case_number }}, Agency:  {{ this.ccase.agency }}, Date:  {{ this.ccase.date }}
        </H5>
        <ol>
            <counts v-for="count in this.ccase.counts" :key="count.id" :count="count">

            </counts>
        </ol>
    </div>
</template>

<script>
    import Counts from "../components/counts";
    export default {
        components: {Counts},
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


