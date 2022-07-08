<template>
    <div>
        <div>User ID {{ $route.params.id }}</div>
        <div>User {{ this.user }}</div>
        <div class="user user-page">
            <form class="form" @submit.prevent>
                <div class="form__inputs-wrapper">
                    <custom-input 
                        :value="user.name"
                        @input="user.name = $event.target.value"
                        v-model="user.name"
                        type="text" 
                        class="form__input"
                    />
                    <custom-input 
                        :value="user.email"
                        @input="user.email = $event.target.value"
                        v-model="user.email"
                        type="text" 
                        class="form__input"
                    />
                </div>
                <custom-button 
                    class="form__submit"
                    @click="editUser"
                >
                    edit
                </custom-button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {},
            userId: +location.pathname.match(/\d+/g),
        };
    },
    methods: {
        setUser() {
            const usersList = JSON.parse(localStorage.getItem('Users__List')) || [];
            const user = usersList.length && usersList.find((user) => user.id === this.userId);
            this.user = user;
        },
        editUser() {
            console.log('editUser');
            const usersList = JSON.parse(localStorage.getItem('Users__List')) || [];
            const updatedUsersList = usersList.map((user, idx) => {
                // console.log(user, idx);
                if (user.id === this.userId) {
                    console.log(user);
                    console.log(user.name);
                }
            })
        },
    },
    mounted() {
        this.setUser();
    },
    watch: {
        user: {
            handler(newValue) {
                console.log(newValue.name);
                console.log(newValue.email);
            },
            deep: true,
        },
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/variables.scss';

.user-page {
    margin: 20px 70px;
}

.form {
    &__inputs-wrapper {
        display: flex;
    }

    &__input {
        border: none;
        background-color: transparent;
        border-bottom: 1px solid $main;
        margin-right: 24px;
        padding: 8px;
    }

    &__submit {
        text-transform: uppercase;
        width: 150px;
        color: #fff;
        background-color: $btnColor;
        padding: 15px 25px;
        border-radius: 5px;
        margin-left: auto;

        &:hover {
            background-color: $btnColorHover;
        }

        &:active {
            background-color: $btnColor;
        }
    }
}
</style>