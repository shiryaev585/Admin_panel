<template>
    <modal v-model:isVisible="isModalVisible">
        <add-user-form @add="addUser" />
    </modal>
    <custom-header v-model:isVisible="isModalVisible" />
    <users-list 
        :users="users" 
        @remove="removeUser"
    />
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
            users: [
                {
                    id: 1,
                    email: 'exmple@gmail.com',
                    password: 'qwerty',
                    phone: '8-999-888-77-66',
                    name: 'John Dow',
                    status: 'client',
                    created: '01.01.2020',
                    edited: '05.06.2022',
                },
                {
                    id: 2,
                    email: 'exmple_v2@gmail.com',
                    password: 'qwerty123',
                    phone: '8-888-777-66-55',
                    name: 'Judy Doe',
                    status: 'admin',
                    created: '18.03.2021',
                    edited: '01.06.2022',
                },
            ],
            isModalVisible: false,
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
        },
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