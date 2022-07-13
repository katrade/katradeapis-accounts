import App from "./app";

export interface ApplicationResponse {
  result: App;
}

export interface GlobalApiResponse<type> {
  status: boolean;
  message: string;
  payload: type;
}