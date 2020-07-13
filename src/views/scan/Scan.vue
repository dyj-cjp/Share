<template>
 <div id='scan'>
     <nav-bar class='top' ><div  slot='center'>椰菜动态</div></nav-bar>
     <scroll class='content'>
     <scan-item :list='scanlist'></scan-item>
     </scroll>
 </div>
</template>

<script>
import Scroll from "../../components/common/scroll/Scroll"
import ScanItem from "./ScanItem"
import {getScan} from "../../network/scan"
import NavBar from "../../components/common/navbar/NavBar"
export default {
    name:'Scan',
 data () {
 return {
    scanlist:[],

 }
 },
 methods: {

 },
 components: {
     ScanItem,
    NavBar,
    Scroll
 },
 created(){
     getScan().then(res=>{
         console.log(res);
         this.scanlist=res.data;
         console.log(this.scanlist);
     })

    
        
         
       }
}
</script>

<style scoped>
.top{
    background-color: rgba(0,0,0,.7);
    color:white;
    line-height:44px;
}
  .content{
        position:absolute;
        left:0;
        right:0;
        bottom:49px;
        top:44px;
        overflow:hidden;
        /* height:calc(100%-93); */
    }
</style>
