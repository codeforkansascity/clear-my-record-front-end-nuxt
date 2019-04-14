<template>

    <div>

        <div>
            <input-conviction-fields v-for="(conviction, conviction_index) in this.$store.getters.allConvictions" :key="conviction.id"
                               :conviction_index="conviction_index" :conviction="conviction">
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
        async created() {
            // this.gridState = 'wait';
            // console.log('b=' + this.client_id)
            // await this.$axios.get('/api/convictions/' + this.client_id)
            //     .then((res) => {
            //         if (res.status === 200) {
            //             this.clients = res.data;
            //             this.gridState = 'good';
            //         } else {
            //             this.gridState = 'error';
            //         }
            //     }).catch(error => {
            //         if (error.response.status === 404) {
            //             this.gridState = 'not-found';
            //             console.log('')
            //         } else if (error.response) {
            //             this.gridState = 'error';
            //             this.global_error_message = error.response.data.errors;
            //         }
            //
            //     }).then(() => {
            //         }
            //     );
        },
    }
</script>


