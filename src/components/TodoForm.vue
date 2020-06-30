<template>
  <div class="container">
    <div class="todoForm">
      <div class="items">
        <div class="input">
          <input
            ref="todoTitle"
            v-on:keyup.enter="NEW_TODO($event)"
            type="text"
            placeholder="Write something and press enter to add list..."
          />
        </div>
        <div class="category">
          <span class="selected" v-on:click="TOGGLE_DROPDOWN">
            {{ selectedCategory }}
            <em
              v-if="dropdownVisiblity == false"
              class="fas fa-angle-down"
            ></em>
            <em v-if="dropdownVisiblity == true" class="fas fa-angle-up"></em>
          </span>
          <span v-if="dropdownVisiblity" class="dropdown">
            <span
              v-for="(value, key) in categories"
              v-bind:key="key"
              v-on:click="SELECT_CATEGORY(value)"
            >
              {{ value }}
              <em class="fas fa-arrow-right"></em>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "TodoForm",
  data() {
    return {
      selectedCategory: "Todo Category",
      dropdownVisiblity: false
    };
  },
  computed: {
    ...mapState(["categories"])
  },
  methods: {
    ...mapActions(["ADD_ITEM"]),
    TOGGLE_DROPDOWN() {
      this.dropdownVisiblity = !this.dropdownVisiblity;
    },
    SELECT_CATEGORY(string) {
      this.selectedCategory = string;
      this.TOGGLE_DROPDOWN();
    },
    NEW_TODO(event) {
      if (this.selectedCategory == "Todo Category") {
        alert("Please select todo category.");
      } else {
        let _insert_data = {
          title: event.target.value,
          id: Math.floor(Math.random() * 999),
          category: this.selectedCategory
        };
        this.ADD_ITEM(_insert_data);
        this.$refs.todoTitle.value = "";
      }
    }
  },
  mounted() {}
};
</script>
