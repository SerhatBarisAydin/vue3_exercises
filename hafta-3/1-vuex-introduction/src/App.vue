<template>
  <div class="container">
    
    <UserList/>
    <NewUser/>


      <!-- $store kullanımına dikkat edilmeli -->
     <!--  <li v-for="user in $store.state.userList" :key="user">
        {{ user }}
      </li> -->

     <!--  <li v-for="items in $store.state.Permissions" :key="items">
        {{ items }}
      </li>
 -->

     

      <!-- <li v-for="items in activeUser" :key="items">
        {{ items }}
      </li> -->
    

  <!--   {{ $store.state.FullName }} <br /> -->
   <!--  <button @click="updateName">FullName değerini değiştir</button> -->
  </div>
</template>

<script>
import UserList from './components/UserList.vue';
import NewUser from './components/NewUser.vue';
export default {

  components:{
    UserList,
    NewUser
  },  
  name: "App", 

  //store içerisinde mapledik
 
  created() {
    //vuex, store'dan çağırılacak değer için this.$store kullanımı gerekir.
    /* console.log(this.$store.state.user);
    console.log(this.$store.state.theme);
    console.log(this.$store.getters.woodItems); */
   /*  console.log(this.$store.getters.activeUser) */

   //mapGetters ile eriştiğimiz bilgiyi this. ile çağırabiliyoruz
    /* console.log('this.activeUser :>>' , this.activeUser) */

  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
