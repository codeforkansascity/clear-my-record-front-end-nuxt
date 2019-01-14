<template>
    <li v-bind:class="{ not_eligible: charge.not_eligible }">
        {{ charge.type }}
        {{ charge.class }},
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


