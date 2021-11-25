<template>
  <router-view v-slot="{ Component }">
    <transition name="slidefade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

  :root {
    --main-color: #006deb;
    --accent-color: #00d9ff;
    --white: #fff;
    --black: #000;
    --box-shadow: 0 .3rem .75rem rgba(0, 142, 185, 0.2);
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
    line-height: 1.5;
  }
.slidefade-enter-active,
.slidefade-leave-active  {
  transition: all 0.3s ease;
  /* transform: translateX(0); */
}
.slidefade-enter-from {
  opacity: 0;
  /* transform: translateX(-2rem); */
}
.slidefade-leave-to {
  opacity: 0;
}
</style>