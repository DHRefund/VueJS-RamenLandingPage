<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { SplitText } from "gsap/all";

import { openingHours, socials } from "../../constants/index.js";

onMounted(() => {
  const titleSplit = SplitText.create("#contact h2", { type: "words" });

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      start: "top center",
    },
    ease: "power1.inOut",
  });

  timeline
    .from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
    })
    .from("#contact h3, #contact p", {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
    })
    .to("#f-right-leaf", {
      y: "-50",
      duration: 1,
      ease: "power1.inOut",
    })
    .to(
      "#f-left-leaf",
      {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      },
      "<",
    );
});
</script>

<template>
  <footer id="contact">
    <!-- <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
    <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" /> -->

    <div id="f-right-leaf" class="left-leaf pl-[150px] pt-[150px]">
      <img src="/new/chopstick-1.png" alt="left-leaf" />
      <img class="pl-[120px]" src="/new/sushi1.png" alt="left-leaf" />
      <img class="pl-[200px]" src="/new/sushi2.png" alt="left-leaf" />
    </div>
    <div id="f-left-leaf" class="right-leaf">
      <img src="/new/chopstick-2.png" alt="right-leaf" />
      <img class="" src="/new/EGG.png" alt="right-leaf" />
    </div>

    <div class="content">
      <h2>お店の場所:</h2>

      <div>
        <h3>〒064-0805</h3>
        <p>北海道札幌市中央区南5条西3丁目、すすきのビル 5階</p>
      </div>

      <div>
        <h3>お問い合わせ:</h3>
        <p>(555) 987-6543</p>
        <p>phamtinh@gmail.com</p>
      </div>

      <div>
        <h3>毎日営業しています</h3>
        <p v-for="time in openingHours" :key="time.day">{{ time.day }} : {{ time.time }}</p>
      </div>

      <div>
        <h3>Socials</h3>

        <div class="flex-center gap-5">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.name"
          >
            <img :src="social.icon" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
