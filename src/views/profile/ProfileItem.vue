<template>
 <div id='profile-item'>
<div class='head'>
         <div class='faceimg'><img :src='faceurl'></div>
         <div class='username'>{{username}}</div>
     </div>
     <div class='item' v-for='(item,index) in list' :key='index'>
     <div class='content'>
         <div class='text'>{{item.content}}</div>
         <div class='time'>{{item.send_timestamp}}</div>
     </div>
     <div class='bottom'>
         <div class='left'>
             <div class='img1'><img src='../../assets/newimg/like .png'></div>
             <div class='like'>{{item.total_likes}}</div>
         </div>
         <div class='remove' @click='deleted(index)'>删除
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
        },
        username:{
            type:String,
            default(){
                return ''
            }
        },
        faceurl:{
            type:String,
            default(){
                return ''
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
     deleted(index){
         this.user_id=this.list[index].user_id;
         this.message_id=this.list[index].id;
         console.log(this.user_id);
         console.log(this.message_id);
          let postData=this.$qs.stringify({
             user_id:this.user_id,
            message_id:this.message_id,
         });
         axios({
             url:'https://treeholed.applinzi.com/treehole/index.php/Home/Message/delete_message',
             method:'post',
             data:postData,
         }).then(res=>{
             if(res.data.error_code==1){
                 alert('用户不存在');
             }else if(res.data.error_code==2){
                 alert('指定的数据查询不存在');
             }else if(res.data.error_code==0){
                 alert('删除成功哦~');
                this.reload();
             }
         })
     }
 },
 components: {

 },
 created(){
    //  console.log(this.$store.state.username);
    //  this.username=this.$store.state.username;
    //  console.log(this.username);
 }
}
</script>

<style scoped>
.head{
    text-align:center;
    margin:5px 8px;
    border-bottom:3px solid #ddd;
}
.faceimg img{
    width:65px;
    height:65px;
    border:2px solid #efefef;
    padding:3px;
}
.faceimg{
    text-align:center;
    margin-top:20px;
    margin-bottom:10px;
}
.username{
      font-size: 17px;
  color: #3F51B5;
  font-family: PingFangSC-regular;
  font-weight: bold;
  margin-bottom:10px;
}
.img1 img{
    width:18px;
    height:18px;
}
.text{
    margin-bottom:10px;
    margin-top:15px;
     font-size: 14.5px;
  color: #101010;
  word-break: break-all;
}
.time{
     font-size: 12.5px;
  color: #5E5D5D;
  font-family: PingFangSC-regular;
  margin-bottom:5px;
}
.content{
    border-bottom:1px solid #ccc;
    margin-bottom:5px;
}
.bottom{
    display:flex;
}
.remove{
    width:70px;
    height:25px;
    color:white;
    background-color: red;
    text-align:center;
    font-size:14px;
    line-height:25px;
    border-radius:5px;
}
.left{
    flex:1;
    line-height:25px;
}
.left .img1{
    float:left;
    margin-top:3.5px;
    margin-left:5px;
    margin-right:5px;
}
.left .like{
    float:left;
}
.item{
    padding-bottom:5px;

    margin:5px 8px;
}
</style>
