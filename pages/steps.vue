<style>
    .bs-wizard {margin-top: 40px;}

    /*Form Wizard*/
    .bs-wizard {border-bottom: solid 1px #e0e0e0; padding: 0 0 10px 0;}
    .bs-wizard > .bs-wizard-step {padding: 0; position: relative;}
    .bs-wizard > .bs-wizard-step + .bs-wizard-step { }
    .bs-wizard > .bs-wizard-step .bs-wizard-stepnum {color: #595959; font-size: 16px; margin-bottom: 5px; padding-left: 4em;}
    .bs-wizard > .bs-wizard-step .bs-wizard-info {color: #999; font-size: 14px;}
    .bs-wizard > .bs-wizard-step > .bs-wizard-dot {position: absolute; width: 30px; height: 30px; display: block; background: #fbe8aa; top: 45px; left: 50%; margin-top: -15px; margin-left: -15px; border-radius: 50%;}
    .bs-wizard > .bs-wizard-step > .bs-wizard-dot:after {content: ' '; width: 14px; height: 14px; background: #fbbd19; border-radius: 50px; position: absolute; top: 8px; left: 8px; }
    .bs-wizard > .bs-wizard-step > .progress {position: relative; border-radius: 0px; height: 8px; box-shadow: none; margin: 20px 0;}
    .bs-wizard > .bs-wizard-step > .progress > .progress-bar {width:0px; box-shadow: none; background: #fbe8aa;}
    .bs-wizard > .bs-wizard-step.complete > .progress > .progress-bar {width:100%;}
    .bs-wizard > .bs-wizard-step.active > .progress > .progress-bar {width:50%;}
    .bs-wizard > .bs-wizard-step:first-child.active > .progress > .progress-bar {width:0%;}
    .bs-wizard > .bs-wizard-step:last-child.active > .progress > .progress-bar {width: 100%;}
    .bs-wizard > .bs-wizard-step.disabled > .bs-wizard-dot {background-color: #f5f5f5;}
    .bs-wizard > .bs-wizard-step.disabled > .bs-wizard-dot:after {opacity: 0;}
    .bs-wizard > .bs-wizard-step:first-child  > .progress {left: 50%; width: 50%;}
    .bs-wizard > .bs-wizard-step:last-child  > .progress {width: 50%;}
    .bs-wizard > .bs-wizard-step.disabled a.bs-wizard-dot{ pointer-events: none; }

    @media (max-width:1000px) {
        .bs-wizard {
            min-width: 325px !important;
            overflow: auto
        }

        .bs-wizard > .bs-wizard-step {
            transform: rotate(+90deg);
            display: block;
            margin: 0 auto 0 auto;
            height: 160px;
            width: 160px !important
        }

        .bs-wizard > .bs-wizard-step .bs-wizard-stepnum, .bs-wizard > .bs-wizard-step .bs-wizard-info {
            transform: rotate(-90deg);
            position: relative
        }

        .bs-wizard > .bs-wizard-step .bs-wizard-stepnum {
            top: 144px;
        }

        .bs-wizard > .bs-wizard-step .bs-wizard-info {
            bottom: 130px
        }

        .bs-wizard > .bs-wizard-step > .bs-wizard-dot {
            top: 46.5%
        }
    }


    .list-inline-item-dot  {position: absolute; width: 30px; height: 30px; display: block; background: #fbe8aa;   margin-top: 0px; margin-left: -30px; border-radius: 50%;}
    .list-inline-item-dot:after {content: ' '; width: 14px; height: 14px; background: #fbbd19; border-radius: 50px; position: absolute; top: 8px; left: 8px; }
    .list-inline-item { padding-right: 30px}

</style>
<template>
    <div class="container">

        <div class="row">
            <div class="col-sm">
                <ul class="list-inline">
                    <li class="list-inline-item"><a href="#" class="list-inline-item-dot">1</a> Do you qualify?</li>
                    <li class="list-inline-item"><a href="#" class="list-inline-item-dot"></a>Is your offense expungable?</li>
                    <li class="list-inline-item"><a href="#" class="list-inline-item-dot"></a>Terms of use</li>
                    <li class="list-inline-item"><a href="#" class="list-inline-item-dot"></a>What are your conviction details</li>
                    <li class="list-inline-item"><a href="#" class="list-inline-item-dot"></a>What is your personal information</li>
                    <li class="list-inline-item"><a href="#" class="list-inline-item-dot"></a>Print Application</li>
                </ul>
            </div>
        </div>

        <div class="row bs-wizard" style="border-bottom:0;">

            <div class="col-xs-3 bs-wizard-step complete">
                <div class="text-center bs-wizard-stepnum">Do you qualify?</div>
                <div class="progress"><div class="progress-bar"></div></div>
                <a href="#" class="bs-wizard-dot"></a>
                <div class="bs-wizard-info text-center"></div>
            </div>

            <div class="col-xs-3 bs-wizard-step complete"><!-- complete -->
                <div class="text-center bs-wizard-stepnum">Is your offense expungable?</div>
                <div class="progress"><div class="progress-bar"></div></div>
                <a href="#" class="bs-wizard-dot"></a>
                <div class="bs-wizard-info text-center"></div>
            </div>

            <div class="col-xs-3 bs-wizard-step active"><!-- complete -->
                <div class="text-center bs-wizard-stepnum">Terms of use</div>
                <div class="progress"><div class="progress-bar"></div></div>
                <a href="#" class="bs-wizard-dot"></a>
                <div class="bs-wizard-info text-center"></div>
            </div>

            <div class="col-xs-3 bs-wizard-step disabled"><!-- active -->
                <div class="text-center bs-wizard-stepnum">What are your conviction details</div>
                <div class="progress"><div class="progress-bar"></div></div>
                <a href="#" class="bs-wizard-dot"></a>
                <div class="bs-wizard-info text-center"> </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm">
                <h4>Do you Qualify?</h4>

                <p>To qualify, you must be eligible to apply and the offense must be one that can be expunged. <br/>
                    You may not be eligible to apply if any of the following are true:</p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <div class="row">
                    <div class="col-sm" style="padding-left: 3em;">

                        <qualifying-question group="do-you-qualify" questionname="criminalCharge">
                            I have a criminal charge pending against me now.
                            <template slot="help">
                                A pending criminal charge is a criminal charge against you that is currently in court
                                and
                                has not been
                                dismissed, you have been found innocent, or you have been found guilty.
                            </template>
                        </qualifying-question>

                        <qualifying-question group="do-you-qualify" questionname="previously">
                            I have had one or more convictions expunged.
                            <template slot="help">
                                <b>Why does this matter?</b> Missouri limits the number of convictions that can be
                                expunged.
                                Currently,
                                no more than 1 felony conviction and 3 misdemeanor convictions can be expunged. A single
                                conviction can
                                include multiple counts. For example, a marijuana conviction including a possession
                                count
                                and a
                                paraphernalia count would be treated as a single conviction to be expunged.
                            </template>
                        </qualifying-question>

                        <qualifying-question group="do-you-qualify" questionname="obligations">
                            I have not completed all requirements of my sentence.
                        </qualifying-question>

                    </div>
                    <div class="col-sm" style="padding-right: 3em;">

                        <qualifying-question group="do-you-qualify" questionname="felonytime">
                            I completed my sentence less than seven years ago (if a felony).
                        </qualifying-question>

                        <qualifying-question group="do-you-qualify" questionname="misdereanortime">
                            I completed my sentence less than three years ago (if a misdemeanor).
                        </qualifying-question>

                    </div>
                </div>
                <div class="row">
                    <div class="col-sm ques">
                        <p><b>What if I have more than one conviction?</b></p>
                        <p>Missouri limits the number of convictions that can be expunged. Currently, no more
                            than 1
                            felony
                            conviction and 3 misdemeanor convictions can be expunged. A single conviction can
                            include multiple
                            counts. For example, a marijuana conviction including a possession count and a
                            paraphernalia count
                            would be treated as a single conviction to be expunged.</p>
                        <p>IF YOU HAVE MORE THAN ONE CONVICTION, SEEKING AN EXPUNGEMENT IS DIFFICULT AND YOU
                            SHOULD
                            GET ADVICE
                            FROM AN ATTORNEY. </p>
                    </div>

                    <div v-if="numberOfYes" class="col-sm ques">
                        <p class="alert-warning">You May Not Be Eligible to Apply Based
                            upon the information you provided, you do not appear to meet the requirements to
                            obtain
                            an expungement
                            at this time. You may want to consult with an attorney to see what options might be
                            available to you.
                        </p>
                    </div>

                    <div v-if="numberOfUnknown" class="col-sm ques">
                        <p class="alert-warning">
                            You may be eligible to apply, but because you are not sure, you may not be
                            successful.
                            You may want
                            to consult with an attorney to see what options might be available to you.
                        </p>
                    </div>
                </div>
            </div>
        </div>


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

                        <qualifying-question group="are-you-excluded" questionname="classA">
                            A Class A or dangerous felony?
                        </qualifying-question>

                        <qualifying-question group="are-you-excluded" questionname="death">
                            A crime where a death occurred?
                        </qualifying-question>

                        <qualifying-question group="are-you-excluded" questionname="felonyAssault">
                            Felony Assault or kidnapping?
                        </qualifying-question>

                    </div>
                    <div class="col-sm" style="padding-right: 3em;">

                        <qualifying-question group="are-you-excluded" questionname="domesticAssault">
                            Domestic Assault?
                        </qualifying-question>

                        <qualifying-question group="are-you-excluded" questionname="intoxicated">
                            Operating a car, boat, or plane while intoxicated?
                        </qualifying-question>

                        <qualifying-question group="are-you-excluded" questionname="cdl">
                            A violation of a motor vehicle ordinance/law while CDL?
                        </qualifying-question>

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
    import Sec from "../components/sec";
    import QualifyingQuestion from "../components/qualifying-question";

    export default {
        components: {Sec, QualifyingQuestion},
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
