<template>
    <two-panels style="padding-top: 30px;">
        <template slot="left">
            <h3 style="padding-bottom: 30px; font-weight: bold;">Is a crime on your record preventing you from getting a
                job, housing, or other things you need?</h3>
            <p>The State of Missouri allows some criminal offenses to be expunged from your criminal record. This means
                that the record is closed and you are able to honestly say “no” to whether you have the conviction
                almost all the time. The state even provides a self-help form for you to fill out and file.</p>
            <a class="btn btn-secondary btn-sm"
               href="/do-you-qualify">Find out if you qualify
            </a>
        </template>
        <template slot="right">
            <h5>THIS IS HOW IT WORKS.</h5>
            <div class="steps">
                <div class="step" data-step-number="1">
                    <h4>See if you qualify for expungement</h4>


                </div>
                <div class="step" data-step-number="2">
                    <h4>Give us some information about you and your conviction</h4>


                </div>
                <div class="step" data-step-number="3">
                    <h4>We'll generate a completed application</h4>


                </div>
                <div class="step" data-step-number="4">
                    <h4>Print and submit the application</h4>


                </div>
            </div>
        </template>
    </two-panels>
</template>

<script>
    import TwoPanels from "../components/two-panels";
    const Cookie = process.client ? require('js-cookie') : undefined


    export default {
        components: {TwoPanels},
        methods: {
            logout() {
                console.log('start logout');
                // One of the following should work but does not
                Cookie.remove('auth')
                Cookie.remove('auth._token')
                Cookie.remove('auth._token.local')
                Cookie.remove('auth._refresh_token.local')

               // document.cookie = 'auth' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=localhost;';

                localStorage.removeItem('auth._token.local');
                console.log('end logout');
               // this.$store.commit('setAuth', null)
            }
        },
    }
</script>

<style>

    .steps {
        padding: 15px;
    }
    .step h4 {
        font-size: 1.2em;
        padding-top: 1px;
        padding-bottom: 1em;
    }

    .step {
        border-left: 2px dotted #C5CBD4;
    }

    .step {
        margin-left: 18px;
        position: relative;
        border-left: solid 2px #6c757d;
        padding: 0 0 1px 35px;
    }

    .step {
        margin-left: 29px;
        padding-left: 42px;
    }

    .step:before {
        content: attr(data-step-number);
        position: absolute;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        text-align: center;
        background-color: #ffffff;      /* Hides the line going through the circle */

        border: 2px solid #6c757d;
        color: #6c757d;             /* Color of the number ie content from above */
        font-size: 1em;             /* Font size of the number */
        font-weight: normal;
        padding-top: 0px;
        left: -15px;

    }

    .step:last-child {
        border-left: none;
        left: 2px;
    }


</style>
