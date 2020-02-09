<template>
  <div class="hello">
   <Dangqian></Dangqian>
   <Remen></Remen>
   <Paixu></Paixu>
  </div>
</template>

<script>
import Dangqian from "../components/dangqian"
import Remen from "../components/remen"
import Paixu from "../components/paixu"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Dangqian,
    Remen,
    Paixu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
