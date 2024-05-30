<script>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const CHARACTERS_QUERY = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
    locations {
      results {
        id
        name
        dimension
      }
    }
    episodes {
      results {
        id
        name
        
        
      }
    }
  }
`

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  name: 'App',
  setup() {
    const { result, loading, error } = useQuery(CHARACTERS_QUERY)
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      result,
      loading,
      error,
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y]
    }
  }
}
</script>
<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-ezFj/2T8qZPHI6JpKV0J+JpY6K9LhXQ5DfDkS0DqRzR5p8KUqfVv3PcOzR5E+RHy" crossorigin="anonymous">
  <div class= " bg-gray-900 text-white ">
    <div>
      <div class="flex">
        <img
          src="@/assets/img/jj.jpeg"
          class="w-88 h-64"
          alt=""
        />
        <img
          src="https://th.bing.com/th/id/OIP.DxvQHXhEt1b_jkY3pz-N6QHaD5?w=334&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          class="w-88 h-64"
          alt=""
        />
        <img
          src="https://th.bing.com/th/id/OIP.LDstvMcgUYA5P7dBuXfPwAHaEC?w=325&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          class="w-79 h-64"
          alt=""
        />
      </div>
      <div class="container mx-auto mt-8 px-4 md:px-0">
        <h1 class="text-3xl font-bold mb-4 text-pink-500">Rick and Morty</h1>

        <p class="text-gray-400">
          Rick and Morty is an American adult animated science fiction sitcom created by Justin
          Roiland and Dan Harmon for Cartoon Network's nighttime Adult Swim programming block. The
          series follows the misadventures of cynical mad scientist Rick Sanchez and his
          good-hearted but fretful grandson Morty Smith, who split their time between domestic life
          and interdimensional adventure.
        </p>
      </div>
    </div>
    <div class="mt-4">
                <h2 class="text-xl font-bold mb-2 ml-4 bg-green-900">Rating</h2> 
                <p class=" text-orange-400 ml-4">9.2/10</p>
                <div class="container mx-auto mt-8 px-4 md:px-0"></div>
    <div class="container mx-auto mt-8 px-4 md:px-0 mr-">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="md:col-span-1">
          <h2 class="text-xl font-bold mb-2 ml-36">Genre</h2>
          <p class="text-gray-400 ml-36">Animated, Sci-Fi, Comedy</p>
          <div class="md:col-span-1">
            <h2 class="text-xl font-bold mb-2 ml-36 ">Creators</h2>
            <p class="text-gray-400 ml-36">Justin Roiland and Dan Harmon</p>
              <div>
            <div class="md:col-span-2 ">
              <h2 class="text-xl font-bold mb-2 ml-36 ">Stars</h2>
              <p class="text-gray-400  flex flex-wrap gap-3  ">
                Justin Roiland, Chris Parnell, Spencer Grammer, Sarah Chalke
                <img
          src="@/assets/img/th (4).jpeg"
          class="w-44 h-40 rounded-full"
          alt=""
        />
        <img
          src="@/assets/img/th (1).jpeg"
          class="w-32 h-32 rounded-full"
          alt=""
        />
        <img
          src="@/assets/img/hio.jpeg"
          class="w-32 h-32 rounded-full"
          alt=""
        />
        <img
          src="@/assets/img/th.jpeg"
          class="w-32 h-32 rounded-full"
          alt=""/>
              </p>
            </div> <br>
            
                  <h2 class="text-2xl font-bold mb-4 ml-8 text-yellow-300">Episodes of the Show</h2>
                  
                    
                    
                  
                  </div>
            <div>
    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading....</p>
    <div v-else class="flex flex-wrap justify-center">
      <div v-for="episode in result.episodes.results" :key="episode.id" class="w-40 mx-2 mb-4">
        <router-link :to="{ name: 'about', params: { id: episode.id } }">
          <div class="p-4 border border-gray-300 rounded">
            <p>{{ episode.name }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
                </div>
                <div class="container mx-auto mt-8 px-4 md:px-0">
                  <h2 class="flex-wrap text-2xl font-bold mb-4 justify-center text-yellow-400">Characters of the show</h2>
                  <ul>
                    
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    

    <div class="flex">
      <p v-if="error">Something went wrong...</p>
      <p v-if="loading">Loading...</p>
      
      <swiper
        :modules="modules"
        :slides-per-view="8"
        :space-between="20"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="mySwiper"
      >
        <swiper-slide v-for="character in result.characters.results" :key="character.id" style="border-width: 2px;">
          <router-link :to="{name: 'abut' ,params: {id: character.id}}">
          <div>
            <img :src="character.image" alt="" style="width:500px; height: 200px;" />
          <p>{{ character.name }}</p>
        </div>
          ></router-link></swiper-slide
        >
        ...
      </swiper>
    
    </div>

    <div class="container mx-auto mt-8 px-4 md:px-0 ">
      <h1 class="text-2xl font-bold mb-4 text-yellow-500 text-center border-full bg-black">Locations</h1>
      
        
    <div>
      
      <p v-if="error">Something went wrong...</p>
      <p v-if="loading">Loading....</p>
      <ul v-else></ul>
      <ul>
      <button class="flex-col border-r-5 border-white mx-9 mt-7 mb-3 bg-green-600 text-black " v-for="location in result.locations.results" :key="location.id">
        <router-link :to="{name: 'abot' , params: {id: location.id}}">
          <li><p >{{  location.name }}</p></li>
          <p> {{  location.dimension }}</p>
        
      </router-link></button>
    </ul>
    </div>
    </div>
    <footer class="bg-black text-gray-300 py-6">
      <div class="container mx-auto flex flex-wrap justify-between">
        <div class="w-full md:w-auto mb-4 md:mb-0">
          <h3 class="text-lg font-bold text-green-500">About Us</h3>
          <p>
            Welcome to YodaMovies,your ultimate destination for all kind of movies! We're passionate
            about bringing you the latest films from around the world.Explore our extensive
            collection, discover hidden gems,read reviews, and stay up-to-date with the latest
            releases. Join our community of movie lovers and let the magic of cinema unfold. bbb<br />
            May the force of great storytelling be with you!
          </p>
        </div>
        <div class="w-full md:w-auto mb-4 md:mb-0">
          <h3 class="text-lg font-bold text-violet-800">Quick Links</h3>
          <ul class="mt-2 text-blue-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">TV Shows</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="w-full md:w-auto">
          <h3 class="text-lg font-bold text-red-600">Follow Us</h3>
          <div class="flex mt-2 text-orange-400">
            <a href="https://github.com/yodalin" class="mr-2"><i class="fab fa-facebook-f"></i>github </a> <br>
          
            <a href="https://www.figma.com/design/sBOr2NhfTNjDQeRbUYl0KD/Text-to-Design---AI-Assistant-(Community)?node-id=0-1&t=kuBQhmtmpypGQCY8-0">Visit The figma!</a>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-700" />
      <p class="text-center text-sm">© 2024 YodaMovieSite.All rights reserved.</p>
    </footer>
  
</template>
