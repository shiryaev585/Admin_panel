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
                class="form__input"
            />
            <custom-input 
                :value="user.email"
                @input="user.email = $event.target.value"
                v-model="user.email"
                placeholder="Email..."
                type="email" 
                class="form__input"
            />
            <custom-input 
                :value="user.phone"
                @input="user.phone = $event.target.value"
                v-model="user.phone"
                placeholder="Phone..."
                type="tel" 
                class="form__input"
            />
            <custom-select 
                @input="user.status = $event.target.value"
                v-model="selectedStatus"
                :options="statusOptions"
                class="form__select"
            >
                Status...
            </custom-select>
            <custom-input 
                :value="user.password"
                @input="user.password = $event.target.value"
                v-model="user.password"
                placeholder="Password..."
                type="password"
                autocomplete="on" 
                class="form__input"
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
            selectedStatus: '',
            statusOptions: [
                { value: 'client', name: 'client', },
                { value: 'admin', name: 'admin', },
                { value: 'partner', name: 'partner', },
            ],
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

    &__input,
    &__select {
        width: 100%;
        border: 1px solid #6F73EE;
        margin-top: 15px;
    }

    &__input {
        padding: 10px 15px;
    }

    &__select {
        padding: 10px;
        color: #808080;
    }

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