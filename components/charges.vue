<template>
    <li v-bind:class="{ eligible: charge.eligible }">
        {{ charge.conviction_charge_type }}
        {{ charge.conviction_class_type }},
        {{ charge.citation }},
        {{ charge.charge }},
        {{ charge.sentence }}
    </li>
</template>

<script>
    export default {
        name: "charges",
        props: {
            charge: {
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


