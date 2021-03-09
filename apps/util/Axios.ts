import axios from 'axios';
import { SERVER, BEARER_TOKEN } from '../config/config.json';
import { IPostRequest } from '../interface/IAxios';

export const PostRequest = async ({ url }: IPostRequest) => {
  const data = await axios.get(`${SERVER}${url}`, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  });
  return data;
};
