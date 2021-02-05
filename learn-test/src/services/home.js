import { request } from "./request";


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

export function getPhotoList(page, size) {
  return request({
    // /photo/getPhotos?page=1&&size=12
    url: "/photo/getPhotos",
    params: {
      page,
      size,
    },
  });
}
