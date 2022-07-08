<template>
    <header class="header">
        <logo @click="$router.push('/')" class="header__logo" />
        <navbar />
    </header>
</template>
<script>
import Navbar from '../components/Navbar.vue';
export default {    
    components: {
        Navbar,
    },
}
</script>
<style lang="scss">
.header {
    padding: 20px 70px;
    background: radial-gradient(71.16% 199.4% at 82.43% 76.38%, #8185FF 0%, #6F73EE 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__logo {
        cursor: pointer;
    }
}

@media (max-width: 540px) {
    .header {
        padding: 20px;
    }
}
</style>