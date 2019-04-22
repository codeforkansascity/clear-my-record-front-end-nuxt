<template>
    <div class="mb-3">
        <div class="form-group" style="padding-left: 2em; padding-right: 2em;">
            <label>
                <slot></slot>
            </label>

            <v-select v-model="inp_value" label="name" :options="options"></v-select>

            <input v-if="show_other_input"
                   type="text"
                   class="form-control"
                   v-model="other_value">
        </div>
    </div>
</template>

<script>
    export default {
        name: "input-select-other",
        data() {
            return {
                show_other_input: false,
            }
        },
        props: {
            field: {
                type: String,
                default: 'q1',
            },
            options: {
                type: Array,
                default: [
                    {
                        "name": "Option 1",
                        "abbreviation": "Option1"
                    },
                    {
                        "name": "Other",
                        "abbreviation": "Other"
                    }
                ],
            }
        },
        computed: {
            inp_value: {
                get() {
                    return this.$store.state.client[this.field];
                },
                set(value) {
                    if (value.abbreviation === 'Other') {
                        this.show_other_input = true;
                    } else {
                        this.show_other_input = false;
                        this.$store.commit('storeClientField', {field: this.field, value: value});
                        this.other_value = value.abbreviation;
                    }
                },
            },
            other_value: {
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

<style scoped>

</style>
