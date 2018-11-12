<template>

    <sec previous="start-application" next="your-conviction">
        <template slot="title">
            <h4>Terms of Use</h4>
        </template>
        <p>This service has been created by the University of Missouri School of Law and Code for KC (Authors) to
            promote expungement of criminal convictions in Missouri.
            Use of this service is limited to those persons who agree with the terms of use.
            The terms of use that you must agree to if you would like to use this app are as follows: </p>

        <ul>
            <li>The Authors are not attorneys. The Authors are not providing legal advice. You agree the authors are not
                attorneys. You agree that the Authors are not providing legal advice.
            </li>
            <li>This service identifies the information the state of Missouri asks for in its application (petition)
                form. There may be additional information you may want to include in your application.
            </li>
            <li>You may want to consult with an attorney before you file an application with the court.</li>
            <li>The filing fee for the petition is $250, payable to the court. The Authors are not agreeing to pay any
                filing fee for you.
            </li>
            <li>If you are indigent, you may ask the court in an affidavit and motion to waive the filing fee and costs.
                This service identifies the information the State of Missouri asks for in its indigency affidavit and
                motion. There may be additional information you may want to include in your affidavit and motion.
            </li>
            <li>Your personal information will be communicated to the Authors. The Authors are working with legislators,
                court officials, and advocates to improve the expungement process and to make the expungement process
                available to more people.
            </li>
            <li>Information gathered from you and others will be used to improve the operation of the service.
                Statistics, with personally identifiable information (PII) removed, will be used to improve the service
                and advocate for changes to criminal justice and expungement laws and regulations.
            </li>
        </ul>

        <template slot="note">
            <p><i>
                Button: I agree to the Terms of Use
                Button: I do not agree

                Fork - Button: I do not agree: Thank you for using our service. We hope you found it helpful.

                Fork - Button: I agree to the Terms of Use
            </i></p>
        </template>

    </sec>

</template>

<script>
    import Sec from "../components/sec";
    import DisqualifyingQuestion from "../components/disqualifying-question";

    export default {
        components: {Sec, DisqualifyingQuestion},
    }
</script>
