const baseURL = "http://localhost:8081";
const apiURL = `${baseURL}`;

/**
 * Выполнить GET-запрос с помощью FetchAPI
 * @param {string} path
 * return {Promise<Responce>}
 */
function getFetch(path = "/") {
  return fetch(apiURL + path, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    body: null
  });
}

/**
 * Выполнить POST-запрос с помощью FetchAPI
 * @param {path} string
 * @param {Object} body Тело запроса
 * return {Promise<Responce>}
 */
function postFetch(path = "/", body = {}) {
  return fetch(apiURL + path, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}

/**
 * Проверить статус ответа
 * @param {Promise<Responce>} res
 * return {Promise<Responce>}
 */
export function checkStatus(res) {
  if (res.status >= 200 && res.status <= 304) {
    return res;
  }
  const error = new Error(res.statusText);
  error.response = res;
  throw error;
}

/**
 * Распарсить тело ответа
 * @param {Promise<Responce>} res
 * return {Promise<Object>}
 */
export function parseJSON(res) {
  return res.json();
}

export function getPosts() {
  return getFetch(`/posts`);
}
