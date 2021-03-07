export interface IGetRequest {
  url: string;
}

export interface IPostRequest {
  url: string;
  request: object;
}

export interface IModifyRequest {
  url: string;
  request: object;
}

export interface IDeleteRequest {
  url: string;
}
