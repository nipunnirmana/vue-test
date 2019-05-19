<template>
  <div class="todos">
    <div>TODOS LIST</div>

    <div>
      <TodoItem
        class="A"
        v-for="todo in todos"
        v-bind:key="todo.id"
        v-bind:todo="todo"
        @del-todo="$emit('del-todo',todo.id)"
      ></TodoItem>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  components: {
    TodoItem
  },
  title: "Todos",
  props: ["todos"]
};
</script>

<style>
</style>
