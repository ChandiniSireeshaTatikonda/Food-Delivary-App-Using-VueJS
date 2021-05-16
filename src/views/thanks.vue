<template>
  <div>
      <div  class="header">
      <Header/>
      </div>
    <h1>Thank you for ordering</h1>
    <h2>Visit again....</h2>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
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
h1{
    color: $color;
    font-size: 80px;
    margin-top: 200px;
    margin-left: 330px;
}
h2{
    color: $color;
    font-size: 40px;
    // margin-top: 200px;
    margin-left: 600px;
}
</style>
