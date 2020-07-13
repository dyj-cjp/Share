<template>
<tab-bar>
  <tab-bar-item path='/scan'>
  <img slot='item-icon' src='../../assets/newimg/scan.png' alt=''>
  <img slot='item-icon-active' src='../../assets/newimg/scan_active.png' alt=''>
  <div slot='item-text'>动态</div>
  </tab-bar-item>

    <tab-bar-item path='/send' >
    <img slot='item-icon' src='../../assets/newimg/send.png' alt=''>
    <img slot='item-icon-active' src='../../assets/newimg/send_active.png' alt=''> 
    <div slot='item-text'>发表</div>
    </tab-bar-item>

    <tab-bar-item path='/profile' >
    <img slot='item-icon' src='../../assets/newimg/profile.png' alt=''>
    <img slot='item-icon-active' src='../../assets/newimg/profile_active.png' alt=''>
    <div slot='item-text'>我的</div>
    </tab-bar-item>
</tab-bar>

  
</template>

<script>

import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'

export default {
    data(){
        return {
            user_id:'',
        }
    },
    components:{
        TabBar,
        TabBarItem
    },
    methods:{
       
    }

}
</script>

<style scoped>

</style>