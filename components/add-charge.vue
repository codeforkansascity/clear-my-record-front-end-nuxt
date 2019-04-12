<template>
    <button @click="add_case">Add Charge</button>
</template>

<script>
    export default {
        name: "add-charge",
        props: {
            case_index: {
                type: [Number, String],
                default: 0
            },
        },
        methods: {
            add_case: function () {
                this.$store.commit('addCharge', {
                    case_index: this.case_index,
                    charge:
                        {
                            eligible: false,
                            expunge: false,
                            type: '',
                            class: '',
                            citation: '',
                            charge: '',
                            sentence: '',
                        }

                });

            }
        }
    }
</script>

