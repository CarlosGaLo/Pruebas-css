<script setup>
/*Coordinates
bottom:500.25001525878906
height:306.45001220703125
left:31
right:491
top:193.8000030517578
width:460
x:31
y:193.8000030517578
*/
document.body.style.padding = "0";
</script>

<template>
  <div>
    <div class="filler">
      <article class="secondary-page">
        <section class="header">
          <div class="menu">
            <span class="charters">CHARTERS</span>
            <span class="buy">BUY</span>
          </div>
          <a href="/" class="title">
            OCEAN<strong><i>LUX</i></strong>
          </a>
        </section>
        <section class="item">
          <div class="item-img" />
        </section>
      </article>
    </div>
    <article class="data">
      <p>Capabilities</p>
      <section class="crew">
        <p>Length: 55.2m</p>
        <p>Guests: 24</p>
        <p>Cabins: 15</p>
        <p>Crew: 13</p>
      </section>
      <div></div>
      <p>Geco</p>
    </article>
  </div>
</template>

<style>
.item-img {
  background-image: url("https://p4.wallpaperbetter.com/wallpaper/746/246/405/boat-ship-yacht-4k-wallpaper-preview.jpg");
  position: absolute;
  width: 100vw;
  height: 60vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -100px;
  top: 173.8000030517578px;
}
.filler {
  width: 100vw;
  height: 85vh;
}
.data {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.crew {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
}
</style>
