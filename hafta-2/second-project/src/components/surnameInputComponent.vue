<template>
    <el-input v-model="input" style="width: 240px" placeholder="Please input" />
    <p>{{ value }}</p>
  </template>
  
  <script lang="js" setup>
  import { ref , defineEmits, watch} from 'vue'
  
  
  
  
  const input = ref('')
  
  
  // Parent component'e veri göndermek için emit'i tanımlıyoruz
  const emit = defineEmits(['surnameInputChange'])
  // Input değeri her değiştiğinde emit ile parent'a gönderiyoruz
  //reaktif değişkeni izlememizi sağlar
  watch(input, (value) => {
    emit('surnameInputChange', value)
    
  
  })
  </script>
  