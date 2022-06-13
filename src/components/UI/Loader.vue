<template>
    <div class="loader">
        <div class="lds-dual-ring"></div>
    </div>
</template>
<script>
export default {
    name: 'loader',
}
</script>
<style lang="scss">
.loader {
    margin-top: 300px;
    display: flex;
    justify-content: center;

    & .lds-dual-ring {
        display: inline-block;
        width: 150px;
        height: 150px;

        &:after {
            content: " ";
            display: block;
            width: 120px;
            height: 120px;
            margin: 8px;
            border-radius: 50%;
            border: 6px solid #6F73EE;
            border-color: #6F73EE transparent #6F73EE transparent;
            animation: lds-dual-ring 1.2s linear infinite;
        }
    }
}

@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>