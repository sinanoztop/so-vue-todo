<template>
  <div class="home">
    <TodoForm />
    <TodoList />
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
export default {
  name: "home",
  components: {
    TodoForm,
    TodoList
  }
};
</script>
