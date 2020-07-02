<template>
  <div class="container">
    <div class="logo">LIST</div>
    <div v-if="items.length > 0" class="todolist-categories">
      <span
        v-bind:class="{ active: activeCategory == 'ALL' }"
        v-on:click="changeCategory('ALL')"
      >ALL</span>
      <span
        v-for="(value, key) in categories"
        v-bind:key="key"
        v-bind:class="{ active: activeCategory == value }"
        v-on:click="changeCategory(value)"
      >{{ value }}</span>
    </div>
    <div v-if="items.length > 0" class="todolist">
      <TodoItem
        v-for="( value, key ) in filterItems"
        v-bind:key="key"
        v-bind:item="value"
        v-bind:categories="categories"
        v-bind:update_todo="UPDATE_TODO"
        v-bind:delete_todo="DELETE_TODO"
      />
    </div>
    <div v-if="items.length == 0" class="empty">You have not added any data yet.</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import TodoItem from "@/components/TodoItem";
export default {
  name: "TodoList",
  data() {
    return {
      activeCategory: "ALL"
    };
  },
  components: {
    TodoItem
  },
  computed: {
    ...mapState(["items", "categories"]),
    filterItems() {
      if (this.activeCategory == "ALL") {
        return this.items;
      } else {
        return this.items.filter(e => {
          return e.category == this.activeCategory;
        });
      }
    }
  },
  methods: {
    ...mapActions(["DELETE_ITEM", "UPDATE_ITEM"]),
    DELETE_TODO(id) {
      if (confirm("Do you want to remove this data?")) {
        let _remove_data = {
          id: id
        };
        this.DELETE_ITEM(_remove_data);
      }
    },
    UPDATE_TODO(id, event) {
      let _update_data = {
        id: id,
        category: event.target.value
      };
      this.UPDATE_ITEM(_update_data);
    },
    changeCategory(string) {
      this.activeCategory = string;
    }
  },
  mounted() {}
};
</script>
