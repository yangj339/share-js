import axios from 'axios';
import {
  Message
} from 'element-ui';
 
export default function defaultFetch() {}
 
export async function fetch(options) {
 
  try {
    let instance = await axios.create({
      timeout: 20000, // 超时
      headers: {
        // 'X-touchspring-Token': store.state.user.token,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    let result = await instance(options);
    result = result.data;
    console.log(result);
    if (result.code === 1200 || result.code === 2000) {
      return result;
    } else {
      Message({
        message: result.message,
        type: 'error',
        showClose: true,
        duration: 2 * 1000,
      });
    }
  } catch (err) {
    console.log(err)
  }
}