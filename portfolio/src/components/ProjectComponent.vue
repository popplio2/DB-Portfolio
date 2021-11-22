<template>
  <section>
      <slot></slot>
      <div>
          <slot name="text"></slot>
          <!-- <router-link :to="'./' + project"> -->
            <Button>Go to project ➤</Button>
          <!-- </router-link> -->
      </div>
  </section>
</template>

<script>
import Button from '@/components/Button.vue';
export default {
    components: {
        Button,
    },
    // props: {
    //     project
    // }
}
</script>

<style scoped>
    section {
        display: flex;
        padding: 2rem;
        border: .2rem solid transparent;
        border-radius: 1rem;
        transition: all .3s;
        cursor: pointer;
    }
    section:hover {
        border: .2rem solid var(--accent-color);
    }
    div {
        width: 50%;
    }
    button {
        margin-top: 2rem;
    }
</style>