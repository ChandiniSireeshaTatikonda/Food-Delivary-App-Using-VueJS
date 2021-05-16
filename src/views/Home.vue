<template>
<div>
  <div class="header mb-16">
     <Header/>
  </div>
   <v-container class="d-flex row wrap"  max-width="400">
  <v-card
    class="mx-auto mt-16"
    v-for="(restaurent,index) in restaurents" :key="index"
    max-width="400"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="restaurent.img" alt="colorsImage"
    ></v-img>

    <!-- <v-card-title><v-btn>{{restaurent.name}}</v-btn></v-card-title> -->
    <v-dialog
        transition="dialog-bottom-transition"
        max-width="800"
        max-height="800"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-card-title>
          <v-btn
            v-bind="attrs"
            v-on="on"
          >{{restaurent.name}}</v-btn>
          </v-card-title>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              class="toolbar"
              dark
            ><h3>Items Available</h3>
              </v-toolbar>
            <v-card-text>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left ">
            Item Name
          </th>
          <th class="text-left">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,id) in restaurent.menuList" :key="id">
          <td>
            {{ item.name }}</td>
          <td>
            {{ item.price }}</td>
          <td>
            <div>
           <v-btn
            v-on:click="removeItems({index,id})"
          >-</v-btn>
          <!-- <span>{{ item.quantity }}</span> -->
          <v-btn>{{ item.quantity}}</v-btn>
            <v-btn
            v-on:click="addItems({index,id})"
          >+</v-btn>
            </div>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
            </v-card-text>
            <v-card-actions class="justify-end text-center">
              <v-btn
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="black--text ml-4">
          <b>{{restaurent.rating}}</b>
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
     {{restaurent.cuisine}}
      </div>
    </v-card-text>
  </v-card>
  </v-container>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  data() {
    return {
      targetId: 0,
      subract: 0,
      Addition: 0,
      remove: '',
      add: '',
    };
  },
  computed: {
    restaurents() {
      return this.$store.state.restaurents;
    },
  },
  methods: {
    addItems(obj) {
      this.$store.commit('addItems', obj);
      console.log(obj);
    },
    removeItems(obj) {
      this.$store.dispatch('removeItems', obj);
      console.log(obj);
    },
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
$color:  #f1f1f1;
$background: linear-gradient(to right, #1f1c18, #8e0e00);
.header{
  top:0;
}
.d-flex{
  margin-left: 150px;
}
.toolbar{
  background: $background;
}
</style>
