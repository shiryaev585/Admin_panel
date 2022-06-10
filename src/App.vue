<template>
    <custom-header />
    <users-list />
</template>
<script>
import CustomHeader from './components/CustomHeader.vue';
import UsersList from './components/UsersList.vue';

export default {
    components: {
        CustomHeader,
        UsersList,
    }
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
textarea {
    outline: none;
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