<template>
    <div>
      <p v-if="error">Something went wrong...</p>
      <p v-if="loading">Loading....</p>
      <div v-else class="flex flex-wrap justify-center">
        <div v-for="location in result.locations.results" :key="location.id" class="w-40 mx-2 mb-4">
          <router-link :to="{ name: 'abot', params: { id: location.id } }">
            <div class="p-4 border border-gray-300 rounded shadow-md ">
              <h3 class="text-lg font-bold mb-2">{{ location.name }}</h3>
              <div class="flex flex-wrap justify-center">
                <div v-for="resident in location.residents" :key="resident.name" class="flex flex-col items-center mx-2 mb-2">
                  <span class="text-center font-semibold text-base">{{ resident.name }}</span>
                  <img :src="resident.image" alt="{{ resident.name }} Photo" class="h-24 w-24 mx-auto mt-2 object-cover rounded-full shadow">
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </template>

<script setup>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const { result, error, loading } =  useQuery(gql`
  query {
    locations{
    results {
      id
      name
      dimension
      residents {
        id
        name
        image
      }
    }
  }
}
`);
</script>