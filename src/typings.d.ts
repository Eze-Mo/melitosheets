declare module '@woocommerce/woocommerce-rest-api' {
    export type WooCommerceRestApiVersion = 'wc/v3' | 'wc/v2' | 'wc/v1' | 'wc-api/v3' | 'wc-api/v2' | 'wc-api/v1'
    export type WooCommerceRestApiEncoding = 'utf-8' | 'ascii'
    export type WooCommerceRestApiMethod = 'get' | 'post' | 'put' | 'delete' | 'options'
  
    export interface IWooCommerceRestApiOptions {
      url: string
      consumerKey: string
      consumerSecret: string
      wpAPIPrefix?: string
      version?: WooCommerceRestApiVersion
      encoding?: WooCommerceRestApiEncoding
      queryStringAuth?: boolean
      port?: number
      timeout?: number
      axiosConfig?: any
    }
  
    export interface IWooCommerceRestApiQuery {
      [key: string]: string
    }
  
    class OAuth {}
  
    export class WooCommerceRestApi {
      protected classVersion: string
      protected url: string
      protected consumerKey: string
      protected consumerSecret: string
      protected wpAPIPrefix: string
      protected version: WooCommerceRestApiVersion
      protected encoding: WooCommerceRestApiEncoding
      protected queryStringAuth: boolean
      protected port: number
      protected timeout: number
      protected axiosConfig: any
  
      constructor(opt: IWooCommerceRestApiOptions | WooCommerceRestApi)
  
      private _setDefaultsOptions(opt: IWooCommerceRestApiOptions): void
  
      private _parseParamsObject(params: any, query: any): IWooCommerceRestApiQuery
  
      private _normalizeQueryString(url: string, params: any): string
  
      private _getUrl(endpoint: string, params: any): string
  
      private _getOAuth(): OAuth
  
      private _request(method: WooCommerceRestApiMethod, endpoint: string, data: any, params: any): any
  
      public get(endpoint: string): any
      public get(endpoint: string, params: any): any
  
      public post(endpoint: string, data: any): any
      public post(endpoint: string, data: any, params: any): any
  
      public put(endpoint: string, data: any): any
      public put(endpoint: string, data: any, params: any): any
  
      public delete(endpoint: string): any
      public delete(endpoint: string, params: any): any
  
      public options(endpoint: string): any
      public options(endpoint: string, params: any): any
    }
  
    export class OptionsException {
      public name: string
      public message: string
  
      constructor(message: string)
    }
  
    export default WooCommerceRestApi
  }