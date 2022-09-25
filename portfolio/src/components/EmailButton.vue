<template>
  <a class="email-btn" href="mailto:briskmandaniel@gmail.com">
    <font-awesome-icon icon="envelope" />
  </a>
</template>

<style scoped>
  .email-btn {
    z-index: 1;
    position: fixed;
    bottom: 0;
    right: 0;
    font-size: 2rem;
    background-color: var(--main-color);
    border: .15rem solid var(--bg-color);
    border-radius: 10rem;
    box-shadow: var(--box-shadow);
    padding: 1.5rem;
    margin: 3%;
    color: var(--bg-color);
  }
</style>