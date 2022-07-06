<template>
    <ul 
        v-if="users.length > 0"
        class="users"
    >
        <transition-group name="user-list">
            <user 
                v-for="user in users" 
                :user="user"
                :key="user.id"
                @remove="$emit('remove', user)"
            />
        </transition-group>
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

.user-list-item {
    display: inline-block;
    margin-right: 10px;
}

.user-list-enter-active,
.user-list-leave-active {
    transition: all 0.4s linear;
}

.user-list-enter-from,
.user-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.user-list-move {
    transition: transform 0.4s linear;
}

@media (max-width: 540px) {
    .users {
        margin: 20px;
    }
}

</style>