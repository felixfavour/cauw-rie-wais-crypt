<template>
  <div class="images-grid section">
    <div class="images-grid__inner">
      <div class="images-grid__images">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="images-grid__image"
        >
          <div class="images-grid__image__overlay">
            <div class="images-grid__image__overlay__name">Roland Olagbaye</div>
            <div class="images-grid__image__overlay__location">
              London, United Kingdom
            </div>
          </div>
          <img :src="image" :alt="image.alt" />
        </div>
      </div>
    </div>
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

    &__overlay {
      position: absolute;
      height: 90%;
      bottom: 5px;
      right: 0;
      left: 0;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 40%,
        rgba(0, 0, 0, 1) 100%
      );
      border-radius: var(--border-radius-base);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      padding: 2rem;
      z-index: 99;
    }

    &__overlay__name {
      font-size: 1.25rem;
      line-height: 2.5rem;
      font-weight: 300;
    }

    &__overlay__location {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: var(--border-radius-base);
      transition: var(--transition-base);
    }

    &:hover {
      transform: scale(1.03);
    }
  }
}
</style>
