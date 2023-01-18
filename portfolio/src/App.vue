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
    --bg-color: var(--white); 
    --text-color: var(--black);
    --button-bg: var(--white);
    --button-text: var(--main-color);
    --button-border: var(--main-color);
    --email-btn-bg: var(--white);
    --email-btn-text: var(--main-color);

    --box-shadow: 0 .3rem .75rem rgba(0, 142, 185, 0.2);
    --h1: 7rem;
    --h2: 5rem;
    --h3: 3rem;
    --p: 1.7rem;
  }
  /* the theme names are linked to the icon names */
  :root[theme="sun"] {
    --bg-color: var(--white); 
    --text-color: var(--black);
    --button-bg: var(--white);
    --button-text: var(--main-color);
    --button-border: var(--main-color);
    --email-btn-bg: var(--white);
    --email-btn-text: var(--main-color);
  }
  :root[theme="moon"] {
    --bg-color: var(--dark-bg); 
    --text-color: var(--white);
    --dark-bg: #00142a;
    --button-bg: var(--bg-color);
    --button-text: var(--text-color);
    --button-border: var(--text-color);
    --email-btn-bg: var(--bg-color);
    --email-btn-text: var(--white);
    --box-shadow: 0 .3rem .75rem rgba(1, 16, 20, 0.2);
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
  body {
    background: var(--bg-color);
  }

  .global-container {
    padding: 0 5%;
  }
  h1 {
    font-size: var(--h1);
  }
  h2 {
    font-size: var(--h2);
    color: var(--white);
  }
  h3 {
    font-size: var(--h3);
    color: var(--text-color);
  }
  p, b, li {
    font-size: var(--p);
    color: var(--text-color);
    margin-top: 1rem;
    line-height: 1.5;
  }
  button, strong, b {
    letter-spacing: .05rem;
  }
  button {
    margin-bottom: 1rem;
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

@media only screen and (max-width: 600px) {
  :root {
    --h1: 5rem;
    --h2: 3rem;
    --h3: 2rem;
    --p: 1.6rem;
  }
}
</style>