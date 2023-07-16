/**
 * 应用描述
 */

import { IPublicTypeBlockSchema } from "./block-schema";
import { IPublicTypeComponentSchema } from "./component-schema";
import { IPublicTypePageSchema } from "./page-schema";


export interface IPublicTypeProjectSchema {
    id?: string;
    /**
     * 当前应用协议版本号
     */
    version: string;
    /**
     * 当前应用所有组件映射关系
     */
    componentsMap: IPublicTypeComponentsMap;
    /**
     * 描述应用所有页面、低代码组件的组件树
     * 低代码业务组件树描述
     * 是长度固定为 1 的数组，即数组内仅包含根容器的描述（低代码业务组件容器类型）
     */
    componentsTree: IPublicTypeRootSchema[];
    /**
   * 国际化语料
   */
    i18n?: any;
    /**
     * 应用范围内的全局自定义函数或第三方工具类扩展
     */
    utils?: any;
    /**
     * 应用范围内的全局常量
     */
    constants?: any;
    /**
     * 应用范围内的全局样式
     */
    css?: string;
    /**
     * 当前应用的公共数据源
     */
    dataSource?: any;
    /**
     * 当前应用配置信息
     *
     * TODO: 需要在后续版本中移除 `Record<string, unknown>` 类型签名
     */
    config?:  Record<string, unknown>;
    /**
     * 当前应用元数据信息
     */
    meta?: Record<string, any>;
  }

  /**
   * 组件树
   */
  export type IPublicTypeRootSchema = IPublicTypePageSchema | IPublicTypeComponentSchema | IPublicTypeBlockSchema;

  /**
   * 组件映射关系
   */
  export type IPublicTypeComponentsMap = Array<IPublicTypeProCodeComponent | IPublicTypeLowCodeComponent>;

  export interface IPublicTypeProCodeComponent  {
    componentName: string;
    package: string;
    version: string;
    destructuring: string;
    exportName: string;
    subName: string;
  }

  export interface IPublicTypeLowCodeComponent {
    /**
     * 研发模式
     */
    devMode: 'lowCode';
    /**
     * 组件名称
     */
    componentName: string;
  }