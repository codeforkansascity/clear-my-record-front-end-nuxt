<template>
    <div>
        <div class="row" style="padding-top: 3em">
            <div class="col-sm">
                <h3>Is the offense expungeable?</h3>

                <p>Some offenses cannot be expunged. <br/>
                    Your offense may not be expungeable if any of the following are true:</p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <div class="row">
                    <div class="col-sm" style="padding-left: 3em;">

                        <disqualifying-question group="are-you-excluded" questionname="classA">
                            A Class A or dangerous felony?
                        </disqualifying-question>

                        <disqualifying-question group="are-you-excluded" questionname="death">
                            A crime where a death occurred?
                        </disqualifying-question>

                        <disqualifying-question group="are-you-excluded" questionname="felonyAssault">
                            Felony Assault or kidnapping?
                        </disqualifying-question>

                    </div>
                    <div class="col-sm" style="padding-right: 3em;">

                        <disqualifying-question group="are-you-excluded" questionname="domesticAssault">
                            Domestic Assault?
                        </disqualifying-question>

                        <disqualifying-question group="are-you-excluded" questionname="intoxicated">
                            Operating a car, boat, or plane while intoxicated?
                        </disqualifying-question>

                        <disqualifying-question group="are-you-excluded" questionname="cdl">
                            A violation of a motor vehicle ordinance/law while CDL?
                        </disqualifying-question>

                    </div>
                </div>
                <div class="row">
                    <div class="col-sm ques">
                        <div v-if="numberOfYes || numberOfUnknown" class="col-sm ques">
                            <p class="alert-warning">You May Have an Offense that May Not
                                Be Expunged [Based upon the information you provided, you do not appear to meet the
                                requirements
                                to obtain an expungement. You may want to consult with an attorney to see what options
                                might be
                                available to you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import DisqualifyingQuestion from "../components/disqualifying-question";

    export default {
        name: "section-is-expungeable",
        components: {DisqualifyingQuestion},
        computed: {
            numberOfNotNo: function () {
                var all = this.$store.getters.allQuestions;
                return all.reduce(
                    (accumulator, item) => accumulator += (item.answer === 'No' && item.group === 'do-you-qualify' ? 1 : 0)
                    , 0);
            },
            numberOfYes: function () {
                var all = this.$store.getters.allQuestions;
                return all.reduce(
                    (accumulator, item) => accumulator += (item.answer === 'Yes' && item.group === 'do-you-qualify' ? 1 : 0)
                    , 0);
            },
            numberOfUnknown: function () {
                var all = this.$store.getters.allQuestions;
                return all.reduce(
                    (accumulator, item) => accumulator += (item.answer === 'Unknown' && item.group === 'do-you-qualify' ? 1 : 0)
                    , 0);
            }
        }
    }
</script>

