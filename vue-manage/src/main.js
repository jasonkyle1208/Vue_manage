import Vue from 'vue'
import App from './App.vue'
import {Button, Radio, Container, Main, Header, 
Aside, Menu, Submenu, MenuItem, MenuItemGroup, Dropdown,
DropdownMenu, DropdownItem, Row, Col, Card, Table, TableColumn,
Breadcrumb, BreadcrumbItem, Tag, FormItem, Form, Input, Select, Switch ,DatePicker,
Option,Dialog,Pagination, MessageBox, Message} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'

import router from '../router'
import store from '../store'
import http from 'axios'
import '../api/mock.js'

Vue.config.productionTip = false
var group = [Button, Radio, Container, Main, Header, 
Aside, Menu, Submenu, MenuItem, MenuItemGroup, Dropdown
,DropdownMenu, DropdownItem, Row, Col, Card, Table, TableColumn
,Breadcrumb, BreadcrumbItem, Tag, Form, FormItem, Input, Select, Switch ,DatePicker
,Option,Dialog,Pagination];
for(var i=0;i<group.length;i++){
  Vue.use(group[i]); 
}

Vue.prototype.$http = http;
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

router.beforeEach((to,from,next) => {
  store.commit('getToken')
  const token = store.state.user.token
  if(!token && to.name !== 'login' ){
    next({name:'login'})
  }else if (token && to.name === 'login') {
    next(({name:'home'}))
  }else{
    next()
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
  created() {
    store.commit('addMenu',router)
  }
}).$mount('#app')
