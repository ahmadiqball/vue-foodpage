<template>
  <div>
 
    <HeaderComp></HeaderComp>
    
    <router-view v-bind:foodDatas="ctgrData"/>
  </div>
</template>

<script>
import HeaderComp from './components/header/HeaderComp.vue'


export default {
  name: 'App',
  components: {
    HeaderComp
  },
  data() {
    return {
      ctgrData: []
    }
  },
  mounted() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(data => this.ctgrData = data)
      .then(data => console.log(data))
      .catch(err => console.log(err.message))
  }

  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
