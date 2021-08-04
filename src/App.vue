<template>
  <ul id="array-rendering" class="demo">
    <li v-for="item in items" :key="item.message">{{ item.message }}</li>
  </ul>
  <ul id="array-with-index">
    <li v-for="(item, index) in items">{{ parentMessage }} - {{ index }} - {{ item.message }}</li>
  </ul>
</template>
<script setup lang="ts" >
const items = [{ message: 'Foo' }, { message: 'Bar' }]
const parentMessage = 'Parent'
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
