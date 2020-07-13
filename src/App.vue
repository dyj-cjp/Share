<template>
  <div id="app">
    <keep-alive include='Send'>
    <router-view v-if='isRouterAlive'></router-view>
    </keep-alive>
    <main-tabar v-show='istabarshow'></main-tabar>
    <!-- <login v-show='isloginshow'></login> -->
  </div>
</template>

<script>
import MainTabar from "./content/mainTabar/MainTabar"
export default {
  name:'App',
  provide(){
    return{
      reload:this.reload
    }
  },
  components:{
    MainTabar
  },
  data(){
    return {
      istabarshow:true,
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(function(){
        this.isRouterAlive=true;
      })
    }
  }
}
</script>

<style>
 @import './assets/css/base.css';
</style>
