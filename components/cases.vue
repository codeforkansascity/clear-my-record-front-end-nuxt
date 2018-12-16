<template>
    <div>
        <H5>
            Case: {{ this.ccase.case_number }}, Agency:  {{ this.ccase.agency }}, Date:  {{ this.ccase.date }}
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


