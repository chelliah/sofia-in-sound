<template>
  <section class="scene-scrubber">
    <h3 class="title">{{label}}</h3>
    <div
      class="scrubber"
      v-on:mousedown="pressThumb"
      :style="`flex-basis: ${scrubberWidth}px; width: ${scrubberWidth}px;`"
    >
      <div class="thumb" :style="`left: ${Math.round(this.scrubberWidth * this.progress)}px;`">
        <p class="timer">{{formattedTime}}</p>
        <svg
          tabindex="0"
          v-on:keydown="navigateWithKeyboard"
          width="12"
          height="29"
          viewBox="0 0 12 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.947266 7.67431e-06L11.4585 -8.22247e-07L7.07884 10.1892H5.32696L0.947266 7.67431e-06Z"
            fill="#DAA520"
          />
          <path d="M5.32617 10.1891H7.07806V27.4324H5.32617V10.1891Z" fill="#DAA520" />
          <path
            d="M11.459 29L0.947663 29L5.32738 18.8108L7.07927 18.8108L11.459 29Z"
            fill="#DAA520"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
const MARGIN = 10;
const TITLE_WIDTH = 300;
export default {
  name: "SceneScrubber",
  props: {
    width: {
      default: 700
    },
    duration: {
      default: 60 * 100 + 31
    },
    label: {},
    id: {},
    setSeconds: {
      default: () => {}
    },
    initialTime: {}
  },
  mounted() {
    if (this.initialTime) {
      this.progress = this.initialTime / this.duration;
      //   this.time = Math.round(this.progress * this.duration);
    }
    this.formatTime();
  },
  data() {
    return {
      progress: 0,
      isThumbing: false,
      formattedTime: null,
      scrubberWidth: this.width - TITLE_WIDTH - MARGIN,
      scrubberLeft: 0,
      time: 0
    };
  },
  methods: {
    setThumbPos(e) {
      if (this.isThumbing) {
        //   console.log(e)
        let x = e.clientX - this.scrubberLeft;
        this.progress = Math.max(Math.min(x / this.scrubberWidth, 1), 0);
        this.formatTime();
        this.setSeconds(this.id, this.time);
      }
    },
    pressThumb(e) {
      this.isThumbing = true;
      if (e.target.classList[0] == "scrubber") {
        this.progress = e.layerX / this.scrubberWidth;
        let { left, width } = e.target.getBoundingClientRect();
        this.scrubberLeft = left;
        this.scrubberWidth = width;
        this.formatTime();

        this.setSeconds(this.id, this.time);
        console.log("adding", this.id);
        window.addEventListener("mousemove", this.setThumbPos);
        window.addEventListener("mouseup", this.releaseThumb);
      } else if (e.target.classList[0] == "thumb") {
        let { left, width } = e.target.offsetParent.getBoundingClientRect();
        this.progress = (e.clientX - left)/this.scrubberWidth;
        this.scrubberLeft = left;
        this.scrubberWidth = width;
        this.formatTime();

        this.setSeconds(this.id, this.time);
        console.log("adding", this.id);
        window.addEventListener("mousemove", this.setThumbPos);
        window.addEventListener("mouseup", this.releaseThumb);
      }
    },
    releaseThumb() {
      this.isThumbing = false;
      console.log("removing", this.id);
      window.removeEventListener("mousemove", this.setThumbPos);
      window.removeEventListener("mouseup", this.releaseThumb);
    },
    navigateWithKeyboard(e) {
      if (e.which === 39) {
        this.progress = Math.min(this.progress + 0.01, 1);
        this.formatTime();
        this.setSeconds(this.id, this.time);
      }
      if (e.which === 37) {
        this.progress = Math.max(this.progress - 0.01, 0);
        this.formatTime();
        this.setSeconds(this.id, this.time);
      }
    },

    formatTime() {
      this.time = Math.round(this.duration * this.progress);
      let seconds = this.time % 60;

      let totalMinutes = (this.time - seconds) / 60;

      let hours = Math.floor(totalMinutes / 60);
      let minutes = totalMinutes % 60;

      this.formattedTime = `${hours > 0 ? `${hours}:` : ""}${
        minutes < 10 ? `0${minutes}` : minutes
      }:${seconds < 10 ? `0${seconds}` : seconds}`;
    }
  }
  // computed: {
  //     thumbPosition() {

  //     }
  // }
};
</script>

<style lang="scss" scoped>
@import "../styles/global-styles.scss";

.scene-scrubber {
  display: flex;
  align-items: center;
  padding: 20px;
}

.title {
  width: 300px;
  flex-basis: 300px;
  flex-shrink: 0;
  /* The Virgin Suicides */

  font-style: italic;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  background: #ea1589;
  height: 24px;
  text-align: center;
  text-transform: uppercase;
}

.scrubber {
  cursor: pointer;
  height: 24px;
  background: $cream;
  margin-left: 10px;
  width: 100%;
  flex-basis: 100%;
  position: relative;
  flex-shrink: 0;
}

.thumb {
  position: absolute;
  bottom: -7px;
  cursor: grab;

  transform: translateX(-6px);
  //   left: calc(0% - 6px);
  svg {
    pointer-events: none;
  }
  p {
    pointer-events: none;
    margin: 0;
    position: absolute;
    left: 50%;
    top: -20px;
    transform: translateX(-50%);

    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: $gold;
  }
}
</style>>
