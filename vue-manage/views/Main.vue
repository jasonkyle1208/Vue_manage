<template>
    <el-container style="height: 100%">
        <el-aside width="0px"></el-aside>
            <common-aside></common-aside>
        <el-container>
            <el-header>
                <common-header></common-header>
            </el-header>
            <common-tag />
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import CommonAside from '../src/components/CommonAside'
import CommonHeader from '../src/components/CommonHeader'
import CommonTag from '../src/components/CommonTag'

export default {
    name: 'home',
    components: {
    CommonAside,
    CommonHeader,
    CommonTag
},
    data () {
        return {}
    }
}
</script>
<style lang="less" scoped>
.el-header {
    background-color: rgb(10, 10, 10);
}
.el-main {
    padding-top: 0;
}
</style>