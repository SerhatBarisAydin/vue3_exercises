<template>

<h1>Details</h1>
<p>Acıklamalar bu ekranda yer alacak</p>

<p>{{ $route.params.userId }}</p>

<button class="blue" @click="goBack"> Geri Dön</button>
</template>
<script>

export default{

    created(){
        console.log(this.$route)
    },

    methods:{
        goBack(){
            alert();
            //1.yöntem. Ana sayfaya dönmemizi sağlar.
            this.$router.push("/")
        }
    }

}

</script>