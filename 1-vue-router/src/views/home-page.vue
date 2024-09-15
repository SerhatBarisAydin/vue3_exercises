<template>

    <h1>
        Home   
    </h1>

    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam itaque assumenda magni tempora amet expedita officiis dolorem obcaecati, debitis similique quos! Id suscipit nulla error vitae debitis doloribus provident?
    </p>
    
    <input type="text" @keydown.enter="goToDetails">


    </template>

   
    <script>
    
    export default{
        methods:{
            goToDetails(e){
                /* alert(e.target.value)
                this.$router.push(`/details/${e.target.value}`) */

                this.$router.push({
                    name: "DetailsPage",
                    params: {
                        userId: e.target.value
                    }
                });

            },
        },
    }
    
    </script>