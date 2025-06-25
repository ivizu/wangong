/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface TiaoTaoHelperModelsResult1WanGongModelDbSysUsdtTransferRequestBillWanGongModelVersion1000CultureNeutralPublicKeyTokenNull {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: WanGongModelDbSysUsdtTransferRequestBill;
}

export interface WalkingTecMvvmAdminApiSimpleLogin {
  /** @minLength 1 */
  Account: string;
  /** @minLength 1 */
  Password: string;
}

export interface WalkingTecMvvmCoreFrameworkUser {
  /** @format uuid */
  ID?: string;
  /** @format date-time */
  CreateTime?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   */
  CreateBy?: string | null;
  /** @format date-time */
  UpdateTime?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   */
  UpdateBy?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   */
  ITCode: string;
  /**
   * @minLength 0
   * @maxLength 32
   */
  Password: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  Name: string;
  IsValid?: boolean;
  /** @format uuid */
  PhotoId?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   */
  TenantCode?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   * @pattern ^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$
   */
  Email?: string | null;
  Gender?: WalkingTecMvvmCoreGenderEnum;
  /** @pattern ^[1][3456789][0-9]{9}$ */
  CellPhone?: string | null;
  /**
   * @minLength 0
   * @maxLength 30
   * @pattern ^[-0-9\s]{8,30}$
   */
  HomePhone?: string | null;
  /**
   * @minLength 0
   * @maxLength 200
   */
  Address?: string | null;
  /** @pattern ^[0-9]{6,6}$ */
  ZipCode?: string | null;
  Team?: WanGongModelDbSysTeam;
  /** @format uuid */
  TeamId?: string | null;
}

export enum WalkingTecMvvmCoreGenderEnum {
  Male = "Male",
  Female = "Female",
}

export enum WalkingTecMvvmCoreSortDir {
  Asc = "Asc",
  Desc = "Desc",
}

export interface WalkingTecMvvmCoreSortInfo {
  Property?: string | null;
  Direction?: WalkingTecMvvmCoreSortDir;
}

export enum WanGongModelBillExecuteAction {
  Value开始执行 = "开始执行",
  Value记录日志 = "记录日志",
  Value取消执行 = "取消执行",
  Value执行成功 = "执行成功",
  Value执行失败 = "执行失败",
}

export enum WanGongModelBillProcessStatus {
  Value待审核 = "待审核",
  Value待处理 = "待处理",
  Value处理中 = "处理中",
  Value处理完成 = "处理完成",
  Value处理失败 = "处理失败",
  Value已取消 = "已取消",
}

export enum WanGongModelBillWorkflowStatus {
  Value待审核 = "待审核",
  Value通过 = "通过",
  Value拒绝 = "拒绝",
  Value已取消 = "已取消",
  Value已完成 = "已完成",
}

export interface WanGongModelDbSysTeam {
  /** @format uuid */
  ID?: string;
  /** @format uuid */
  ParentId?: string | null;
  Children?: WanGongModelDbSysTeam[] | null;
  HasChildren?: boolean;
  /**
   * @minLength 0
   * @maxLength 128
   */
  Name: string;
  Description?: string | null;
}

export interface WanGongModelDbSysUsdtAccount {
  /** @format uuid */
  ID?: string;
  /** @format date-time */
  CreateTime?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   */
  CreateBy?: string | null;
  /** @format date-time */
  UpdateTime?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   */
  UpdateBy?: string | null;
  /**
   * @minLength 0
   * @maxLength 64
   */
  Name: string;
  /**
   * @minLength 0
   * @maxLength 256
   */
  Address: string;
  /** @format double */
  Balance?: number;
  Team?: WanGongModelDbSysTeam;
  /** @format uuid */
  TeamId?: string | null;
  IsEnabled?: boolean;
}

export interface WanGongModelDbSysUsdtTransferRequestBill {
  /** @format uuid */
  ID?: string;
  /** @format date-time */
  CreateTime?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   */
  CreateBy?: string | null;
  /** @format date-time */
  UpdateTime?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   */
  UpdateBy?: string | null;
  Applicant?: WalkingTecMvvmCoreFrameworkUser;
  /** @format uuid */
  ApplicantId?: string | null;
  Account?: WanGongModelDbSysUsdtAccount;
  /** @format uuid */
  AccountId?: string | null;
  /**
   * @minLength 0
   * @maxLength 256
   */
  TargetAddress: string;
  /** @format double */
  Amount?: number;
  /** @format date-time */
  RequestTime?: string;
  /**
   * @minLength 0
   * @maxLength 512
   */
  Remark?: string | null;
  WorkflowStatus?: WanGongModelBillWorkflowStatus;
  ProcessStatus?: WanGongModelBillProcessStatus;
  Executor?: WalkingTecMvvmCoreFrameworkUser;
  /** @format uuid */
  ExecutorId?: string | null;
  /** @format date-time */
  ProcessTime?: string | null;
  /** @format date-time */
  TransactionTime?: string | null;
  /**
   * @minLength 0
   * @maxLength 256
   */
  TransactionHash?: string | null;
  Team?: WanGongModelDbSysTeam;
  /** @format uuid */
  TeamId?: string | null;
}

export interface WanGongModelRequestBillExecuteRequest {
  /**
   * USDT转账申请单ID
   * @format uuid
   */
  BillId?: string;
  Action: WanGongModelBillExecuteAction;
  /** 附加信息或备注 */
  Message?: string | null;
  /**
   * USDT交易发生的时间
   * @format date-time
   */
  TransactionTime?: string | null;
  /**
   * USDT链上交易Hash
   * @minLength 0
   * @maxLength 256
   */
  TransactionHash?: string | null;
}

export interface WanGongViewModelSysUsdtTransferRequestBillVmsSysUsdtTransferRequestBillSearcher {
  /** @format int32 */
  Page?: number;
  /** @format int32 */
  Limit?: number;
  IsPlainText?: boolean | null;
  IsEnumToString?: boolean | null;
  SortInfo?: WalkingTecMvvmCoreSortInfo;
  /** @format uuid */
  ApplicantId?: string | null;
  /** @format uuid */
  AccountId?: string | null;
  AccountAddress?: string | null;
  TargetAddress?: string | null;
  WorkflowStatus?: WanGongModelBillWorkflowStatus;
  ProcessStatus?: WanGongModelBillProcessStatus;
  /** @format uuid */
  ExecutorId?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   */
  CreateBy?: string | null;
  /** @format uuid */
  TeamId?: string | null;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      return data;
    });
  };
}

/**
 * @title USDT
 * @version v1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description 密码请使用MD5加密
     *
     * @tags Account
     * @name AccountLoginjwt
     * @summary 登录
     * @request POST:/api/_account/loginjwt
     * @secure
     */
    accountLoginjwt: (
      data: WalkingTecMvvmAdminApiSimpleLogin,
      query?: {
        "api-version"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/_account/loginjwt`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 默认传递空对象{}会查询当前账号有权限查看的所有申请单, 客户端执行任务建议携带ProcessStatus参数
     *
     * @tags SysUsdtTransferRequestBill
     * @name SysusdttransferrequestbillSearch
     * @summary 查询USDT转账申请单
     * @request POST:/api/sysusdttransferrequestbill/search
     * @secure
     */
    sysusdttransferrequestbillSearch: (
      data: WanGongViewModelSysUsdtTransferRequestBillVmsSysUsdtTransferRequestBillSearcher,
      query?: {
        "api-version"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/sysusdttransferrequestbill/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 执行USDT转账申请单, 需要传递申请单ID和执行动作Action. 返回值为200表示允许客户端执行申请动作, 其它值禁止执行申请动作, 具体原因参考返回信息 <br/>客户端仅允许在 ProcessStatus == '待处理' 状态下执行交易操作 <br/> 业务处理中可以提交运行日志到服务端, 无视ProcessStatus状态 <br/> 客户端一旦反馈执行结果(无论是取消执行、执行失败还是执行成功)完成, 服务端将不会再允许执行任何操作
     *
     * @tags SysUsdtTransferRequestBill
     * @name SysusdttransferrequestbillExecute
     * @summary 执行交易
     * @request POST:/api/sysusdttransferrequestbill/execute
     * @secure
     */
    sysusdttransferrequestbillExecute: (
      data: WanGongModelRequestBillExecuteRequest,
      query?: {
        "api-version"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        TiaoTaoHelperModelsResult1WanGongModelDbSysUsdtTransferRequestBillWanGongModelVersion1000CultureNeutralPublicKeyTokenNull,
        any
      >({
        path: `/api/sysusdttransferrequestbill/execute`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
