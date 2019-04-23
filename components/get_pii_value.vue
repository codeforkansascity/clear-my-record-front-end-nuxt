<template>
<span>{{ this.val }}</span>

</template>

<script>
    export default {
        name: "get_pii_value",
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

                let v = this.$store.state.client[this.field];
                if ( v ) {

                    console.log('|' + v + '|');
                    return v;
                } else {
                    return "MISSING Client: " + this.missing_prompt;
                }
            }
        },

    }
</script>


