<template>
    <div class="mb-4">
        <el-button @click="clickHandler" type="primary">Primary</el-button>
    </div>
</template>

<script lang="js" setup>
import { defineEmits } from "vue";

const emits = defineEmits(["buttonClick"]);

const clickHandler = () => {
  emits("buttonClick");
};



</script>