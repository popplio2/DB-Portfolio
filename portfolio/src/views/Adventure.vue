<template>
  <div>
    <FullNav />
    <CaseStudy>
      <template v-slot:title>Choose Your Own Adventure</template>
      <template v-slot:image>
        <img
          src="../assets/adventure.png"
          alt="An image of an event in the game. It has a description of the event and four buttons describing the player's possible options."
        />
      </template>
      <template v-slot:buttons>
        <a href="https://galguddadventure.netlify.app" target="blank">
          <Button>See the website ➤</Button>
        </a>
        <a
          href="https://github.com/staten-island-tech/quizgame-charlaniel-brisluja"
          target="blank"
        >
          <Button>Read the code ➤</Button>
        </a>
      </template>
      <template v-slot:info>
        <p>
          <b>Teammate:</b>
          Charley Baluja
        </p>
        <p>
          <b>Course:</b>
          Computer Science and Engineering
        </p>
        <p>
          <b>Tools:</b>
          HTML, SCSS, JavaScript, Figma
        </p>
      </template>
      <template v-slot:overview>
        <p>
          Though our assignment was to make a quiz-game project, my partner and
          I decided to take it one step further and create a Choose Your Own
          Adventure Game. The project dynamically loads in-game events based on
          the choices that the user makes. These events and their answer choices
          are stored in a JavaScript object, from which they are accessed as
          needed.
        </p>
        <p>
          At first, we struggled with figuring out how to display each event
          based on a user's last choice. The solution I thought of to accomplish
          this was to attach a property to each event object and a corresponding
          property on each answer choice that leads to that event. These were
          essentially pointers, though I did not know of them at the time. On
          the click of the answer choice, we would filter through the events
          stored in the object and display the one with an event value that
          matches the answer choice value. Our teacher informed us that a group
          in the AP CSP class took inspiration from our solution in their own
          project, which made me very proud. Before coding, I designed
          high-fidelity wireframes in Figma, and my partner wrote all the events
          and answer choices for the game.
        </p>
      </template>
    </CaseStudy>
  </div>
</template>
<script>
import FullNav from "@/components/FullNav.vue";
import CaseStudy from "@/components/CaseStudy.vue";
import Button from "@/components/Button.vue";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    FullNav,
    CaseStudy,
    Button,
  },
};
</script>

<style></style>
