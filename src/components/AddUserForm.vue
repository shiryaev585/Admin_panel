<template>
    <form class="form" @submit.prevent>
        <h3>Add a new user</h3>
        <div class="form__inputs-wrapper">
            <custom-input 
                :value="user.name"
                @input="user.name = $event.target.value"
                v-model="user.name"
                placeholder="Name..."
                type="text" 
            />
            <custom-input 
                :value="user.email"
                @input="user.email = $event.target.value"
                v-model="user.email"
                placeholder="Email..."
                type="email" 
            />
            <custom-input 
                :value="user.phone"
                @input="user.phone = $event.target.value"
                v-model="user.phone"
                placeholder="Phone..."
                type="tel" 
            />
            <custom-input 
                :value="user.status"
                @input="user.status = $event.target.value"
                v-model="user.status"
                placeholder="Status..."
                type="text" 
            />
            <custom-input 
                :value="user.password"
                @input="user.password = $event.target.value"
                v-model="user.password"
                placeholder="Password..."
                type="password"
                autocomplete="on" 
            />
        </div>
        <custom-button 
            class="form__submit"
            @click="addUser"
        >
            submit
        </custom-button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                phone: '',
                status: '',
                password: '',
            },
            modalVisible: false,
        }
    },
    methods: {
        addUser() {
            const date = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`;
            const usersList = JSON.parse(localStorage.getItem('Users__List')) || [];
            this.user.id = Date.now();
            this.user.created = date;
            this.user.edited = date;
            this.$emit('add', this.user);
            usersList.push(this.user);
            localStorage.setItem('Users__List', JSON.stringify(usersList));
        },
    },
};
</script>
<style lang="scss">
    .form {
        padding: 20px;
        width: 600px;

        &__inputs-wrapper {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 15px;
        }

        &__submit {
            text-transform: uppercase;
            width: 150px;
            color: #fff;
            background-color: #F3A712;
            padding: 15px 25px;
            border-radius: 5px;
            margin-left: auto;

            &:hover {
                background-color: #FAB836;
            }

            &:active {
                background-color: #F3A712;
            }
        }
    }
</style>