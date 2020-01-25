<template>
  <div class="page page-home">

    <div class="slider-controller">
      <div class="controller-element slider-container">
        <vue-slider v-model="intensity" :max="99"
          direction="btt"
          tooltip="none"
          dotSize="32"
          width="16px" height="414px" />
      </div>
    </div>

    <div class="color-controller">
      <compact-picker :value="color" @input="updateColor" :palette="palette" />
    </div>

  </div>
</template>

<script>

import 'vue-slider-component/theme/default.css'
import VueSlider from 'vue-slider-component';
import { Compact } from 'vue-color';

import DMXController from '../lib/DMXController'

const config = require('@/config');

export default {
  name: 'home',
  components: {
    VueSlider, 'compact-picker': Compact
  },
  watch: {
    colorResult(newVal) {
      this.controller.setColor(
        newVal.r, newVal.g, newVal.b
      );
    }
  },
  computed: {
    colorResult: function() {
      let i = this.intensity / 99;
      return { 
        r: Math.round(this.color.r * i),
        g: Math.round(this.color.g * i),
        b: Math.round(this.color.b * i)
      }
    }
  },
  data() {
    return {
      palette: [
        '#ff0000', '#00ff00', '#ffff00', '#0000ff',
        '#fa4b3c', '#ff9115', '#ffdc23', '#dddf24', '#a2dd23', '#5dcdca',
        '#67d9fe', '#ada1fe', '#ffa0fe',
        '#d92d17', '#e7720e', '#ffc41f', '#b1bc1c', '#63bd1c', '#00a6a5', '#009ddf',
        '#7964fd', '#ff21fd',
        '#a40001', '#c95008', '#ff9d17', '#818911', '#124d34', '#007a7d', '#0063b0',
        '#663293', '#af0e9d', '#ff0e9d',
        '#ffffff', '#000000'],

      color: { r: 255, g: 255, b: 255 },
      intensity: 0,

      controller: null,
    }
  },
  methods: {
    updateColor(ev) {
      this.color = {
        r: ev.rgba.r, g: ev.rgba.g, b: ev.rgba.b
      }
    }
  },
  mounted() {

    // create DMX controller with driver settings from config file
    // DMX decoder start channel is set to "1"
    this.controller = new DMXController(config.dmx);
  },
}
</script>

<style lang="scss">

.page-home {

  .slider-controller {

    top: 20px;
    left: 20px;
    position: absolute;

    .controller-element {
      position: absolute;
      background-color: #000000;
      border: 2px solid #FFFFFF;
    }

    .slider-container {
      padding: 32px 10px;
    }
  }

  .color-controller {
    position: absolute;
    top: 20px;
    left: 120px;

    .vc-compact {
      width: 217px;
    }

    .vc-compact-color-item {
      width: 48px;
      height: 48px;
    }
  }

}

</style>