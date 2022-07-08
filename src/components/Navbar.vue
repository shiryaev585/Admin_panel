<template>
    <div class="navbar">
        <router-link class="navbar__link" to="/">main</router-link>
        <router-link class="navbar__link" to="/users">users</router-link>
        <router-link class="navbar__link" to="/settings">settings</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.navbar {
    display: flex;

    &__link {
        margin-right: 12px;
        color: #fff;
        text-transform: uppercase;
        font-size: 13px;
    }
}
</style>