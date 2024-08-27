<template>
  <ThemeButton :theme="pageTheme" />
  <div class="global-container">
    <header class="header">
      <h1>
        <slot name="title"></slot>
      </h1>
      <slot name="image"></slot>
      <slot name="buttons"></slot>

      <div class="header-info">
        <slot name="info"></slot>
      </div>
    </header>

    <article class="article">
      <h2>Overview</h2>
      <p>
        <slot name="overview"></slot>
      </p>
    </article>
  </div>
  <EmailButton />
  <Footer />
</template>

<script>
import EmailButton from "./EmailButton.vue";
import ThemeButton from "./ThemeButton.vue";

import Footer from "./Footer.vue";
export default {
  components: {
    Footer,
    EmailButton,
    ThemeButton,
  },
  data() {
    return {
      pageTheme: document.documentElement.getAttribute("theme"),
    };
  },
};
</script>

<style scoped>
.header {
  margin: 3rem 0;
}
.header h1,
h2 {
  color: var(--main-color);
  text-align: center;
}
.header h1 {
  margin-top: 3rem;
}
.header-info {
  margin: 2rem 0;
}
.article h2 {
  margin-top: 2rem;
}

@media only screen and (min-width: 1200px) {
  .global-container {
    padding: 0 10%;
  }
}
</style>

<style>
.header a {
  margin-right: 1rem;
  margin-top: 0.75rem;
}
.header img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 30rem;
  margin: 2rem 0;
  box-shadow: 0 0 0.5rem var(--accent-color);
  border-radius: 1rem;
  transition: all 0.3s;
}
.article p {
  margin-bottom: 2rem;
}
</style>
