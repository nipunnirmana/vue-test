<template>
  <div>
    <form @submit="saveTodo">
      <input type="text" placeholder="Add new todo..." v-model="title">
      <input type="submit" value="Save todo">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    saveTodo(e) {
      e.preventDefault();
      const newTodo = {
        id: new Date().getTime(),
        title: this.title,
        completed: false
      };
      this.$emit("save-todo", newTodo);
      this.title = "";
    }
  }
};
</script>

<style scoped>
</style>
