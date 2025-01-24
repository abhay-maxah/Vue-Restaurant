<template lang="">
  <div>
    <img
      alt="Vue logo"
      class="logo"
      src="../assets/logo.svg"
      width="125"
      height="125"
    />
    <h1>Login</h1>
    <div class="mb-3">
      <label for="formGroupExampleInput1" class="form-label">Email</label>
      <input
        type="text"
        v-model="email"
        class="form-control"
        id="formGroupExampleInput1"
        placeholder="Email"
        required
      />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">Password</label>
      <input
        type="password"
        v-model="password"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="Password"
        required
      /><br />
      <button type="button" v-on:click="login()" class="btn btn-secondary">
        login
      </button>
      <button type="button" class="btn btn-secondary btnn">
        <router-link to="/sign-up">Signup</router-link>
      </button>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let user = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
      console.log(this.email,this.password)
      console.log(user)
      if (user.status==200 && user.data.length==1) {
        localStorage.setItem("User",JSON.stringify(user.data))
        this.$router.push({ name: "Home" });
      } else if(this.email=='' || this.password == '') {
        alert("Enter Email or Password");
      }else {
        alert("Invalid Email or Password");
      }
    },
  },
  mounted(){
    let result = localStorage.getItem('User')
    if(result){
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
<style lang=""></style>
