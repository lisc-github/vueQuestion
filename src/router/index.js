import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import Second from '../components/second.vue'
import Question from '../components/question.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/hello', component: Hello},
    {path: '/second', component: Second},
    {path: '/question', component: Question},
    {path: '/', redirect: '/hello'}
  ]
})
