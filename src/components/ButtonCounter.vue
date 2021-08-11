<template>
    <button @click="count++">You clicked me {{ count }} times.</button>
</template>
<script setup=’props‘  lang="ts" >
// import { ref } from 'vue'
//  const count = ref(-11)
const props = defineProps({
    count: Number
})
   //const emit = defineEmits(['remove'])

</script>