<template>
    <div class="mb-3">
        <label for="phone"><slot></slot></label>
        <div class="input-group">
            <input type="text" class="form-control" id="phone"  required="*">
        </div>
    </div>
</template>

<script>
    export default {
        name: "pii-input"
    }
</script>

<style scoped>

</style>
