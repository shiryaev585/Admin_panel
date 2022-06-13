<template>
    <div class="empty-list">
        <h3 class="empty-list__title">the users list is empty</h3>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .empty-list {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 400px;
        margin: 70px;
        background-color: #F4F7FB;
        border-radius: 10px;

        &__title {
            text-transform: uppercase;
        }
    }
</style>