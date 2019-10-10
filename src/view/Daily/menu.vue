<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1"><template slot="title"><i class="el-icon-message"></i>首页</template></el-menu-item>
        <!-- <el-submenu index="2">
            <template slot="title">选课</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu> -->
        <el-menu-item index="2"><template slot="title"><i class="el-icon-menu"></i>选课</template></el-menu-item>
        <el-menu-item index="3"><template slot="title"><i class="el-icon-s-platform"></i>查看已选课程</template></el-menu-item>
        <el-menu-item index="4"><template slot="title"><i class="el-icon-setting"></i>查看成绩</template></el-menu-item>
        <el-menu-item index="5"><template slot="title"><i class="el-icon-setting"></i>修改个人信息</template></el-menu-item>
    </el-menu>
</template>

<script>
export default {
    data() {
        return{
          activeIndex: '1'
        }
    },
    mounted() {

    },
    methods:{
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
.el-menu-demo{
    padding-left: 50px;
}
.el-menu-demo .el-menu-item{
    margin-left: 30px;
}
</style>