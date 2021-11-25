<template>
  <button><slot></slot></button>
</template>

<script>
export default {

}
</script>

<style scoped>
  button {
    color: var(--main-color);
    font-size: 1.6rem;
    font-weight: 700;
    padding: 1rem 2rem;
    background-color: var(--white);
    border: .15rem solid var(--main-color);
    border-radius: .5rem;
    transition: all .3s;
    cursor: pointer;
  }
  button:hover {
    transform: translateY(-.5rem);
    box-shadow: var(--box-shadow);
  }
</style>