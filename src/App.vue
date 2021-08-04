<template>
  <div id="counter">Counter: {{ counter }}</div>
  <div id="bind-attribute">
    <span v-bind:title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
  </div>
  <div id="event-handling">
    <p>{{ message }}</p>
    <button v-on:click="deb">反转 Message</button>
  </div>
  <div id="two-way-binding">
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
  <div id="conditional-rendering">
    <span v-if="seen">现在你看到我了</span>
  </div>
  
</template>
<!-- Composition API 版本3-->
<script setup lang="ts" >
import { reactive, ref, watchEffect, toRefs, defineComponent, onMounted, onUnmounted } from 'vue'
import _ from 'lodash'
const deb = _.debounce(reverseMessage, 500);
let counter = ref(0);
let interval = setInterval(() => {
  if (counter.value === 60) {
    clearInterval(interval)
  } else {
    counter.value++
    //console.log(counter.value)
  }
}, 1000)
const message = ref('一二三四!');
const seen = ref(true);
const todos = ref(
  [
    { text: 'Learn JavaScript' },
    { text: 'Learn Vue' },
    { text: 'Build something awesome' }
  ]
)
// let debouncedClick
function reverseMessage() {
  message.value = message.value
    .split('')
    .reverse()
    .join('');
  //console.log(message)

  // _.debounce(function () {
  //   message.value = message.value
  //     .split('')
  //     .reverse()
  //     .join('');
  // }, 500)

  //console.log(message)

}
function debouncedClick() {
  _.debounce(reverseMessage,500)
}
onMounted(() => {
  // 用 Lodash 的防抖函数
  //let debouncedClick = _.debounce(reverseMessage, 10)
})
</script>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>
