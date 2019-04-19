<template>
<div style="padding-top: 3em;">
    <h2>Review Case and Charges</h2>

    <convictions v-for="ccase in this.$store.state.convictions" :key="convction.id"  :conviction="convction">

    </convictions>

</div>
</template>

<script>
    import Convictions from "../components/convictions";
    export default {
        name: "section-work-sheet",
        components: {Convictions},
    }
</script>


