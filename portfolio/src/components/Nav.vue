<template>
  <nav>
    <ul>
      <router-link to="/">
        <li>Home</li>
      </router-link>
      <router-link to="/about">
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
  nav {
    position: fixed;
    background-color: #fff;
    width: fit-content;
    padding: 0 3rem;
    margin: auto;
    border-bottom: .1rem solid var(--main-color);
    border-left: .1rem solid var(--main-color);
    border-right: .1rem solid var(--main-color);
    border-bottom-left-radius: 5rem;
    border-bottom-right-radius: 5rem;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
  }
  li {
    display: inline-block;
    color: var(--main-color);
    border-bottom: .2rem solid transparent;
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: .05rem;
    margin: 1.5rem 3rem;
    transition: all .3s;
  }
  li:hover {
    border-bottom: .2rem solid var(--accent-color);
  }
</style>