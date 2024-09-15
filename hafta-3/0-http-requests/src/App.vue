<template>

<div class="container">
  <h3>alışveriş listesi</h3>
  <hr/>
  <div class="my-2">
    <input type="text" placeholder="ne alacaksın..." @keydown.enter="onSave">
  </div>

  <ul>
    <li class="d-flex justify-content-between align-items-center ">
      <span>elemna 1</span>
      <button class="sm red">sil</button>
    </li>
    
    <li class="d-flex justify-content-between align-items-center">
      <span>elemna 2</span>
      <button class="sm red">sil</button>
    </li>
  </ul>
</div>

</template>

<script>
import axios from 'axios';
export default{

  data(){
    return{

    };
  },

  methods: {
    onSave(e){
      axios.
    }
  }



}
</script>