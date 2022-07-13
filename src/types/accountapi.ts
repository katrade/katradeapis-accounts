export interface AccountAPIOptions {
  clientId: string;
  clientSecret?: string;
  type: "production" | "development";
  devCallbackUrl?: string;
}
