<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'app',
  computed:{
    ...mapState(['userInfo'])
  }
}
</script>

<style scoped lang="stylus">

</style>
