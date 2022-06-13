<template>
    <ul 
        v-if="users.length > 0"
        class="users"
    >
        <user 
            v-for="user in users" 
            :user="user"
            :key="user.id"
            @remove="$emit('remove', user)"
        />
    </ul>
    <empty-list v-else />
</template>
<script>
import User from './User.vue';
import EmptyList from './UI/EmptyList.vue';
export default {
    components: {
        User,
        EmptyList,
    },
    props: {
        users: {
            type: Array,
            required: true,
        },
    },
}
</script>
<style lang="scss">
.users {
    margin: 20px 70px;
}
</style>