<template>
    <li>
        <!-- {{ title }} -->
        <button @click="$emit('remove')">Remove</button>
    </li>
</template>
<script setup="props"  lang="ts" >
declare const props: {
    title: string
}
declare const emit: {
    remove: Function
}
</script>