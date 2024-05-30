<template>
  <p v-if="error">Something went wrong...</p>
  <p v-if="loading">Loading....</p>
  <div v-else class="flex flex-wrap justify-center">
      <div v-for="episode in result.episodes.results" :key="episode.id" class="w-40 mx-2 mb-4">
        <router-link :to="{ name: 'about', params: { id: episode.id } }">
          <div class="p-4 border border-gray-300 rounded">
            <p>NAME={{ episode.name }}</p>
            <p class="text-blue-500">{{ episode.episode }}</p>
            <p class="text-blue-500" >{{ episode.air_date }}</p>
            
          </div>
        </router-link>
      </div>
    </div>
</template>

<script setup>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const { result, loading, error } =  useQuery(gql`
  query{
    episodes {
        results{
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
}
`);

</script>
