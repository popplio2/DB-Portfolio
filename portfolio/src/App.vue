<template>
  <Nav />
  <router-view />
</template>

<script>
import Nav from '@/components/Nav.vue';
export default {
  components: {
    Nav
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

  :root {
    --main-color: #0090ff;
    --accent-color: #00d9ff;
    --h1: 7rem;
    --h2: 5rem;
    --h3: 3rem;
    --p: 1.7rem;
  }
  *, html, body {
    font-size: 62.5%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  * {
    font-family: 'Montserrat', sans-serif;
  }
  .global-container {
    padding: 0 5%;
  }
  h1 {
    font-size: var(--h1);
  }
  h2 {
    font-size: var(--h2);
  }
  h3 {
    font-size: var(--h3);
  }
  p {
    font-size: var(--p);
    margin-top: 1rem;
  }
</style>