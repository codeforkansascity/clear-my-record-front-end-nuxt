<template>

    <sec previous="page3" next="terms-of-use">
        <template slot="title">
            <h4>Complete an Application?</h4>
        </template>
        <p>If you think you are eligible and the offense you have may
            be expunged, you may use this service to complete an application. </p>

        <p>IMPORTANT: DO NOT USE THIS SERVICE IF YOU HAVE MORE THAN ONE CONVICTION. IT WILL PRODUCE AN INCOMPLETE AND INACCURATE FORM THAT CAN DELAY AN EXPUNGEMENT EVEN IF YOU QUALIFY. </p>

        <p>THIS SERVICE WILL WORK PROPERLY ONLY IF YOU HAVE ONE CONVICTION. BE AWARE THAT IF YOU FILE FOR EXPUNGEMENT, THE COURT WILL CHECK YOUR COMPLETE CRIMINAL RECORD AS PART OF THE PROCESS </p>

        <p>IF YOU HAVE MULTIPLE CONVICTIONS, YOU SHOULD SEEK ASSISTANCE FROM AN ATTORNEY TO MAKE AN EXPUNGEMENT APPLICATION.</p>
        <template slot="note">
            <p><i>
                Button: Begin
                Button: Save My Information for Later
                Button: Close App </i></p>
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
