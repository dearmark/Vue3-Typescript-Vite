<template>
  <div id="basic-event">
    <button @click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>
  <div id="event-with-method">
    <!-- `greet` 是在下面定义的方法名 -->
    <button @click="greet">Greet</button>
  </div>
  <div id="inline-handler">
    <button @click="say('hi')">Say hi</button>
    <button @click="say('what')">Say what</button>
  </div>
  <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>
</template>
<script setup lang="ts" >
import { reactive, ref, computed, watch } from 'vue'
const counter = ref(0)
const name = ref('Vue.js')
function greet(event: PointerEvent) {
  // `methods` 内部的 `this` 指向当前活动实例
  alert('Hello ' + name.value + '!')
  // `event` 是原生 DOM event
  if (event) {
    alert(event.target.tagName)
    //console.log(event)
  }
}
function say(message: string) {
  alert(message)
}
function warn(message: string, event) {
  // 现在可以访问到原生事件
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
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
