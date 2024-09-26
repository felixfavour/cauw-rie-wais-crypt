<template>
  <section class="navbar section">
    <div class="inner">
      <form>
        <div class="form-group">
          <IconSearch class="icon" />
          <input
            type="text"
            class="form-control"
            placeholder="Search for photo"
          />
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

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
  color: #2b2b2b;
}
</style>
