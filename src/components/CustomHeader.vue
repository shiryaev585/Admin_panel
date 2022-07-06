<template>
    <header class="header">
        <logo />
        <custom-button @click="showModal">
            <svg width="30px" height="30px" viewBox="0 0 30 30">
                <g>
                    <path style="fill:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke: #fff;stroke-opacity:1;stroke-miterlimit:4;" d="M 17.498436 8.999999 C 17.498436 13.69453 13.69453 17.498436 8.999999 17.498436 C 4.305468 17.498436 0.501562 13.69453 0.501562 8.999999 C 0.501562 4.305468 4.305468 0.501562 8.999999 0.501562 C 13.69453 0.501562 17.498436 4.305468 17.498436 8.999999 Z M 17.498436 8.999999 " transform="matrix(1.666667,0,0,1.666667,0,0)"/>
                    <path style=" stroke:none;fill-rule:nonzero;fill: #fff;fill-opacity:1;" d="M 8.335938 16.085938 L 21.664062 16.085938 L 21.664062 13.914062 L 8.335938 13.914062 Z M 13.832031 8.335938 L 13.832031 21.664062 L 16.167969 21.664062 L 16.167969 8.335938 Z M 13.832031 8.335938 "/>
                </g>
            </svg>
        </custom-button>
    </header>
</template>
<script>
export default {
    props: {
        isVisible: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        showModal() {
            this.$emit('update:isVisible', true);
        },
    }
}
</script>
<style lang="scss">
.header {
    padding: 20px 70px;
    background: radial-gradient(71.16% 199.4% at 82.43% 76.38%, #8185FF 0%, #6F73EE 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media (max-width: 540px) {
    .header {
        padding: 20px;
    }
}
</style>