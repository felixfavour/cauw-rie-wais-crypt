<template>
  <div class="images-grid section">
    <div class="images-grid__inner">
      <!-- PLACEHOLDER IMAGES -->
      <div class="images-grid__images">
        <div v-for="i in 21" :key="i" class="images-grid__placeholder skeleton">
          <div class="images-grid__placeholder__box"></div>
          <div class="images-grid__placeholder__box"></div>
        </div>
      </div>

      <!-- ACTUAL IMAGES -->
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
const images = ref([])
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
