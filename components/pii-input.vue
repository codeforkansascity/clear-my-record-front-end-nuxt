<template>
    <div class="mb-3">
        <div class="form-group" style="padding-left: 2em; padding-right: 2em;">
            <label>
                <slot></slot>
            </label>

                <input type="text"
                       class="form-control"
                       style="padding-left: 2em; padding-right: 2em;"
                       required="*"
                       v-model="question">

        </div>
    </div>
</template>

<script>
    export default {
        name: "pii-input",
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
                    this.$store.commit('storePii', {question: this.questionname, value: value});
                },
            },
        },

    }
</script>

<style scoped>

</style>
