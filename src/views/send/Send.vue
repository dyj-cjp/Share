<template>
 <div id='send'>
      <div :class='{wrap:iswrap}'>
          <img v-show='iswrap' src='../../assets/newimg/loginbgc.jpeg'>
     </div>
     <scroll class='content'>
     <nav-bar class='mm'><div slot='center'>想说就说</div></nav-bar>
 <div class='top clearfix'>
     <div class='back' @click='backscan'><img src='../../assets/newimg/left.png'></div>
     <div class='sendbutton' @click='commit'>发表</div>
</div>
     <div class='textarea'>
         <textarea placeholder='这一刻的想法...' v-model='content'></textarea>
     </div>
     <div class='bottom'>
         <div class='item'>
             <div class='left'>
             <img class="img1" src='../../assets/newimg/1.png'>
             </div>
             <div class='right'>
             <div class='text'>所在位置</div>
             <img class="img2" src='../../assets/newimg/right.png'>
             </div>
         </div>
        <div class='item'>
             <div class='left'>
             <img class="img1" src='../../assets/newimg/2.png'>
             </div>
             <div class='right'>
             <div class='text'>提醒谁看</div>
             <img class="img2" src='../../assets/newimg/right.png'>
             </div>
         </div>
         <div class='item'>
             <div class='left'>
             <img class="img1" src='../../assets/newimg/3.png'>
             </div>
             <div class='right'>
             <div class='text'>谁可以看</div>
             <img class="img2" src='../../assets/newimg/right.png'>
             </div>
         </div>
     </div>
     </scroll>
     <login class='login' :class='{loginsuccess:islogin}' @loginuserid='getloginid' @loginusername='getloginusername'></login>
     <sign class='sign' :class='{signsuccess:issign}' @senduserid='getuserid' @sendusername='getusername'></sign>
 </div>
</template>

<script>
import Scroll from "../../components/common/scroll/Scroll"
import NavBar from "../../components/common/navbar/NavBar"
import Login from '../login/Login'
import Sign from '../sign/Sign'
import axios from 'axios';
export default {
    name:'Send',
 data () {
 return {
     user_id:'',
     username:'',
     face_url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594113993419&di=f48c04d070e927ee211e45a67b611171&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3816071403%2C244674382%26fm%3D214%26gp%3D0.jpg',
     content:'',
     islogin:false,
    issign:true,
    iswrap:true,
 }
 },
 methods: {
     backscan(){
         this.$router.replace('/scan');
     },
     getloginusername(value){
         this.username=value;
     },
     getloginid(value){
         this.user_id=value;
            },
     getusername(value){
         this.username=value;
         console.log(this.username);
     },
     getuserid(value){
         this.user_id=value;
         console.log(this.user_id);

     },
     commit(){
         let postData=this.$qs.stringify({
             user_id:this.user_id,
             username:this.username,
             face_url:this.face_url,
             content:this.content
         });
         axios({
             url:'https://treeholed.applinzi.com/treehole/index.php/Home/Message/publish_new_message',
            method:'post',
            data:postData
         }).then(res=>{
             console.log(res);
             if(res.data.error_code==1){
                 alert(res.data.msg);
             }else if(res.data.error_code==0){

                     this.$router.replace('/scan');

             }
         })
     }
 },
 components: {
Login,
     Sign,
     NavBar,
     Scroll
 },
//  beforeDestory(){
//  this.$bus.$emit('sendid');
//  },
 created(){
     this.$bus.$emit('sendid');
      this.$bus.$on('loginsucess',()=>{
              setTimeout(() => {
                   this.iswrap=false;
              this.islogin=true;
              this.issign=true;
              },800);
          });
          this.$bus.$on('signsucess',()=>{
              setTimeout(() => {
                  this.islogin=true;
              this.iswrap=false;
              this.issign=true;
              }, 800);
          });
          this.$bus.$on('toregister',()=>{
             setTimeout(() => {
                  this.iswrap=true;
              this.islogin=true;
              this.issign=false;
             },800);
          });
          this.user_id=this.$store.state.userid;
          console.log(this.user_id);
         
       
 }
}
</script>

<style scoped>
.top{
    margin-top:10px;
}
img{
    width:22px;
    height:22px;
}
.back{
    float:left;
}
.sendbutton{
    float:right;
    width:60px;
    height:26px;
    background-color: green;
    color:white;
    margin-right:10px;
    line-height:26px;
    text-align:center;
    border-radius:5px;
}
.textarea textarea{
  width: 96%;
  height: 250px;
  margin-left: 2%;
  margin-right: 2%;
  margin-top:15px;
  margin-bottom:15px;
  padding-top: 20rpx;
  padding-bottom: 20rpx;
  font-size: 38rpx;
  border:none;
}
.clearfix:after{
    content:'';
    clear:both;
    display:block;
}
.item{
    display:flex;
    height:50px;
    line-height:50px;
    margin-bottom:5px;
}
.left{
    width:50px;
    position:relative;
    
}
.left .img1{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}
.right{
    flex:1;
    position:relative;
    border-bottom:1px solid #ccc;
    font-size:15px;
}
.text{
    float:left;
}
.img2{
    position:absolute;
    right:15px;
    top:50%;
    transform:translate(0,-50%);
}


.login{
        position:fixed;
        z-index:999;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .wrap{
        position:fixed;
        left:0;
        top:0;
        bottom:0;
        right:0;
        /* background-color:rgba(0,0,0,.45); */
        z-index:99;
    }
    .wrap img{
        height:100%;
        width:100%;
    }
    .loginsuccess{
        display:none;
    }
    .signsuccess{
        display:none;
    }
    .sign{
         position:fixed;
        z-index:999;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .mm{
         background-color: rgba(0,0,0,.7);
    color:white;
    line-height:44px;

    }
</style>
