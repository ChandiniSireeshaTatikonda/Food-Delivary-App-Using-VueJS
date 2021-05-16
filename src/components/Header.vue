<template>
    <div class="header">
       <h1 class="headertext">Biryani Hub</h1>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="icon">
          <router-link to="/myaccount" style="text-decoration: none" class="ml-4">
          <button><i class="fa fa-user-circle"></i></button>
          </router-link>
            <router-link to="/cart" style="text-decoration: none" class="ml-4 mr-4">
          <button><i class="fa fa-cart-plus"></i></button>
          </router-link>
          <button class="logout" @click="logOut">Logout</button>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Header',

  methods: {
    logOut () {
      this.$store.dispatch('logoutUser');
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:ital,wght@1,600&display=swap");
$base-color: #c6538c;
$border-dark: rgba($base-color, 0.88);
$box-shadow: 1px 1px 2px $border-dark;
// $background: linear-gradient(#cc2b5e,#753a88);
// $background: linear-gradient(to right, #92FE9D, #00C9FF);
// $background: linear-gradient(#000428,#004e92);
$background: linear-gradient(to right, #1f1c18, #8e0e00,);
$color:  #f1f1f1;

.header{
    background: $background;
    border-radius: 2px;
    box-shadow: $box-shadow;
    height: 80px;
    width:1550px;
    position: absolute;
}
.headertext{
    font-family: 'Poppins', sans-serif;
    color:$color;
    padding-top: 15px;
    margin-right: 10px;
}
.icon{
     position: absolute;
    float: right;
    top: 5px;
    right:40px;
    border-radius: 0.5px;
}
.icon .fa{
    right:10px;
  height: 45px;
  width: 45px;
    font-size: 25px;
  line-height: 45px;
   border-radius: 5px;
   margin-right: 5px;
  transition: 0.5s;
  text-align: center;
  cursor: pointer;
   background: $background;
    color:$color;
}
.logout{
background: $background;
border-radius: 3px;
padding: 9px;
margin:20px;
 font-size: 18px;
text-decoration: none;
color:$color;
font-family: 'Poppins', sans-serif;
}
</style>
