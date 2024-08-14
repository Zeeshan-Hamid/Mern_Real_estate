import axios from "axios";

export const singlePageLoader = async ({ request, params }) => {
  const res = await axios.get(`http://localhost:8800/api/posts/${params.id}`);
  console.log(res.data);
  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const res = await axios.get("http://localhost:8800/api/posts?" + query);
  return res.data;
};
