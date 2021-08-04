<template>
  <div class="static" :class="{ active: isActive, 'text-danger': hasError }">Class 与 Style 绑定</div>
  <div :class="classObject">Class 与 Style 绑定2</div>
  <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">多重值</div>
  <div :class="[activeClass, errorClass]">数组语法</div>
  <div :class="[isActive ? activeClass : '', errorClass]">数组语法</div>
  <div :class="[{ active: isActive }, errorClass]">数组语法2</div>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">对象语法</div>
  <div :style="styleObject">对象语法2</div>
</template>
<script setup lang="ts" >
const isActive = true
const hasError = false
const classObject = {
  active: true,
  'text-danger': true
}
const activeClass = 'active'
const errorClass = 'text-danger'
const activeColor = 'red'
const fontSize = 30
const styleObject = {
  color: 'red',
  fontSize: '13px'
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
