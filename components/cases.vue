<template>
    <div>
        <H5>
            Arrest: {{ this.ccase.date }}, Case# {{ this.ccase.case_number }}<br /> Agency:  {{ this.ccase.agency }}
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


