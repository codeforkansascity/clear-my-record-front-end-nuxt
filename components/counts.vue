<template>
    <li>
        {{ count.type }}
        {{ count.class }},
        {{ count.citation }},
        {{ count.charge }}
    </li>
</template>

<script>
    export default {
        name: "counts",
        props: {
            count: {
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


