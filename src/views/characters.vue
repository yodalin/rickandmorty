
<template>
    <div class="p-4 min-h-screen flex flex-col items-center" id="characters">

      <p v-if="error">Something went wrong...</p>
      <p v-if="loading">Loading...</p>
  
      <div v-else="character" class="ml-4 mt-6">
        <div class="flex flex-col max-w-2xl">
          <b><h1 class=" font-bold text-lg">character</h1></b>
          <img :src="result.character.image" alt="" style="width: 400px; height: 300px;"><br>
          <p class="text-green-500"> Name     :    {{ result.character.name }} <br></p>
          <p class="text-green-500"> status    :    {{ result.character.status }} <br></p>
          <p class="text-green-500"> gender    :    {{ result.character.gender }} <br></p>
          <p class="text-green-500"> species    :   {{ result.character.species }}</p>
        </div>
      </div> <br>
  <h1 class="text-yellow-400 border-solid font-extrabold bg-black"> Character episodes</h1>
      <ul class="grid grid-cols-2 gap-4 mt-6">
        <li v-for="seri in result.character.episode" :key="seri.id">
          <div class="text-sm p-4 border border-gray-300 rounded">
            <p><strong>Episode Name:</strong> <span class="text-blue-400">{{ seri.name }}</span></p>
            <p><strong>Episode:</strong> <span class="text-blue-400">{{ seri.episode }}</span></p>
            <p><strong>Episode AirDate:</strong> <span class="text-orange-400">{{ seri.air_date }}</span></p>
            <p><strong>Episode Created:</strong> <span class="text-blue-400">{{ seri.created }}</span></p>
          </div>
        </li>
      </ul>
    </div>
  </template>
<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useRoute } from "vue-router";

const id = useRoute().params.id;
const characterQuery = gql`
query {
    character(id:${id}){
      name
      status
      gender
      species
      image
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
`;

const { result, error, loading } = useQuery(characterQuery);
</script>