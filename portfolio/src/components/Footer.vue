<template>
  <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#006deb" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
    <div class="clip clip-inverted"></div>
    <footer class="footer global-container">
      <h2>Let's get in touch!</h2>
      <a href="mailto:briskmandaniel@gmail.com">
        <font-awesome-icon icon="envelope"/>
        daniel.briskman@stonybrook.edu
      </a>
      <a href="sms:+13475333119&body=Hello%20there!%20I%20saw%20your%20portfolio%20and...">
        <font-awesome-icon icon="comment-dots"/>
        347-533-3119
      </a>
      <a href="https://github.com/popplio2" target="blank">
        <Button>Check out my Github 
          <font-awesome-icon icon="code-branch" /> 
        </Button>
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
    display: flex;
    flex-direction: column;
    background-color: var(--main-color);
    color: var(--bg-color);
    padding-bottom: 8rem;
    margin-top: -.5rem;
  }
  .footer svg {
    margin-right: .5rem;
  }
  .footer a {
    width: fit-content;
    text-decoration: none;
    font-size: var(--p);
    color: var(--white);
    margin-top: 1.5rem;
    transition: all .3s;
  }
  .footer a:hover {
    color: var(--accent-color);
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