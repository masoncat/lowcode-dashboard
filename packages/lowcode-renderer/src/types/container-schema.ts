import { IPublicTypeNodeSchema } from "./node-schema";

/**
 * 容器结构描述
 */
export interface IPublicTypeContainerSchema extends IPublicTypeNodeSchema {
  /**
   * 'Block' | 'Page' | 'Component';
   */
  componentName: string;
  /**
   * 文件名称
   */
  fileName: string;
  /**
   * @todo 待文档定义
   */
  meta?: Record<string, unknown>;
  /**
   * 容器初始数据
   */
  state?: {
    [key: string]: unknown;
  };
  /**
   * 自定义方法设置
   */
  methods?: {
    [key: string]: any;
  };
  /**
   * 生命周期对象
   */
  lifeCycles?: {
    // @todo 生命周期对象建议改为闭合集合
    [key: string]: any;
  };
  /**
   * 样式文件
   */
  css?: string;
  /**
   * 异步数据源配置
   */
  dataSource?: any;
  /**
   * 低代码业务组件默认属性
   */
  defaultProps?: any;
}
