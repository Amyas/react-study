import request from "../../utils/request";

export function query(payload) {
  return request({
    url: "users",
    data: payload
  });
}
