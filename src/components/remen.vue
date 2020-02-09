<template>
  <div class="">
      <h2>热门城市</h2>
   
       <ol>
           <li v-for="(item,index) in list" :key="index" @click="fn(index)">
            {{item.name}}               
           
           </li>
       </ol>
  </div>
</template>


<script>
import axios from "axios"

export default {
  name: '',
  data() { 
    return {
      list:[]
    }
  },
  props: {

  },
  components:{
  },
  created(){
    axios.get("http://elm.cangdu.org/v1/cities?type=hot").then((msg)=>{
       console.log(msg)
       this.list=msg.data
    })
  },
  mounted() {

  },
  methods:{
    fn(n){
       this.$router.push({path:"/gg",query:{q:this.list[n].name}})
    }
  },
 }
</script>

<style>
ol{
    overflow: hidden;
    width:100%;
    height:90px;
    display:flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
     border-bottom: 10px solid gainsboro;
}
ol li{
    width:20%;
    height:40px;
    line-height:50px;
    text-align: center;
    border: 1px solid gray;
}
</style>