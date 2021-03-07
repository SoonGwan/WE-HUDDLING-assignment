import axios from 'axios';
import { SERVER } from '../config/config.json';
import {
  IGetRequest,
  IPostRequest,
  IModifyRequest,
  IDeleteRequest,
} from '../interface/IAxios';

export const getRequest = async ({ url }: IGetRequest) => {
  const data = await axios.get(`${SERVER}${url}`);
  return data;
};

export const postRequest = async ({ url, request }: IPostRequest) => {
  const data = await axios.post(`${SERVER}${url}`, request);
  return data;
};

export const modifyRequest = async ({ url, request }: IModifyRequest) => {
  const data = await axios.put(`${SERVER}${url}`, request);
  return data;
};

export const deleteRequest = async ({ url }: IDeleteRequest) => {
  const data = await axios.delete(`${SERVER}${url}`);
  return data;
};
