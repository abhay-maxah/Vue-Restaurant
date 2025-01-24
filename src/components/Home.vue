<template>
  <div>
    <headers />
    <h1>Hello {{ name }} welcome to Home Page</h1>
  </div>
  <table class="table table-dark  table-hover">
  <thead>
    <tr>
      <td>Name</td>
      <td>Address</td>
      <td>contact No.</td>
      <td>Action</td>
      <td>Action</td>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in restoList" :key="index">
      <td>{{item.name}}</td>
      <td>{{item.address}}</td>
      <td>{{item.phone}}</td>
      <td><router-link :to="'/update/'+item.id">Update</router-link></td>
      <td><input type="button"  class="btn btn-secondary btnn" @click="deleteResto(item.id)" value="Delete"/></td>
    </tr>
  </tbody>
</table>
</template>
<script>
import headers from "./header.vue";
import axios from "axios";
export default {
  name: "Home-page",
  data() {
    return {
      name: "Rahul",
      restoList: [],
    };
  },
   mounted() {
   this.loadData()
  },
  components: {
    headers,
  },
  methods:{
    async deleteResto(id){
      let restoList = await axios.delete("http://localhost:3000/resto/"+id);
      if(restoList.status==200){
        this.loadData()
      }
    },
    async loadData(){
          //if user is sign up then goes to home Page
      let user = localStorage.getItem("User");
    this.name = JSON.parse(user)[0].name;

    if (!user) {
      this.$router.push({ name: "sign-up" });
    }
    let restoList = await axios.get("http://localhost:3000/resto");
    this.restoList = restoList.data;
    }
  }
};
</script>
<style>
h1 {
  margin: 50px;
}

</style>
