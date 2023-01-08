<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";

let imgs = [
  "https://images.unsplash.com/photo-1584673961397-be26e009333f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZW4lMjBmaWVsZHxlbnwwfHwwfHw%3D&w=1000&q=80",
  "https://w0.peakpx.com/wallpaper/444/161/HD-wallpaper-blue-fields-flowers-tree-blue-field.jpg",
  "https://c4.wallpaperflare.com/wallpaper/981/527/651/beautiful-lavender-field-purple-flowers-lonely-tree-wallpaper-preview.jpg",
];
let n = imgs.length;
let current = n - 1;
let closedWidth = Math.floor(window.innerWidth / 7);
let bg = "";
let fg = "";

onMounted(() => {
  bg = document.getElementById("bg");
  fg = document.getElementById("fg");
  n = imgs.length;
  current = n - 1;
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
      "    <div><button>Easy</button><p>Static CV. Not very fancy but it works so...</p></div>";
    if (i == 1)
      inner =
        "<div><button>Medium</button><p>Dinamic webpage example. You will love this</p></div>";
    if (i == 2)
      inner =
        "<div><button>Hard</button><p><strong>NEED AUDIO</strong>. The best CV experience.</p></div>";

         "<p><sub>Fig.</sub> " + (i + 1) + "</p>"
    */

    let inner = "<p>Easy</p>";
    if (i == 1) inner = "<p>Medium</p>";
    if (i == 2) inner = "<p>Hard</p>";
    console.log(inner);
    gsap.fromTo(
      b,
      {
        attr: { id: "b" + i, class: "box" },
        innerHTML: inner,
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
      if (Number(e.currentTarget.id.substr(1)) == current) return;

      var staggerOrder = !!(current < Number(e.currentTarget.id.substr(1)));
      current = Number(e.currentTarget.id.substr(1));
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
      bg.appendChild(document.getElementById("bgImg" + current));
      gsap.fromTo(
        "#bgImg" + current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power1.inOut" }
      );
      //GSAP size
      gsap.fromTo(
        "#bgImg" + current,
        { scale: 1.05, rotation: 0.05 },
        { scale: 1, rotation: 0, duration: 1.5, ease: "sine" }
      );
    };
    /*---------------------------------------*/
    window.onresize = (e) => {
      let closedWidth = Math.floor(window.innerWidth / 20);
      gsap.set(".box", {
        x: 0,
        left: (i) =>
          i <= current
            ? i * closedWidth
            : window.innerWidth - (n - i) * closedWidth,
      });
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
