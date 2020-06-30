<template>
  <div class="container">
    <div class="logo">LIST</div>
    <div v-if="items.length > 0" class="todolist-categories">
      <span
        v-bind:class="{ active: activeCategory == 'ALL' }"
        v-on:click="changeCategory('ALL')"
        >ALL</span
      >
      <span
        v-for="(value, key) in categories"
        v-bind:key="key"
        v-bind:class="{ active: activeCategory == value }"
        v-on:click="changeCategory(value)"
        >{{ value }}</span
      >
    </div>
    <div v-if="items.length > 0" class="todolist">
      <div v-for="(value, key) in filterItems" v-bind:key="key" class="item">
        <span class="title">
          {{ value.title }}
          <span class="category">{{ value.category }}</span>
        </span>
        <span v-on:click="DELETE_TODO(value.id)" class="remove">
          <em class="fas fa-times"></em>
        </span>
      </div>
    </div>
    <div v-if="items.length == 0" class="empty">
      You have not added any data yet.
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "TodoList",
  data() {
    return {
      activeCategory: "ALL"
    };
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
    ...mapActions(["DELETE_ITEM"]),
    DELETE_TODO(id) {
      if (confirm("Do you want to remove this data?")) {
        let _remove_data = {
          id: id
        };
        this.DELETE_ITEM(_remove_data);
      }
    },
    changeCategory(string) {
      this.activeCategory = string;
    }
  },
  mounted() {}
};
</script>
