<template>
    <div>
        <h4>Charges</h4>

        <form>
            <pii-input>Aprox. Date of Charge</pii-input>
            <pii-input>County/Municipality of Charge</pii-input>
            <pii-input>Description of Charge</pii-input>
        </form>

    </div>
</template>

<script>
    import PiiInput from "../components/pii-input";

    export default {
        name: "section-charges",
        components: {PiiInput},
    }
</script>


