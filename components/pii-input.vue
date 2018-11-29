<template>
    <div class="mb-3">
        <label for="phone"><slot></slot></label>
        <div class="input-group">
            <input type="text"
                   class="form-control"
                   required="*"
                   id="phone"
                   :value="value"
                   @input="updateCode($event.target.value)"
                   ref="input">
        </div>
    </div>
</template>

<script>
    export default {
        name: "pii-input",
        props: {
            group: {
                type: String,
                default: 'group',
            },
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
        mounted: function () {

            var all = this.$store.getters.allQuestions;

            var index = all.findIndex(p => p.group == this.group && p.question == this.questionname);

            if (index === -1 ) {
                this.value = null;
            } else {
                this.value = all[index].answer;
            }

        },

        methods: {
            updateCode(val) {
                // Atttach validation + sanitization here.
                this.$store.dispatch('storeQuestion', { group: this.group, question: this.questionname, answer: val });

            }
        }
    }
</script>

<style scoped>

</style>
