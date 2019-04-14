<template>
    <input-conviction-fields v-for="ccase in this.$store.getters.allCases, index" :key="ccase.id"  :ccase="ccase">

    </input-conviction-fields>

</template>

<script>
    import InputConvictionFields from "./input-conviction-fields";
    export default {
        name: "input-convictions",
        components: {InputConvictionFields}
    }
</script>

