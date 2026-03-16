<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";

import { featureLists, goodLists } from "../../constants/index.js";

const isMobile = window.matchMedia("(max-width: 767px)").matches;

onMounted(() => {
  const start = isMobile ? "top 20%" : "top top";

  const maskTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#art",
      start,
      end: "bottom center",
      scrub: 1.5,
      pin: true,
    },
  });

  maskTimeline
    .to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" })
    .to(".masked-img", { scale: 1.3, maskPosition: "center", maskSize: "400%", duration: 1, ease: "power1.inOut" })
    .to("#masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" });
});
</script>

<template>
  <div id="art">
    <div class="container mx-auto h-full pt-10">
      <h2 class="will-fade">芸術</h2>

      <div class="content">
        <ul class="space-y-4 will-fade">
          <li v-for="(feature, index) in goodLists" :key="index" class="flex items-center gap-2">
            <img src="/images/check.png" alt="check" />
            <p>{{ feature }}</p>
          </li>
        </ul>

        <div class="cocktail-img">
          <img src="/new/theart.png" alt="cocktail" class="abs-center masked-img size-full object-contain" />
        </div>

        <ul class="space-y-4 will-fade">
          <li v-for="(feature, index) in featureLists" :key="index" class="flex items-center justify-start gap-2">
            <img src="/images/check.png" alt="check" />
            <p class="md:w-fit w-60">{{ feature }}</p>
          </li>
        </ul>
      </div>

      <div class="masked-container">
        <h2 class="will-fade">Sip-Worthy Perfection</h2>
        <div id="masked-content">
          <h3>一杯一杯に、完璧な味わい</h3>
          <p>これは、ただの一杯ではありません。あなたのために、心を込めて作られた特別な瞬間です。</p>
        </div>
      </div>
    </div>
  </div>
</template>
