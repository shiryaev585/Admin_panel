<template>
    <modal v-model:isVisible="isModalVisible">
        <add-user-form @add="addUser" />
    </modal>
    <custom-header v-model:isVisible="isModalVisible" />
    <div class="filters">
        <custom-input 
            class="filters__search"
            v-model="searchQuery"
            placeholder="Search..."
        />
        <custom-select 
            v-model="selectedSort"
            :options="sortOptions"
            class="filters__sort"
        >
            Sort
        </custom-select>
    </div>
    <users-list 
        :users="filteredUsers" 
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
            searchQuery: '',
            selectedSort: '',
            sortOptions: [
                { value: 'status', name: 'status', },
                { value: 'email', name: 'email', },
                { value: 'phone', name: 'phone', },
                { value: 'name', name: 'name', },
                { value: 'created', name: 'created date', },
            ],
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
    computed: {
        sortedUsers() {
            return [...this.users].sort((curUser, nextUser) => curUser[this.selectedSort]?.localeCompare(nextUser[this.selectedSort]));
        },
        filteredUsers() {
            return this.sortedUsers.filter((user) => {
                return user.email.includes(this.searchQuery) 
                    || user.status.includes(this.searchQuery);
            });
        }
    },
};
console.log(JSON.parse(localStorage.getItem('Users__List')));
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
textarea,
select {
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

.filters {
    display: flex;
    justify-content: space-between;
    margin: 20px 70px 0;

    &__search {
        border: 1px solid #6F73EE;
        padding: 10px 15px;
        width: 80%;
        margin-right: 16px;
    }
    &__sort {
        border: 1px solid #6F73EE;
        padding: 10px 0;
        width: 20%;
    }
}

@media (max-width: 768px) {
    .filters {

        &__search {
            width: 70%;
        }
        &__sort {
            width: 30%;
        }
    }
}

@media (max-width: 540px) {
    .filters {
        margin: 20px;
    }
}

</style>