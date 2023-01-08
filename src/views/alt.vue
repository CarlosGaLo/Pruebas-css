<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
document.body.style.padding = "0";
let imgs = [
  "https://image.yachtcharterfleet.com/w1277/h618/qh/ca/m2/k5881b1eb/vessel/resource/71526/charter-4k-yacht.jpg",
  "https://cdn.boatinternational.com/images/20160330/1-107171l-2560x1440.jpg",
  "https://cdn.boatinternational.com/files/2020/12/26834210-4144-11eb-afc1-6162a193af68-SEVERINS-exterior-Credits-Scovavento.jpg",
  "https://rare-gallery.com/uploads/posts/1242000-yacht.jpg",
  "https://greenlightinternational.tv/wp-content/uploads/2019/04/superboat.jpg",
];
let n = imgs.length;
let current = 0;
let closedWidth = Math.floor(window.innerWidth / 7);
let bg = "";
let fg = "";

onMounted(() => {
  bg = document.getElementById("bg");
  fg = document.getElementById("fg");
  n = imgs.length;
  current = 0;
  closedWidth = Math.floor(window.innerWidth / 7);

  for (let i = 0; i < n; i++) {
    let bgImg = document.createElement("div");
    bg.appendChild(bgImg);

    gsap.set(bgImg, {
      attr: { id: "bgImg" + i, class: "bgImg" },
      width: "100%",
      height: "100%",
      backgroundImage: "url(" + imgs[i] + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
    });

    let b = document.createElement("div");

    fg.appendChild(b);

    /* Alternative msg
    let inner =
      "    <div><button>Easy</button><p>Static. Not very fancy but it works so...</p></div>";
    if (i == 1)
      inner =
        "<div><button>Medium</button><p>Dinamic webpage example. You will love this</p></div>";
    if (i == 2)
      inner =
        "<div><button>Hard</button><p><strong>NEED AUDIO</strong>. The best CV experience.</p></div>";

         "<p><sub>Fig.</sub> " + (i + 1) + "</p>"
    */

    gsap.fromTo(
      b,
      {
        attr: { id: "b" + i, class: "box" },
        innerHTML: "<p><sub>Fig</sub>" + (i + 1) + "</p>",
        width: "100%",
        height: "100%",
        borderLeft: i > 0 ? "solid 1px #eee" : "",
        backgroundColor: "rgba(250,250,250,0)",
        left: i * closedWidth,
        transformOrigin: "100% 100%",
        x: "100%",
        position: "absolute",
      },
      {
        duration: i * 0.15,
        x: 0,
        ease: "expo.inOut",
      }
    );

    b.onmouseenter = b.onclick = (e) => {
      let currentId = Number(e.currentTarget.id.substr(1));
      if (currentId === current) return;
      current = currentId;

      let staggerOrder = currentId > current;
      gsap.to(".box", {
        duration: 0.5,
        ease: "elastic.out(0.3)",
        left: (i) =>
          i <= current
            ? i * closedWidth
            : window.innerWidth - (n - i) * closedWidth,
        x: 0,
        stagger: staggerOrder ? 0.05 : -0.05,
      });
      /*---------------------------------------*/
      //GSAP general background
      bg.insertBefore(document.getElementById("bgImg" + current), bg.firstChild);
      
      gsap.fromTo(
        "#bgImg" + current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "circ" }
      );
      //GSAP size
      gsap.fromTo(
        "#bgImg" + current,
        { scale: 1.05, rotation: 0.05 },
        { scale: 1, rotation: 0, duration: 1.5, ease: "sine" }
      );
    };
    document.querySelector("#fg").onclick = (e) => {
      window.open(imgs[current], "_self");
    };
  }
});
</script>

<template>
  <article>
    <section id="bg"></section>
    <section id="fg"></section>
  </article>
</template>

<style scooped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");

#bg,
#fg {
  width: 100vw;
  height: 100vh;
  color: #fff;
  font-size: 35px;
  font-family: "Montserrat", sans-serif;
  overflow: hidden;
}

section {
  position: absolute;
  top: 0;
}

sub {
  font-size: 12px;
  display: block;
}

p {
  padding: 12px;
}
</style>
