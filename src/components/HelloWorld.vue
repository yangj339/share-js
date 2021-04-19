<template>

<el-row :gutter="20">
  <div class="background">
    <img src="@/assets/juan.jpg" height="780px" width="1700px"/>
</div>
  <el-col :span="5" :offset="18">
    <div class="login_box">
      <el-form  ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login-form">
                <!-- 用户名 -->
                <!-- 校验 -->
                <span style="font-weight:bold;margin-bottom:50px">密码登录</span>
                <el-form-item prop="username">
                    <!-- 进行双向数据绑定 将登录名和登录密码 绑定到loginForm上 -->
                    <el-input  v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    
                <el-button type="primary" @click="login" style="width:164px">登录</el-button>
                <!--重置表单 获取到表单元素 使用 resetFields方法重置表单内容-->
                <el-button type="info" @click="resetLoginForm" style="width:164px">重置</el-button>
                </el-form-item>
            </el-form>  
    </div>
    <div class="front">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <span style="font-weight:bold;">密码登录</span> 
    <el-input prefix-icon="el-icon-user-solid" v-model="userInput" placeholder="输入用户名" clearable="" size="small" style="weight:100px"></el-input>
    <br>
    <br>
    <el-input prefix-icon="el-icon-lock" v-model="passInput" type="password" placeholder="输入密码" clearable="" size="small"></el-input> -->
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
        //表单数据绑定
        loginForm:{
          username:'admin',
          password:'123456',
        },
        //表单验证规则
        loginFormRules:{
                      username:[
                          { required: true, message: '请输入登录名称', trigger: 'blur' },
                          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                      ],
                      password:[
                          { required: true, message: '请输入登录密码', trigger: 'blur' },
                  { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                      ]

                  }	    
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
.login_box {
  
  
  /* background-color: #2e527bb3; */
  border-radius: 5px;
 
  /* position: absolute; */
  /* left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
}
</style>
