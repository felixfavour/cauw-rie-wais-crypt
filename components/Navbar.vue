<template>
  <section class="navbar section" :class="{ normal: startAnim }">
    <div class="inner">
      <!-- HOMEPAGE TYPE -->
      <form v-if="route.name === 'index'" @submit.prevent class="slide-up">
        <div class="form-group" :class="{ normal: startAnim }">
          <IconSearch class="icon" />
          <input
            type="text"
            class="form-control"
            :value="route.query.q"
            placeholder="Search for photo"
            @keyup.enter="
              $router.push({
                path: '/search',
                query: { q: $event.target.value },
              })
            "
          />
        </div>
      </form>
      <!-- SEARCH PAGE TYPE -->
      <h1 v-else class="slide-up">
        Search Results for
        <nuxt-link :to="`/?q=${route.query.q}`"
          >“{{ route.query.q }}”</nuxt-link
        >
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const startAnim = ref(false)

onMounted(() => {
  setTimeout(() => {
    startAnim.value = true
  }, 0)
})
</script>

<style scoped>
.navbar {
  background-color: var(--color-primary);
  height: 100vh;
  min-height: 350px;
  display: grid;
  place-items: center;
  transition: var(--transition-xl);
}
.navbar.normal {
  height: 20vh;
}
.navbar .inner {
  width: 90%;
  max-width: var(--desktop-max-width);
  margin: 0 auto;
}
.navbar .form-group {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: scale(0.75);
  transition: var(--transition-lg);
}
.navbar .form-group.normal {
  transform: scale(1);
}

.navbar .icon {
  position: absolute;
  left: 2rem;
}
.navbar input {
  width: 100%;
  height: 80px;
  border-radius: var(--border-radius-base);
  outline: none;
  border: none;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0 5rem;
  color: #000000;
  transition: var(--transition-base);
}

.navbar input:focus {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}
.navbar input::placeholder {
  color: var(--color-text);
}
h1 {
  font-weight: 600;
  font-size: 3rem;
  color: var(--color-text);
}
h1 > a {
  color: var(--color-text-light);
  text-decoration: none;
}

h1 > a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  .navbar {
    min-height: 250px;
  }
  .navbar input {
    height: 65px;
    font-size: 1.125rem;
    /* padding: 0 2rem; */
  }
  h1 {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 500px) {
  .navbar .icon {
    position: absolute;
    left: 1.35rem;
  }
  .navbar {
    min-height: 250px;
  }
  .navbar input {
    padding: 0 3.5rem;
  }
  h1 {
    font-size: 2rem;
  }
}
</style>
