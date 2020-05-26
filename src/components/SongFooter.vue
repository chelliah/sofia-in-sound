
<template>
  <section class="song-footer">
    <svg
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      v-on:click="setIsPlaying(!isPlaying)"
      class="play-button"
    >
      <path d="M0 0H76V76H0V0Z" fill="#EA1589" />
      <path
        v-if="isPlaying"
        d="M25.2389 18L37.2743 18L24.0354 58.2165H12L25.2389 18Z"
        fill="white"
      />
      <path
        v-if="isPlaying"
        d="M48.9147 18L60.9501 18L47.7111 58.2165H35.6758L48.9147 18Z"
        fill="white"
      />
      <path v-if="!isPlaying" d="M59 38L20.75 59.6506L20.75 16.3494L59 38Z" fill="#fff" />
    </svg>
    <div v-if="song" class="song-metadata">
      <div class="title-container">
        <h3>{{song.name}}</h3>
        <h5>song</h5>
      </div>
      <div class="title-container artist">
        <h3>{{song.artist}}</h3>
        <h5>artist</h5>
      </div>
      <div class="title-container">
        <div class="tags-container">
          <a
            v-for="(tag, index) in song.tags"
            :key="index"
            class="tag"
            :style="`background: ${tags[tag].color};`"
            v-on:mouseover="setTag(tag)"
            v-on:mouseout="setTag(null)"
          >{{tags[tag].name}}</a>
        </div>
        <h5>tags</h5>
      </div>
    </div>
  </section>
</template>
<script>
import { TAGS } from "../js/constants.js";
const WIDTH = 320;

export default {
  name: "SongFooter",
  props: ["setIsPlaying", "isPlaying", "song", "setTag"],
  data() {
    return {
      tags: TAGS
    };
  },
  mounted() {},
  watch: {},
  methods: {},
  computed: {}
};
</script>
<style lang="scss" scoped>
@import "../styles/global-styles.scss";

.song-footer {
  position: fixed;
  height: 76px;
  width: 100%;
  bottom: 0;
  left: 0;
  background: $cream;
  display: flex;
}

.song-metadata {
  display: flex;
  align-items: center;
  justify-content: stretch;
  width: 100%;

  .title-container {
    flex-basis: 30%;
    min-width: 200px;
    max-width: 300px;
    margin-left: 20px;

    &.artist h3 {
      color: $gold;
    }
  }

  h3 {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 0 4px 0;

    /* only shallow */

    // font-family: "FranklinGothic URW";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 34px;
    /* identical to box height */

    color: $teal;
  }

  h5 {
    /* song */

    margin: 0;

    // font-family: FranklinGothic URW;
    font-style: italic;
    font-weight: 500;
    font-size: 15.3px;
    line-height: 18px;
    text-transform: uppercase;

    color: #044446;
  }

  .tags-container {
    display: flex;
    margin-top: 12px;
    margin-bottom: 4px;

    .tag {
      /* diegetic */
      height: 22px;

      font-style: italic;
      font-weight: 500;
      font-size: 14;
      line-height: 22px;
      padding: 2px 8px;
      color: white;
      white-space: nowrap;

      &:not(:first-of-type) {
        margin-left: 16px;
      }
    }
  }
}

.play-button {
  cursor: pointer;
  flex-shrink: 0;
}
</style>