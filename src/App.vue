<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import "./styles/base.styl";
import Header from "./views/Header";
import Footer from "./views/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>
