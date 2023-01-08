<script setup>
import router from "@/router";

function gotoPage(event, url) {
  let parent = event.target.parentNode;
  let newParent = document.getElementById("new-parent");
  let imgPlaceholder = parent.getElementsByClassName("img-placeholder");
  console.log(parent);
  console.log(parent.getElementsByClassName("img-placeholder"))
  imgPlaceholder = imgPlaceholder[0];

  const elements = document.querySelectorAll(".tab-panel .element .photo");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.overflow = "visible";
  }
  //Saving parameters
  let dimensions = [
    imgPlaceholder.getBoundingClientRect().width,
    imgPlaceholder.getBoundingClientRect().height,
    imgPlaceholder.getBoundingClientRect().top,
    imgPlaceholder.getBoundingClientRect().left,
  ];
  let rect = event.target.getBoundingClientRect();
  imgPlaceholder.id = "selected";

  newParent.appendChild(imgPlaceholder);
  imgPlaceholder.style.top = 95 + "px";

  setTimeout(() => {
    imgPlaceholder.style.left = 11 + "px";
    imgPlaceholder.style.width = dimensions[0] + "px";
    imgPlaceholder.style.height = dimensions[1] + "px";
    imgPlaceholder.style.setProperty("object-fit", "cover");
    imgPlaceholder.style.transition = "all 1s ease-out";
    setTimeout(function () {
      imgPlaceholder.style.left = -25 + "px";
      imgPlaceholder.style.width = "100vw";
      imgPlaceholder.style.height = "60vh";
    }, 10);
  }, 300);
  
  //Coordinates
  //100.234375 499.1875 204.453125 19.1875
  //100.234375 989.1875 204.453125 509.1875

  let topTemp = -rect.top + 147;
  let leftTemp = -rect.left;

  setTimeout(() => { 
    router.push(url);
   }, 1500);
}
</script>

<template>
    <div id="new-parent">
      <ul class="tabs">
        <li>
          <input
            class="toggle-radio"
            type="radio"
            name="facegroup"
            id="management"
            checked
          />
          <label class="tab" for="management">CHARTERS</label>
          <div class="tab-panel" style="width: 90vw">
            <input @click="showGrey" class="toggle-checkbox" type="checkbox" id="a" />
            <label class="element" for="a">
              <h3>
                <span class="name">Cathy</span>
                <span class="job">Yate 1</span>
              </h3>
              <figure class="photo">
                <img
                  class="img-placeholder"
                  src="https://p4.wallpaperbetter.com/wallpaper/746/246/405/boat-ship-yacht-4k-wallpaper-preview.jpg"
                />
              </figure>
              <p class="bio">
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps over the lazy
                dog. The quick brown fox jumps over the lazy dog. The quick
                brown fox jumps over the lazy dog. The quick brown fox jumps
                over the lazy dog. The quick brown fox jumps over the lazy dog.
              </p>
              <a
                class="know-more bio"
                @click.prevent="gotoPage($event, '/yate-prueba/1')"
                >I want to know more</a
              >
            </label>
            <input class="toggle-checkbox" type="checkbox" id="b" />
            <label class="element" for="b">
              <h3>
                <span class="name">Gia</span> <span class="job">Yate 2</span>
              </h3>
              <figure class="photo">
                <img
                class="img-placeholder"
                  src="https://p4.wallpaperbetter.com/wallpaper/746/246/405/boat-ship-yacht-4k-wallpaper-preview.jpg"
                />
              </figure>
              <p class="bio">
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps over the lazy
                dog. The quick brown fox jumps over the lazy dog. The quick
                brown fox jumps over the lazy dog. The quick brown fox jumps
                over the lazy dog. The quick brown fox jumps over the lazy dog.
              </p>
              <a
                class="know-more bio"
                @click.prevent="gotoPage($event, '/yate-prueba/1')"
                >I want to know more</a
              >
            </label>
            <input class="toggle-checkbox" type="checkbox" id="c" />
            <label class="element" for="c">
              <h3>
                <span class="name">Jennifer</span>
                <span class="job">Yate 3</span>
              </h3>
              <figure class="photo">
                <img
                class="img-placeholder"
                  src="https://p4.wallpaperbetter.com/wallpaper/746/246/405/boat-ship-yacht-4k-wallpaper-preview.jpg"
                />
              </figure>
              <p class="bio">
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps over the lazy
                dog. The quick brown fox jumps over the lazy dog. The quick
                brown fox jumps over the lazy dog. The quick brown fox jumps
                over the lazy dog. The quick brown fox jumps over the lazy dog.
              </p>
              <a
                class="know-more bio"
                @click.prevent="gotoPage($event, '/yate-prueba/3')"
                >I want to know more</a
              >
            </label>
            <input class="toggle-checkbox" type="checkbox" id="d" />
            <label class="element" for="d">
              <h3>
                <span class="name">Jean-Michel</span>
                <span class="job">Yate 4</span>
              </h3>
              <figure class="photo">
                <img
                class="img-placeholder"
                  src="https://p4.wallpaperbetter.com/wallpaper/746/246/405/boat-ship-yacht-4k-wallpaper-preview.jpg"
                />
              </figure>
              <p class="bio">
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps over the lazy
                dog. The quick brown fox jumps over the lazy dog. The quick
                brown fox jumps over the lazy dog. The quick brown fox jumps
                over the lazy dog. The quick brown fox jumps over the lazy dog.
              </p>
              <a
                class="know-more bio"
                @click.prevent="gotoPage($event, '/yate-prueba/4')"
                >I want to know more</a
              >
            </label>
            <input class="toggle-checkbox" type="checkbox" id="f" />
            <label class="element" for="f">
              <h3>
                <span class="name">Tammy</span> <span class="job">Yate 5</span>
              </h3>
              <figure class="photo">
                <img
                class="img-placeholder"
                  src="https://p4.wallpaperbetter.com/wallpaper/746/246/405/boat-ship-yacht-4k-wallpaper-preview.jpg"
                />
              </figure>
              <p class="bio">
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps over the lazy
                dog. The quick brown fox jumps over the lazy dog. The quick
                brown fox jumps over the lazy dog. The quick brown fox jumps
                over the lazy dog. The quick brown fox jumps over the lazy dog.
              </p>
              <a
                class="know-more bio"
                @click.prevent="gotoPage($event, '/yate-prueba/5')"
                >I want to know more</a
              >
            </label>
            <input class="toggle-checkbox" type="checkbox" id="g" />
            <label class="element" for="g">
              <h3>
                <span class="name">Troy</span>
                <span class="job">Yate 6</span>
              </h3>
              <figure class="photo">
                <img
                class="img-placeholder"
                  src="https://p4.wallpaperbetter.com/wallpaper/746/246/405/boat-ship-yacht-4k-wallpaper-preview.jpg"
                />
              </figure>
              <p class="bio">
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps over the lazy
                dog. The quick brown fox jumps over the lazy dog. The quick
                brown fox jumps over the lazy dog. The quick brown fox jumps
                over the lazy dog. The quick brown fox jumps over the lazy dog.
              </p>
              <a
                class="know-more bio"
                @click.prevent="gotoPage($event, '/yate-prueba/6')"
                >I want to know more</a
              >
            </label>
          </div>
        </li>
        <li>
          <input class="toggle-radio" type="radio" name="facegroup" id="hair" />
          <label class="tab" for="hair">BUY</label>
        </li>
        <!-- Hardcoded space between elements -->
        <li></li>
        <li>
          <img src="../assets/oceanlux.svg" alt="">
        </li>
        <li></li>
        <li>
          <router-link to="/alt">Alternativa</router-link>
        </li>
        <!-- EO Hard Coded -->
      </ul>
    
    </div>
</template>

<style scooped>
@charset "UTF-8";
* {
  box-sizing: border-box;
}
a {
  color: blue;
  text-decoration: none;
}

#new-parent {
  padding: 0 0 0 11px;
  width: 95vw;
  min-height: 100vh;
  /* overflow: hidden; */
}

body {
  padding: 20px;
  margin: 0;
}

.toggle-radio,
.toggle-checkbox {
  display: none;
}

.tabs {
  position: relative;
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin: 1em -10px;
}
.tabs > li {
  flex: 1 0 auto;
  margin: 10px 10px 0;
}
.tabs > li > .tab {
  display: block;
  text-align: center;
  width: 100%;
  border: 2px solid black;
  padding: 3px 6px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  background: white;
  color: black;
}
.tabs > li > .tab ~ * {
  position: absolute;
  left: 0;
  top: calc(100% + 40px);
  width: calc(100% + 20px);
  margin: 0 -10px;
  overflow: visible;
  opacity: 0;
  z-index: -1;
  transition: all 0.3s ease;
}
.tabs > li > .toggle-radio:checked ~ .tab {
  background: black;
  color: white;
}
.tabs > li > .toggle-radio:checked ~ .tab ~ .tab-panel {
  opacity: 1;
  z-index: 1;
}

.tab-panel {
  font-weight: 14px;
}
.tab-panel .element {
  display: flex;
  flex-flow: column;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid transparent;
  background: white;
  padding: 0 20px 20px;
}
.tab-panel .element,
.tab-panel .element * {
  transition: all 0.5s ease;
}
.tab-panel .element h3 {
  font-size: 15px;
  margin: 0 0 1em;
  white-space: nowrap;
}
.tab-panel .element h3 * {
  transition: none;
}
.tab-panel .element .name {
  text-transform: uppercase;
}
.tab-panel .element .name:after {
  content: " / ";
}
.tab-panel .element .photo {
  margin: 0;
  width: 100%;
  min-width: 280px;
  height: 190px;
  overflow: hidden;
  position: relative;
}
.tab-panel .element .photo img {
  position: relative;
  width: 100%;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
}
.tab-panel .element .photo:before {
  transition: all 0.5s ease;
  content: "+";
  font-size: 30px;
  font-weight: bold;
  color: white;
  background: transparent;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 0;
  right: 0;
  width: 1.3em;
  height: 1.3em;
  opacity: 1;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tab-panel .element .bio {
  opacity: 0;
  transition-duration: 0s;
  transition-delay: 0s;
  font-size: 12px;
  max-height: 0;
}

.tab-panel .toggle-checkbox:checked + .element .photo:before {
  transform: rotate(45deg);
}
.tab-panel .toggle-checkbox:checked + .element .bio {
  opacity: 1;
  max-height: 1000px;
  transition-duration: 1.5s;
}

.know-more {
  background: black;
  color: #fff;
  padding: 4px;
  text-transform: uppercase;
  position: absolute;
  bottom: 35px;
  left: 80%;
}

.img-placeholder {
  transition: width 1s ease-out, height 1s ease-out;
  width: 460px;
  transition: all 1s ease-out;
  position: relative;
  object-fit: cover;
}

#selected {
  margin: 0;
  padding: 0;
  z-index: 20;
}

@media screen and (min-width: 500px) {
  .tab-panel .element {
    position: absolute;
    left: 0;
    top: 0;
    height: 250px;
    z-index: 1;
    display: block;
  }
  .tab-panel .element:before {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    content: "✕";
    opacity: 0;
    border: 1px solid #333;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    font-size: 18px;
    right: -0.75em;
    top: -0.75em;
    width: 1.5em;
    height: 1.5em;
    background: white;
  }
  .tab-panel .element .photo {
    min-width: 0;
    max-width: 270px;
  }
  .tab-panel .element .photo img {
    width: auto;
    height: 100%;
    max-width: none;
    left: 50%;
    transform: translateX(-50%);
  }

  .tab-panel .toggle-checkbox:checked + .element {
    left: 0;
    width: 100%;
    padding: 20px 20px;
    margin: 0 0;
    height: 500px;
    z-index: 10;
    border: 1px solid #333;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);
    overflow: visible;
  }
  .tab-panel .toggle-checkbox:checked + .element:before {
    opacity: 1;
  }
  .tab-panel .toggle-checkbox:checked + .element h3 {
    font-size: 18px;
  }
  .tab-panel .toggle-checkbox:checked + .element .photo {
    float: left;
    max-width: 50%;
    height: 330px;
    margin-right: 30px;
  }
  .tab-panel .toggle-checkbox:checked + .element .photo:before {
    transform: none;
    opacity: 0;
  }
  .tab-panel .toggle-checkbox:checked + .element .photo img {
    height: 100%;
    width: 460px;
  }
  .tab-panel .toggle-checkbox:checked + .element .bio {
    transition-delay: 0.5s;
  }
}
@media screen and (min-width: 500px) and (max-width: 799px) {
  .tabs {
    flex-flow: row wrap;
  }
  .tabs > li {
    flex-basis: 30%;
  }

  .tab-panel .element {
    width: calc(100% / 2);
  }
  .tab-panel .element:nth-of-type(2n + 2) {
    left: calc(100% / 2);
  }
  .tab-panel .element:nth-of-type(2) ~ .element {
    top: 250px;
  }
  .tab-panel .element:nth-of-type(4) ~ .element {
    top: 500px;
  }
  .tab-panel .element:nth-of-type(6) ~ .element {
    top: 750px;
  }
  .tab-panel .element:nth-of-type(8) ~ .element {
    top: 1000px;
  }
  .tab-panel .element:nth-of-type(10) ~ .element {
    top: 1250px;
  }
  .tab-panel .element:nth-of-type(12) ~ .element {
    top: 1500px;
  }
  .tab-panel .element:nth-of-type(14) ~ .element {
    top: 1750px;
  }
  .tab-panel .element:nth-of-type(16) ~ .element {
    top: 2000px;
  }
  .tab-panel .element:nth-of-type(18) ~ .element {
    top: 2250px;
  }
}
@media screen and (min-width: 800px) {
  .tabs {
    flex-flow: row;
  }

  .tab-panel .element {
    width: calc(100% / 3);
  }
  .tab-panel .element:nth-of-type(3n + 2) {
    left: calc(100% / 3);
  }
  .tab-panel .element:nth-of-type(3n + 3) {
    left: calc(200% / 3);
  }
  .tab-panel .element:nth-of-type(3) ~ .element {
    top: 250px;
  }
  .tab-panel .element:nth-of-type(6) ~ .element {
    top: 500px;
  }
  .tab-panel .element:nth-of-type(9) ~ .element {
    top: 750px;
  }
  .tab-panel .element:nth-of-type(12) ~ .element {
    top: 1000px;
  }
  .tab-panel .element:nth-of-type(15) ~ .element {
    top: 1250px;
  }
  .tab-panel .element:nth-of-type(18) ~ .element {
    top: 1500px;
  }
  .tab-panel .element:nth-of-type(21) ~ .element {
    top: 1750px;
  }
  .tab-panel .element:nth-of-type(24) ~ .element {
    top: 2000px;
  }
  .tab-panel .element:nth-of-type(27) ~ .element {
    top: 2250px;
  }
  .tab-panel .element .photo {
    max-width: 240px;
  }

  .tab-panel .toggle-checkbox:checked + .element {
    top: 0;
  }
  .tab-panel .toggle-checkbox:checked + .element .photo {
    max-width: 460px;
  }
}
</style>
