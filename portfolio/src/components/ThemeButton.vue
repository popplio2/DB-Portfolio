<template>
  <button class="theme-btn" @click="toTheme()">
    <font-awesome-icon :icon="currentTheme" />
  </button>
</template>

<script>
export default {
  props: {
    theme: String,
  },
  data() {
    return {
      currentTheme: "",
    };
  },
  mounted() {
    if (this.theme) {
      this.currentTheme = this.theme;
    } else {
      this.currentTheme = "moon";
    }
  },
  methods: {
    toTheme() {
      if (this.currentTheme === "moon") {
        document.documentElement.setAttribute("theme", "sun");
        this.currentTheme = document.documentElement.getAttribute("theme");
      } else {
        document.documentElement.setAttribute("theme", "moon");
        this.currentTheme = document.documentElement.getAttribute("theme");
      }
    },
  },
};
</script>

<style scoped>
button {
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  margin: 3%;
  color: var(--button-text);
  font-size: 1.9rem;
  font-weight: 700;
  padding: 0.75rem 1rem;
  background-color: var(--button-bg);
  border: 0.15rem solid var(--button-border);
  border-radius: 10rem;
  box-shadow: var(--box-shadow);
  transition: all 0.3s;
  cursor: pointer;
}
</style>
