import fetch from "dva/fetch";
const baseURL = "http://test.api.hx.icestargroup.com/v1/";

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

export default function request(options) {
  let url = baseURL + options.url;
  let option = {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(
        window.localStorage.getItem("token")
      )}`
    }
  };
  if (option.method === "POST") {
    option["body"] = JSON.stringify(options.data) || "{}";
  }
  if (option.method === "GET") {
    let paramsArray = [];
    Object.keys(options.data).forEach(key =>
      paramsArray.push(key + "=" + options.data[key])
    );
    url += "?" + paramsArray.join("&");
  }
  return fetch(url, option)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(err => err);
}
