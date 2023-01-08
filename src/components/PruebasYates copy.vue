<script setup>
import router from "@/router";
import { ref } from "vue";

const pad = ref("8px;");

function gotoPage(event, url) {
  let rect = event.target.getBoundingClientRect();
  console.log(rect.top, rect.right, rect.bottom, rect.left);
  let topTemp = -rect.top + 147;
  let leftTemp = -rect.left;
  event.target.style.transform =
    "translate(" + leftTemp + "px," + topTemp + "px)";
  event.target.classList.add("bigImg");
  event.target.classList.toggle("listImg");
  document.getElementById("yacht-grid");
  let listItems = document.getElementsByClassName("listImg");

  for (let i = 0; i < listItems.length; i++)
    listItems[i].classList.add("disappear");

  setTimeout(() => {
    router.push(url);
  }, 2600);
}
</script>

<template>
  <article class="main-page">
    <section class="header">
      <div class="menu">
        <span class="charters">CHARTERS</span>
        <span class="buy">BUY</span>
      </div>
      <router-link to="/" class="title">
        OCEAN<strong><i>LUX</i></strong>
      </router-link>
    </section>
    <section class="yacht-grid" id="yacht-grid">
      <a
        href="/yate-prueba"
        @click.prevent="gotoPage($event, '/yate-prueba')"
        class="listImg yatch 1"
        >Yate 1</a
      >
      <a
        href="/yate-prueba"
        @click.prevent="gotoPage($event, '/yate-prueba/2')"
        class="listImg yatch 2"
        >Yate 2</a
      >
      <a
        href="/yate-prueba"
        @click.prevent="gotoPage($event, '/yate-prueba/3')"
        class="listImg yatch 3"
        >Yate 3</a
      >
      <a
        href="/yate-prueba"
        @click.prevent="gotoPage($event, '/yate-prueba/4')"
        class="listImg yatch 4"
        >Yate 4</a
      >
      <a
        href="/yate-prueba"
        @click.prevent="gotoPage($event, '/yate-prueba/5')"
        class="listImg yatch 5"
        >Yate 5</a
      >
      <a
        href="/yate-prueba"
        @click.prevent="gotoPage($event, '/yate-prueba/6')"
        class="listImg yatch 6"
        >Yate 6</a
      >
      <a
        href="/yate-prueba"
        @click.prevent="gotoPage($event, '/yate-prueba/7')"
        class="listImg yatch 7"
        >Yate 7</a
      >
      <a
        href="/yate-prueba"
        @click.prevent="gotoPage($event, '/yate-prueba/8')"
        class="listImg yatch 8"
        >Yate 8</a
      >
      <a
        href="/yate-prueba"
        @click.prevent="gotoPage($event, '/yate-prueba/9')"
        class="listImg yatch 9"
        >Yate 9</a
      >
    </section>
  </article>
</template>

<style scooped>
.main-page {
  width: 100vw;
}

.main-page {
  padding: 0;
}

.header {
  width: 100vw;
}

.title {
  font-size: 32px;
  position: absolute;
  top: 5vh;
  right: 50vw;
}

.menu {
  position: absolute;
  top: 7vh;
  left: 5vw;
}

.charters,
.buy {
  margin: 16px;
}

.yacht-grid {
  position: absolute;
  top: 14vh;
  margin: 1vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

.yatch {
  min-width: 200px;
  width: 25vw;
  height: 18vh;
  color: #fff;
  background-image: url("https://p4.wallpaperbetter.com/wallpaper/746/246/405/boat-ship-yacht-4k-wallpaper-preview.jpg");
  background-size: cover;
}

.yatch:hover {
  animation: backgroundIMGIn 0.25s ease-in-out 0.25s;
  animation-fill-mode: forwards;
}

@keyframes backgroundIMGIn {
  100% {
    background-image: url("https://insdrcdn.com/media/attachments/6/9f/c143f79f6.jpg");
  }
}

.disappear {
  transition: all 0.8s;
  opacity: 0;
}

.bigImg {
  background-image: url("https://insdrcdn.com/media/attachments/6/9f/c143f79f6.jpg");
  transition: all 1.8s ease-out 0.8s;
  animation: resizeIMG 1.8s ease-out 0.8s;
  animation-fill-mode: forwards;
}

@keyframes resizeIMG {
  0% {
    width: 25vw;
    height: 18vh;
  }
  100% {
    width: 100vw;
    height: 60vh;
  }
}
</style>
