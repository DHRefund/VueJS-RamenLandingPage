<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { SplitText } from "gsap/all";

onMounted(() => {
  const titleSplit = SplitText.create("#about h2", {
    type: "words",
  });

  const scrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top center",
    },
  });

  scrollTimeline
    .from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.02,
    })
    .from(
      ".top-grid div, .bottom-grid div",
      {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.04,
      },
      "-=0.5",
    );
});
</script>

<template>
  <div id="about">
    <div class="mb-16 md:px-0 px-5">
      <div class="content">
        <div class="md:col-span-8">
          <p class="badge">人気ラーメン</p>
          <h2>一杯一杯に、こだわりを。スープからトッピングまで、 すべてに心を込めています。</h2>
        </div>

        <div class="sub-content">
          <p class="">
            当店のラーメンは、細部へのこだわりから生まれます。スープから麺、そしてトッピングまで。その一杯が、忘れられない味になります。
          </p>

          <div>
            <p class="md:text-3xl text-xl font-bold"><span>4.5</span>/5</p>
            <p class="text-sm text-white-100">12,000人以上の来店</p>
          </div>
        </div>
      </div>
    </div>

    <div class="top-grid">
      <div class="md:col-span-3">
        <!-- <div class="noisy" /> -->
        <img src="/new/1.png" alt="grid-img-1" />
      </div>

      <div class="md:col-span-5">
        <!-- <div class="noisy" /> -->
        <img src="/new/2.png" alt="grid-img-2" />
      </div>

      <div class="md:col-span-4">
        <!-- <div class="noisy" /> -->
        <img src="/new/3.png" alt="grid-img-5" />
      </div>
    </div>

    <div class="bottom-grid">
      <div class="md:col-span-4">
        <!-- <div class="noisy" /> -->
        <img src="/new/4.png" alt="grid-img-3" />
      </div>
      <div class="md:col-span-5">
        <!-- <div class="noisy" /> -->
        <img src="/new/5.png" alt="grid-img-3" />
      </div>

      <div class="md:col-span-3">
        <!-- <div class="noisy" /> -->
        <img src="/new/6.png" alt="grid-img-4" />
      </div>
    </div>
  </div>
</template>
