<template>
  <div class="demo-date-picker">
    <div class="block">
      <el-date-picker v-model="date" type="date" placeholder="Pick a day" />
    </div>
  </div>
</template>

<script lang="js" setup>
import {ref} from 'vue'

 const date = ref('')

 /* const emit = defineEmits(["datePicker"])

 watch(date, (value) => {
  emit('dateChange', value)
 }) */
</script>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
