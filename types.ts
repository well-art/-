// 基礎文件介面
export interface BaseDocument {
  id: string;
  title: string;
  date: string;
  url: string; // Google Doc URL for preview
  description: string; // 文件目的說明
  category: string; // 所屬分類 ID
}

// 規章制度資料結構
export interface Regulation extends BaseDocument {
  isNew?: boolean;
}

// 流程圖資料結構
export interface ParticleFlow extends BaseDocument {}

// 共用表格結構
export interface SharedForm extends BaseDocument {}

// 分類定義介面
export interface CategoryDefinition {
  id: string;
  name: string;
}

// 分類枚舉
export enum SectionType {
  REGULATIONS = 'regulations',
  FLOWCHARTS = 'flowcharts',
  FORMS = 'forms',
}