<template>
    <div class="mb-3">
        <div class="form-group" style="padding-left: 2em; padding-right: 2em;">
            <label>
                <slot></slot>
            </label>

            <v-select v-model="question" label="name" :options="options"></v-select>

            <input v-if="show_value"
                   type="text"
                   class="form-control"
                   v-model="input_value">
        </div>
    </div>
</template>

<script>
    export default {
        name: "input-select-other",
        data() {
            return {
                show_value: false,
            }
        },
        props: {
            questionname: {
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
            question: {
                get() {
                    const q = this.$store.state.pii.find(item => item.question === this.questionname);
                    return q ? q.value : '';
                },
                set(value) {
                    if (value.abbreviation === 'Other') {
                        this.show_value = true;
                    } else {
                        this.show_value = false;
                        this.$store.commit('storePii', {question: this.questionname, value: value.abbreviation});
                        this.input_value = value.abbreviation;
                    }

                },
            },
            input_value: {
                get() {
                    const q = this.$store.state.pii.find(item => item.question === this.questionname);
                    return q ? q.value : '';
                },
                set(value) {
                    console.log(value);
                    this.$store.commit('storePii', {question: this.questionname, value: value});
                },
            },

        },

    }
</script>

<style scoped>

</style>
