<template>
  <router-link :to="'/' + project.path">
    <section>
      <slot></slot>
      <div>
          <slot name="text"></slot>
          <Button>Go to project ➤</Button>
      </div>
    </section>
  </router-link>
</template>

<script>
import Button from '@/components/Button.vue';
export default {
    components: {
        Button,
    },
    props: {
        project: Object
    },
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
    a{
        text-decoration: none;
        color: black;
        }
    a:visited{
        text-decoration: none;
        color: black;
    }
    div {
        width: 50%;
    }
    button {
        margin-top: 2rem;
    }
</style>