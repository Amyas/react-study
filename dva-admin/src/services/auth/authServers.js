import request from "../../utils/request";

// export function signIn(payload) {
//   return request("http://test.api.hx.icestargroup.com/v1/authorizations", {
//     method: "POST",
//     body: JSON.stringify(payload)
//   });
// }

export function signIn(payload) {
  return request({
    method: "POST",
    url: "authorizations",
    data: payload
  });
}
