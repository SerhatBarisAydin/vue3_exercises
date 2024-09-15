<template>
  <div class="my-2 ml-4">
    <el-radio-group v-model="radioValue">
      <el-radio value="Male">Male</el-radio>
      <el-radio value="Female">Female</el-radio>
    </el-radio-group>
  </div>
</template>

<script lang="js" setup>
import { ref, defineEmits, watch } from 'vue'


const radioValue = ref('0')


const emits = defineEmits(['genderChange'])

watch(radioValue, (value) => {
  emits('genderChange', value)
})
</script>
