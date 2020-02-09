<template>
  <div class="beijing">
      <div class="head">
          <span>⬅</span>
           <h1>北京</h1>
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
  name: 'Beijing',
  data() { 
    return {

    }
  },
  props: {

  },
  components:{
     
  },
  mounted() {

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
/* h1{
    width:100%;
    height: 50px;
    color: white;
    text-align: center
} */
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