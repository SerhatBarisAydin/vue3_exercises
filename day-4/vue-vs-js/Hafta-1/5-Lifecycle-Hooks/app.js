const app = Vue.createApp({
    data(){
        return{
            title: "test basligi",
        }
    },

    beforeCreate(){
        console.log("beforeCreate çalıştı...")
    },
    created(){
        console.log("created çalıştı...")
    },
    beforeMount(){
        console.log("beforeMount çalıştı...")
    },
    mounted(){
        console.log("mounted çalıştı...")
    },
    beforeUpdate(){
        console.log("beforeUpdate çalıştı...")
    },
    updated(){
        console.log("updated çalıştı...")
    },
    beforeUnmount(){
        console.log("beforeUnmount çalıştı...")
    },
    unmonted(){
        console.log("unmonted çalıştı...")
    },



}).mount("#app")