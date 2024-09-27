<template>
  <div class="image-modal-ctn" @click="$emit('close-modal')">
    <div class="image-modal" @click.stop>
      <button class="image-modal-ctn__close" @click="$emit('close-modal')">
        <IconClose />
      </button>
      <div ref="imageCtn" class="image-modal__image">
        <img :src="image?.urls?.regular" :alt="image?.alt_description" />
      </div>
      <div class="image-modal__texts">
        <div class="image-modal__overlay__name">
          {{ image?.user?.name || "Unknown Name" }}
        </div>
        <div class="image-modal__overlay__location">
          {{ image?.user?.location || "Unknown Location" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
  imageEl: {
    type: Object,
    required: true,
  },
})
const imageCtn = ref<HTMLElement>()

onMounted(() => {
  imageCtn.value.appendChild(props.imageEl)
})
</script>

<style scoped>
.image-modal-ctn {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-modal-ctn__close {
  position: absolute;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  right: -4rem;
  top: -3rem;
}
.image-modal-ctn__close:hover {
  background: var(--color-text-light);
}
.image-modal {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: var(--border-radius-base);
  view-transition-name: modal-enter;
}
.image-modal__image {
  overflow: hidden;
  border-top-right-radius: var(--border-radius-base);
  border-top-left-radius: var(--border-radius-base);
  text-align: center;
}
.image-modal img {
  /* Added as global style in main.css */
}
.image-modal__texts {
  padding: 1rem 2rem;
  padding-bottom: 3rem;
}
.image-modal__overlay__name {
  font-size: 1.25rem;
  line-height: 2.5rem;
  font-weight: 500;
  text-align: left;
}

.image-modal__overlay__location {
  font-size: 0.875rem;
  opacity: 0.8;
  text-align: left;
}

@media screen and (max-width: 1024px) {
  .image-modal {
    width: 85%;
  }
  .image-modal-ctn__close {
    right: 1rem;
    top: 1rem;
    background: var(--color-text-light);
  }
}

@media screen and (max-width: 500px) {
  .image-modal {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
  .image-modal__image {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    height: auto;
  }
  .image-modal__texts {
    padding: 0.5rem 1rem;
    padding-bottom: 2rem;
  }
  .image-modal__overlay__name {
    font-size: 1.25rem;
    line-height: 2.5rem;
    font-weight: 500;
    text-align: left;
  }

  .image-modal__overlay__location {
    font-size: 0.875rem;
    opacity: 0.8;
    text-align: left;
  }
}
</style>
