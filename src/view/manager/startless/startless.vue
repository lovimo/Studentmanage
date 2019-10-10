<template>
    <div>
        <el-table
            ref="startCourseData"
            border
            :data="startCourseData"
            tooltip-effect="dark"
            style="width: 100%"
            height="460"
            >
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            prop="courseName"
            label="课程名称"
            width="300">
            </el-table-column>
            <el-table-column
            prop="num"
            label="课程编码"
            width="300">
            </el-table-column>
            <el-table-column
            prop="period"
            label="学时"
            width="300">
            </el-table-column>
            <el-table-column
            prop="credits"
            label="学分"
            width="300"
            >
            </el-table-column>
            <el-table-column
            prop="courseType"
            label="课程类别"
            width="300"
            >
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="270">
            <template slot-scope="scope"> 
                <el-button @click="cancelCourseClick(scope.$index,scope.row)"  type="warning" size="small" style="margin-left:20px;">取消开课</el-button>
                <el-button @click="detailCourseClick(scope.$index,scope.row)" type="success" size="small" style="margin-left:50px;">课程详情</el-button>
            </template>
            </el-table-column>
        </el-table>
        <div class="chooseTablePagination">
          <el-pagination
          :current-page="startLessQuery.pages"
          :page-sizes="[5,8,10]"
          :page-size="startLessQuery.pageSize"
          :total="startLessQuery.total"
          background
          layout="total, sizes, prev, pager, next, jumper"
            
            
          />
      </div>
        <el-dialog
            title="提示"
            :visible.sync="dialogcancelLessonVisible"
            width="30%">
            <span style="font-size:18px">确定要取消开课吗</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogcancelLessonVisible = false">取 消</el-button>
                <el-button type="primary" @click="sureCancel">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import {
  getStartCourseData
  } 
from '@/api/manager/startless/startless'

export default {
    data(){
        return{
          startCourseData:[],
          dialogcancelLessonVisible:false,
          startLessQuery: {
            pageNum: 0,
            pageSize: 0,
            total:0,
            pages:0,
      },
        }
    },
    methods:{
      cancelCourseClick(){
        this.dialogcancelLessonVisible = true
      },
      sureCancel(){
        this.dialogcancelLessonVisible = false
      },
      init(){
        getStartCourseData(1,7).then(res => {
          if(res.code == 200){
            res.data.list.map(item=>{
              this.startCourseData.push(item)
              console.log(res.data)
            })
            this.startLessQuery.pageNum = res.data.pageNum;
            this.startLessQuery.pageSize = res.data.pageSize;
            this.startLessQuery.total = res.data.total;
            
          }
        })
      }
    },
    created(){
      this.init()
    }
}
</script>

<style>

</style>