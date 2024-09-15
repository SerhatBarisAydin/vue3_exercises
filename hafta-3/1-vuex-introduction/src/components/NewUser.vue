<template>
  <button @click="updateName">Add New Item</button>
</template>

<script>
export default {

    
  methods: {
    updateName() {

        const userData = { 
            id: new Date().getTime(), 
            title: "Raf" + new Date().getTime() , 
            type: "mobilya" }


        /* ACTION dispatch edilir. Mutationslar commit edilir. */    
        this.$store.dispatch("newItem", userData)


        
            /* commit, store.js'de state içerisinde oluşturduğumuz mutations'ı çağırmamızı sağlar. commit("Mutation adı", aktarılacak veri) */ 
        /* this.$store.commit("newItem", userData ) */

        /* alt satırdaki bilginin anlık olarak push edilmesi mutations sayesinde gerçekleşir. Yukarıdaki gibi çağırırız */
     /*  this.$store.state.itemList.push(usedData); */
      /* this.$store.state.fullName = new Date().getTime() */
    },
  },
};
</script>
