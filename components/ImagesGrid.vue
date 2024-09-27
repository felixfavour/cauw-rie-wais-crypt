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
          @click="openImageModal(image, $event.currentTarget)"
        >
          <img
            :src="image?.urls?.small"
            :alt="image?.alt_description"
            loading="lazy"
          />
          <div class="images-grid__image__overlay">
            <div class="images-grid__image__overlay__name">
              {{ image?.user?.name || "Unknown Name" }}
            </div>
            <div class="images-grid__image__overlay__location">
              {{ image?.user?.location || "Unknown Location" }}
            </div>
          </div>
        </button>
      </div>
    </div>

    <!-- IMAGE MODAL -->
    <ImageModal
      v-if="imageModalVisible"
      :image="imageModalVisible"
      :image-el="imageElement"
      @close-modal="closeImageModal()"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
})
const imageModalVisible = ref(false)
const imageElement = ref<HTMLElement>()
const recentButton = ref<HTMLElement>()

const openImageModal = (image: any, buttonElement: HTMLElement) => {
  recentButton.value = buttonElement
  const imageEl = buttonElement.querySelector("img")
  imageEl.style.viewTransitionName = "selected-img"
  imageElement.value = imageEl
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      imageModalVisible.value = image
    })
  } else {
    imageModalVisible.value = image
  }
}

const closeImageModal = async () => {
  recentButton.value.appendChild(imageElement.value)
  if (document.startViewTransition) {
    const animation = await document.startViewTransition(() => {
      imageModalVisible.value = false
    })
    await animation.finished
    imageElement.value.style.viewTransitionName = "none"
  } else {
    imageModalVisible.value = false
  }
}
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
    column-gap: var(--image-grid-column-gap);
  }

  &__image {
    margin-bottom: var(--image-grid-column-gap);
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
      z-index: 1;
      border-radius: var(--border-radius-base);
    }

    &__overlay__name {
      font-size: 1.25rem;
      line-height: 2.5rem;
      font-weight: 300;
      text-align: left;
    }

    &__overlay__location {
      font-size: 0.875rem;
      opacity: 0.8;
      margin-bottom: 2rem;
      text-align: left;
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
    margin-bottom: var(--image-grid-column-gap);
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

@media screen and (max-width: 1024px) {
  .images-grid__inner {
    max-width: 90%;
  }
  .images-grid__image {
    &__overlay {
      padding: 0 1.5rem;
    }

    &__overlay__name {
      font-size: 1.125rem;
    }

    &__overlay__location {
      margin-bottom: 1.5rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .images-grid__images {
    column-count: 2;
  }
  .images-grid__image {
    &__overlay {
      padding: 0 1.375rem;
    }

    &__overlay__name {
      font-size: 1.125rem;
      line-height: 2rem;
    }

    &__overlay__location {
      margin-bottom: 1.375rem;
      font-size: 0.85rem;
    }
  }
}

@media screen and (max-width: 500px) {
  .images-grid__images {
    column-count: 1;
  }
}
</style>
