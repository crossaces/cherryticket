<template>
  <div class="SecondSection">
    <div
      class="background bg-no-repeat bg-left-top flex h-screen mt-5"
      style="
        background-image: url('https://cherryticket.com/background-home2.png');
      "
    >
      <div class="container m-auto items-center">
        <div class="flex sm:flex-row mt-10 items-center">
          <div class="flex-5 px-20 py-20 w-full">
            <h1 class="text-cherry text-7xl font-sans font-bold">
              We Give The Best <span class="text-indigo">Service</span>.
            </h1>
          </div>
          <div
            v-if="isShowed"
            class="grid grid-cols-2 grid-rows-2 gap-20 place-content-center pr-28"
          >
            <value-item
              :title="value.title"
              :value="value.value"
              :description="value.description"
              v-for="(value, idx) in companyValueData"
              :key="idx"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ValueItem from "../child/ValueItem.vue";
export default {
  components: { ValueItem },
  name: "SecondSection",
  data() {
    return {
      companyValueData: [
        {
          title: "Event Organizer",
          value: 8532,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo nobis consequuntur provident assumenda vero.",
        },
        {
          title: "Event",
          value: 4782,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo nobis consequuntur provident assumenda vero.",
        },
        {
          title: "Customer",
          value: 90,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo nobis consequuntur provident assumenda vero.",
        },
        {
          title: "Destinasi",
          value: 1223,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo nobis consequuntur provident assumenda vero.",
        },
      ],
      isShowed: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.counterOnScrollListener);
  },
  methods: {
    setNumber() {},
    counterOnScrollListener() {
      const containerOurValue = document.querySelector(".SecondSection");

      if (
        containerOurValue.getBoundingClientRect().top <
          window.innerHeight / 2 - 200 &&
        containerOurValue.getBoundingClientRect().top >= -1 * window.innerHeight
      ) {
        this.isShowed = true;
      } else {
        this.isShowed = false;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.background {
  @apply font-sans w-full h-screen bg-background;
}

.login {
  @apply transform hover:scale-110 inline-block px-6 mt-3 sm:mt-1 py-2 bg-cherry font-semibold text-background font-medium text-xs leading-tight uppercase rounded-md shadow-md hover:bg-cherrydark focus:shadow-lg focus:outline-none focus:ring-0 transition delay-150 duration-150 ease-in-out;
}
</style>
