<template>
  <div class="container">
    <h3 class="text-center">ToDo App</h3>
    <hr class="my-2" />
    <AddSection @add-todo="addNewTodo" />
    <todoList />
    <ResultBar :itemCount="todoList.length" />
    <hr />
  </div>
</template>

<script>
import AddSection from "./components/AddSection.vue";
import TodoList from "./components/TodoList.vue";
import ResultBar from "./components/ResultBar.vue";

export default {
  components: {
    AddSection,
    TodoList,
    ResultBar,
  },

  data() {
    return {
      todoList: [
        { id: 1, text: "txt #1" },
        { id: 2, text: "txt #2" },
        { id: 3, text: "txt #3" },
        { id: 4, text: "txt #4" },
        { id: 5, text: "txt #5" },
      ],
    };
  },

  methods: {

    testEvent(data){
      alert(data);
    },

    deleteItem(todoItem) {
      this.todoList = this.todoList.filter((t) => t != todoItem);
    },

    addNewTodo(event) {
      
      console.log("event", event);
      
      /* if (event.target.value != "") {
        console.log(this.todoList);
        this.todoList.push({
          id: new Date().getTime(),
          text: event.target.value,
        });
        event.target.value = " ";
      } else {
        alert();
      } */
    },
  },
};
</script>
