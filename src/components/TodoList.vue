<template>
  <div class="container">
    <div class="logo">LIST</div>
    <div v-if="items.length > 0" class="todolist">
      <div v-for="( value, key ) in items" v-bind:key="key" class="item">
        <span class="title">
          {{ value.title }}
          <span class="category">{{ value.category }}</span>
        </span>
        <span v-on:click="DELETE_TODO( value.id )" class="remove">
          <em class="fas fa-times"></em>
        </span>
      </div>
    </div>
    <div v-if="items.length == 0" class="empty">You have not added any data yet.</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "TodoList",
  computed: {
    ...mapState(["items"])
  },
  methods: {
    ...mapActions(["DELETE_ITEM"]),
    DELETE_TODO(id) {
      if (confirm("Do you want to remove this data?")) {
        let _remove_data = {
          id: id
        };
        this.DELETE_ITEM(_remove_data);
      }
    }
  }
};
</script>
