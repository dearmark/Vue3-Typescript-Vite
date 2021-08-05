<template>
    <li>
        {{ title }}
        <button @click="$emit('remove')">Remove</button>
    </li>
</template>
<script setup=’props‘  lang="ts" >
// declare const props: {
//     title:{
//       type: String,
//       default: "blabla"
//   }
  declare const props: {
    title: string
}


//  declare const props: {
//     title: string
// }
// declare const emit:
//     'remove'

// const props = defineProps({
//     title: String,
// })
// const emit = defineEmits(['remove'])
// declare const emit: {
//     remove
// }
</script>