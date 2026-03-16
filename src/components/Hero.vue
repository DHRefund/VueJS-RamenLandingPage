<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { SplitText } from "gsap/all";

// const videoRef = ref<HTMLVideoElement | null>(null);
const ramenRef = ref<HTMLImageElement | null>(null);

const isMobile = window.matchMedia("(max-width: 767px)").matches;

onMounted(() => {
  const heroSplit = new SplitText(".title", {
    type: "chars, words",
  });

  const paragraphSplit = new SplitText(".subtitle", {
    type: "lines",
  });

  heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

  gsap.from(heroSplit.chars, {
    yPercent: 100,
    duration: 1.8,
    ease: "expo.out",
    stagger: 0.06,
  });

  gsap.from(paragraphSplit.lines, {
    opacity: 0,
    yPercent: 100,
    duration: 1.8,
    ease: "expo.out",
    stagger: 0.06,
    delay: 1,
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
    .to(".right-leaf", { y: 200 }, 0)
    .to(".left-leaf", { y: -200 }, 0)
    .to(".arrow", { y: 100 }, 0);

  const startValue = isMobile ? "top 50%" : "center 60%";
  const endValue = isMobile ? "120% top" : "bottom top";

  // ScrollTrigger.create({
  //   trigger: ".ramen",
  //   start: "top top",
  //   end: "bottom top",
  //   pin: true,
  // });

  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "video",
  //     start: startValue,
  //     end: endValue,
  //     scrub: true,
  //     pin: true,
  //   },
  // });

  // if (videoRef.value) {
  //   videoRef.value.onloadedmetadata = () => {
  //     tl.to(videoRef.value, {
  //       currentTime: videoRef.value!.duration,
  //     });
  //   };
  // }
  // Xoay tô ramen khi scroll
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".ramen",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    })
    .from(ramenRef.value, { rotation: 0, y: 0 })
    .to(ramenRef.value, { rotation: 360, y: 750, ease: "none" });
});
</script>

<template>
  <section id="hero" class="noisy">
    <h1 class="title">RAMEN</h1>

    <div class="left-leaf pl-[150px] pt-[150px]">
      <img src="/new/chopstick-1.png" alt="left-leaf" />
      <img class="pl-[120px]" src="/new/sushi1.png" alt="left-leaf" />
      <img class="pl-[200px]" src="/new/sushi2.png" alt="left-leaf" />
    </div>
    <div class="right-leaf">
      <img src="/new/chopstick-2.png" alt="right-leaf" />
      <img class="" src="/new/EGG.png" alt="right-leaf" />
    </div>
    <!-- <img src="/images/hero-right-leaf.png" alt="right-leaf" class="right-leaf" /> -->

    <div class="body">
      <img src="/images/arrow.png" alt="arrow" class="arrow" />

      <div class="content">
        <div class="space-y-5 hidden md:block">
          <p>熱々。濃厚。定番。</p>
          <p class="subtitle">
            冬の味を <br />
            楽しむ
          </p>
        </div>

        <div class="view-cocktails">
          <p class="subtitle">
            当店のラーメンはすべて、厳選した食材と職人の技、そして伝統のレシピから生まれています。一杯一杯、心まで温まる味わいをお届けします。
          </p>
          <a href="#cocktails">メニューを見る</a>
        </div>
      </div>
    </div>
  </section>

  <div class="ramen absolute inset-0 flex items-center justify-center">
    <img ref="ramenRef" src="/new/ramento.png" alt="ramen" class="" />
  </div>
  <!-- <div class="video absolute inset-0 border-1 border-white">
    <video
      ref="videoRef"
      muted
      autoplay
      loop
      playsinline
      preload="auto"
      src="/new/video.mp4"
      class="w-full h-full object-cover opacity-50 z-[-1]"
    />
  </div> -->
</template>
