<template>

    <sec previous="in-categories" next="thanks">
        <template slot="title">
            <h4>Additional Personal Information
            </h4>
            <ul>
                <li>Would police consider you a danger to the public?
                </li>
                <li>What efforts have you made to better your life?</li>
            </ul>
        </template>


        <form>
            <div class="mb-3">
                <label for="phone">
                    <slot></slot>
                </label>
                <div class="input-group">
                    <textarea class="form-text"></textarea>
                </div>
            </div>
        </form>

    </sec>

</template>

<script>
    import Sec from "../components/sec";

    export default {
        components: {Sec},
    }
</script>
