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
    background-color: var(--white);
    width: fit-content;
    padding: 0 3rem;
    margin: auto;
    border-bottom: .1rem solid var(--main-color);
    border-left: .1rem solid var(--main-color);
    border-right: .1rem solid var(--main-color);
    border-bottom-left-radius: 5rem;
    border-bottom-right-radius: 5rem;
  }
  .nav li {
    display: inline-block;
    color: var(--main-color);
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