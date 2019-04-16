<template>
    <div class="form-group" style="padding-left: 2em; padding-right: 2em;">
        <label>
            <slot></slot>
        </label>

        <input type="text"
               class="form-control"
               v-model="inp_value">

    </div>

</template>

<script>
    export default {
        name: "pii-input",
        props: {
            field: {
                type: String,
                default: 'q1',
            }
        },
        computed: {
            inp_value: {
                get() {
                    return this.$store.state.client[this.field];
                },
                set(value) {
                    this.$store.commit('storeClientField', {field: this.field, value: value});
                },
            },
        },

    }
</script>


