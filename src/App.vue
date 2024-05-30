<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  
    <nav class="bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="#" class="text-white font-bold text-xl">YodaMovies</a>
          </div>

          <!-- Menu Items -->
          <div class="hidden md:block">
            <ul class="ml-4 flex items-center space-x-4">
              <li><router-link to="/" class="text-gray-300 hover:text-white">Home</router-link></li>
              <li>
                <router-link
                  to="/episodes"
                  class="text-gray-300 hover:text-white bg-slate-500 border rounded"
                  >Episodes</router-link
                >
              </li>
              <li>
                <router-link
                  to="/Characters"
                  class="text-gray-300 bold hover:text-white border bg-green-600 rounded"
                  >Characters</router-link
                >
              </li>
              <li>
                <router-link
                  to="/location/"
                  class="text-gray-300 hover:text-white border bg-blue-700 rounded"
                  >Location.</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>


  
  <Router-View />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
