<template>
    <div class="mb-3">
        <div class="form-group" style="padding-left: 2em; padding-right: 2em;">
            <label>
                <slot></slot>
            </label>

            <v-select v-model="question" label="name" :options="states"></v-select>


        </div>
    </div>
</template>

<script>
    export default {
        name: "input-race",
        data() {
            return {
                states: [
                    {
                        "name": "White",
                        "abbreviation": "White"
                    },
                    {
                        "name": "Black or African American",
                        "abbreviation": "Black or African American"
                    },
                    {
                        "name": "American Indian or Alaska Native",
                        "abbreviation": "American Indian or Alaska Native"
                    },
                    {
                        "name": "Asian",
                        "abbreviation": "Asian"
                    },
                    {
                        "name": "Native Hawaiian or Other Pacific Islander",
                        "abbreviation": "Native Hawaiian or Other Pacific Islander"
                    }
                ]
            }
        },
        props: {
            questionname: {
                type: String,
                default: 'q1',
            }
        },
        computed: {
            question: {
                get() {
                    const q = this.$store.state.pii.find(item => item.question === this.questionname);
                    return q ? q.value : '';
                },
                set(value) {
                    this.$store.commit('storePii', {question: this.questionname, value: value.abbreviation});
                },
            },
        },

    }
</script>

<style>
    .v-select {
        background: #fff;
    }
</style>
