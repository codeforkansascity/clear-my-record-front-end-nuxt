<template>

    <div class="mb-3">
        <label>
            <slot></slot>
        </label>
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
        name: "input-case-field",
        props: {
            i: {
                type: String,
                value: '0',
            },
            f: {
                type: String,
                default: 'name',
            }
        },
        computed: {
            question: {
                get() {
                    const q = this.$store.state.cases[this.i];
                    return q ? q[this.f] : '';
                },
                set(value) {
                    this.$store.commit('storeCaseField', {index: this.i, field: this.f, value: value});
                },
            },
        },

    }
</script>

<style scoped>

</style>
