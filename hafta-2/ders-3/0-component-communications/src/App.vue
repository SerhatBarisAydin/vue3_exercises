<template>
  <div class="container">

    <UserSection :userList ="userList" @new-item="userList.push($event)"/>
  
  </div>
</template>

<script>


import UserSection from './components/userSection.vue';

  export default{
    components:{
      UserSection
    },
    data(){
      return{
        userList:["baris", "serhat", "aydin"],
      };

    },

  }


</script>