<template>
  <v-app>
    <v-main class="form">
      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Please Login</v-card-title>
        <v-form ref="form">
        <v-card-text>
          <v-text-field id="userName" label="Username" prepend-icon="mdi-account-circle"
          v-model="name" :counter="20"
  :rules="nameRules" required/>
          <v-text-field label="Email" prepend-icon="mdi-email"
          v-model="email" :rules="emailRules"
   required/>
          <v-text-field
          v-model="password"
          label="Password" id="password"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"/>
        </v-card-text>
          <h5 id="warning"></h5>
        <v-layout class="justify-center">
          <router-link to="/register" style="text-decoration: none" class="ml-4">
          <v-btn color="success" class="ml-4 mr-4 mb-4">Register</v-btn>
          </router-link>
          <v-btn color="info" class="mb-4" @click="logIn">Login</v-btn>
        </v-layout>
        </v-form>
      </v-card>
    </v-main>
      </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      showPassword: false,
      name: '',
      email: '',
      password: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  methods: {
    ...mapActions(['setUserDetailsAction']),
    ...mapGetters(['listOfUserDetails']),
    logIn() {
      if (this.name && this.email && this.password) {
        const userData = {
          name: this.name,
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('loginUser', userData)
      } else {
        alert('Please fill all the fields before login')
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form{
  margin-top: 130px;
}
</style>
