<template>

    <div>
        <label>
            <slot></slot>
            <img src="/images/FontAwesome47 1.svg" style="display: inline-block;" v-if="this.$slots.help !== undefined"
                 v-on:click="showHelp = !showHelp"/>


            <transition name="slide-fade">
                <div style="margin-left: 3em; margin-right: 2em; margin-bottom: .5em; margin-top: .5em;"
                     v-if="showHelp && this.$slots.help !== undefined">
                    <slot name="help"></slot>
                </div>
            </transition>
        </label>

        <input type="text"
               class="form-control"
               required="*"
               v-model="question">

        <b-form-checkbox v-show="convicted" v-model="question" name="check-button" switch>
            Is {{ this.word }}
        </b-form-checkbox>

        <b-form-checkbox v-show="!convicted" v-model="question" name="check-button" switch>
            Was NOT {{ this.word }}
        </b-form-checkbox>


    </div>
</template>

<script>
    export default {
        name: "input-charge-field",
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
            word: {
                type: String,
                default: 'word',
            }
        },
        data: function () {
            return {
                showHelp: false,
            }
        },
        computed: {
            question: {
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

