<template>
    <div class="mb-3">
        <div class="form-group" style="padding-left: 2em; padding-right: 2em;">
            <label>
                <slot></slot>
            </label>

            <b-form-input v-model="question" type="date"/>

        </div>
    </div>
</template>

<script>
    export default {
        name: "input-date",
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
                    console.log(value)
                    this.$store.commit('storePii', {question: this.questionname, value: value});
                },
            },
        },

    }
</script>

<style scoped>

</style>
