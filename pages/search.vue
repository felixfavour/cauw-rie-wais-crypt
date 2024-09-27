<template>
  <div class="home">
    <ImagesGrid :images="pending ? [] : images?.results" :loading="pending" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

useHead({
  title: `Image Search: "${route.query.q}"`,
  description: "Search for images on Unsplash",
})

const {
  data: images,
  pending,
  error,
} = await useAPIFetch(`/search/photos?query=${route.query.q}`)
if (error.value) {
  console.log(error.value)
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
  })
}
</script>

<style scoped></style>
