<template>
  <div class="bg-background">
    <navigation-menu :route="this.$route.name" />
    <section-1 />
    <section-2 />
    <section-3 />
  </div>
</template>

<script>
import NavigationMenu from "../components/navbar-component/Navbar.vue";
import Section1 from "../components/home-section/FirstSection.vue";
import Section2 from "../components/home-section/SecondSection.vue";
import Section3 from "../components/home-section/ThirdSection.vue";
export default {
  components: {
    NavigationMenu,
    Section1,
    Section2,
    Section3,
  },
  name: "Home",
  data() {
    return {};
  },
};
</script>
