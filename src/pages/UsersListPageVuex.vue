<template>
    <modal v-model:isVisible="isModalVisible">
        <add-user-form @add="addUser" />
    </modal>
    <div class="interact-users">
        <custom-input 
            v-focus
            class="interact-users__search"
            v-model="searchQuery"
            placeholder="Search..."
        />
        <custom-select 
            v-model="selectedSort"
            :options="sortOptions"
            class="interact-users__sort"
        >
            Sort
        </custom-select>
        <custom-button 
            v-model="isModalVisible"
            @click="showModal"
            class="interact-users__add"
        >
            <svg width="30px" height="30px" viewBox="0 0 30 30">
                <g>
                    <path style="fill:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke: #6F73EE;stroke-opacity:1;stroke-miterlimit:4;" d="M 17.498436 8.999999 C 17.498436 13.69453 13.69453 17.498436 8.999999 17.498436 C 4.305468 17.498436 0.501562 13.69453 0.501562 8.999999 C 0.501562 4.305468 4.305468 0.501562 8.999999 0.501562 C 13.69453 0.501562 17.498436 4.305468 17.498436 8.999999 Z M 17.498436 8.999999 " transform="matrix(1.666667,0,0,1.666667,0,0)"/>
                    <path style=" stroke:none;fill-rule:nonzero;fill: #6F73EE;fill-opacity:1;" d="M 8.335938 16.085938 L 21.664062 16.085938 L 21.664062 13.914062 L 8.335938 13.914062 Z M 13.832031 8.335938 L 13.832031 21.664062 L 16.167969 21.664062 L 16.167969 8.335938 Z M 13.832031 8.335938 "/>
                </g>
            </svg>
        </custom-button>
    </div>
    <users-list 
        :users="filteredUsers" 
        @remove="removeUser"
        v-if="!isUserLoading"
    />
    <loader v-else />
    <div class="bottom-block" ref="bottomBlock"></div>
</template>
<script>
import UsersList from '../components/UsersList.vue';
import AddUserForm from '../components/AddUserForm.vue';

export default {
    components: {
        UsersList,
        AddUserForm,
    },
    data() {
        return {
            users: [],
            isModalVisible: false,
            isUserLoading: false,
            page: 1,
            limit: 10,
            totalPages: 0,
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
                usersList.forEach((user, idx) => {
                    if (idx < this.limit) {
                        this.users.push(user);
                    }
                });
                // this.users = usersList;
                this.isUserLoading = false;
                this.totalPages = Math.ceil(usersList.length / this.limit);
            }, 200);
        },
        loadMoreUsers() {
            console.log('loadMoreUsers');
            
            // setTimeout for async imitation and to show loader
            setTimeout(() => {
                this.page += 1;
                const usersList = JSON.parse(localStorage.getItem('Users__List')) || [];
                // console.log(this.users);
                // console.log(usersList);
                const usersToLoad = usersList.filter((user, idx) => {
                    // console.log('user.id', user.id);
                    // console.log('this.users[idx].id', this.users[idx].id);
                    // return user.id !== this.users[idx].id;
                    return !this.users[idx];
                });
                // console.log('usersToLoad', usersToLoad);
                this.users = [...this.users, ...usersToLoad];
                // this.totalPages = Math.ceil(usersList.length / this.limit);
            }, 500);
        },
        showModal() {
            this.isModalVisible = true;
        },
    },
    mounted() {
        this.fetchUsers();
        const callback = (entries) => {
            if (entries[0].isIntersecting) {
                this.loadMoreUsers();
            }
        };
        const observer = new IntersectionObserver(callback, { threshold: 1 });
        observer.observe(this.$refs.bottomBlock);
    },
    computed: {
        sortedUsers() {
            return [...this.users].sort((curUser, nextUser) => curUser[this.selectedSort]?.localeCompare(nextUser[this.selectedSort]));
        },
        filteredUsers() {
            return this.sortedUsers.filter((user) => {
                return user.email.toLowerCase().includes(this.searchQuery.toLowerCase()) 
                    || user.status.toLowerCase().includes(this.searchQuery.toLowerCase());
            });
        }
    },
};
</script>
<style lang="scss">
@import '../assets/variables.scss';

.interact-users {
    display: flex;
    justify-content: space-between;
    margin: 20px 70px 0;

    &__search {
        border: 1px solid $main;
        padding: 10px 15px;
        width: 80%;
        margin-right: 16px;
    }
    &__sort {
        border: 1px solid $main;
        padding: 10px 0;
        width: 20%;
    }
    &__add {
        margin-left: 16px;
    }
}

@media (max-width: 768px) {
    .interact-users {

        &__search {
            width: 60%;
        }
        &__sort {
            width: 40%;
        }
    }
}

@media (max-width: 540px) {
    .interact-users {
        margin: 20px;
        font-size: 14px;
    }
}

@media (max-width: 390px) {
    .interact-users {
        font-size: 12px;
    }
}

</style>