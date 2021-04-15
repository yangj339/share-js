<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <!-- <div>
    username: <input v-model="message1" placeholder="edit me">
    <br>
    password: <input v-model="message1" placeholder="edit me" type="password">
    <br>
    <button style="weight:1000px">登陆</button>
    <p>Message is: {{message1}}</p>
  </div> -->
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    this.haha('message1');
    document.body.style.backgroundColor="#afbeff";
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
</style>
