<template>
  <div id="app">
    <Sign :lineWidth=4 :strokeColor="'green'" :showBtn="true" @complete="showData" />
    <img :src="url" alt="">
  </div>
</template>

<script>
// import Sign from '@/components/Sign'
import Sign from '../dist/entry.js'
import Vue from 'vue'
console.log('Sign', Sign)
Vue.component(Sign.name, Sign)
export default {
  name: 'App',
  components: {
    Sign
  },
  data () {
    return {
      url: ''
    }
  },
  methods: {
    showData (data) {
      console.log('showData', data)
      this.url = data
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
