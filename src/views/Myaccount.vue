<template>
  <div class="about">
    <div class="header">
  <Header/>

    </div>
    <v-main class="form">
        <div class="greeting">
          <h1>Hello {{ loggedInUserDetails && loggedInUserDetails.name }}! You can update your details Here..!</h1>
          <!-- <h3>{{ loggedInUserDetails && loggedInUserDetails.email }}</h3> -->
        </div>
      <v-card width="500" class="mx-auto mt-9">
        <v-form ref="form">
        <v-card-text>
          <v-text-field id="userName" :label="this.userDetails.name"
          prepend-icon="mdi-account-circle"
          v-model="userDetails.name" :counter="20"/>
          <v-text-field prepend-icon="mdi-email" disabled
          v-model="userDetails.email" :label="this.userDetails.mail"/>
           <v-text-field
           v-model="userDetails.password"
          id="password"   :label="this.userDetails.passwords"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"/>
      <v-btn
      color="success"
      class="mr-4"
      @click="updateUserDetails"
    >
      Change Credentials
    </v-btn>
        </v-card-text>
        </v-form>
      </v-card>
    </v-main>
    </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex';
import Header from '@/components/Header.vue';

export default {
  name: 'myAccount',

  mounted () {
    console.log('mounted', this.$store.state.loggedInUserDetails)
    this.userDetails = {...this.$store.state['loggedInUserDetails']}
  },

  data: () => ({
    showPassword: false,
    userDetails: {},
  }),
  computed: {
    loggedInUserDetails () {
      return this.$store.state['loggedInUserDetails']
    }
  },
  methods: {
    updateUserDetails () {
      console.log('userDetails', this.userDetails)
      this.$store.dispatch('updateUserDetails', this.userDetails)
    },
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
$color: #8e0e00;
.header{
  top:0;
}
.form{
  margin-top: 130px;
}
.greeting{
    color: $color;
    margin-left: 390px;
}
</style>
