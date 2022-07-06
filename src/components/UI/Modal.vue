<template>
    <div 
        v-if="isVisible"
        class="modal" 
        @click="hideModal"
    >
        <div class="modal__content" @click.stop>
            <custom-button 
                class="modal__content-close"
                @click="hideModal"
            >
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
                    <rect x="21.5859" y="7.44336" width="20" height="1.05263" transform="rotate(135 21.5859 7.44336)" fill="#5D6C7B"/>
                    <rect x="20.5078" y="21.9204" width="20" height="0.999999" transform="rotate(-135 20.5078 21.9204)" fill="#5D6C7B"/>
                </svg>
            </custom-button>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'modal',
    props: {
        isVisible: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        hideModal() {
            this.$emit('update:isVisible', false);
        },
    }
}
</script>
<style lang="scss">
.modal {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    z-index: 10;

    &__content {
        position: relative;
        margin: auto;
        background: white;
        border-radius: 12px;
        min-height: 50px;
        min-width: 300px;
        padding: 20px;

        &-close {
            position: absolute;
            top: 15px;
            right: 15px;
        }
    }
}
</style>