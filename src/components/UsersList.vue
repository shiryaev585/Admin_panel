<template>
    <ul class="users">
        <user />
    </ul>
</template>
<script>
import User from './User.vue';
export default {
    components: {
        User,
    }
}
</script>
<style lang="scss">
.users {
    margin: 20px;
}
</style>