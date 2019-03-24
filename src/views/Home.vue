<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <group>
      <cell title="title" value="value"></cell>
    </group>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Group, Cell } from 'vux'
export default {
  name: 'home',
  components: {
    HelloWorld,
    Group,
    Cell
  },
  created(){
  	console.log(this.$axios)
  	this.$axios.get('app').then(data=>{
  		console.log(data)
  	})
  }
}
</script>
