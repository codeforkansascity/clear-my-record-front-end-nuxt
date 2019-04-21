<template>
<div class="container">
    <div class="row">
        <div class="col">
            <button @click="clearData()">Clear data</button>
        </div>
    </div>
</div>
</template>

<script>
    import SectionWorkSheet from "../components/section-work-sheet";
    export default {
        name: "admin",
        middleware: 'auth',
        components: {SectionWorkSheet},
        methods: {
            clearData: function () {
                this.$store.dispatch('clearAll');
            }
        }
    }
</script>


