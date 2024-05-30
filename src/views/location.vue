<template>

<p v-if="error">Something went wrong...</p>
 <p v-if="loading">Loading...</p>

   <div v-else="location" class="ml-4 mt-6">
    <div class="flex flex-col max-w-2xl">
    <b> <h1 class="font-bold text-lg">location</h1></b>

         <p class="text-green-500"> "Name:"   {{ result.location.name }} <br></p>
     <p class="text-green-500">"Type:"      {{ result.location.type }} <br></p>
     <p class="text-green-500"> Dimension:   {{ result.location.dimension }} <br></p>
     <p class="text-green-500">Created:        {{ result.location.created }} </p>
    
</div>
</div>
    <!-- <h1 class="text-black mt-4">residents: </h1>
     <ul class=" flex flex-wrap">
        <li v-for="resident in result.location":key="resident.id"></li>
        <img :src="result.resident.image" alt="{{resident.name}}" class="w-16 h-16 rounded-full "  />
    </ul>
    <div>
        <p class="text-black">{{ resident.name }}</p>
        <p class="text-black">{{ resident.status }}</p>
        <p class="text-black">{{ resident.species }}</p>
        <p class="text-black">{{ resident.gender }}</p>
    </div> -->

    
    
</template>


<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

// Import if needed for routing
import { useRoute } from 'vue-router';
const id = useRoute().params.id;

const { result, error, loading } =  useQuery(gql`
  query {
    location(id:${id}) {
      id
      name
      type
      created
      dimension
      residents {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`);
</script>
