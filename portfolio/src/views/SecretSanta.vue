<template>
  <div>
    <FullNav />
    <CaseStudy>
      <template v-slot:title>Secret Santa Generator</template>
      <template v-slot:image>
        <img src="../assets/santa.png" alt="" />
      </template>
      <template v-slot:buttons>
        <a href="https://github.com/popplio2/SecretSantaProject" target="blank">
          <Button>Read the code ➤</Button>
        </a>
      </template>
      <template v-slot:info>
        <p>
          <b>Teammates:</b>
          N/A (Individual Project)
        </p>
        <p>
          <b>Course:</b>
          N/A (Personal Project)
        </p>
        <p>
          <b>Tools:</b>
          Java
        </p>
      </template>
      <template v-slot:overview>
        <p>
          Every year my friend group uses a website to organize a secret santa.
          With these things, you often invite more people than you initially
          added, so I was curious how this website included those people into
          its arrangement. I predicted that it differentiated between people who
          already drew a name (of a person to give a gift to) and people who
          have not drawn their name yet. This would allow new players to be
          matched up with those who have not drawn names yet. I decided to
          create Secret Santa Generator to see if I could solve this problem
          myself using my knowledge of object-oriented programming and data
          structures.
        </p>
        <h3>Defining a Valid Arrangement</h3>
        <p>
          The first problem I needed to solve was how I can get an initial valid
          arrangement when an instance of my class is created. In graph terms, a
          valid arrangement is a collection of one-way cycles of three or more
          people. More simply, if I'm a player, I can give a gift to someone who
          is not myself and is not the person who is giving me a gift.
        </p>
        <h3>Generating an Initial Arrangement</h3>
        <p>
          At first, I thought that I could have each person be matched up with
          another random person from the pool. Upon further consideration,
          though, this can run into some problems. If a cycle is created among a
          subset of players, then there may be one or two players left who
          cannot be matched up with each other. Thus, this arrangement would
          have to be scrapped.
        </p>
        <p>
          I needed a way to make an arrangement that is guaranteed to work.
          Thus, I decided that I would sacrifice some randomness in my initial
          arrangement. Rather than allowing sub-cycles to be created, I would
          generate one cycle from the whole pool of players by shuffling a list
          and making pairs from neighbors in the list (the last element would be
          the first element's santa).
        </p>
        <h3>Adding New Players to the Arrangement</h3>
        <p>
          Now, I needed to figure out how to update this arrangement when new
          players are added.
        </p>
        <p>
          We can think of people in terms of santas and santees--those who have
          drawn a name and those whose name has been drawn, respectively.
          Visually, a santa has an outgoing arrow, and a santee has an incoming
          arrow. By the time new players are added, some people may have already
          drawn their name, some people may have had their names drawn by other
          people, and for some people both or neither may be true.
        </p>
        <p>
          While, initially, it seems simple to match up players who are not
          santas with other players who are not santees, this is tedious because
          of two rules: no player can give a gift to themself and no pair of
          players can give gifts to each other. I found it to be easier to
          prepare mutually exclusive sets of players to match up with one
          another.
        </p>
        <p>
          First, I would pair those who are santees but not santas (only
          incoming arrow) with those who are not santas nor santees (no arrows).
          This way, we sort of get the players with preexisting arrows out of
          the way. However, when these new pairings are created, there are now
          new santees who need to be paired up with a santa. And so, we make
          this a while loop that makes these pairings and then updates the sets
          for the next iteration. The loop stops when the set of not santas and
          not santees in empty, after which we are left with a set of only
          santas and a set of only santees. These sets are mutually exclusive,
          and so we can pair them up with each other.
        </p>
        <h3>Reflection & Next Steps</h3>
        <p>
          That was a description of my final solution, but getting there was not
          easy! I often had to step back and reconsider how I was storing data,
          what data I decided to store, and even what I named my data fields
          (poor naming can cause a lot of confusion).
        </p>
        <p>
          The algorithm for adding players was also difficult conceptually, and
          it required that I understood many edge cases. In fact, I did not
          expect to have to use set operations at all when I started this
          project!
        </p>
        <p>
          I am proud of myself for being able to analyze an abstract problem
          with more detail and consideration than I ever had in the past, and I
          am continuing to work on this project and optimize my program.
          Currently, I am working on creating a Player subclass to track certain
          properties, which would allow me to make my program more
          space-efficient by instantiating less sets to store santas, santees,
          and all players separately.
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
