<template>
    <div class="container">
        <slot></slot>

        <div class="row">
            <div class="col-sm" style="padding-right: 5em;">
                <slot name="left"></slot>
            </div>

            <div class="col-sm ques" >
                <slot name="right"></slot>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "two-panels"
    }
</script>

