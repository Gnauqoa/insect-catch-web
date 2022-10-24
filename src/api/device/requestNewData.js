import axios from "axios";

export const requestNewDeviceData = (deviceID) => {
  return axios
    .get(`/getNewDeviceData?deviceID=${deviceID}`)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
};
