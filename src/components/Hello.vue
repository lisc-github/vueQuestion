<template>
  <div id="main">
    <div class="hello">
      <h1>we chat</h1>
    </div>
    <div class="chatBox">
      <div id="content"></div>
      <div class="ipt">
        <div id="ipt">
          <textarea v-model="message"></textarea>
        </div>
        <div id="btn">
          <input type="button" value="sub" @click="clickHandler">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        message: ''
      }
    },
    methods: {
      clickHandler: function () {
        var msg = this.message
        var postData = {obj: msg}
        window.fetch('/chat', {
          method: 'post',
          body: JSON.stringify(postData),
          headers: {
            'Content-type': 'application/json'
          },
          credentials: 'same-origin'
        })
        .then(function (response) {
          return response.json()
        })
        .then(function (result) {
          console.log(result)
        })
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
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
  .chatBox{
    width:600px;
    height:600px;
    position:relative;
    left:50%;
    margin-left:-300px;
    border:1px solid #aaa;
    #content{
      height:450px;
      background:#eee;
    }
    .ipt{
      height:150px;
      background:#eee;
      #ipt{
        height:110px;
        textarea{
          resize:none;
          outline:none;
          height:100%;
          width:100%;
          padding:0;
          border:none;
        }
      }
      #btn{
        background:#fff;
        height:40px;
        overflow:hidden;
        input{
          width:80px;
          height:24px;
          float:right;
          margin-right:20px;


        }
      }
    }
  }
</style>
