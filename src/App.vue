<template>
    <modal v-model:isVisible="isModalVisible">
        <add-user-form @add="addUser" />
    </modal>
    <custom-header v-model:isVisible="isModalVisible" />
    <users-list 
        :users="users" 
        @remove="removeUser"
        v-if="!isUserLoading"
    />
    <loader v-else />
</template>
<script>
import CustomHeader from './components/CustomHeader.vue';
import UsersList from './components/UsersList.vue';
import AddUserForm from './components/AddUserForm.vue';

export default {
    components: {
        CustomHeader,
        UsersList,
        AddUserForm,
    },
    data() {
        return {
            users: [],
            isModalVisible: false,
            isUserLoading: false,
        }
    },
    methods: {
        addUser(user) {
            this.users.push(user);
            this.isModalVisible = false;
        },
        removeUser(user) {
            const updatedUserList = this.users.filter((u) => user.id !== u.id);
            this.users = updatedUserList;
            localStorage.setItem('Users__List', JSON.stringify(updatedUserList));
        },
        fetchUsers() {
            this.isUserLoading = true;
            
            // setTimeout for async imitation and to show loader
            setTimeout(() => {
                const usersList = JSON.parse(localStorage.getItem('Users__List')) || [];
                this.users = usersList;
                this.isUserLoading = false;
            }, 800);
        },
    },
    mounted() {
        this.fetchUsers();
    },
};
</script>
<style lang="scss">
body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li {
    margin: 0;
    padding: 0;
}

ol, 
ul {
    list-style: none;
}

a, 
button,
input,
textarea {
    outline: none;
    display: block;
}

input,
textarea,
select {
	font-family:inherit;
	font-size:inherit;
	font-weight:inherit;
}

a {
    text-decoration: none;
}

button {
    background-color: transparent;
    border: none;
    padding: 0;
}

#app {
    font-family: Arial, Helvetica, sans-serif
}
</style>