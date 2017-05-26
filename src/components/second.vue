<template>
    <div>
        <input type="text"
        v-model="message"
        v-bind:class="{active:Active,show:Show}"
        >
        <p>{{message}}</p>
        <button v-on:click="changeColor">change</button>
        <div>
            <a href="javascript:;" v-on:click="cgColor" v-bind:style="{color:Color}" v-for="item in items">{{item.city}}</a>
            <form id="loginForm">
                <input type="text" name="firstname" @input="inputHandler('message1')">
                <p>{{message1}}</p>
                <input type="password" name="password" @input="inputHandler('message2')">
                <p>{{message2}}</p>
                <input type="button" value="提交" v-on:click="clickHandler">
            </form>
        </div>
    </div>
</template>
<script>
    export default {
      name: 'second',
      data () {
        return {
          message: '11',
          message1: '',
          message2: '',
          Active: true,
          Show: false,
          items: [
              {city: '杭州'},
              {city: '上海'},
              {city: '广州'},
              {city: '北京'}
          ],
          Color: ''
        }
      },
      methods: {
        changeColor: function () {
          if (!this.Show) {
            this.Show = true
          } else {
            this.Show = false
          }
        },
        cgColor: function () {
          this.Color = 'red'
        },
        clickHandler: function () {
          let formData = this.getFormDataStr('loginForm')
          console.log(formData)
          var self = this
//          var data1 = {obj: 'what the hell'}
          window.fetch('/login', {
            method: 'post',
            body: formData,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            credentials: 'same-origin'
          })
          .then(function (response) {
            return response.json()
          })
          .then(function (result) {
            if (result.code === '0') {
              window.location.href = '/hello'
            } else if (result.code === '1') {
              self.message1 = '用户名不存在'
            } else if (result.code === '2') {
              self.message2 = '密码错误'
            }
          })
        },
        getFormDataStr: function (id) {
          let form = document.getElementById(id)
          let loginFormData = {}
          Array.prototype.forEach.call(form.elements, field => {
            if (field.name !== '') {
              loginFormData[field.name] = field.value
            }
          })
          let tmpArr = []
          Object.keys(loginFormData).forEach(key => {
            tmpArr.push(key + '=' + loginFormData[key])
          })
          return tmpArr.join('&')
        },
        inputHandler: function (msg) {
          if (msg === 'message1') {
            this.message1 = ''
          } else {
            this.message2 = ''
          }
        }
      }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    $color:blue;
    div{
        background:#eee;
        h1{
            color:$color;
        }
        .show{
            background:blue
        }
    }
</style>
