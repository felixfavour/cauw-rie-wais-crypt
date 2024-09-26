<template>
  <section class="navbar section">
    <div class="inner">
      <!-- HOMEPAGE TYPE -->
      <form v-if="route.path === '/'" @submit.prevent>
        <div class="form-group">
          <IconSearch class="icon" />
          <input
            type="text"
            class="form-control"
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
      <h1 v-else>
        Search Results for <span>“{{ route.query.q }}”</span>
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped>
.navbar {
  background-color: var(--color-primary);
  height: 20vh;
  min-height: 350px;
  display: grid;
  place-items: center;
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
h1 > span {
  color: var(--color-text-light);
}
</style>
