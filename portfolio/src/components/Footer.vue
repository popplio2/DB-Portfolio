<template>
  <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#006deb" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
    <div class="clip clip-inverted"></div>
    <footer class="footer global-container">
      <h2>Get in touch!</h2>
      <a href="mailto:briskmandaniel@gmail.com">
        <font-awesome-icon icon="paper-plane"/>
        briskmandaniel@gmail.com
      </a>
      <a>
        <font-awesome-icon icon="phone"/>
        347-533-3119
      </a>
      <a href="https://github.com/popplio2" target="blank">
        <Button>Check out my Github ➤</Button>
      </a>
    </footer>  
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  components: {
    Button,
  }
}
</script>
<style scoped>
  .footer {
    background-color: var(--main-color);
    color: var(--white);
    padding-bottom: 8rem;
    margin-top: -.5rem;
  }
  .footer svg {
    margin-right: .5rem;
  }
  .footer a {
    display: block;
    text-decoration: none;
    font-size: var(--p);
    color: var(--white);
    margin: 1rem 0;
  }
  .clip {
    margin-top: 5rem;
  }

@media only screen and (max-width: 1200px) {
  .footer {
    padding-top: 8rem;
    padding-bottom: 5rem;
  }
}
</style>