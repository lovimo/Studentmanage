<template>
<div>
  <div style="width: 100%;margin-bottom:15px;height:20%" class="wrapper">
    <el-dialog
      title="课程详情"
      :visible.sync="dialogLessonDetailVisible"
      class="bookDetail"
      width="40%"
      >
      <img class="bookPhoto" :src="bookImgData.avatar"/>
      <span class="bookName">{{"书名："+bookName}}</span>
      <span class="bookAuthor">{{"作者："+bookAuthor}}</span>
      <span class="bookPublish">{{"出版社："+bookPublish}}</span>
      <span class="bookEdit">{{"版本："+bookEdit}}</span>
      <span class="bookPrice">{{"价格："+bookPrice}}</span>
      <span class="bookPage">{{"页数："+bookPage}}</span>
    </el-dialog>
      <div style="display: inline-block;float: left;">
        <el-button type="primary" class="wrapper_insert" @click="toInsertLess">增加课程</el-button>
        
        <el-dialog title="添加课程详情" :visible.sync="dialogLessFormVisible">
            <el-form :model="insertLess"
                     :rules="insertLess">
                <el-form-item label="课程名称" :label-width="formLabelWidth">
                <el-input v-model="insertLess.courseName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="课程编码" :label-width="formLabelWidth">
                <el-input v-model="insertLess.num" autocomplete="off"></el-input>
                </el-form-item>
                 <el-form-item label="学时" :label-width="formLabelWidth">
                <el-input v-model="insertLess.period" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="学分" :label-width="formLabelWidth">
                <el-input v-model="insertLess.credits" autocomplete="off"></el-input>
                </el-form-item>
                <!-- <el-form-item label="课程类别" :label-width="formLabelWidth">
                <el-input v-model="insertLess.courseType" autocomplete="off"></el-input>
                </el-form-item> -->
                <el-form-item label="课程类别" prop="courseType" :label-width="formLabelWidth">
                <el-select
                  filterable
                  v-model="insertLess.courseType"
                  placeholder="请选择课程类别"
                  style="margin-right:450px"
                >
                  <el-option
                    v-for="item in courseTypeArr"
                    :key="item.id"
                    :label="item.courseTypeName"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="课程书本" prop="courseBook" :label-width="formLabelWidth">
                <el-select
                  filterable
                  v-model="insertLess.courseBook"
                  placeholder="请选择课程书本"
                  style="margin-right:450px"
                >
                  <el-option
                    v-for="item in courseBookArr"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogLessFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="insertCourseSure">确 定</el-button>
            </div>
        </el-dialog>

        <!-- <template slot="prepend">
            <i class="el-icon-search"></i>
          </template> -->
        <el-input
          class="wrapper_inputCourseName"
          style="width: 150px;"
          size="mini"
          placeholder="请输入课程名称"
          v-model="searchInsertcourseName"
        >
        </el-input>
        <el-input
          class="wrapper_inputCourseCode"
          style="width: 150px;"
          size="mini"
          placeholder="请输入课程编号"
          v-model="searchInsertcourseCode"
        >
        </el-input>
        <el-input
          class="wrapper_period"
          style="width: 150px;"
          size="mini"
          placeholder="请输入学时"
          v-model="searchInsertperiod"
        >
        </el-input>
        <el-input
          class="wrapper_credits"
          style="width: 150px;"
          size="mini"
          placeholder="请输入学分"
          v-model="searchInsertcredits"
        >
        </el-input>
        <el-select
          size="mini"
          filterable
          v-model="searchInsertcourseType"
          clearable
          placeholder="请选择课程类别"
          style="margin-left:900px"
        >
          <el-option
            v-for="item in courseTypeList"
            :key="item.id"
            :label="item.courseTypeName"
            :value="item.id"
          ></el-option>
        </el-select>
        <el-button
          class="classTypeButton"
          size="mini"
          type="primary"
          plain
          icon="el-icon-search"
          @click="searchCourse(1,InsertQuery.pageSize)"
        >查询</el-button>
      </div>
    </div>

    <el-dialog title="开课详情" :visible.sync="dialogStartFormVisible">
      <el-form :model="startLessData"
                ref="startLessData">
        <el-form-item label="开课学年" prop="startYear" :label-width="formLabelWidth">
        <el-select
          filterable
          v-model="startLessData.startYear"
          placeholder="请选择开课学年"
          style="margin-right:450px"
          @change='startchange'
        >
          <el-option
            v-for="item in startYearArr"
            :key="item.id"
            :label="item.academicYear"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="开课地点" prop="startPlace" :label-width="formLabelWidth">
        <el-select
          filterable
          v-model="startLessData.startPlace"
          placeholder="请选择开课地点"
          style="margin-right:450px"
        >
          <el-option
            v-for="item in startPlaceArr"
            :key="item.id"
            :label="item.space"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="开课时间" prop="startTime" :label-width="formLabelWidth">
        <el-select
          filterable
          v-model="startLessData.startTime"
          placeholder="请选择开课时间"
          style="margin-right:450px"
          
        >
          <el-option
            v-for="item in startTimeArr"
            :key="item.id"
            :label="item.time"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      
    </el-form>
      <div slot="footer" class="dialog-footer">
          <el-button @click="dialogStartFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="StartCourseSure">确 定</el-button>
      </div>
  </el-dialog>
  <el-table
    ref="InsertLessData"
    border
    :data="InsertLessData"
    tooltip-effect="dark"
    style="width: 100%"
    height="470"
    @selection-change="handleSelectionChange">
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
      prop="courseTypeName"
      label="课程类别"
      width="300"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="350">
      <template slot-scope="scope"> 
        <el-button @click="startClick(scope.$index,scope.row)"  type="warning" size="small" style="margin-left:0px;">开课</el-button>
        <el-button @click="changeClick(scope.$index,scope.row)" type="primary" size="small" style="margin-left:15px;">修改</el-button>
        <el-button @click="detailClick(scope.$index,scope.row)" type="success" size="small" style="margin-left:25px;">课程详情</el-button>
        <el-button @click="delectClick(scope.$index,scope.row)" type="danger" size="small" style="margin-left:28px;">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog
  title="提示"
  :visible.sync="dialogInsertLessonVisible"
  width="30%">
  <span style="font-size:18px">确定要删除此课程吗</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogInsertLessonVisible = false">取 消</el-button>
    <el-button type="primary" @click="sureDelect">确 定</el-button>
  </span>
</el-dialog>

  <div class="chooseTablePagination">
    <el-pagination
     :current-page="InsertQuery.pageNum"
     :page-sizes="[5,7,10]"
     :page-size="InsertQuery.pageSize"
     :total="InsertQuery.total"
     background
     layout="total, sizes, prev, pager, next, jumper"
      @size-change="handlelistQueryPageSizeChange"
      @current-change="handlelistQueryPageNumChange"
    />
  </div>
  <el-dialog
  title="提示"
  :visible.sync="dialogChangeLessonVisible"
  >
  <el-form :model="changeLessonData">
    <el-form-item label="课程名称" :label-width="formLabelWidth">
      <el-input v-model="changeLessonData.courseName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="课程编号" :label-width="formLabelWidth">
      <el-input v-model="changeLessonData.num" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="学时" :label-width="formLabelWidth">
      <el-input v-model.number="changeLessonData.period" autocomplete="off" ></el-input>
    </el-form-item>
    <el-form-item label="学分" :label-width="formLabelWidth">
      <el-input v-model.number="changeLessonData.credits" autocomplete="off" ></el-input>
    </el-form-item>
    <el-form-item label="课程类别" prop="courseTypeName" :label-width="formLabelWidth">
      <el-select
        filterable
        v-model="changeLessonData.courseTypeName"
        placeholder="请选择课程类别"
        style="margin-right:450px"
      >
        <el-option
          v-for="item in courseTypeNameArr"
          :key="item.id"
          :label="item.courseTypeName"
          :value="item.id"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="" :label-width="formLabelWidth">
      <span style="margin-right:430px;" class="changeCourseType">该课程默认为：{{this.changeCourseTypeName}}</span>
    </el-form-item>
    
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogChangeLessonVisible = false">取 消</el-button>
    <el-button type="primary" @click="changeLessonSure">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>

<script>
import {
    getCourseData,
    insertCourseData,
    insertCourseType,
    searchCourseData,
    deleteData,
    changeData,
    detailData,
    startYearData,
    startPlaceData,
    startTimeData,
    startCourseData,
    insertCourseBook,
    changeCourseTypeName,
    getCourseTypeName
} 
from '@/api/manager/manless/manless'
  export default {
    data() {
      const validatecourseName = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入课程名'))
      } else {
        callback()
      }
    }
    const validatecourseCode = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入课程编号'))
      } else {
        callback()
      }
    }
    const validateperiod = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入学时'))
      } else {
        callback()
      }
    }
    const validatecredits = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入学分'))
      } else {
        callback()
      }
    }
    // const validatestartYear = (rule, value, callback) => {
    //   if (!value) {
    //     callback(new Error('请选择开课学年'))
    //   } else {
    //     callback()
    //   }
    // }
    // const validatestartPlace = (rule, value, callback) => {
    //   if (!value) {
    //     callback(new Error('请选择开课地点'))
    //   } else {
    //     callback()
    //   }
    // }
    // const validatestartTime = (rule, value, callback) => {
    //   if (!value) {
    //     callback(new Error('请选择开课时间'))
    //   } else {
    //     callback()
    //   }
    // }
      return {
        courseTypeId:'',
        changeCourseTypeName:'',
        startCourseId:'',
        dialogStartFormVisible:false,
        bookName:'',
        bookAuthor:'',
        bookPublish:'',
        bookPrice:'',
        bookEdit:'',
        bookPage:'',
        dialogLessonDetailVisible:false,
        changeLessonId:'',
        bookImgData: {
            // avatar: require('@/assets/算法.jpg')
          },
        changeLessonData:{
          courseName:'',
          num:'',
          period:'',
          credits:'',
          courseTypeName:'',
        },
        dialogChangeLessonVisible:false,
        courseRowId:'',
        courseIndex:'',
        courseTypeList:[],
        courseTypeNameArr:[],
        courseBookArr:[],
        courseTypeArr:[],
        startTimeArr:[],
        startYearArr:[],
        startPlaceArr:[],
        formLabelWidth: '120px',
        dialogLessFormVisible:false,
        dialogInsertLessonVisible:false,
        searchInsertcourseName: '',
        searchInsertcourseCode: '',
        searchInsertperiod: '',
        searchInsertcredits: '',
        searchInsertcourseType: '',
        InsertLessData: [],
        insertLess: {
        courseName: [
          { required: true, trigger: 'blur', validator: validatecourseName }
        ],
        num: [
          { required: true, trigger: 'blur', validator: validatecourseCode }
        ],
        period: [
          { required: true, trigger: 'blur', validator: validateperiod }
        ],
        credits: [
          { required: true, trigger: 'blur', validator: validatecredits }
        ],
      },
      // startLessData: {
      //   startYear:[{ required: true, trigger: 'blur', validator: validatestartYear }
      //   ],
      //   startPlace:[{ required: true, trigger: 'blur', validator: validatestartPlace }
      //   ],
      //   startTime:[{ required: true, trigger: 'blur', validator: validatestartTime }
      //   ]
      // },
        insertLess:{
            courseName:'',
            num:'',
            period:'',
            credits:'',
            courseType:'',
            courseBook:'',
        },
        multipleSelection: [],
        InsertQuery: {
            pageNum: 0,
            pageSize: 0,
            total:0,
            pages:0,
      },
      startLessData: {
        startYear:'',
        startplace:'',
        startTime:'',
      }
      }
    },
    mounted(){},
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      //点击新增按钮
      toInsertLess(){
        this.dialogLessFormVisible = true;
        console.log(111)
        insertCourseType().then(res => {
          this.courseTypeArr = res.data;
          console.log(222)
          console.log(res.data)
        })    
        insertCourseBook().then(res => {
          this.courseBookArr = res.data;
          console.log(res.data)
        })   
      },
      //点击查询按钮
      searchCourse(pageNum,pageSize){
        const course = {
          courseName : this.searchInsertcourseName,
          num : this.searchInsertcourseCode,
          period : this.searchInsertperiod,
          credits : this.searchInsertcredits,
          courseType : this.searchInsertcourseType
        };
        console.log(1111)
        searchCourseData(pageNum,pageSize,course).then(res => {
          console.log(333)
          if(res.code == 200){
            console.log(22222)
            console.log(pageNum)
            console.log(res.data)
            this.InsertLessData = res.data.list;
            this.InsertQuery.total = res.data.total;
            this.InsertQuery.pageNum = res.data.pageNum;
            this.InsertQuery.pageSize = res.data.pageSize;
          }
        })
      },
      //新增课程的确定按钮
      insertCourseSure(){
        insertCourseData(this.insertLess.courseName,this.insertLess.period,this.insertLess.credits,this.insertLess.courseType,this.insertLess.num,this.insertLess.courseBook).then(res => {
          if(res.code == 200){
            this.dialogLessFormVisible = false;
            this.searchCourse(this.InsertQuery.pageNum,this.InsertQuery.pageSize)
            this.insertLess.courseName = '',
            this.insertLess.num = '',
            this.insertLess.period = '',
            this.insertLess.credits = '',
            this.insertLess.courseType = ''
            this.insertLess.courseBook = ''
            this.$message({
              showClose: true,
              message: "增加成功！",
              type: "success",
              duration: 5 * 1000
        });
          }
        })
      },
      //删除课程的确认按钮
      sureDelect(){
        this.dialogInsertLessonVisible = false
        this.InsertLessData.splice(this.courseIndex, 1);
        deleteData(this.courseRowId).then(res => {
          if(res.code == 200){
            this.searchCourse(this.InsertQuery.pageNum,this.InsertQuery.pageSize)
            this.$message({
            showClose: true,
            message: "删除成功！",
            type: "success",
            duration: 5 * 1000
      });
          }
        })
        
      },
      tartClick(){
        console.log(开课成功)
      },
      //修改课程信息
      changeClick(index,row){
        this.changeLessonId = row.id;
        this.dialogChangeLessonVisible = true;
        this.changeCourseTypeName = row.courseTypeName;
        this.changeLessonData.courseName = row.courseName;
        this.changeLessonData.num = row.num;
        this.changeLessonData.period = row.period;
        console.log(row.period)
        console.log(typeof(row.period))
        console.log(typeof(this.changeLessonData.period))
        this.changeLessonData.credits = row.credits;
        changeCourseTypeName().then(res => {
          if(res.code == 200){
            this.courseTypeNameArr = res.data
          }
        })
        
      },
      //修改课程确定按钮
      changeLessonSure(){
        console.log(1212121)
        changeData(this.changeLessonId,this.changeLessonData.courseName,this.changeLessonData.period,this.changeLessonData.credits,this.changeLessonData.courseTypeName,this.changeLessonData.num).then(res =>{
          if(res.code == 200){
            this.changeLessonId = '', 
            this.changeLessonData.courseName = '',
            this.changeLessonData.period = '',
            this.changeLessonData.credits = '',
            this.changeLessonData.courseTypeName= '',
            this.changeLessonData.num = ''
            this.searchCourse(this.InsertQuery.pageNum,this.InsertQuery.pageSize)
            this.$message({
            showClose: true,
            message: "修改成功！",
            type: "success",
            duration: 5 * 1000
      });
          }
        })
        this.dialogChangeLessonVisible = false;
      },
      //查看课程详情信息
      detailClick(index,row){
        this.dialogLessonDetailVisible = true;
        detailData(row.id).then(res => {
          if(res.code == 200){
            console.log(res.data)
            this.bookName = res.data.bookName
            this.bookAuthor = res.data.author
            this.bookPublish = res.data.press
            this.bookPrice = res.data.price
            this.bookEdit = res.data.edition
            this.bookPage = res.data.pageNum
            this.bookPhotoSrc = res.data.photo
            const avatar = res.data.photo
            res.data.avatar = avatar
            this.bookImgData = res.data
          }
        })
      },
      //点击删除课程按钮
      delectClick(index,row){
        this.dialogInsertLessonVisible = true
        this.courseIndex = index
        this.courseRowId = row.id
      },
      startchange(){
        this.startLessData.startYear +'';
        this.$refs.startLessData.validateField("startYear");
      },
      //点击开课按钮
      startClick(index,row){
        console.log(row.startCourseType)
        this.dialogStartFormVisible = true
        console.log(row.id)
        this.startCourseId = row.id
        startYearData().then(res => {
          if(res.code == 200){
            console.log(res.data)
            this.startYearArr = res.data
            console.log(this.startLessData)
            console.log(typeof(this.startLessData.startYear))
          }
        })
        startPlaceData().then(res => {
          if(res.code == 200){
            console.log(res.data)
            this.startPlaceArr = res.data
            console.log(typeof(this.startLessData.startYear))
          }
        })
        startTimeData().then(res => {
          if(res.code == 200){
            console.log(res.data)
            this.startTimeArr = res.data
          }
        })
      },
     //点击开课详情确认按钮
     StartCourseSure(){
       this.dialogStartFormVisible = false
       console.log(11111)
       startCourseData(this.startCourseId,this.startLessData.startYear,this.startLessData.startPlace,this.startLessData.startTime).then(res => {
         if(res.code == 200){
           console.log(res.data)
           console.log(typeof(this.startLessData.startYear))
           this.startLessData.startYear = ''
           this.startLessData.startPlace = ''
           this.startLessData.startTime = ''
           console.log(12121)
           this.$message({
            showClose: true,
            message: "开课成功！",
            type: "success",
            duration: 5 * 1000
      });
         }
         else{
           this.$message({
            showClose: true,
            message: "请选择课程详情",
            type: "fail",
            duration: 5 * 1000
      });
         }
       })
     },
      //显示选课所有课程的分页
      handlelistQueryPageSizeChange(val){
      console.log(`每页 ${val} 条`)
      this.InsertQuery.pageSize = val
      this.searchCourse(this.InsertQuery.pageNum,this.InsertQuery.pageSize)
    },
    handlelistQueryPageNumChange(val){
      console.log(`当前页: ${val}`);
      this.InsertQuery.pageNum = val
      this.searchCourse(this.InsertQuery.pageNum,this.InsertQuery.pageSize)
    },

    init(){
      getCourseData(1,7).then(res => {
        if(res.code == 200){
          console.log(res.data)
          res.data.list.map(item=>{
              this.InsertLessData.push(item)
              this.InsertQuery.pageNum = res.data.pageNum;
              this.InsertQuery.pageSize = res.data.pageSize;
              this.InsertQuery.total = res.data.total;
              this.courseTypeId = res.data.courseTypeId;
            })
        }
      }),
      getCourseTypeName().then(res => {
        if(res.code == 200){
          this.courseTypeList = res.data
        }
      })
      }
    },
    created() {
    // 当前页面数据初始化，从后台获取当前页面所需的数据
    this.init();
  },
};
</script>

<style>
.wrapper{
  position: relative;
  display: inline-block;
  height: 20%;
}
.wrapper .wrapper_insert{
    position: absolute;
    display: inline-block;
    left:54px;
}
.wrapper .wrapper_inputCourseName{
  position: absolute;
  display: inline-block;
  left:200px;
}
.wrapper .wrapper_inputCourseCode{
  position: absolute;
  display: inline-block;
  left:380px;
}
.wrapper .wrapper_period{
  position: absolute;
  display: inline-block;
  left:560px;
}
.wrapper .wrapper_credits{
  position: absolute;
  display: inline-block;
  left:740px;
}
.wrapper .wrapper_courseType{
  position: absolute;
  display: inline-block;
  left:920px;
}
.wrapper .classTypeButton{
  position:absolute;
  display: inline-block;
  top:0px;
  left: 1120px;
}
/* .bookDetail .bookPhoto{
  display: inline-block;
  position: absolute;
  left:5px;
  top:0px;
}
.bookDetail .bookName{
  left:5px;
  top:60px;
}
.bookDetail .bookAuthor{
  left:5px;
  top:90px;
}
.bookDetail .bookPublish{
  left:5px;
  top:120px;
}
.bookDetail .bookEdit{
  left:5px;
  top:150px;
}
.bookDetail .bookPrice{
  left:5px;
  top:180px;
}
.bookDetail .bookPage{
  left:5px;
  top:210px;
} */
.bookDetail span{
  margin-top:40px;
  /* margin-right:500px; */
  display: block;
  /* position: absolute; */
  font-size: 20px;
  padding-bottom:10px;
}
.changeCourseType{
  /* display:inline-block; */
  color: #C0C4CC;
}
</style>