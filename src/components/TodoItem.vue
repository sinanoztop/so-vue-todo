<template>
  <div class="item">
    <span class="title">
      {{ item.title }}
      <span class="category">
        {{ item.category }}
        <em v-on:click="toggleSelect" class="edit fas fa-edit"></em>
      </span>
      <select v-if="show" v-on:change="update_item( item.id, $event )">
        <option
          v-for="(value, key) in categories"
          v-bind:key="key"
          v-bind:selected="item.category == value"
          v-bind:value="value"
        >{{ value }}</option>
      </select>
    </span>
    <span v-on:click="delete_todo(item.id)" class="remove">
      <em class="fas fa-times"></em>
    </span>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  data() {
    return {
      show: false
    };
  },
  props: ["item", "update_todo", "delete_todo", "categories"],
  methods: {
    toggleSelect() {
      this.show = !this.show;
    },
    update_item(id, event) {
      this.toggleSelect();
      this.update_todo(id, event);
    }
  }
};
</script>