<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";

import { ramenLists, mockRamenLists } from "../../constants/index.ts";

onMounted(() => {
  const parallaxTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#cocktails",
      start: "top 30%",
      end: "bottom 80%",
      scrub: true,
    },
  });

  parallaxTimeline.from("#c-left-leaf", { x: -100, y: 100 }).from("#c-right-leaf", { x: 100, y: 100 });
});
</script>

<template>
  <section id="cocktails" class="noisy">
    <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
    <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

    <div class="list">
      <div class="popular">
        <h2>人気ラーメン:</h2>

        <ul>
          <li v-for="{ name, country, detail, price } in ramenLists" :key="name">
            <div class="md:me-28">
              <h3>{{ name }}</h3>
            </div>
            <span>- {{ price }}</span>
          </li>
        </ul>
      </div>

      <div class="loved">
        <h2>おすすめラーメン:</h2>

        <ul>
          <li v-for="{ name, country, detail, price } in mockRamenLists" :key="name">
            <div class="me-28">
              <h3>{{ name }}</h3>
            </div>
            <span>- {{ price }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
