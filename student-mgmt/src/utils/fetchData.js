import axios from "axios";

export default async (url) => {
  try {
    let result = await axios.get(url);
    let data = result.data;
    return data;
  } catch (error) {
    console.log("data error");
    return null;
  }
};
