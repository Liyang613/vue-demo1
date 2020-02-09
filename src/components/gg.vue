
<template>
  <div class="Gg">
      <div class="head">
          <span>⬅</span>
           <h1>{{str}}</h1>
            <span>
                切换城市     
            </span>
      </div>
         
      <div class="middle">
           <input type="text" placeholder="输入学校，商场等">
           <button>提交</button>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Gg',
  data() { 
    return {
   str:""
    }
  },
  props: {

  },
  components:{
     
  },
  mounted() {
   this.str=this.$route.query.q
  },
  methods:{

  },
 }
</script>

<style>
.head{
    width: 100%;
    height:50px;
    line-height:50px;
    display:flex;
    align-items: center;
    justify-content: space-around;
     background:lightskyblue;
}
.middle input{
    width:100%;
    height: 50px;
    border: 1px solid black;
    color: black;
    text-align: center
}
button{
    width:100%;
    height:30px;
    background: blueviolet;
}
</style>