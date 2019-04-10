<template>
    <div class="container">
        <div style="padding-top: 3em;">
            <h2>Add Expungie</h2>
            <div class="row">
                <div class="col-md-6" style="padding-left: 1em;">
                    <p>&nbsp;</p>
                    <pii-input questionname="full_name">Full name?</pii-input>
                    <pii-input questionname="phone" v-bind:style="phoneStyle">Phone/Cell?</pii-input>

                    <input-date questionname="dob">Date of birth?</input-date>
                    <pii-input questionname="address_line_1">Address Line 1?</pii-input>
                    <pii-input questionname="address_line_2">Address Line 1?</pii-input>
                    <pii-input questionname="city">City?</pii-input>
                    <input-state questionname="state">State?</input-state>
                    <pii-input questionname="zip" v-bind:style="zipStyle">Zip?</pii-input>
                    <pii-input questionname="status">Status?</pii-input>

                </div>
                <div class="col-md-6" style="padding-left: 1em;">

                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <div class="col-md-6">
                    <button v-on:click="add" type="submit" class="btn btn-primary btn-sm">
                        Create
                    </button>
                </div>
                <div class="col-md-6 text-right">
                    <a v-on:click="cancel" class="btn btn-sm btn-default float-right">Cancel</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PiiInput from "../components/pii-input";
    import InputState from '../components/input-state';
    import InputDate from "../components/input-date";
    export default {
        name: "add-expungie",
        components: {InputDate, PiiInput, InputState},
        mounted() {
            this.$store.dispatch('clearAll');
            this.$store.commit('addCase', {
                case_number: '',
                agancy: '',
                court_id: '',
                court_name: '',
                city_county: '',
                name_of_judge: '',
                your_name_in_case: '',
                release_status: '',
                release_date: '',
                charges: [
                    {
                        eligible: true,
                        type: '',
                        class: '',
                        citation: '',
                        charge: '',
                        sentence: '',
                    }
                ]
            });
        },
        data() {
            return {
                zipStyle: {
                    width: '12em'
                },
                phoneStyle: {
                    width: '20em'
                }
            }
        },

        methods: {
            add() {
                this.$router.push('/intake')
            },
            cancel() {
                this.$router.push('/expungie-list')
            }
        },
    }
</script>

<style scoped>

</style>
