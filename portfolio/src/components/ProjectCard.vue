<template>
  <router-link :to="'/projects/' + project.path">
    <article>
      <slot></slot>
      <div>
          <slot name="text"></slot>
          <Button>Go to project ➤</Button>
      </div>
    </article>
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
    article {
        display: flex;
        padding: 2rem;
        border: .2rem solid transparent;
        border-radius: 1rem;
        transition: all .3s;
        cursor: pointer;
    }
    article:hover {
        border: .2rem solid var(--accent-color);
    }
    article div {
        width: 50%;
    }
    button {
        margin-top: 2rem;
    }
@media only screen and (max-width: 600px) {
    article {
        flex-direction: column;
    }
    article div {
        width: 100%;
        margin-top: 1.5rem;
    }
}
</style>