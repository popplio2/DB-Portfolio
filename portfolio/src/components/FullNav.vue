<template>
  <nav class="nav">
    <ul>
      <router-link to="/">
        <li>Home</li>
      </router-link>
      <router-link to="/projects">
        <li>Projects</li>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  .nav {
    background-color: var(--button-bg);
    width: fit-content;
    padding: 0 3rem;
    margin: auto;
    border-bottom: .1rem solid var(--button-border);
    border-left: .1rem solid var(--button-border);
    border-right: .1rem solid var(--button-border);
    border-bottom-left-radius: 5rem;
    border-bottom-right-radius: 5rem;
    transition: all .3s;
  }
  .nav li {
    display: inline-block;
    color: var(--button-text);
    border-bottom: .2rem solid transparent;
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: .05rem;
    margin: 1.1rem 3rem;
    transition: all .3s;
  }
  .nav li:hover {
    border-bottom: .2rem solid var(--accent-color);
  }
</style>