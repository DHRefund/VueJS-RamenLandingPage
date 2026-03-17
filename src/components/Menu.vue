<script setup lang="ts">
import { ref, computed, watch } from "vue";
import gsap from "gsap";
import type { Ramen } from "../../constants/index.ts";
import { allRamen } from "../../constants/index.ts";

const currentIndex = ref(0);
const totalRamen = allRamen.length;

const goToSlide = (index: number) => {
  currentIndex.value = (index + totalRamen) % totalRamen;
};

const getRamenAt = (indexOffset: number): Ramen => {
  return allRamen[(currentIndex.value + indexOffset + totalRamen) % totalRamen]!;
};

const currentRamen = computed(() => getRamenAt(0));
const prevRamen = computed(() => getRamenAt(-1));
const nextRamen = computed(() => getRamenAt(1));

const runAnimations = () => {
  gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
  gsap.fromTo(
    ".cocktail img",
    { opacity: 0, xPercent: -100 },
    {
      xPercent: 0,
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    },
  );
  gsap.fromTo(
    ".details h2",
    { yPercent: 100, opacity: 0 },
    {
      yPercent: 0,
      opacity: 100,
      ease: "power1.inOut",
    },
  );
  gsap.fromTo(
    ".details p",
    { yPercent: 100, opacity: 0 },
    {
      yPercent: 0,
      opacity: 100,
      ease: "power1.inOut",
    },
  );
};

watch(
  currentIndex,
  () => {
    runAnimations();
  },
  { immediate: true },
);
</script>

<template>
  <section id="menu" aria-labelledby="menu-heading">
    <!-- <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
    <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" /> -->

    <h2 id="menu-heading" class="sr-only">ラーメンメニュー</h2>

    <nav class="cocktail-tabs" aria-label="Ramen Navigation">
      <button
        v-for="(ramen, index) in allRamen"
        :key="ramen.id"
        :class="index === currentIndex ? 'text-white border-white' : 'text-white/50 border-white/50'"
        @click="goToSlide(index)"
      >
        {{ ramen.name }}
      </button>
    </nav>

    <div class="content">
      <div class="arrows">
        <button class="text-left" @click="goToSlide(currentIndex - 1)">
          <span>{{ prevRamen.name }}</span>
          <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
        </button>

        <button class="text-left" @click="goToSlide(currentIndex + 1)">
          <span>{{ nextRamen.name }}</span>
          <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
        </button>
      </div>

      <div class="cocktail">
        <img :src="currentRamen.image" class="object-contain" />
      </div>

      <div class="recipe">
        <div class="info">
          <p>本日のラーメン:</p>
          <p id="title">{{ currentRamen.name }}</p>
        </div>

        <div class="details">
          <h2>{{ currentRamen.title }}</h2>
          <p>{{ currentRamen.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
