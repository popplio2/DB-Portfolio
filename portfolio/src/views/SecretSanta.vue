<template>
  <div>
    <FullNav />
    <CaseStudy>
      <template v-slot:title>Secret Santa Generator</template>
      <template v-slot:image>
        <img
          src="../assets/santa.png"
          alt="An image of the output of the program, listing who is whose secret santa."
        />
      </template>
      <template v-slot:buttons>
        <a href="https://github.com/popplio2/SecretSantaProject" target="blank">
          <Button>Read the code ➤</Button>
        </a>
      </template>
      <template v-slot:info>
        <!-- <p>
          <b>Teammates:</b>
          N/A (Individual Project)
        </p>
        <p>
          <b>Course:</b>
          N/A (Personal Project)
        </p> -->
        <p>
          <b>Tools:</b>
          Java
        </p>
      </template>
      <template v-slot:overview>
        <h3>Overview</h3>
        <p>
          Every year, my friend group uses
          <a href="https://www.drawnames.com/"
            >a website to organize a Secret Santa</a
          >. I was curious how it efficiently incorporated new participants
          after the initial arrangement. I hypothesized that the system
          differentiated between participants who had already drawn a name and
          those who had not. To explore this, I built
          <b>Secret Santa Generator</b> as a way to apply object-oriented
          programming and data structures to a real-world matching problem.
        </p>
        <h3>Defining a Valid Arrangement</h3>
        <p>
          A key challenge was defining a “valid” arrangement. In graph terms,
          this corresponds to one-way cycles of three or more participants: each
          person can give a gift to someone who is not themselves and is not
          their own Santa. Translating this into code required careful design of
          classes and data structures to represent participants and their
          relationships.
        </p>
        <h3>Generating an Initial Arrangement</h3>
        <p>
          My first approach of assigning random matches often failed due to
          leftover participants unable to form valid cycles. To guarantee
          correctness, I implemented a single-cycle approach: shuffle the
          participant list and pair neighbors, looping the last element to the
          first. This ensured a valid starting arrangement while balancing
          randomness and reliability.
        </p>
        <h3>Adding New Players</h3>
        <p>
          Integrating new participants into an existing arrangement turned out
          to be the trickiest part of the project. By this point, some players
          had already drawn a name (Santas), some had already been assigned as a
          recipient (Santees), and some were both or neither. I needed to ensure
          that the new assignments would respect all rules: no one could give a
          gift to themselves, and no two participants could give gifts to each
          other.
        </p>
        <p>
          I approached this by categorizing players into mutually exclusive
          sets: “Santees but not Santas,” “Santas but not Santees,” and
          “neither.” Then, I iteratively paired the first set with the third
          set, resolving as many new assignments as possible while updating the
          sets after each iteration. This process naturally propagated new
          constraints: pairing someone as a Santee could create new Santas that
          needed pairing in the next round. By repeating this loop until all
          non-assigned participants were accounted for, I ensured that every new
          player was integrated into the arrangement without violating any
          rules.
        </p>
        <p>
          This part of the project required careful thought and debugging. I had
          to reason through multiple edge cases, visualize arrows representing
          gift-giving relationships, and refine my data structures to make the
          update logic clean and maintainable. It was deeply satisfying to see
          the algorithm handle complex scenarios that initially seemed almost
          impossible to manage manually.
        </p>

        <h3>Reflection</h3>
        <p>
          This project strengthened my problem-solving and algorithmic thinking.
          I had to carefully consider data representation, edge cases, and
          iterative update logic. I also gained experience in balancing
          correctness with efficiency, and in writing maintainable, readable
          code. I’m proud that I translated an abstract real-world problem into
          a robust software solution, and I look forward to further optimizing
          it as my technical skills grow.
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

<style scoped>
h3 {
  margin-top: 1rem;
  text-align: center;
  color: var(--main-color);
}
</style>
