<template>
  <ul>
    <!--  <li v-for="todoItem in todoList" :key="todoItem" class="d-flex justify-content-between align-items-center">
        <span>{{ todoItem.text }}</span>
        <button @click="deleteItem(todoItem)" class="sm red">sil</button>
      </li> -->

    <TodoListItem v-for="i in 10" :key="i"/>
  </ul>
</template>

<script>
import TodoListItem from "@/components/TodoListItem.vue"


export default{
    components:{
        TodoListItem,
    }
}

</script>
