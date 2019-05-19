<template>
  <div class="todo" v-bind:class="{'done':todo.completed}">
    <span class="todo-name">
      <input type="checkbox" v-bind:checked="todo.completed" @change="toggleCompleted">
      <span>{{todo.title}}</span>
      <button @click="$emit('del-todo' , todo.id)">X</button>
    </span>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  methods: {
    toggleCompleted() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style>
.todo span {
  display: block;
}

.todo.done {
  color: red;
}

button {
  border-radius: 158%;
  background: red;
  padding: 10px 13px;
}
</style>
