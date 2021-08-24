<template>
  <my-vue-element></my-vue-element>
</template>
<script setup lang="ts" >
import { reactive, ref, computed, watch, defineCustomElement } from 'vue'
const MyVueElement = defineCustomElement({
  // normal Vue component options here
  props: {},
  emits: {},
  template: `<H2>這裡是 Wibibi 標題二</H2>`,

  // defineCustomElement only: CSS to be injected into shadow root
  styles: [`/* inlined css */`]
})

// Register the custom element.
// After registration, all `<my-vue-element>` tags
// on the page will be upgraded.
customElements.define('my-vue-element', MyVueElement)

// You can also programmatically instantiate the element:
// (can only be done after registration)
// document.body.appendChild(
//   new MyVueElement({
//     // initial props (optional)
//   })
// )

</script>

<style>

</style>
