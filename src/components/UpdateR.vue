<template lang="">
  <div>
    <headers />
    <h1>Update Restaurant</h1>
    <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label">Name</label>
      <input
        type="text"
        v-model="name"
        class="form-control"
        id="formGroupExampleInput"
        placeholder="Full name"
      />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput1" class="form-label">Address</label>
      <input
        type="text"
        v-model="address"
        class="form-control"
        id="formGroupExampleInput1"
        placeholder="ADDRESS"
      />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">contact</label>
      <input
        type="text"
        v-model="contact"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="CONTACT NO"
      /><br />
      <button
        type="button"
        v-on:click="update()"
        class="btn btn-secondary pd-100">
        Update Restaurant
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import headers from './header.vue';
export default {
  name:"Update-page",
  data() {
    return {
      name: "",
      address: "",
      contact: "",
    };
  },
  async mounted(){
      //if user is sign up then goes to home Page
    let user = localStorage.getItem("User");
    if(!user){
      this.$router.push({name:'sign-up'})
      }
      let data = await axios.get(`http://localhost:3000/resto/${this.$route.params.id}`)
      this.name=data.data.name
      this.address=data.data.address
      this.contact=data.data.phone
    },
  components:{
    headers
  },
  methods:{
    async update(){
      let add = await axios.put(`http://localhost:3000/resto/${this.$route.params.id}`, {
        name: this.name,
        address: this.address,
        phone: this.contact
      })
      if (add.status == 200) {
        this.$router.push({ name: 'Home' })
      } else {
        alert("Failed to Update Data");
      }
    }
  }
}
</script>
<style>
h1{
  margin:50px;
}</style>