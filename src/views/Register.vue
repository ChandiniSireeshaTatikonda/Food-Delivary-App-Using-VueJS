<template>
  <v-app>
    <v-main class="form">
      <v-card width="500" class="mx-auto mt-16">
        <v-card-title class="mt-10">Enter your details here...</v-card-title>
        <v-form ref="form">
        <v-card-text>
          <v-text-field id="userName" label="Username" prepend-icon="mdi-account-circle"
          v-model="name" :counter="20"
  :rules="nameRules" required/>
          <v-text-field id="email" label="Email" prepend-icon="mdi-email"
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
         <v-layout class="justify-center">
          <v-btn color="success" class="mb-4" @click="registerNewUser">Create account</v-btn>
         </v-layout>
        </v-form>
      </v-card>
    </v-main>
      </v-app>
</template>

<script>
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
    registerNewUser () {
      if (this.name && this.email && this.password) {
        const userData = {
          name: this.name,
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('createUser', userData)
      } else {
        alert('Please fill all the fields')
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.form{
  margin-top: 130px;
}
</style>
