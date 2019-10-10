<template>
<div>
  <div style="width: 100%;margin-bottom:10px;margin-top:20px;height:20%" class="wrapper">
      <el-button
        size="mini"
        type="primary"
        plain
        style="margin-right:970px;"


        icon="el-icon-printer"
      >批量选课</el-button>
      <div style="display: inline-block;float: right;">
        <el-input
          style="width: 270px;"
          size="mini"
          placeholder="请输入课程名称或课程编号"
          v-model="searchValue"
        >
          <template slot="prepend">
            <i class="el-icon-search"></i>
          </template>
        </el-input>
        <el-button
          size="mini"
          type="primary"
          plain
          icon="el-icon-search"
        >查询</el-button>
      </div>
    </div>
  <el-table
    ref="multipleTable"
    border
    :data="lessonData"
    tooltip-effect="dark"
    style="width: 100%"
    height="460"
    @selection-change="handleSelectionChange">
    <!-- <el-table-column
      type="selection"
      width="55">
    </el-table-column> -->
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="lessName"
      label="课程名称"
      width="300">
    </el-table-column>
    <el-table-column
      prop="lessCode"
      label="课程编码"
      width="300">
    </el-table-column>
    <el-table-column
      prop="lessPlace"
      label="课程地点"
      width="300">
    </el-table-column>
    <el-table-column
      prop="lessTime"
      label="开课时间"
      width="300"
      >
    </el-table-column>
    <el-table-column
      prop="lessTeacher"
      label="授课老师"
      width="300"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="270">
      <template slot-scope="scope" >
        <el-button
          @click.native.prevent="chooseRow(scope.$index, lessonData)"
          type="primary"
          style="margin-left:70px;"
          size="small">
          选择此课程
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog
  title="提示"
  :visible.sync="dialogLessonVisible"
  width="30%">
  <span style="font-size:18px">确定要选择此课程吗</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogLessonVisible = false">取 消</el-button>
    <el-button type="primary" @click="sureChoose">确 定</el-button>
  </span>
</el-dialog>

  <div class="chooseTablePagination">
    <el-pagination
     :current-page="listQuery.page"
     :page-sizes="[5,10]"
     :page-size="listQuery.pageSize"
     :total="this.lessonData.length"
      background
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handlelistQueryPageSizeChange"
      @current-change="handlelistQueryPageNumChange"
    />
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        dialogLessonVisible:false,
        searchValue: '',
        outBillTableSelectedRowIndex: -1,
        lessonData: [{
          lessName: '数据库实用技术',
          lessCode: 'A2323032',
          lessPlace:'教四210',
          lessTime: '2019.09.22',
          lessTeacher: '游兰'
        },
        {
          lessName: '数据库实用技术',
          lessCode: 'A2323032',
          lessPlace:'教四210',
          lessTime: '2019.09.22',
          lessTeacher: '游兰'
        },
        {
          lessName: '数据库实用技术',
          lessCode: 'A2323032',
          lessPlace:'教四210',
          lessTime: '2019.09.22',
          lessTeacher: '游兰'
        },
        {
          lessName: '数据库实用技术',
          lessCode: 'A2323032',
          lessPlace:'教四210',
          lessTime: '2019.09.22',
          lessTeacher: '游兰'
        },
        {
          lessName: '数据库实用技术',
          lessCode: 'A2323032',
          lessPlace:'教四210',
          lessTime: '2019.09.22',
          lessTeacher: '游兰'
        },
        {
          lessName: '数据库实用技术',
          lessCode: 'A2323032',
          lessPlace:'教四210',
          lessTime: '2019.09.22',
          lessTeacher: '游兰'
        },{
          lessName: '数据库实用技术',
          lessCode: 'A2323032',
          lessPlace:'教四210',
          lessTime: '2019.09.22',
          lessTeacher: '游兰'
        },],
        multipleSelection: [],
        listQuery: {
            pageNum: 1,
            pageSize: 5,
            total:100
      },
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      //选课的确认按钮
      sureChoose(){
        this.dialogLessonVisible = false
      }, 
      //选择课程的点击按钮
      chooseRow(row,index){
        this.dialogLessonVisible = true
      },
      //显示选课所有课程的分页
      handlelistQueryPageSizeChange(val){
      console.log(`每页 ${val} 条`)
      this.listQuery.pageSize = val
    },
    handlelistQueryPageNumChange(val){

      console.log(`当前页: ${val}`);
      this.listQuery.pageNum = val
    },
    }
  }
</script>

<style>
.wrapper{
  display: inline-block;
  height: 20%;
}
</style>