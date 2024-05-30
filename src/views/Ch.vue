<template>

<p v-if="error">Something went wrong...</p>
  <p v-if="loading">Loading....</p>
<div v-else class="flex flex-wrap justify-center">
      <div v-for="character in result.characters.results" :key="character.id" class="w-40 mx-2 mb-4">
        <router-link :to="{ name: 'abut', params: { id: character.id } }">
          <div class="p-4 border border-gray-300 rounded">
            <img :src="character.image" alt="" style="width:500px; height: 200px;" />
            <p>{{ character.name }}</p>
          </div>
        </router-link>
      </div>
    </div>
</template>
<script setup>
import gql from "graphql-tag";
  import { useQuery } from "@vue/apollo-composable";



const { result, loading, error } =  useQuery(gql`
query {
    characters{
        results{
      name
      status
      gender
      species
      image
      id
      episode{
        id
        name
        air_date
        episode
        created
      }
      location{
        name
      }
      }
    }
}
`);



</script>