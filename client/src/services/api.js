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

// временно
export function getPosts() {
  return getFetch(`/posts`);
}


let res = {
  'today': [
    {
      id: 0,
      text: 'Поесть дошик',
    },
    {
      id: 1,
      text: 'Попить пива',
    },
    {
      id: 2,
      text: 'Поесть дошик',
    },
    {
      id: 3,
      text: 'Попить пива',
    },
    {
      id: 4,
      text: 'Поесть дошик',
    },
  ],
  'tomorrow': [
    {
      id: 0,
      text: 'Поесть дошик',
    },
    {
      id: 1,
      text: 'Попить пива',
    },
  ],
  'soon': [
    {
      id: 0,
      text: 'Поесть дошик',
    },
    {
      id: 1,
      text: 'Попить пива',
    },
  ],
  'notsoon': [
    {
      id: 0,
      text: 'Поесть дошик',
    },
    {
      id: 1,
      text: 'Попить пива',
    },
  ],
  'ideas': [
    {
      id: 0,
      text: 'Поесть дошик',
    },
    {
      id: 1,
      text: 'Попить пива',
    },
  ],
}

/**
 * Сделать запрос и вернуть список задач для конкретного списка
 * @param {String} slug Slug запроса
 * return {Array<Object>} // Список задач
 */
export async function getTasks(slug) {
  return res[slug];
  try {
    const res = await getFetch(`/tasks/${slug}`);
    const status = await checkStatus(res);
    const data = await parseJSON(status);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

/**
 * Сделать запрос и вернуть список задач для конкретного списка
 * @param {String} slug Slug запроса
 * return {Array<Object>} // Список задач
 */
export async function postTask(slug, task) {
  res[slug].push(task);
}

/**
 * Сделать запрос и вернуть список задач для конкретного списка
 * @param {String} slug Slug запроса
 * return {Array<Object>} // Список задач
 */
export async function delTask(slug, id) {
  res[slug].splice(id, 1);
}