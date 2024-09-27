<template>
  <div class="home">
    {{ images.data }}
    <ImagesGrid :images="pending ? [] : images" :loading="pending" />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: `Image Catalog`,
  description: "See multiple images in staggered grid",
})

const {
  data: images,
  pending,
  error,
} = await useAPIFetch(`https://api.unsplash.com/photos/random?count=21`)
if (error.value) {
  console.log(error.value)
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
  })
}
</script>

<style scoped></style>
