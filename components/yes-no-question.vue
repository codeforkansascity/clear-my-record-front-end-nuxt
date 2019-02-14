<template>
    <div class="row">
        <div class="col-md-12 col-lg-12">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                    <slot></slot>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "yes-no-question",
        data: function () {
            return {
                question_answered: false
            }
        }
    }
</script>


