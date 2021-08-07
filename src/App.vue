<template>
  <dev>Num is {{ num }}</dev>
  <br />
  <input v-model="message" placeholder="edit me" />
  <input v-model.lazy="message" />
  <input v-model.trim="message" />
  <p>Message is: {{ message }}</p>
  <span>Multiline message is:</span>
  <p style="white-space: pre-line;">{{ message }}</p>

  <textarea v-model="message" placeholder="add multiple lines"></textarea>

  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>

  <div id="v-model-multiple-checkboxes">
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span>
  </div>

  <div id="v-model-radiobutton">
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <br />
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <br />
    <span>Picked: {{ picked }}</span>
  </div>

  <div id="v-model-select" class="demo">
    <select v-model="selected">
      <option disabled value>Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
  <select v-model="selected" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br />
  <span>Selected: {{ selected }}</span>

  <div id="v-model-select-dynamic" class="demo">
    <select v-model="selected2">
      <option v-for="option in options" :value="option.value">{{ option.text }}</option>
    </select>
    <span>Selected: {{ selected2 }}</span>
  </div>

  <input v-model.number="age" type="number" />

  <select v-model="selected">
    <!-- 内联对象字面量 -->
    <option :value="{ number: 123 }">123</option>
  </select>
</template>
<script setup lang="ts" >
import { reactive, ref, computed, watch, nextTick } from 'vue'
const message = ref('')
const checked = ref(true)
const checkedNames = ref([])
const picked = ref('')
const selected = ref('')
const selected2 = ref('')
const options = reactive([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' }
])
const num = ref(0);
console.log(new Date())
for (let i = 0; i < 100000; i++) {
  num.value = i
}
// await nextTick()
// console.log(new Date())
// console.log('Now DOM is updated')
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
