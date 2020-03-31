
<template>
  <figure class="movie-frame" :style="`width: ${this.width}px; height: ${this.height}px;`">
    <img :v-if="isLoaded" :src="placeholderImage" class="movie-frame--placeholder" />
    <svg width="97" height="64" viewBox="0 0 97 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g translate="0 16" :class="{ active: loaderState == 0}">
        <path d="M1 1L17 1.5V34.5L0 34L1 1Z" fill="white" />
        <rect x="2" width="16" height="32" />
      </g>
      <g translate="0 16" :class="{ active: loaderState == 1}">
        <path d="M27 1L43 1.5V34.5L26 34L27 1Z" fill="white" />
        <rect x="28" width="16" height="32" />
      </g>
      <g translate="0 16" :class="{ active: loaderState == 2}">
        <path d="M55 0.581207L71 1.08V34L54 33.5012L55 0.581207Z" fill="white" />

        <rect x="54" width="16" height="32" />
      </g>
      <g translate="0 16" :class="{ active: loaderState == 3}">
        <path d="M81 1L97 1.5V33.7485L80.5 35L81 1Z" fill="white" />
        <rect x="80" width="16" height="32" />
      </g>
    </svg>

    <div :style="fullImgStyle" class="movie-frame--full" />
  </figure>
</template>
<script>
const WIDTH = 320;

export default {
  name: "MovieFrame",
  props: ["fullImage", "placeholderImage", "seconds", "height"],
  data() {
    return {
      isLoaded: false,
      loadedURLs: [],
      width: WIDTH,
      loaderInterval: null,
      loaderState: 0
    };
  },
  mounted() {
    this.setLoader();
  },
  watch: {
    fullImage: function() {
      if (this.loadedURLs.indexOf(this.fullImage) === -1) {
        console.log("hii");
        this.setLoader();
      }
    }
  },
  methods: {
    setLoader() {
      this.isLoaded = false;
      let img = new Image();
      img.onload = () => {
        setTimeout(() => this.setIsLoaded(), 500);
      };

      img.src = this.fullImage;
      this.loaderTimer();
      if (this.loaderTimer) {
        clearInterval(this.loaderInterval);
        this.loaderInterval = null;
      }
      this.loaderInterval = setInterval(this.loaderTimer.bind(this), 380);
    },
    setIsLoaded() {
      this.isLoaded = true;

      if (this.loadedURLs.indexOf(this.fullImage) === -1) {
        this.loadedURLs.push(this.fullImage);
      }

      //   clearInterval(this.loaderInterval);
      //   this.loaderInterval = null;
    },
    loaderTimer() {
      requestAnimationFrame(() => {
        this.loaderState = (this.loaderState + 1) % 4;
      });
    }
  },
  computed: {
    fullImgStyle() {
      let minutes = Math.floor(this.seconds / 60);
      let seconds = this.seconds % 60;
      let leftIndex = Math.floor(seconds / 10);
      let left = leftIndex * WIDTH;
      let top = minutes * this.height;
      return {
        "background-image": this.isLoaded
          ? `url(${this.fullImage})`
          : "transparent",
        "background-position": `top -${top}px left -${left}px`,
        height: `${this.height}px`,
        width: `${WIDTH}px`,
        display: this.isLoaded ? "block" : "none"
      };
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/global-styles.scss";

.movie-frame {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 192px;
  margin: 0;
}

.movie-frame--placeholder {
  position: absolute;
  left: 0;
  top: 0;
}

svg {
  position: relative;
  z-index: 1;
}

svg g {
  transform-origin: center;
}

svg .active {
  transform: scaleY(2);
}

svg rect {
  fill: $pink-light;
}

svg .active rect {
  fill: #ea1589;
}

.movie-frame--full {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
</style>