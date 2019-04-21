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
                    return this.$store.state.client[this.field];
                },
                set(value) {
                    let db_value = value ? value : null;
                    this.$store.commit('storeClientField', {field: this.field, value: db_value});
                },
            },
        },

    }
</script>

<style scoped>

</style>
