<template>
    <li>
        {{ charge.type }}
        {{ charge.class }},
        {{ charge.citation }},
        {{ charge.charge }}
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


