<script setup>
import { gsap } from "gsap";
import { ref, onMounted } from "vue";

const timelineProgress = ref(0);
const colorBar = ref("");
let bar = null;
let timeline = null;

function updateColor() {
  if (bar) {
    let newColorR = 255 - (bar.getBoundingClientRect().width / 400) * 240;
    let newColorG = 40 + (bar.getBoundingClientRect().width / 400) * 215;
    let newColorB = 255;
    //Lo pasamos a hexadecimal
    newColorR = Math.round(newColorR).toString(16);
    newColorG = Math.round(newColorG).toString(16);
    newColorB = Math.round(newColorB).toString(16);
    //Calculamos el valor que vamos a inyectar en la variable de backgroundColor
    colorBar.value = "#" + newColorR + newColorG + newColorB;
    console.log(colorBar.value);
    //Le aplicamos el color a la barra
    bar.style.backgroundColor = colorBar.value;
  }
}

onMounted(() => {
  bar = document.querySelector(".bar-filler");
  bar.style.width = "200px";
  timeline = gsap.timeline({ repeat: -1, yoyo: true });
  timeline.to(bar, { duration: 1, scaleX: 2, ease: "slow" });
  timeline.eventCallback("onUpdate", () => {
    timelineProgress.value = timeline.progress() * 100;
    updateColor();
  });
});
</script>

<template>
  <div class="bar">
    <div class="bar-container">
      <div class="bar-filler"></div>
    </div>
  </div>
</template>

<style scoped>
.bar-container {
  width: 400px;
  height: 16px;
  background-color: grey;
  border-radius: 8px;
  border: 2px solid darkblue;
  overflow: hidden;
}

.bar-filler {
  width: 300px;
  height: 16px;
  background-color: green;
  border-radius: 4px;
  animation: bouncing 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
}
</style>
