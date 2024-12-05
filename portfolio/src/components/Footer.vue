<template>
  <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#006deb"
      fill-opacity="1"
      d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    ></path>
  </svg>
  <div class="clip clip-inverted"></div>
  <footer class="footer global-container">
    <div class="call-and-text">
      <h2>Let's get in touch!</h2>
      <a href="mailto:briskmandaniel@gmail.com">
        <font-awesome-icon icon="envelope" />
        briskmandaniel@gmail.com
      </a>
    </div>
    <div class="socials">
      <h3>Social Media</h3>
      <a href="https://www.linkedin.com/in/daniel-briskman/" target="blank">
        <Button style="margin-bottom: 0"
          >View Linkedin
          <font-awesome-icon icon="user" />
        </Button>
      </a>
      <a href="https://github.com/popplio2" target="blank">
        <Button
          >View Github
          <font-awesome-icon icon="code-branch" />
        </Button>
      </a>
    </div>
  </footer>
</template>

<script>
import Button from "../components/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  gap: 15%;
  background-color: var(--main-color);
  color: var(--bg-color);
  padding-bottom: 8rem;
  margin-top: -0.5rem;
}
.call-and-text,
.socials {
  display: flex;
  flex-direction: column;
}
.socials {
  margin-top: 2rem;
}
.socials h3 {
  color: var(--bg-color);
}
.footer svg {
  margin-right: 0.5rem;
}
.footer a {
  width: fit-content;
  text-decoration: none;
  font-size: var(--p);
  color: var(--white);
  margin-top: 1.5rem;
  transition: all 0.3s;
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
@media only screen and (max-width: 780px) {
  .footer {
    flex-direction: column;
  }
}
</style>
