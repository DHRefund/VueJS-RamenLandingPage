<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Ramen from "./components/Ramen.vue";
import About from "./components/About.vue";
import Art from "./components/Art.vue";
import Menu from "./components/Menu.vue";
import Contact from "./components/Contact.vue";

gsap.registerPlugin(ScrollTrigger, SplitText);
</script>

<template>
  <main>
    <Navbar />
    <Hero />
    <Ramen />
    <About />
    <Art />
    <Menu />
    <Contact />
  </main>
</template>
