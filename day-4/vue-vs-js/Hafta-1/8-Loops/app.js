const app = Vue.createApp({
    data(){
        return{
            todoList: [
                {id:1, text:"vue bootcamp 1" , completed:false},
                {id:2, text:"vue bootcamp 2" , completed:false},
                {id:3, text:"vue bootcamp 3" , completed:false},
                {id:4, text:"vue bootcamp 4" , completed:false},
                {id:5, text:"vue bootcamp 5" , completed:false},
            ],

        };
    },

    methods:{
        addTodo(event){
            this.todoList.push(event.target.value);
            event.target.value = "";
        }
    }
}).mount("#app")