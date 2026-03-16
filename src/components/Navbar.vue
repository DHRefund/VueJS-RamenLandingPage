<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";

import { navLinks } from "../../constants/index.js";

onMounted(() => {
  const navTween = gsap.timeline({
    scrollTrigger: {
      trigger: "nav",
      start: "bottom top",
    },
  });

  navTween.fromTo(
    "nav",
    { backgroundColor: "transparent" },
    {
      backgroundColor: "#00000050",
      backgroundFilter: "blur(10px)",
      duration: 1,
      ease: "power1.inOut",
    },
  );
});
</script>

<template>
  <nav>
    <div>
      <a href="#home" class="flex items-center gap-2">
        <span>🍜</span>
        <p>Sapporo Ramen landing page</p>
      </a>

      <ul>
        <li v-for="link in navLinks" :key="link.id">
          <a :href="`#${link.id}`">{{ link.title }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
