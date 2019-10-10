/*
 * @Description: 对所有课程的增删改查
 * @Author: hjh
 *
 */
import axios from '@/utils/xhr'

/**
 * 获取所有开课课程数据
 * @param {分页数} pageNum
 * @param {一页的数据数量} pageSize
 */
export function getStartCourseData(pageNum, pageSize) {
  return axios({
    // url: 'http://s2668g1023.zicp.vip/course/selectPageCourseByCondition',
    url: '/course/selectPageConductCourseByCondition',
    method: 'post',
    data: {
      pageNum, 
      pageSize
    }
  })
}