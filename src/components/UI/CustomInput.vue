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
.input {
    width: 100%;
    border: 1px solid #6F73EE;
    padding: 10px 15px;
    margin-top: 15px;
}
</style>