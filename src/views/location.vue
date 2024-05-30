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

    <!-- <div class="w-screen ml-8 ">
                    <h3 v-if="result.location.residents.length > 0" class="text-2xl font-bold mt-4 mb-4 text-center">Residents</h3>
                    <ul v-if="result.location.residents.length > 0" class="residents-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <li v-for="resident in result.location.residents" :key="resident.id">
                        <div class="resident-card bg-transparent rounded-md shadow-md p-2 ">
                          <img :src="resident.image" alt="{{ resident.name }} Photo" class="h-32 w-32  mx-auto mb-2 object-cover">
                          <div class="resident-info flex flex-col space-y-1 text-white">
                            <span class="text-center font-bold text-lg ">{{ resident.name }}</span>
                            <p class="text-blue-400">Status: {{ resident.status }}</p>
                            <p class="text-blue-400">Species: {{ resident.species }}</p>
                            <p class="text-blue-400">Gender: {{ resident.gender }}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div> -->

                  <div class=" mr-14">
  <h3 v-if="result.location.residents.length > 0" class="text-2xl font-bold mt-4 mb-4 text-center border rounded bg-gray-800">Residents</h3>
  <ul v-if="result.location.residents.length > 0" class="residents-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <li v-for="resident in result.location.residents" :key="resident.id">
      <div class="resident-card bg-transparent rounded-md shadow-md p-2 flex items-center">
        <img :src="resident.image" alt="{{ resident.name }} Photo" class="h-32 w-32  mx-auto mb-2 object-cover">
        <div class="resident-info flex flex-col space-y-1 text-white ml-4">
          <span class="text-center font-bold text-lg"> Name={{ resident.name }}</span>
          <p class="text-red-400">Status: {{ resident.status }}</p>
          <p class="text-green-400">Species: {{ resident.species }}</p>
          <p class="text-blue-400">Gender: {{ resident.gender }}</p>
        </div>
      </div>
    </li>
  </ul>
</div>
    <!-- 
 <ul class="flex flex-wrap">

      <li v-for="seri in result.character.episode"
              :key="seri.id">
            
              <div class="flex justify-center">
                <div class="text-sm w-[300px]">
                  Episode Name :
                  <span class="text-blue-400"> {{ seri.name }}<br /></span>
                   Episode :
                  <span class="text-blue-400">{{ seri.episode }}<br /></span>
                  Episode AirDate :
                  <span class="text-blue-400">{{ seri.air_date }}<br /></span>
                  Episode Created :
                 <span class="text-blue-400">{{ seri.created }}<br /></span>
                </div>
                 </div>
                 </li>
                </ul> -->
    
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
