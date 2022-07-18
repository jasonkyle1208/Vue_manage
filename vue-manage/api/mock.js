import Mock from 'mockjs'
import homeApi from './mockServedata/home'
import useApi from './mockServedata/user'
import permissionApi from './mockServedata/permission'

Mock.mock('/home/getData',homeApi.getStatisticalData)
Mock.mock('/user/add', 'post', useApi.createUser)
Mock.mock('/user/edit', 'post', useApi.updateUser)

Mock.mock(/user\/getUser/, 'get', useApi.getUserList)
Mock.mock(/user\/del/, 'post', useApi.deleteUser)

Mock.mock(/permission\/getMenu/,'post',permissionApi.getMenu)