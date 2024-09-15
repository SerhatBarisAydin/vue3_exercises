<template>
 <div class="container">
 <div class="mb-2">
    <!-- Router-link sayfa enilenmesine
 ihtiyaç olmadan değişiklik yapmamızı sağlar -->
 <router-link class="nav-link" active-class="active" to="/"> anasayfa </router-link>
  
  <router-link class="nav-link" active-class="active" to="/hakkimda"> hakkımda </router-link>

  <router-link class="nav-link" active-class="active" to="/details/123"> Detaylar </router-link>

  <router-view></router-view>
 </div>
 </div>
</template>





<style>
.nav-link{
  padding: 5px, 10px;
  text-decoration: none;
  border: 1px solid #fa6558;
  color: #fa6558;
  display: inline-block;
  margin-right: 5px;
  margin-top: 5px;
  
}

.active{
background-color: #fa6558;
color:azure
}
</style>
