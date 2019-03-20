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
        name: "input-sex",
        data() {
            return {
                states: [
                    {
                        "name": "Female",
                        "abbreviation": "Female"
                    },
                    {
                        "name": "Intersex",
                        "abbreviation": "Intersex"
                    },
                    {
                        "name": "Male",
                        "abbreviation": "Male"
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

<style scoped>

</style>
