<template>
  <div id="app">
    <AddTodo @save-todo="saveTodo"/>
    <Todos v-bind:todos="todos" @del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import Axios from "axios";

export default {
  name: "home",
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteTodo(id) {
      Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
        res => {
          this.todos = this.todos.filter(todo => todo.id !== id);
        }
      );
    },
    saveTodo(newTodo) {
      const { title, completed } = newTodo;
      Axios.post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed
      }).then(res => {
        this.todos = [...this.todos, res.data];
      });
    }
  },
  created() {
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then(
      res => {
        this.todos = res.data;
      }
    );
  }
};
</script>

<style>
body {
  margin: 0;
}
</style>
