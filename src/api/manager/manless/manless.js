/*
 * @Description: 对所有课程的增删改查
 * @Author: hjh
 *
 */
import axios from '@/utils/xhr'

/**
 * 获取课程数据
 * @param {分页数} pageNum
 * @param {一页的数据数量} pageSize
 */
export function getCourseData(pageNum, pageSize) {
  return axios({
    // url: 'http://s2668g1023.zicp.vip/course/selectPageCourseByCondition',
    url: '/course/selectPageCourseByCondition',
    method: 'post',
    data: {
      pageNum,
      pageSize
    }
  })
}

/**
 * 点击新增按钮
 */
export function insertCourseType() {
  return axios({
    // url: 'http://s2668g1023.zicp.vip/course/selectCourseType',
    url: '/course/selectCourseType',
    method: 'get',
  })
  }

 /**
 * 点击新增按钮弹窗的确认按钮
 * @param {课程名称} courseName
 * @param {学时} period
 * @param {课学分} creaits
 * @param {课程类别} courseType
 * 
 */
export function insertCourseData(courseName, period, credits, courseType,num,bookId) {
  return axios({
    // url: 'http://s2668g1023.zicp.vip/course/insertCourse',
    url: '/course/insertCourse',
    method: 'post',
    data: {
      courseName, 
      period, 
      credits, 
      courseType,
      num,
      bookId
    }
  })
  }

  /**
 * 点击查询按钮
 * @param {页数} pageNum 
 * @param {一页的数据数量} pageSize
 * @param {课程类} course
 * 
 */
export function searchCourseData(pageNum,pageSize,course) {
  return axios({
    // url: 'http://s2668g1023.zicp.vip/course/selectPageCourseByCondition',
    url: '/course/selectPageCourseByCondition',
    method: 'post',
    data:{
      pageNum,
      pageSize,
      course}
  })
  }

  /**
 * 删除课程按钮
 * @param {课程id} id 
 * 
 */
export function deleteData(id) {
  return axios({
    // url: 'http://s2668g1023.zicp.vip/course/deleteCourseById',
    url: '/course/deleteCourseById',
    method: 'get',
    params:{id}
  })
  }

   /**
 * 修改课程按钮
 * @param {课程id} id
 * @param {课程名称} courseName
 * @param {学时} period
 * @param {课学分} creaits
 * @param {课程类别} courseType
 * 
 */
export function changeData(id,courseName, period, credits, courseType,num) {
  return axios({
    // url: 'http://s2668g1023.zicp.vip/course/updateCourse',
    url: '/course/updateCourse',
    method: 'post',
    data:{
      id,
      courseName, 
      period, 
      credits, 
      courseType,
      num}
  })
  }

   /**
 * 查看课程详情按钮
 * @param {课程id} id
 * 
 */
export function detailData(id) {
  return axios({
    // url: 'http://s2668g1023.zicp.vip/course/selectCourseById',
    url: '/course/selectCourseById',
    method: 'get',
    params:{
      id}
  })
  }

   /**
 * 查看开课详情里的开课学年下拉框
 * 
 */
export function startYearData() {
  return axios({
    // url: 'http://s2668g1023.zicp.vip/course/selectAcademicYear',
    url: '/course/selectAcademicYear',
    method: 'get',
  })
  }

  /**
 * 查看开课详情里的开课地点下拉框
 * 
 */
export function startPlaceData() {
  return axios({
    // url: 'http://s2668g1023.zicp.vip/course/selectTeachSpace',
    url: '/course/selectTeachSpace',
    method: 'get',
  })
  }
  
  /**
 * 查看开课详情里的开课时间下拉框
 * 
 */
export function startTimeData() {
  return axios({
    // url: 'http://s2668g1023.zicp.vip/course/selectTeachTime',
    url: '/course/selectTeachTime',
    method: 'get',
  })
  }

  /**
 * 开课详情里的确认按钮
 * 
 */
export function startCourseData(courseId,academicYearId,teachSpaceId,teachTimeId) {
  return axios({
    // url: 'http://s2668g1023.zicp.vip/course/addConductCourse',
    url: '/course/addConductCourse',
    method: 'post',
    data:{
      courseId,
      academicYearId,
      teachSpaceId,
      teachTimeId
    }
  })
  }

  /**
 * 新增课程时获取课程书本对应的书本id
 * 
 */
export function insertCourseBook() {
  return axios({
    // url: 'http://s2668g1023.zicp.vip/course/addConductCourse',
    url: '/course/selectBooks',
    method: 'get',
  })
  }

  /**
 * 修改课程时获取课程类别名
 * 
 */
export function changeCourseTypeName() {
  return axios({
    // url: 'http://s2668g1023.zicp.vip/course/addConductCourse',
    url: '/course/selectCourseType',
    method: 'get',
  })
  }

  /**
 * 进入课程表时获取课程类别名
 * 
 */
export function getCourseTypeName() {
  return axios({
    // url: 'http://s2668g1023.zicp.vip/course/addConductCourse',
    url: '/course/selectCourseType',
    method: 'get',
  })
  }