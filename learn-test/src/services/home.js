import { request } from "./request";

// export function getSearchList(searchVal = "") {
//   return request({
//     url: "/disease/queryAppDisease",
//     params: {
//       // gender: gender,
//       searchVal: searchVal,
//       page: 1,
//       size: 500
//     }
//   });
// }

export function getUserName() {
  return request({
    url: "/test0"
  });
}
export function getNoticeList(params = {}) {
  return request({
    url: "/mock/api/operation/get",
    method: "get",
    useMock: true,
    params: params
  })
}

