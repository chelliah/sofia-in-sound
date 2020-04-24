<template>
  <section class="scene-scrubber">
    <div
      class="scrubber"
      v-on:mousedown="pressThumb"
      :id="`${id}__scrubber`"
      :style="`flex-basis: ${scrubberWidth}px; width: ${scrubberWidth}px;`"
    >
      <div class="thumb" :style="`left: ${Math.round(this.scrubberWidth * this.progress)}px;`">
        <p class="timer noselect">{{formattedTime}}</p>
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
      <div v-if="!!songsList" class="songs-container">
        <div 
          class="song" 
          v-for="(song, index) in songsList" 
          :key="song.name + index" 
          :style="`left: ${scrubberWidth * (song.start/duration)}px; width: ${Math.max(scrubberWidth * (song.end - song.start)/duration, 2)}px;`"
          v-on:mousedown="selectSong(song)">
        </div>
      </div>
    </div>

    <h3 :class="`title noselect${selected ? ' selected' : ''}`" v-on:click="setSeconds(id, time)">{{label}}</h3>
  </section>
</template>

<script>
const WINDOW_PADDING = {
  desktop: 42,
  tablet: 24,
  mobile: 16
};
const MARGIN_LABEL_TO_BAR = 10;
const TITLE_WIDTH = 220;

export default {
  name: "SceneScrubber",
  props: {
    displayWidth: {
      default: 700
    },
    displayMode: {
      default: "desktop"
    },
    longestFilmLength: {
      default: 7355
    },
    duration: {
      default: 60 * 100 + 31
    },
    label: {},
    selected: {
      default: false
    },
    id: {},
    setSeconds: {
      default: () => {}
    },
    initialTime: {},
    songsList: {}
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
      scrubberLeft: 0,
      time: 0
    };
  },
  computed: {
    scrubberWidth: function() {
      let padding = WINDOW_PADDING[this.displayMode];
      let pctWidth =
        this.displayWidth * (this.duration / this.longestFilmLength);

      switch (this.displayMode) {
        case "mobile":
          return Math.max(this.displayWidth - padding * 2, 200);
          break;
        case "tablet":
          return pctWidth - padding * 2;
          break;
        case "desktop":
        default:
          return pctWidth - TITLE_WIDTH - MARGIN_LABEL_TO_BAR - padding * 2;
          break;
      }
      return pctWidth - TITLE_WIDTH - MARGIN_LABEL_TO_BAR - padding * 2;
    }
  },
  methods: {
    setThumbPos(e) {
      if (this.isThumbing) {
        let x = e.clientX - this.scrubberLeft;
        this.progress = Math.max(Math.min(x / this.scrubberWidth, 1), 0);
        this.formatTime();
        this.setSeconds(this.id, this.time);
      }
    },
    selectSong(song) {
      let halfwayPoint = song.start + (song.end - song.start)/2;

       this.progress = halfwayPoint / this.duration;
       this.scrubberLeft = this.scrubberWidth * this.progress;
       this.formatTime();

       this.setSeconds(this.id, this.time);
    },
    pressThumb(e) {
      this.isThumbing = true;
      if (e.target.classList[0] == "scrubber") {
        this.progress = e.layerX / this.scrubberWidth;
        let { left, width } = e.target.getBoundingClientRect();
        this.scrubberLeft = left;
        this.formatTime();

        this.setSeconds(this.id, this.time);
        window.addEventListener("mousemove", this.setThumbPos);
        window.addEventListener("mouseup", this.releaseThumb);
      } else if (e.target.classList[0] == "thumb" || e.target.classList[0] == "songs-container") {
        let { left, width } = document.getElementById(`${this.id}__scrubber`).getBoundingClientRect();
        this.progress = (e.clientX - left) / this.scrubberWidth;
        this.scrubberLeft = left;
        this.formatTime();

        this.setSeconds(this.id, this.time);
        window.addEventListener("mousemove", this.setThumbPos);
        window.addEventListener("mouseup", this.releaseThumb);
      }
    },
    releaseThumb() {
      this.isThumbing = false;
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
  display: block;

  //   padding: 20px;
}

.title {
  width: 242px;
  flex-basis: 220px;
  flex-shrink: 0;
  /* The Virgin Suicides */

  font-style: italic;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  height: 24px;
  text-align: center;
  text-transform: uppercase;

  margin: 8px 0 32px 0;

  background: $pink-light;
  cursor: pointer;

  &:hover, &.selected {
    background: $hot-pink;
  }
}

.scrubber {
  cursor: pointer;
  height: 24px;
  background: $cream;
  margin-left: 0;
  width: 100%;
  flex-basis: 100%;
  position: relative;
  flex-shrink: 0;
}

.thumb {
  position: absolute;
  bottom: -7px;
  cursor: grab;
  z-index: 20;

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
    font-size: 14px;
    line-height: 22px;
    text-transform: uppercase;
    color: $gold;
  }
}

.songs-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 24px;
  pointer-events: none;

  .song {
    pointer-events: all;;
    position: absolute;
    top: 0;
    height: 24px;
    background: $pink-light;

    &:hover {
      background: $hot-pink;
    }
  }
}

@media only screen and (min-width: 768px) {
  .scene-scrubber {
    flex-direction: row-reverse;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .title {
    margin: 20px 0;
  }

  .scrubber {
    margin-left: 10px;
  }
}
</style>>
