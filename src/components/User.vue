<template>
    <li class="user">
        <div class="user__info">
            <span class="user__status">{{ user.status }}</span>
            <span class="user__name">{{ user.name }}</span>
        </div>
        <div class="user__contacts">
            <div class="user__email">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23px" height="23px" viewBox="0 0 23 23" version="1.1">
                    <g id="surface1">
                        <path d="M 20.125 3.832031 L 2.875 3.832031 C 1.289062 3.832031 0 5.121094 0 6.707031 L 0 18.207031 C 0 19.796875 1.289062 21.082031 2.875 21.082031 L 20.125 21.082031 C 21.710938 21.082031 23 19.796875 23 18.207031 L 23 6.707031 C 23 5.121094 21.710938 3.832031 20.125 3.832031 Z M 1.917969 9.414062 L 7.601562 13.035156 L 1.917969 17.90625 Z M 9.25 14.144531 C 9.261719 14.132812 9.269531 14.113281 9.285156 14.101562 L 10.472656 14.855469 C 11.097656 15.253906 11.902344 15.253906 12.527344 14.855469 L 13.71875 14.101562 C 13.730469 14.113281 13.738281 14.132812 13.753906 14.144531 L 19.613281 19.167969 L 3.390625 19.167969 Z M 21.082031 17.90625 L 15.398438 13.035156 L 21.082031 9.414062 Z M 2.875 5.75 L 20.125 5.75 C 20.652344 5.75 21.082031 6.179688 21.082031 6.707031 L 21.082031 7.140625 L 11.5 13.238281 L 1.917969 7.140625 L 1.917969 6.707031 C 1.917969 6.179688 2.347656 5.75 2.875 5.75 Z M 2.875 5.75 " stroke="transparent" fill="#6F73EE"/>
                    </g>
                </svg>
                <span>{{ user.email }}</span>
            </div>
            <div class="user__phone">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9994 15.2252V18.0854C20.0005 18.3509 19.946 18.6138 19.8394 18.8571C19.7328 19.1004 19.5765 19.3188 19.3804 19.4983C19.1844 19.6778 18.9529 19.8144 18.7009 19.8995C18.4489 19.9846 18.1818 20.0162 17.9168 19.9923C14.9772 19.6735 12.1534 18.671 9.67246 17.0653C7.36425 15.6014 5.4073 13.6484 3.94057 11.3447C2.32607 8.85744 1.32133 6.02557 1.00775 3.07855C0.983881 2.8149 1.01528 2.54917 1.09994 2.2983C1.18461 2.04742 1.32069 1.81688 1.49952 1.62136C1.67835 1.42585 1.89601 1.26963 2.13865 1.16267C2.38128 1.05571 2.64358 1.00034 2.90883 1.00009H5.77477C6.2384 0.995538 6.68786 1.15939 7.03938 1.4611C7.39091 1.76282 7.62052 2.18181 7.6854 2.63998C7.80637 3.55533 8.0307 4.45408 8.35413 5.31909C8.48266 5.66035 8.51047 6.03122 8.43428 6.38777C8.35809 6.74431 8.18108 7.07159 7.92423 7.33082L6.71098 8.54166C8.07093 10.9286 10.0512 12.9049 12.4429 14.2622L13.6561 13.0513C13.9159 12.795 14.2438 12.6184 14.601 12.5423C14.9583 12.4663 15.3299 12.494 15.6718 12.6223C16.5386 12.9451 17.4391 13.169 18.3563 13.2897C18.8203 13.355 19.2441 13.5883 19.5471 13.9452C19.8501 14.302 20.011 14.7576 19.9994 15.2252Z" stroke="#6F73EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ user.phone }}</span>
            </div>
        </div>
        <div class="user__id" style="display: none;">{{ user.id }}</div>
        <div class="user__btns-wrapper">
            <custom-button 
                class="user__edit"
                @click="$router.push(`/users/${user.id}`)"
            >
                <svg width="30px" height="30px" viewBox="0 0 30 30">
                    <g id="surface1">
                        <path style=" stroke:none;fill-rule:evenodd;fill:#6F73EE;fill-opacity:1;" d="M 7.503906 18.648438 L 12.003906 23.207031 L 7.503906 23.207031 Z M 15.382812 9.699219 L 19.886719 14.199219 L 13.105469 22.128906 L 8.628906 17.578125 Z M 17.730469 7.199219 C 18.433594 6.496094 19.785156 6.707031 20.746094 7.667969 L 21.617188 8.542969 C 22.582031 9.503906 22.792969 10.855469 22.085938 11.558594 L 20.695312 12.949219 L 16.339844 8.589844 Z M 17.730469 7.199219 "/>
                    </g>
                </svg>
            </custom-button>
            <custom-button 
                class="user__delete" 
                @click="$emit('remove', user)"
            >
                <svg width="30px" height="30px" viewBox="0 0 30 30">
                    <g>
                        <path d="M 23.710938 4.980469 L 23.710938 7.5 L 6.25 7.5 L 6.25 4.980469 L 10.585938 4.980469 L 11.875 3.75 L 18.085938 3.75 L 19.375 4.980469 Z M 7.480469 23.730469 L 7.480469 8.730469 L 22.480469 8.730469 L 22.480469 23.730469 C 22.480469 25.078125 21.308594 26.25 19.960938 26.25 L 10 26.25 C 8.648438 26.25 7.476562 25.078125 7.476562 23.730469 Z M 7.480469 23.730469 " fill="#EE685F" />
                    </g>
                </svg>
            </custom-button>
        </div>
    </li>
</template>
<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
        }
    },
}
</script>
<style lang="scss">
.user {
    position: relative;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #F4F7FB;
    border-radius: 10px;

    &__info {
        margin-bottom: 8px;
    }

    &__status {
        font-weight: 700;
        margin-right: 8px;
    }

    &__contacts {
        display: flex;
        align-items: center;
    }

    &__email {
        display: flex;
        align-items: center;
        margin-right: 22px;

        & span {
            margin-left: 8px;
        }
    }

    &__phone {
        display: flex;
        align-items: center;

        & span {
            margin-left: 8px;
        }
    }

    &__btns-wrapper {
        display: flex;
        align-items: center;
        position: absolute;
        top: 30px;
        right: 30px;
    }

    &__edit {
        margin-right: 16px;
    }
}

@media (max-width: 540px) {
    .user__contacts {
        align-items: start;
        flex-direction: column;
    }

    .user__phone {
        margin-top: 8px;
    }
}
</style>