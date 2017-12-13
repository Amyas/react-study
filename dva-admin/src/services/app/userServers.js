import request from "../../utils/request";

export function query(payload) {
  return request({
    url: "users",
    data: payload
  });
}

export function del({ id }) {
  return request({
    url: `user/${id}/delete`
  });
}

export function create(payload) {
  return request({
    method: "POST",
    url: "users",
    data: payload
  });
}
