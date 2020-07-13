<template>
 <div id='profile'>
     <nav-bar class='top'><div slot='center'>个人动态</div></nav-bar>
     <scroll class='content'>
     <profile-item :list='list' :username='username' :faceurl='faceurl'></profile-item>
     </scroll>
 </div>
</template>

<script>
import Scroll from "../../components/common/scroll/Scroll"
import NavBar from "../../components/common/navbar/NavBar"
import ProfileItem from './ProfileItem'
import axios from 'axios'
export default {
    name:'Profile',
 data () {
 return {
     list:[],
     user_id:'14',
     username:'',
     faceurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594113993419&di=f48c04d070e927ee211e45a67b611171&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3816071403%2C244674382%26fm%3D214%26gp%3D0.jpg',

 }
 },
 methods: {

 },
 components: {
ProfileItem,
NavBar,
Scroll
 },
 activated(){
     console.log("jjjj");
 },
 created(){
      this.$bus.$on('sendid',()=>{
          console.log('woshoudaola');
      });
      this.user_id=this.$store.state.userid;
      console.log(this.user_id);
     let postData=this.$qs.stringify({
             user_id:this.user_id,
         });
     axios({
         url:'https://treeholed.applinzi.com/treehole/index.php/Home/Message/get_one_user_all_messages',
         method:'post',
         data:postData,
     }).then(res=>{
         console.log(res);
         this.list=res.data.data;
         this.username=res.data.data[0].username;
         this.faceurl=res.data.data[0].face_url;
         console.log(this.username);
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
