const app = Vue.createApp({
    data(){
        return{
            counter:0,
        };
    },  
})

app.component("counter-item", {
    data(){
        return{
            counter:0
        };
    },

    template:`
    <div class="container sm text-center">
        
        <h3 class="mb-2">{{counter}}</h3>
        <button @click="counter++" class="red sm">+</button>
        <button @click="counter--" class="green sm">-</button>
  


    </div>
      `
})





app.mount("#app")