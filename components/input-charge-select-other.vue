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
        name: "input-charge-select-other",
        data() {
            return {
                show_other_input: false,
            }
        },
        props: {
            i: {
                type: [Number, String],
                default: '0',
            },
            j: {
                type: [Number, String],
                default: '0'
            },
            f: {
                type: String,
                default: 'name',
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
        data: function () {
            return {
                showHelp: false,
            }
        },
        computed: {
            inp_value: {
                get() {
                    return this.$store.state.client[this.f];
                },
                set(value) {
                    if (value.abbreviation === 'Other') {
                        this.show_other_input = true;
                    } else {
                        this.show_other_input = false;
                        this.$store.commit('storeChargeField', {
                            conviction_index: this.i,
                            charge_index: this.j,
                            field: this.f,
                            value: value
                        });
                        this.other_value = value.abbreviation;
                    }
                },
            },

            other_value: {
                get() {
                    const q = this.$store.state.convictions[this.i].charges[this.j];
                    return q ? q[this.f] : '';
                },
                set(value) {
                    this.$store.commit('storeChargeField', {
                        conviction_index: this.i,
                        charge_index: this.j,
                        field: this.f,
                        value: value
                    });
                },
            },


        },

    }
</script>

<style scoped>

</style>
