<template>
  <div class="images-grid section">
    <div class="images-grid__inner">
      <!-- PLACEHOLDER IMAGES -->
      <div v-if="images.length === 0" class="images-grid__images">
        <div v-for="i in 21" :key="i" class="images-grid__placeholder skeleton">
          <div class="images-grid__placeholder__box"></div>
          <div class="images-grid__placeholder__box"></div>
        </div>
      </div>

      <!-- ACTUAL IMAGES -->
      <div v-else class="images-grid__images">
        <button
          v-for="(image, index) in images"
          :key="index"
          class="images-grid__image"
          @click="imageModalVisible = image"
        >
          <img :src="image" :alt="image.alt" />
          <div class="images-grid__image__overlay">
            <div class="images-grid__image__overlay__name">Roland Olagbaye</div>
            <div class="images-grid__image__overlay__location">
              London, United Kingdom
            </div>
          </div>
        </button>
      </div>
    </div>

    <!-- IMAGE MODAL -->
    <ImageModal
      v-if="imageModalVisible"
      :image="imageModalVisible"
      @close-modal="imageModalVisible = false"
    />
  </div>
</template>

<script setup lang="ts">
const images = ref([
  "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709884732294-ac35fa831eb4?q=80&w=1863&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709917241494-48fdf74f2640?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1661777965336-e4e80856b9fe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1706694442016-bd539e1d102b?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709884732294-ac35fa831eb4?q=80&w=1863&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709917241494-48fdf74f2640?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1661777965336-e4e80856b9fe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1706694442016-bd539e1d102b?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
])
const imageModalVisible = ref(false)
</script>

<style lang="scss" scoped>
.images-grid {
  &__inner {
    margin: auto;
    max-width: calc(var(--desktop-max-width) - 150px);
    position: relative;
    top: -50px;
  }

  &__images {
    column-count: 3;
    column-gap: 3rem;
  }

  &__image {
    margin-bottom: 3rem;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    color: #ffffff;
    transition: var(--transition-base);
    cursor: zoom-in;
    display: flex;
    outline: none;
    border: none;
    border-radius: var(--border-radius-base);

    &__overlay {
      position: absolute;
      height: 100%;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 20%,
        rgba(0, 0, 0, 1) 100%
      );
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      padding: 0 2rem;
    }

    &__overlay__name {
      font-size: 1.25rem;
      line-height: 2.5rem;
      font-weight: 300;
    }

    &__overlay__location {
      font-size: 0.875rem;
      opacity: 0.8;
      margin-bottom: 2rem;
    }

    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
      transition: var(--transition-base);
    }

    &:hover {
      img {
        transform: scale(1.25);
      }
    }
  }

  &__placeholder {
    width: 250px;
    border-radius: var(--border-radius-base);
    padding: 2rem;
    height: 270px;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;

    &__box {
      width: 200px;
      height: 20px;
      background: #cbcbcb;
      margin-bottom: 0.8rem;
      opacity: 0.5;
    }

    &__box:nth-child(2) {
      width: 130px;
      margin-bottom: 0;
    }
  }

  &__placeholder:nth-of-type(even) {
    height: 410px;
  }
}
</style>
