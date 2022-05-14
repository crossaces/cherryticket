<template>
  <div class="container">
    <div class="divide-y-4 divide-cherry">
      <div></div>
      <div></div>
    </div>
    <div class="py-2 w-auto">
      <div class="container">
        <p class="text-cherry text-right text-2xl font-bold">
          {{ title }}
        </p>
      </div>

      <p class="text-cherry text-6xl font-bold py-2">{{ this.target }}</p>
      <p class="text-cherry py-2 mt-5">{{ this.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Value-item",
  data() {
    return {
      target: 0,
    };
  },
  methods: {
    increaseValue() {
      let increment = Math.round(this.value / 100);

      const intervalIncrement = setInterval(() => {
        this.target += increment;
        if (this.target >= this.value) {
          clearInterval(intervalIncrement);
          this.target = this.value + "+";
        }
      }, 20);
    },
  },
  props: ["value", "title", "description"],
  mounted() {
    this.increaseValue();
  },
};
</script>
