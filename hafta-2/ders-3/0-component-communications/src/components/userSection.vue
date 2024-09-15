<template>
    <ul>
        <li v-for="user in userList" :key="user">{{ user }}</li>
    </ul>
    <button @click="$emit('new-item', new Date().getTime())" >Set Data</button>
</template>

<script>



    export default{



        props:  ["userList"],


        

    }

</script>

