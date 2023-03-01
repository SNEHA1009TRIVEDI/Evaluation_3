import axios from "axios";
const makeRequest = async (method, url, register, bookmark) => {
  const data = await axios({
    method: method,
    url: url,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer QWlzaHdhcnlhIE4=",
    },
    data: {
      isRegistered: register,
      isBookmarked: bookmark,
    },
  });
  return data;
};
export default makeRequest;
