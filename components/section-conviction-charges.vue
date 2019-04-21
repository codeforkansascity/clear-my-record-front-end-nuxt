<template>

    <div>

        <div>
            <input-conviction-fields v-for="(conviction, conviction_index) in this.$store.getters.allCases"
                                     :key="conviction.id"
                                     :conviction_index="conviction_index" :client_id="client_id">
            </input-conviction-fields>
            <add-conviction></add-conviction>
        </div>
    </div>

</template>

<script>
    import InputConvictionFields from "./input-conviction-fields";
    import AddConviction from "./add-conviction";

    export default {
        name: "section-conviction-charges",
        components: {InputConvictionFields, AddConviction},
        props: {
            client_id: {
                type: [Number, String],
                default: 0
            }
        },
        data() {
            return {
                gridState: 'wait',
                global_error_message: null,
            }
        },
    }
</script>


