<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="home flex justify-center flex-col items-center">
    <div>
      <img
        src="https://th.bing.com/th?id=OIF.tG6ewf2J7rBYGU3cs%2f5ABg&w=317&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        class="w-full h-full"
        alt=""
      />
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
