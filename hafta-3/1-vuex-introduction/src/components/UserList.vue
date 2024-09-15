<template>

<ul>    
    <li v-for="items in woodItems" :key="items">
        {{ items.title }}
        
    </li>
</ul>

</template>

<script>
import { mapGetters } from 'vuex';
export default{
    computed: {
    ... mapGetters({
        woodItems: "_woodItems",
        activeUser: "_activeUser"
    })
},
}


</script>