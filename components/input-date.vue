<template>
    <div class="mb-3">
        <div class="form-group" style="padding-left: 2em; padding-right: 2em;">
            <label>
                <slot></slot>
            </label>

            <b-form-input v-model="inp_value" type="date" style="width: 10em"/>

        </div>
    </div>
</template>

<script>
    export default {
        name: "input-date",
        props: {
            field: {
                type: String,
                default: 'q1',
            }
        },
        computed: {
            inp_value: {
                get() {
                    console.log('get full name');
                    return this.$store.state.client[this.field];
                },
                set(value) {
                    this.$store.commit('storeClientField', {field: this.field, value: value});
                },
            },
        },

    }
</script>

<style scoped>

</style>
