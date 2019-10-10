<!--  -->
<template>
  <div>
      <div class="nav">
<!--动态菜单-->
        <template>
          <el-menu  class="nav" mode="horizontal" background-color="#545c64" active-text-color="#fff" text-color="#fff" >

          <el-submenu style="border-bottom-color:transparent" :index="index+''" v-for="(obj,index) in parentMenus" :key="index">
            <template slot="title">{{obj.menu.menuName}}</template>
            <div  v-for="(obj1,index1) in obj.childMenus" :key="index1">
            <router-link :to="obj1.menu.url"><el-menu-item>{{obj1.menu.menuName}}</el-menu-item></router-link>
            </div>
            <!-- <div  v-for="(obj2,index2) in obj1.childMenus" :key="index2">
            <router-link :to="obj2.menu.url"><el-menu-item>{{obj2.menu.menuName}}</el-menu-item></router-link>
            </div>
            <div  v-for="(obj3,index3) in obj2.childMenus" :key="index3">
            <router-link :to="obj3.menu.url"><el-menu-item>{{obj3.menu.menuName}}</el-menu-item></router-link>
            </div> -->
          </el-submenu>

          <el-button round size="medium" class="exit" @click="logout()">退出登陆</el-button>
        </el-menu>
        </template>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
      <div class="footer-container">
        <div class="copyright">
          web程序开发第四组
          <!-- <svg-icon icon-class="copyright"/> -->
          2019 <span>***出品</span>
        </div>
      </div>
  </div>
  
</template>

<script>
import {
  userShowMenu,
  logoutUser
  }
from '@/api/homepage/homepage'
export default {
    name:'homepage',
  data () {
    return {
      parentMenus:[],
    };
  },
  components: {
  },
  mounted: function() {
    }, 
  methods: {
    logout(){
      logoutUser().then(res => {
        if(res.code == 200){
          this.$message({
            message:'退出登陆',
            type:'success'
            });
            this.$router.push({path:'/'});
        }
      })
    },
    // load() {
    //   userShowMenu()
    //         axios({
    //         method:"post",
    //         url:"api/Sys/profile",
    //         headers:{
    //             'Content-type': 'application/json;charset=UTF-8',
    //             'Authorization':this.$store.state.token
    //         },

    //        }).then((res)=>{
    //         this.ParentMenus = res.data.data.menus;
    //         this.$store.state.userTypeId=res.data.data.user.userTypeId;     
    //       })
    // },
    // exit() {
    //     axios({
    //         method:"post",
    //         url:"api/Sys/logOut",
    //         headers:{
    //             'Content-type': 'application/json;charset=UTF-8',
    //             'Authorization':this.$store.state.token
    //         },

    //        }).then((res)=>{
    //          if(res.data.code = 10000) {
    //            this.$message({
    //           message:'退出登陆',
    //           type:'success'
    //           });
    //           this.$router.push({path:'/'});
    //          }
               
    //       })
    // }
    init(){
      console.log(1111)
      userShowMenu().then(res => {
        if(res.code == 200){
          console.log(22222)
          console.log(res.data)
          this.parentMenus = res.data
        }
        
        
      })
    }
  },
  created(){
    this.init();
  }
}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/mixin.scss";
.nav {
  width:100%;
  position: fixed;
  top:0;
  z-index: 999;
}
.nav>ul>li>div>>>{
  border-bottom-color: transparent;
}
.el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
    border-bottom-color: transparent;
}
.main {
  margin-top:5rem;
}


.exit {
      margin-top: 0.6rem;
      float:right;
      margin-right: 0.5rem;
}
.footer-container {
    height: 100px;
    background: #f0f2f5;
    margin-top: 210px;
    padding: 0 16px;
    text-align: center;
    color: rgba(0,0,0,.65);
    .copyright {
      text-align: center;
      font-size: 14px;
      padding-top: 30px;
    }
  }
</style>