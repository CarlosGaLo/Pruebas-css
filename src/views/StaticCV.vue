<script setup></script>

<template>
  <div class="container">
    <div class="center-headers">
      <h1 class="text-border">Welcome</h1>
      <h2>
        <router-link class="link-to-cv" to="/select"
          >let's see the CV</router-link
        >
      </h2>
    </div>

    <div class="bird-container bird-container--one">
      <div class="bird bird--one"></div>
    </div>

    <div class="bird-container bird-container--two">
      <div class="bird bird--two"></div>
    </div>

    <div class="bird-container bird-container--three">
      <div class="bird bird--three"></div>
    </div>

    <div class="bird-container bird-container--four">
      <div class="bird bird--four"></div>
    </div>
  </div>
</template>

<style scooped>
@import url("https://fonts.googleapis.com/css?family=Arima+Madurai:300");

body,
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  width: 100vw;
  min-height: 100vh;
}

h1 {
  font-family: "Arima Madurai", cursive;
  color: rgb(32, 118, 211);
  font-size: 4rem;
  letter-spacing: -3px;
  text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.6);
  position: relative;
  z-index: 3;
  text-align: center;
}

.text-border {
  text-shadow: -1px 0 rgba(0, 128, 0, 0.2), 0 1px rgba(0, 128, 0, 0.2),
    1px 0 rgba(0, 128, 0, 0.2), 0 -1px rgba(0, 128, 0, 0.2);
}

.container {
  z-index: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 35rem;
  background-image: linear-gradient(
      to bottom,
      rgba(76, 255, 237, 0.6) 0%,
      rgba(13, 255, 207, 0.6) 100%
    ),
    url("https://images.unsplash.com/photo-1446824505046-e43605ffb17f");
  background-blend-mode: soft-light;
  background-size: cover;
  background-position: center center;
  padding: 2rem;
  height: 100vh;
}

.bird {
  background-image: url(../assets/bird.svg);
  background-size: auto 100%;
  width: 88px;
  height: 125px;
  will-change: background-position;

  animation-name: fly-cycle;
  animation-timing-function: steps(10);
  animation-iteration-count: infinite;
}

.bird--one {
  animation-duration: 1s;
  animation-delay: -0.5s;
}

.bird--two {
  animation-duration: 0.9s;
  animation-delay: -0.75s;
}

.bird--three {
  animation-duration: 1.25s;
  animation-delay: -0.25s;
}

.bird--four {
  animation-duration: 1.1s;
  animation-delay: -0.5s;
}

.bird-container {
  position: absolute;
  top: 20%;
  left: -10%;
  transform: scale(0) translateX(-10vw);
  will-change: transform;

  animation-name: fly-right-one;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.bird-container--one {
  animation-duration: 15s;
  animation-delay: 0;
}

.bird-container--two {
  animation-duration: 16s;
  animation-delay: 1s;
}

.bird-container--three {
  animation-duration: 14.6s;
  animation-delay: 9.5s;
}

.bird-container--four {
  animation-duration: 16s;
  animation-delay: 10.25s;
}

.center-headers {
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: auto;
  flex-direction: column;
  justify-content: center;
}

.link-to-cv {
  text-align: center;
  color: white;
}

@keyframes fly-cycle {
  100% {
    background-position: -900px 0;
  }
}

@keyframes fly-right-one {
  0% {
    transform: scale(0.3) translateX(-10vw);
  }

  10% {
    transform: translateY(2vh) translateX(10vw) scale(0.4);
  }

  20% {
    transform: translateY(0vh) translateX(30vw) scale(0.5);
  }

  30% {
    transform: translateY(4vh) translateX(50vw) scale(0.6);
  }

  40% {
    transform: translateY(2vh) translateX(70vw) scale(0.6);
  }

  50% {
    transform: translateY(0vh) translateX(90vw) scale(0.6);
  }

  60% {
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }

  100% {
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }
}

@keyframes fly-right-two {
  0% {
    transform: translateY(-2vh) translateX(-10vw) scale(0.5);
  }

  10% {
    transform: translateY(0vh) translateX(10vw) scale(0.4);
  }

  20% {
    transform: translateY(-4vh) translateX(30vw) scale(0.6);
  }

  30% {
    transform: translateY(1vh) translateX(50vw) scale(0.45);
  }

  40% {
    transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
  }

  50% {
    transform: translateY(0vh) translateX(90vw) scale(0.45);
  }

  51% {
    transform: translateY(0vh) translateX(110vw) scale(0.45);
  }

  100% {
    transform: translateY(0vh) translateX(110vw) scale(0.45);
  }
}

.link-to-cv {
  display: block;
}
</style>
