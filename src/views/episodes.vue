<template>



  
        <p v-if="error">Something went wrong...</p>
           <p v-if="loading">Loading...</p>
          
           
 <div v-else="location" class=" mt-6 ml-4">
<div class="flex flex-col max-w-2x1">
  <h1 class="font-bold" > Episode:</h1>
  <p class="text-green-500">Name:       {{ result.episode.name }} <br></p>
    <p class="text-green-500">Episode:   {{ result.episode.episode }} <br> </p>
    <p class="text-green-500">Created:   {{ result.episode.created }} <br></p>
      <p class="text-green-500">Air-Date:    {{ result.episode. air_date}}</p>

</div>

</div> <br>
<br>

<div class=" mr-14">
  <h3 v-if="result.episode.characters.length > 0" class="text-2xl font-bold mt-0 mb-4 text-center border rounded bg-gray-800 text-pink-500">Characters of the episode</h3>
  <ul v-if="result.episode.characters.length > 0" class="characters-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <li v-for="character in result.episode.characters" :key="character.id">
      <div class="character-card bg-transparent rounded-md shadow-md p-2 flex items-center">
        <img :src="character.image" alt="{{ resident.name }} Photo" class="h-32 w-32  mx-auto mb-2 object-cover">
        <div class="character-info flex flex-col space-y-1 text-white ml-4">
          <span class="text-center font-bold text-lg">{{ character.name }}</span>
          <p class="text-orange-400">Status: {{ character.status }}</p>
          <p class="text-green-400">Species: {{ character.species }}</p>
          <p class="text-green-400">Gender: {{ character.gender }}</p>
        </div>
      </div>
    </li>
  </ul>
</div>
              
  
</template>

<script setup >
import { useRoute} from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const route = useRoute()



const id = useRoute().params.id;
const { result, loading, error } =  useQuery(gql`
  query{
    episode(id:${id}) {
      name
      air_date
      episode
      created
      id
      characters {
        name
        image
        status 
        gender
        species
      }
    }
  }
`);

</script>