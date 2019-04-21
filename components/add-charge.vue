<template>
    <button @click="add_case">Add Charge</button>
</template>

<script>
    export default {
        name: "add-charge",
        props: {
            conviction_index: {
                type: [Number, String],
                default: 0
            },
        },
        methods: {
            add_case: function () {
                this.$store.commit('addCharge', {
                    conviction_index: this.conviction_index,
                    charge:
                        {
                            eligible: false,
                            please_expunge: false,
                            conviction_class_type: '',
                            conviction_charge_type: '',
                            citation: '',
                            charge: '',
                            sentence: '',
                        }

                });

            }
        }
    }
</script>

