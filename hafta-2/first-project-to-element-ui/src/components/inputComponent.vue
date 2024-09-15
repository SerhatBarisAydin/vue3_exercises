<template>
  <el-input v-model="input" style="width: 240px" placeholder="Please input" />
  <p>{{ value }}</p>
</template>

<script lang="js" setup>
import { ref} from 'vue'




const input = ref('')


// Parent component'e veri göndermek için emit'i tanımlıyoruz
/* const emit = defineEmits(['nameInputChange', 'surnameInputChange'])
// Input değeri her değiştiğinde emit ile parent'a gönderiyoruz
//reaktif değişkeni izlememizi sağlar
watch(input, (value, surnameValue) => {
  emit('nameInputChange', value),
  emit('surnameInputChange', surnameValue)

}) */
</script>
