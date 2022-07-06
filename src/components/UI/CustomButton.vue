<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'custom-button',
}
</script>
<style lang="scss">
.btn {
    cursor: pointer;
}
</style>