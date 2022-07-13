import { mapQueryStringToUrl } from './../utils/url';
import { ApiAxiosInstance } from "./../libs/axiosInstance";
import { AccountAPIOptions } from "../types/accountapi";
import { AxiosInstance } from "axios";
import App from "../types/app";
import { ApplicationResponse } from '../types/kuservice';

export class AccountAPI {
  public clientId: string;
  public devCallbackUrl: string;
  public type: AccountAPIOptions["type"];
  public app: App;

  private clientSecret: string;
  private axiosInstance: AxiosInstance;

  constructor(options: AccountAPIOptions) {
    this.clientId = options.clientId;
    this.clientSecret = options.clientSecret as string;
    this.type = options.type;
    this.devCallbackUrl = options.devCallbackUrl as string;
    this.axiosInstance = ApiAxiosInstance;
    this.initApi()
  }

  private async initApi() {
    this.app = await this.getAppInfo();
  }

  private async getAppInfo(): Promise<App> {
    const { data } = await this.axiosInstance
      .get<ApplicationResponse>("/client/app")
    return data.result;
  }

  // Server side sign in is not allowed in this sdk.
  // Development mode will be available soon.
  public signinUrl(scope: "0", ref?: string): string {
    return mapQueryStringToUrl("/signin", {
      client_id: this.clientId,
      scope: scope,
      ref: ref ? ref : ""
    })
  }

  public getClientSecret(): string {
    return this.clientSecret
  }

}
