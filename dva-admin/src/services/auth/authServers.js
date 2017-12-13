import request from "../../utils/request";

export function signIn(payload) {
  return request({
    method: "POST",
    url: "authorizations",
    data: payload
  });
}
