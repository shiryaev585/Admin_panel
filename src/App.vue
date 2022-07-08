<template>
    <custom-header />
    <router-view></router-view>
</template>
<script>
import CustomHeader from './components/CustomHeader';
export default {
    components: {
        CustomHeader,
    },
}

</script>
<style lang="scss">
body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li {
    margin: 0;
    padding: 0;
}

ol, 
ul {
    list-style: none;
}

a, 
button,
input,
textarea,
select {
    outline: none;
    display: block;
}

input,
textarea,
select {
	font-family:inherit;
	font-size:inherit;
	font-weight:inherit;
}

a {
    text-decoration: none;
}

button {
    background-color: transparent;
    border: none;
    padding: 0;
}

#app {
    font-family: Arial, Helvetica, sans-serif
}

</style>