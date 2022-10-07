<template>
  <button class="theme-btn" @click="toTheme()">{{ currentTheme }}</button>
</template>

<script>
export default {
  props: {
    theme: String,
  },
  data() {
    return {
      currentTheme: '',
    }
  },
  mounted() {
    if(this.theme) {
      this.currentTheme = this.theme;
    } else {
      this.currentTheme = 'light';
    }
  },
  methods: {
    toTheme() {
      if (this.currentTheme === 'light') {
      document.documentElement.setAttribute('theme', 'dark');
      this.currentTheme = document.documentElement.getAttribute('theme');
      } else {
        document.documentElement.setAttribute('theme', 'light');
        this.currentTheme = document.documentElement.getAttribute('theme');
      }
    },
  }
}
</script>

<style scoped>
  button {
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
    margin: 3%;
    color: var(--button-text);
    font-size: 1.4rem;
    font-weight: 700;
    padding: .75rem 1.5rem;
    background-color: var(--button-bg);
    border: .15rem solid var(--button-border);
    border-radius: 2rem;
    transition: all .3s;
    cursor: pointer;
  }
  button:hover {
    transform: translateY(-.5rem);
    box-shadow: var(--box-shadow);
  }
</style>