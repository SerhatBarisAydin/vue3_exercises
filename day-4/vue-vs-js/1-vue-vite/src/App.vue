<template>
  <h3 class="text-center">ToDo App</h3>
  <hr class="my-2">
  <label for="todoText"></label>
  <input type="text" id="todoText" placeholder="Bir şeyler yazın..." >

  <ul>
    <li v-for="i in 5" :key="i" class="d-flex justify-content-between align-items-center">
      
   
    <span>todo item {{ i }}</span>
    <button class="sm red">sil</button>
 </li> 
  </ul>

  <small class="d-flex justify-content-end green">5 adet todo vardır</small>

</template>