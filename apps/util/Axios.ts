import axios from 'axios';
import { SERVER, BEARER_TOKEN } from '../config/config.json';
import {
  IGetRequest,
  IPostRequest,
  IModifyRequest,
  IDeleteRequest,
} from '../interface/IAxios';

export const getRequest = async ({ url }: IGetRequest) => {
  const data = await axios.get(`${SERVER}${url}`, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  });
  return data;
};
