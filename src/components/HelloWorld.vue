<template>

<el-row :gutter="20">
  <div class="background">
    <img src="@/assets/juan.jpg" height="750px" width="1700px"/>
</div>
  <el-col :span="5" :offset="18">
    <div class="front">
    <!-- <h1>{{ msg }}</h1> -->
    用户名：<el-input v-model="userInput" placeholder="输入用户名" clearable="" size="small" style="weight:100px"></el-input>
    <br>
    密码：  <el-input v-model="passInput" type="password" placeholder="输入密码" clearable="" size="small"></el-input>
  </div>
  
  </el-col>
  
</el-row>
  
  
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
      return {
        userInput: '',
        passInput: ''
      }
    },
  mounted(){
    this.haha('message1');
    // document.body.style.backgroundColor="#afbeff";
  },
  methods:{
    haha(msg){
      axios.get('/api/index',{
        params:{
          test:msg
        }
      });
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
.el-col {
    margin-top: 100px;
  }

.background{
    width:80%;  
    height:50%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
}
.front{
    z-index:1;
    position: absolute;
}
</style>
