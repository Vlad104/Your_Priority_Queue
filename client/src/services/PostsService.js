import { getPosts, checkStatus, parseJSON } from "./api";

export default {
  async postMessage() {
    try {
      const res = await getPosts();
      const status = await checkStatus(res);
      const data = await parseJSON(status);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
};
