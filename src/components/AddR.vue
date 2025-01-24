<template lang="">
  <div>
    <headers />
    <h1>Add Restaurant</h1>
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
        v-on:click="add()"
        class="btn btn-secondary pd-100">
        Add New Restaurant
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import headers from "./header.vue";
export default {
  name: "Add-page",
  data() {
    return {
      name: "",
      address: "",
      contact: "",
    };
  },
  mounted() {
    //if user is sign up then goes to home Page
    let user = localStorage.getItem("User");
    if (!user) {
      this.$router.push({ name: "sign-up" });
    }
  },
  components: {
    headers,
  },
  methods: {
    async add() {
      let add = await axios.post('http://localhost:3000/resto', {
        name: this.name,
        address: this.address,
        phone: this.contact
      })
      if (add.status == 201 || add.data.length > 0) {
        this.$router.push({ name: 'Home' })
      } else {
        alert("Failed to Add Data");
      }
    }
  },
};
</script>
<style>
h1 {
  margin: 50px;
}
</style>
