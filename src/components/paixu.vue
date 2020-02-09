<template>
  <div class="Paixu">
    <!-- <ul>
      <li v-for="(v,i) in list" :key="i">
        {{v}}
      </li>
    </ul>-->
    <h2>A(按顺序排列)</h2>
    <template v-if="arr" v-for="(v,i) in list">
      <p>{{v}}</p>

      <ul>
        <li v-for="(item1,index) in arr[v]" :key="index">{{item1.name}}</li>
      </ul>
    </template>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  data() {
    return {
      arr: null,
      list: "abcdefghijklmnopqistuvwxyz".toLocaleUpperCase().split("")
    };
  },
  props: {},
  components: {},
  created(){
    axios.get("http://elm.cangdu.org/v1/cities?type=group").then((msg) => {
      // console.log(msg)
      this.arr = msg.data
    });
  },
  mounted() {},
  methods: {}
};
</script>

<style>
ul {
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 2px solid gainsboro;
}
ul li {
  width: 24%;
  height: 40px;
  line-height: 50px;
  text-align: center;
  border: 1px solid gray;
}
</style>