<template>
  <div class="about">
  <Header/>
  <v-container class="d-flex row wrap">
  <v-card
    class="mx-auto mb-10"
    max-width="600"
 v-for="(cartItem,index) in cartItems" :key="index"
  >
    <v-card-text class="display-1 text--primary">
       <v-card-title class="resName display-1">{{cartItem.name}}</v-card-title>
       <div v-for="(itemDetails,id) in cartItem.selectedfoodItems" :key="id">
      <v-card-title>Item Name: {{itemDetails.name}}</v-card-title>
      <v-card-title>Price: {{itemDetails.price}}/-</v-card-title>
      <v-card-title> Quantity: {{itemDetails.quantity}}</v-card-title>
       </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        class="red darken-1 mb-4"
      >
        Remove
      </v-btn>
    </v-card-actions>
  </v-card>
      <v-card
    class="mx-auto"
    max-width="600"
    outlined
  >
    <v-card-text class="display-1 text--primary">
        <v-card-title class="bill display-1">
         Bill
        </v-card-title>
        <v-card-title>GST: {{this.gst}}/</v-card-title>
        <v-card-title>Delivarry Charges: {{this.delivaryCharges}}/-</v-card-title>
        <v-card-title>Discount: {{this.discount*100}}%</v-card-title>
         <v-card-title>Total Price: {{totalPrice}}</v-card-title>
          <v-card-title>Final Price: {{bill}}</v-card-title>
    </v-card-text>

    <v-card-actions>
       <router-link to='/thanks' style="text-decoration: none">
      <v-btn
        outlined
        rounded
        text
        class="green darken-1 mb-4"
      >
        Order Now
      </v-btn>
       </router-link>
    </v-card-actions>
  </v-card>
  </v-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  computed: {
    restaurents() {
      return this.$store.state.restaurents;
    },
    cartItems() {
      const filteredCartItems = this.restaurents.filter(
        (item) => item.menuList.some((subItem) => subItem.quantity > 0),
      );
      const finalCartItems = filteredCartItems.map(
        (item) => (
          {
            name: item.name,
            selectedfoodItems: item.menuList.filter((menu) => menu.quantity > 0),
          }
        ),
      );
      return finalCartItems;
    },
    totalPrice() {
      const price = this.cartItems.reduce(
        (currentVal, next) => currentVal + next.selectedfoodItems.reduce(
          (subTotalValue, subNext) => subTotalValue + (subNext.price * subNext.quantity), 0,
        ),
        0,
      );
      console.log(price);
      return price;
    },
    discount() {
      return this.$store.state.discount;
    },
    gst() {
      return this.$store.state.gst;
    },
    delivaryCharges() {
      return this.$store.state.delivaryCharges;
    },
    finalAmount() {
      return this.$store.state.finalAmount;
    },
    bill() {
      const discountedAmount = this.totalPrice - this.totalPrice * this.discount;
      const finalBill = discountedAmount + this.gst + this.delivaryCharges;
      return finalBill;
    },
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
$color: #8e0e00;
$background: linear-gradient(to right, #1f1c18, #8e0e00);
.header{
  top:0;
}
.d-flex{
  margin-top: 100px;
  margin-left: 180px;
}
.resName{
  color: $color;
}
.bill{
  color: $color;
}
</style>
