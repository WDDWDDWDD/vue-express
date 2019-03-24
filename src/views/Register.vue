<template>
  <div class="register">
    <group title="注册">
      <x-input title="用户名" placeholder="请输入姓名" v-model="formData.userName"></x-input>
      <x-input title="密码"  placeholder="请输入密码" v-model="formData.passWord"></x-input>
      <x-input title="确认密码" placeholder="请重复输入密码" v-model="formData.repassWord"></x-input>
    </group>
    <div style="padding:10px">
      <x-button type="primary" action-type="button" @click.native="submit">保存</x-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Group, XInput, XButton } from 'vux'
export default {
  name: 'home',
  data(){
    return {
      formData:{
        userName:'',
        passWord:'',
        repassWord:'',
      }
    }
  },
  components: {
    Group,
    XInput,
    XButton
  },
  methods:{
    submit(){
      this.$axios.post('app/login',this.formData).then(data=>{
        if(data.data.status === 1){
          this.$router.push({
            path:'/login'
          })
        }else if(data.data.status === -1){
          this.$router.push({
            path:'/login'
          })
        }
      })
    }
  },
  created(){
  	
  }
}
</script>
