<template>
  <section class="global-container">
      <img src="http://www.inspiredluv.com/wp-content/uploads/2016/10/24-cool-wallpapers.jpg" />
      <div>
          <slot></slot>
          <Button>Go to project ➤</Button>
      </div>
  </section>
</template>

<script>
import Button from '@/components/Button.vue';
export default {
    components: {
        Button,
    },
}
</script>

<style scoped>
    section {
        display: flex;
    }
    img {
        object-fit: cover;
        width: 50%;
        height: inherit;
        margin-right: 2rem;
        border-radius: 1rem;
    }
    div {
        width: 50%;
    }
    button {
        margin-top: 2rem;
    }
</style>