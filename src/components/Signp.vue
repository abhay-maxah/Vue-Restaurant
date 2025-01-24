<template lang="">
  <div class="cointaner">
    <img
      alt="Vue logo"
      class="logo"
      src="../assets/logo.svg"
      width="125"
      height="125"
    />
    <h1>Sign Up</h1>
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
      <label for="formGroupExampleInput1" class="form-label">Email</label>
      <input
        type="text"
        v-model="email"
        class="form-control"
        id="formGroupExampleInput1"
        placeholder="Email"
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
      /><br />
      <button type="button" v-on:click="Signup()" class="btn btn-secondary">
        Sign up
      </button>
      <button type="button" class="btn btn-secondary btnn">
        <router-link to="/login">Login</router-link>
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Sign",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async Signup() {
      let user = await axios.post("http://localhost:3000/user", {
        email: this.email,
        password: this.password,
        name: this.name,
      });
      if (user.status == 201 && user.data.email != '' && user.data.password != '' && user.data.name != '') {
        console.log("User Created")
        localStorage.setItem("User", JSON.stringify(user.data))
        //change a route from sign-up to Home
        this.$router.push({ name: 'Home' })
      } else if (this.email == '' || this.password == '') {
        alert("Enter Email or Password");
      } else {
        alert("Invalid Email or Password");
      }
    },
    mounted() {
      //if user is sign up then goes to home Page
      let user = localStorage.getItem("User");
      if (user) {
        this.$router.push({ name: 'Home' })
      }
    }
  }
  }
</script>
<style>
.logo {
  display: block;
  margin: 0 auto 2rem;
  width: 100px;
  height: auto;
}

.btnn {
  color: white;
  margin-left: 60px;
}
</style>
