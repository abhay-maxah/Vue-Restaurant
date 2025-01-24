<template>
  <div class="cointaner">
   <router-link to="/">Home</router-link>
   <router-link to="/add">Add Restaurant</router-link>
   <a href="" @click.prevent="logout">Logout</a>
  </div>
</template>
<script>
export default {
  name:'Header',
  methods:{
  logout(){
    localStorage.clear()
    this.$router.push({name:'sign-up'})
  }
  }
}
</script>
<style>   
  a{
    text-decoration: none;
  
    padding: 10px;
    margin: auto 10px;
  }
</style>