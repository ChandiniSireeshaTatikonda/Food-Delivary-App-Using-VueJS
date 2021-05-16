<template>
  <v-app>
    <v-main>
      <!-- <Header/> -->
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
// import Header from '@/components/Header.vue';

export default {
  name: 'App',

  created () {
    this.$store.commit('getLocalStoreItems')
  },

  mounted () {
    if (!this.loggedInUserDetails) {
      this.$router.push('/')
    }
  },

  computed: {
    loggedInUserDetails () {
      return this.$store.state['loggedInUserDetails']
    }
  },
};
</script>
