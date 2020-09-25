/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-09-24 19:21:58
 * @LastEditors: camus
 * @LastEditTime: 2020-09-24 20:27:11
 */

export default [
  {
      url: '/mock/api/operation/get',
      type: 'get',
      response: _ => {
          return {
              status: 'success',
              msg: '成功',
              'data|8-20': [
                {
                  'id|35000-38000': 350888,
                  'name': '@cname()',
                  "age|60-80": 68,
                  'gender|1': ['男','女'],
                  "certificate": "",
                  "account|1-100": 1,
                },
              ],

          }
      }
  }
]
