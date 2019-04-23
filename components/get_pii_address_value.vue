<template>
<span>
    {{ this.val }}
</span>

</template>

<script>
    export default {
        name: "get_pii_address_value",
        props: {
            field: {
                type: String,
                default: 'q1',
            },
            missing_prompt: {
                type: String,
                default: 'MISSING',
            }
        },
        computed: {
            val() {

                let v = this.$store.state.client['address_line_1'];
                 v +=  this.$store.state.client['address_line_2'] ? ', ' + this.$store.state.client['address_line_2'] : '';
                 v +=  this.$store.state.client['city'] ? ', ' + this.$store.state.client['city'] : '';
                 v +=  this.$store.state.client['state'] ? ', ' + this.$store.state.client['state'] : '';
                 v +=  this.$store.state.client['zip_code'] ? ', ' + this.$store.state.client['zip_code'] : '';

                if ( v ) {
                    return v;
                } else {
                    return "MISSING Client: " + this.missing_prompt;
                }
            }
        },

    }
</script>


