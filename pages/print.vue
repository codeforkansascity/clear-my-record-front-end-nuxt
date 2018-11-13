<template>
    <div>
        <sec>
            <template slot="title">
                <h4>Print Form</h4>
            </template>
            <p><i>A image of the form would be presented.</i></p>

            <p>If you are satisfied with this form and decide to file it, you will have to sign the following statement
                contained on the form:</p>

            <p>"I declare under penalty of perjury that the statements made herein are true and correct to the best of
                my knowledge, information, and belief."</p>

            <p>Only submit this form if all of the information you have provided is true and complete.</p>

            <p>Thank you for using...</p>

        </sec>

    </div>
</template>

<script>
    import Sec from "../components/sec";

    export default {
        components: {Sec},
    }
</script>
