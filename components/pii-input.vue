<template>
    <div class="mb-3">
        <label><slot></slot></label>
        <div class="input-group">
            <input type="text"
                   class="form-control"
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
        data: function () {
            return {
                value: null,
            }
        },
        computed: {
            question: {
                get() {
                    const q = this.$store.state.pii.find(item => item.question === this.questionname);
                    return q ? q.value : '';
                },
                set(value) {
                     this.$store.commit('storePii', { question: this.questionname, value: value});
                },
            },
        },

    }
</script>

<style scoped>

</style>
