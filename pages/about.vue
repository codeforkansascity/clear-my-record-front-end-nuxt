<template>
    <div>
        <p>
            <button @click="$store.commit('increment')">{{ $store.state.counter }}</button><br>
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/q6">q6</nuxt-link>
        </p>
    </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped>

</style>
