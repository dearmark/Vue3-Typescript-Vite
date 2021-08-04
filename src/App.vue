<template>
  <div id="computed-basics">
    <p>Has published books:</p>
    <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
  </div>
  <div id="computed-basics">
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
  </div>
  <div id="watch-example">
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
    <img :src="imgsrc" />
  </div>
</template>
<!-- Composition API 版本3-->
<script setup lang="ts" >
import { reactive, ref, computed, watch } from 'vue'
import axios from 'axios'
const author = ref({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
// 计算属性
const publishedBooksMessage = computed(() => author.value.books.length > 3 ? 'Yes' : 'No')
const question = ref('')
const imgsrc = ref('')
const answer = ref('Questions usually contain a question mark. ;')
watch(question, (newValue, oldValue) => {
  if (newValue.indexOf('?') > -1) {
    getAnswer()
  }
});
function getAnswer() {
  answer.value = 'Thinking...'
  axios
    .get('https://yesno.wtf/api')
    .then(response => {
      answer.value = response.data.answer
      imgsrc.value = response.data.image
    })
    .catch(error => {
      answer.value = 'Error! Could not reach the API. ' + error
    })
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
