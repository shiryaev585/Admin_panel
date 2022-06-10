<template>
    <header class="header">
        <logo />
        <custom-button @click="showForm">
            <svg width="25px" height="25px" viewBox="0 0 25 25">
                <g>
                    <path 
                        d="M 24.234375 9.382812 L 15.632812 9.382812 L 15.632812 0.78125 C 15.632812 0.351562 15.285156 0 14.851562 0 L 10.164062 0 C 9.730469 0 9.382812 0.351562 9.382812 0.78125 L 9.382812 9.382812 L 0.78125 9.382812 C 0.351562 9.382812 0 9.730469 0 10.164062 L 0 14.851562 C 0 15.285156 0.351562 15.632812 0.78125 15.632812 L 9.382812 15.632812 L 9.382812 24.234375 C 9.382812 24.664062 9.730469 25.015625 10.164062 25.015625 L 14.851562 25.015625 C 15.285156 25.015625 15.636719 24.664062 15.636719 24.234375 L 15.636719 15.632812 L 24.234375 15.632812 C 24.664062 15.632812 25.015625 15.285156 25.015625 14.851562 L 25.015625 10.164062 C 25.015625 9.730469 24.664062 9.382812 24.234375 9.382812 Z M 24.234375 9.382812 "
                        fill="#fff"
                    />
                </g>
            </svg>
        </custom-button>
    </header>
</template>
<script>
import Logo from './Logo.vue';
import CustomButton from './CustomButton.vue';
export default {
    components: {
        Logo,
        CustomButton,
    },
    methods: {
        showForm() {
            console.log('show form');
        },
    }
}
</script>
<style lang="scss">
    .header {
        padding: 20px;
        background: radial-gradient(71.16% 199.4% at 82.43% 76.38%, #8185FF 0%, #6F73EE 100%);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>