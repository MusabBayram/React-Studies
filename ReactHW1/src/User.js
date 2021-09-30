import axios from "axios";

export async function getUser(id) {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    resolve(data);
  });
}
export async function getPost(id) {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    resolve(data);
  });
}

export default getUser;
