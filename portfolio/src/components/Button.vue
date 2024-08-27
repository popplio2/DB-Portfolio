<template>
  <button><slot></slot></button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  color: var(--button-text);
  font-size: 1.6rem;
  font-weight: 700;
  padding: 1rem 2rem;
  background-color: var(--button-bg);
  border: 0.15rem solid var(--button-border);
  border-radius: 0.5rem;
  transition: all 0.3s;
  cursor: pointer;
}
button:hover {
  transform: translateY(-0.5rem);
  box-shadow: var(--box-shadow);
}
</style>
