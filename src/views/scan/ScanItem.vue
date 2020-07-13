<template>
 <div id='scan-item'>
     <div class='container clearfix' v-for='(item,index) in list' :key='(index)'>
         <div class='faceimg'><img :src='item.face_url'></div>
         <div class='right'>
             <div class='nickname'>{{item.username}}</div>
         <div class='content'><p>{{item.content}}</p></div>
         <div class='bottom'>
         <div class='time'>{{item.send_timestamp}}</div>
         <div class='like'>
             <div class='likeimg' v-if='item.total_likes==0' @click='addlike(index)'><img src='../../assets/newimg/like .png'></div>
             <div class='likeimg' v-else @click='addlike(index)'><img src='../../assets/newimg/like_active.png'></div>
             <div class='liketotal'>{{item.total_likes}}</div>
         </div>
         </div>
         </div>
     </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
    inject:["reload"],
    props:{
        list:{
            type:Array,
            default(){
                return []
            }
        }
    },
 data () {
 return {
     user_id:'',
     message_id:''
 }
 },
 methods: {
     addlike(index){
         this.user_id=this.list[index].user_id;
         this.message_id=this.list[index].id;
         console.log(this.user_id);
         console.log(this.message_id);
          let postData=this.$qs.stringify({
             user_id:this.user_id,
            message_id:this.message_id,
         });
         axios({
             url:'https://treeholed.applinzi.com/treehole/index.php/Home/Message/do_like',
             method:'post',
             data:postData,
         }).then(res=>{
             if(res.data.error_code==1){
                 alert('用户账号不足');
             }else if(res.data.error_code==2){
                 alert('指定的数据查询不存在');
             }else if(res.data.error_code==0){
                 alert('点赞成功哦~');
                this.reload();
             }
         })
     }
 },
 computed:{

 },
 components: {

 },
}
</script>
<style scoped>
.clearfix:after{
    content:'';
    clear:both;
    display:block;

}
.container{
  border-bottom: 1px solid #ccc;
    position:relative;
    padding-bottom:10px;
    padding-top:10px;
    margin-left:8px;
}
.faceimg img{
    width:65px;
    height:65px;
}
.faceimg{
    float:left;
}
.right{
    float:left;
    margin-left:20px;
}
.content{
      font-size: 14.5px;
  color: #101010;
  word-break: break-all;
  margin:10px 0;
}
.nickname{
      font-size: 17px;
  color: #3F51B5;
  font-family: PingFangSC-regular;
  font-weight: bold;
}
.time{
    float:left;
    font-size: 12.5px;
  color: #5E5D5D;
  font-family: PingFangSC-regular;
}
.like{
    float:right;
    position:absolute;
    right:5px;

}
.likeimg{
    float:left;
    margin-top:1px;
    margin-right:2px;
}
.likeimg img{
    width:18px;
    height:18px;
}
.liketotal{
    float:left;
    font-size:12.5px;
    line-height:22px;
    
}

</style>
