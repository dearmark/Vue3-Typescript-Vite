<template>
  <div id="demo">
    <div
      @mousemove="xCoordinate"
      :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
      class="movearea"
    >
      <h3>Move your mouse across the screen...</h3>
      <p>x: {{ x }}</p>
    </div>
  </div>
</template>
<script setup lang="ts" >
import { reactive, ref, computed, watch, defineCustomElement } from 'vue'
const x = ref(0)
function xCoordinate(e: MouseEvent) {
  x.value = e.clientX;
}

</script>

<style>
#demo {
  width: 100vw;
  height: 100vh;
}

.movearea {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 6vmin;
  transition: 0.2s background-color ease;
}
</style>
