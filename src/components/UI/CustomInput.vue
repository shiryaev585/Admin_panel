<template>
    <input 
        :value="modelValue"
        @input="updateInput"
        class="input" 
    />
</template>
<script>
export default {
    name: 'custom-input',
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);
        },
    }
}
</script>
<style lang="scss">

</style>