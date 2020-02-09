<template>
  <div class="dangqian">
      <div class="head">
          <span>ele.me</span>
          <span>登录/注册</span>
      </div>
      
      <div class="middle">
           <span>当前定位城市:</span>
           <span>{{guess.name}}</span>
         
           <span>定位不准时，在城市列表选择</span>
     </div>

     <div class="place">
           <span>
               <router-link to="/beijing"> 北京</router-link>
            </span>
           <span>></span>
     </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Dangqian',
  data() { 
    return {
       guess:""
    }
  },
  props: {

  },
  components:{
  },
  created(){
     axios.get("http://elm.cangdu.org/v1/cities?type=guess").then((msg)=>{
        //  console.log(msg)
       this.guess=msg.data
     })
  },
  mounted() {

  },
  methods:{

  },
 }
</script>

<style>
.head{
    width:100%;
    height: 50px;
    background:lightskyblue;
    color: white;
}
.head span:nth-of-type(1){
    height:40px;
    font-weight:bold;
    font-size:18px;
    line-height:40px;
    display: block;
    float: left;
}
.head span:nth-of-type(2){
     height:40px;
    font-weight:bold;
    line-height: 40px;
    display: block;
    float: right;
}
.middle{
    width:100%;
    height: 50px;
    background:white;
    color: black;
    border: 1px solid gray;
    display: flex;
}
.middle span:nth-of-type(1){
    height:40px;
    font-weight:bold;
    line-height:40px;
    display: block;
}
.middle span:nth-of-type(2){
     height:40px;
    font-weight:bold;
    line-height: 40px;
    display: block;
    
}
.middle span:nth-of-type(3){
     height:40px;
    font-weight:bold;
    line-height: 40px;
    display: block;
    margin-left: 20px;
}
.place{
     border: 1px solid gray;
    width:100%;
    height: 50px;
    background:white;
    color: black;
    border-bottom:10px solid gainsboro;
}
.place span:nth-of-type(1){
    height:40px;
    font-weight:bold;
    line-height:40px;
    display: block;
    float: left;
    color:cornflowerblue;
     font-size:22px;
}
.place span:nth-of-type(2){
     height:40px;
    font-weight:bold;
    line-height: 40px;
    display: block;
    float: right;
}
</style>