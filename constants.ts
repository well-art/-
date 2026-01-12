import { Regulation, ParticleFlow, SharedForm, CategoryDefinition } from './types';

// ==========================================
// CONFIGURATION (設定)
// ==========================================
export const APP_CONFIG = {
  PASSWORD: '2693988',
  COLORS: {
    PRIMARY: '#24a145',
    SECONDARY: '#595656',
  },
  CONTACT_EMAIL: 'admin@company.com',
};

// ==========================================
// CATEGORY DEFINITIONS (分類定義)
// ==========================================

export const REGULATION_CATEGORIES: CategoryDefinition[] = [
  { id: 'org', name: '組織系列' },
  { id: 'tech', name: '技術系列' },
  { id: 'finance', name: '財務系列' },
  { id: 'marketing', name: '行銷系列' },
  { id: 'integrity', name: '品格系列' },
];

export const FLOWCHART_CATEGORIES: CategoryDefinition[] = [
  { id: 'dept1', name: '一部門' },
  { id: 'dept2', name: '二部門' },
  { id: 'dept3', name: '三部門' },
  { id: 'dept4', name: '四部門' },
  { id: 'dept5', name: '五部門' },
  { id: 'dept6', name: '六部門' },
  { id: 'dept7', name: '七部門' },
];

export const FORM_CATEGORIES: CategoryDefinition[] = [
  { id: 'docs', name: '文書檔案' },
  { id: 'seals', name: '印鑑相關' },
  { id: 'finance_form', name: '財務相關' },
  { id: 'hr', name: '人事相關' },
  { id: 'pr', name: '公關相關' },
  { id: 'mgmt', name: '管理相關' },
  { id: 'profit', name: '穩盈相關' },
];

// ==========================================
// REAL DATA (真實資料)
// ==========================================

export const REGULATIONS_DATA: Regulation[] = [
  // --- 組織系列 (Organization) - 保留原有資料 ---
  { 
    id: 'reg_org_0', 
    title: '0. 工作規則', 
    date: '2024-05-20', 
    url: 'https://drive.google.com/file/d/162Ypn3-kp7ENhSdJ2KByYrH3zWxyPCdl/preview',
    description: '規範勞資雙方權利義務，包含工時、休假、獎懲與福利等重要從業準則。',
    category: 'org',
    isNew: true 
  },
  { 
    id: 'reg_org_1', 
    title: '1. 目標與目的規章', 
    date: '2024-05-20', 
    url: 'https://docs.google.com/document/d/1eTqS3bMABIexMjFmjighRF-932K-iwYtxGCuxTqi7SA/preview',
    description: '明確定義公司的短期目標與長期願景，確保全員方向一致，聚焦核心價值。',
    category: 'org'
  },
  { 
    id: 'reg_org_2', 
    title: '2. 公司歷史規章', 
    date: '2024-05-20', 
    url: 'https://docs.google.com/document/d/1sqckdA0LorOmgAPLTPVcd5IX9glpY6JrCnDpLE011BU/preview',
    description: '記錄公司發展歷程、重要里程碑與企業文化演變，傳承企業精神。',
    category: 'org'
  },
  { 
    id: 'reg_org_3', 
    title: '3. 最終有價值產品規章', 
    date: '2024-05-20', 
    url: 'https://docs.google.com/document/d/1LkRpu50VcovwOldcXcVf62ZjN-Vc0ghpha82SM2XSx8/preview',
    description: '定義公司各職位最終應交付的有價值產品(VFVP)之標準與品質要求。',
    category: 'org'
  },
  { 
    id: 'reg_org_4', 
    title: '4. 組織圖使用規章', 
    date: '2024-05-20', 
    url: 'https://docs.google.com/document/d/1Uo1MSRM_Wk60sPmbzSRisHozcB5aEYn6y0C3sE4XmdY/preview',
    description: '闡述組織架構圖之閱讀方式、職權指揮鏈與部門功能劃分原則。',
    category: 'org'
  },
  {
    id: 'reg_org_5',
    title: '5. 各課的職責',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1ku0Ej2LLShAs8LZzGINfrTEOmOVT2U422_cU4DoYAsQ/preview',
    description: '詳細列出各課級單位的職掌範圍、工作重點與責任歸屬。',
    category: 'org'
  },
  {
    id: 'reg_org_6',
    title: '6. 每週職員會議規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1ohWmuWllovNUWZ-n_q9jOXY2-cUC-ACAUQJ8sEyCXZQ/preview',
    description: '規範每週例會的進行流程、報告事項與決議追蹤機制。',
    category: 'org'
  },
  {
    id: 'reg_org_7',
    title: '7. 書面溝通規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1iaUQH5ld4MwWAbUg7Cnaw9EXpm6yCSTqj-T9XUUzpX0/preview',
    description: '定義內部文書往來的格式、傳遞路徑與簽核權限，確保資訊準確傳達。',
    category: 'org'
  },
  {
    id: 'reg_org_8',
    title: '8. 命令規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1Tc1y9xmOER4fa6lJ0JR5YHlGpYI13RDrb585Xi4Mg5w/preview',
    description: '闡述上級下達命令的標準程序與部屬接收指令後的執行回報準則。',
    category: 'org'
  },
  {
    id: 'reg_org_9',
    title: '9. CSW規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1lU7gyS4a1zoKhOJA4_WUqelVHQ0pr2fiFUdxGPuLrI8/preview',
    description: '完成職員工作（Completed Staff Work）的標準定義與交付品質要求。',
    category: 'org'
  },
  {
    id: 'reg_org_10',
    title: '10. 工作資料夾規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1LL5FQQwiqjJf8MaXXUwUPBhqEmDSmhfKm95CcyEpDPI/preview',
    description: '規範個人工作資料的分類、歸檔與維護方式，確保知識資產保存。',
    category: 'org'
  },
  {
    id: 'reg_org_11',
    title: '11. 工作資料夾檢視規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1Z-A26U00KEfRUfp2pGWUmHVkU1N_lElXT3yCT790jZw/preview',
    description: '主管定期檢視部屬工作資料夾的標準流程與評核重點。',
    category: 'org'
  },
  {
    id: 'reg_org_12',
    title: '12. 如何撰寫規章的規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1c3sAQv1uzgKfm3w3jPlLBdlzXlOfv3SIBVPxLRursIo/preview',
    description: '制定公司內部規章文件的標準格式、撰寫風格與發布流程。',
    category: 'org'
  },
  {
    id: 'reg_org_13',
    title: '13. 統計曲線規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1qNhw6b_9OM3q-HSjuZbNsK6svpiwFMRRyd0TGsNTfEU/preview',
    description: '說明如何繪製與解讀績效統計曲線，以數據輔助管理決策。',
    category: 'org'
  },
  {
    id: 'reg_org_14',
    title: '14. 職員出勤規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/17wdy8YJ-IeBDUjsmLi0pSYYF572BPvH3_WRaHUL3ctM/preview',
    description: '詳細規定上下班打卡、遲到早退、加班與休假申請之管理辦法。',
    category: 'org'
  },
  {
    id: 'reg_org_15',
    title: '15. 如何修改公司管理工具規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1nzs_RmDkEtFRlzozNbHthElDOJTH1H9ulqD33Gtj54g/preview',
    description: '定義內部管理系統與工具的變更申請、測試與上線流程。',
    category: 'org'
  },
  {
    id: 'reg_org_16',
    title: '16. 辦公室用品操作與管理規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1INOPF34RMO_gUh5gegOBNSwK101r9Z78e17Er8E7T9Y/preview',
    description: '規範辦公設備與耗材的領用、維護及盤點管理規則。',
    category: 'org'
  },
  {
    id: 'reg_org_17',
    title: '17. 印鑑與負責人簽名管理規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1R7dp1eWYWbbhM4SoHly1dZPdHs0pShHL3OWjMVGcuRI/preview',
    description: '嚴格控管公司大小章及負責人簽名之使用權限與用印紀錄。',
    category: 'org'
  },
  {
    id: 'reg_org_18',
    title: '18. 協調手冊',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1NfBiBdyS7Pf4mlhbsYuZrleas88Ga_t-Sbw4OVfyT8E/preview',
    description: '提供跨部門溝通與衝突解決的指導原則與標準作業程序。',
    category: 'org'
  },
  {
    id: 'reg_org_19',
    title: '19. 如何移轉職責',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/11iA-peENwzDCVinKlT_FMuEjD6hzpjyY9qPAY9XTNtw/preview',
    description: '規範職務輪調或交接時的職責清單盤點與移轉確認流程。',
    category: 'org'
  },
  {
    id: 'reg_org_20',
    title: '20. 如何開始在新職位上運作',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/10Yc-fZfdW_CtTuARuPov0NVvM95YNSTDZ_eVfuYb3-o/preview',
    description: '新進人員或職務異動者在新崗位上的快速上手指南與初期目標設定。',
    category: 'org'
  },
  {
    id: 'reg_org_21',
    title: '21. 企業主10年戰略方針',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1FkCVnLRd0mhCGDsbFaEvoyVZXSDn7NzXwCBhvw7Miss/preview',
    description: '揭示企業未來十年的宏觀發展藍圖與階段性戰略目標。',
    category: 'org'
  },
  {
    id: 'reg_org_22',
    title: '22. 管理等級表(2025年版)',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1_IRQ1fhBttZnYvCnnwtXELGCFAaOYhKrVQFhxdewc3I/preview',
    description: '定義公司內部管理職級體系與對應的職權範圍。',
    category: 'org'
  },
  {
    id: 'reg_org_23',
    title: '23. 個人職務說明培訓',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1JmFMkUXkYe2k3SRL0tNG_IbBl5KtwOr-IJZy48-q7RA/preview',
    description: '針對個人職務說明書內容進行的教育訓練規劃與認證機制。',
    category: 'org'
  },
  {
    id: 'reg_org_24',
    title: '24. 主管的責任',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1eQbbZOSe61-zxRrsyPoUQU9ygNIQX6EgOtcADgSOM4A/preview',
    description: '明確界定各級主管應負的領導統御、人才培育與績效當責。',
    category: 'org'
  },
  {
    id: 'reg_org_25',
    title: '25. 腦力激盪',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1zDHVImzFwPgxILJje9qjSQFZu5OiQ_WtHlWNFOuQ0PM/preview',
    description: '規範創意發想會議的進行方式，鼓勵創新與開放討論的文化。',
    category: 'org'
  },
  {
    id: 'reg_org_26',
    title: '26. 應付與組織規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1Ec6bN0ePj2iLtJNicWaimW71AeynIfgT7REUyV5bzJw/preview',
    description: '處理組織內部突發狀況或外部危機的應變機制與權責劃分。',
    category: 'org'
  },
  {
    id: 'reg_org_27',
    title: '27. 年度計畫規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1LSoCk9inoTTUC4BA-yXCss6HiU9mXwapfAOXkzi-0Gg/preview',
    description: '規範年度營運計畫的制定、審核、執行與修正流程。',
    category: 'org'
  },
  {
    id: 'reg_org_28',
    title: '28. 集團行事曆規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1VC2NhVz4pfi0dMLiIxrIWkhx2iWLH7BReCfDRoY2xto/preview',
    description: '統一管理集團重要活動、會議與休假日的行事曆發布規則。',
    category: 'org'
  },
  {
    id: 'reg_org_29',
    title: '29. 職員終止契約與職務移轉規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1O43I83txCawPkKjiD0nOecEbSgrGWtnmoucxmnFq6nM/preview',
    description: '詳述員工離職時的契約終止程序、資產繳回與工作交接規範。',
    category: 'org'
  },
  {
    id: 'reg_org_30',
    title: '30. 職務說明_公版',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/13y4I-WmtBJZM7Gf2-5Uds0LqfwQYP16n/preview',
    description: '提供標準化的職務說明書範本，用於定義各職位的工作內容。',
    category: 'org'
  },
  {
    id: 'reg_org_31',
    title: '31. 職務職責與運行規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/11KSGIeCLfk97jXwmP09DMkhhl0z2O9fwxBoTtjmj54s/preview',
    description: '深入解析職務職責的履行方式與日常運行準則。',
    category: 'org'
  },
  {
    id: 'reg_org_32',
    title: '32. 出差費用管理辦法規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1DiCgOu38eg1RpdBXQjUY2qr6RcWn9Uw0ZJesmVnzWCQ/preview',
    description: '規定國內外出差的申請流程、費用報支標準與核銷單據要求。',
    category: 'org'
  },
  {
    id: 'reg_org_33',
    title: '33. 職務移轉規章附件',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1-yTTqGmEaMeq_hVA5wvtuCKfa5hj6cYiBLB-FpGytjA/preview',
    description: '包含職務移轉過程中需填寫的檢核表與相關輔助文件。',
    category: 'org'
  },
  {
    id: 'reg_org_34',
    title: '34. 投資客戶資料管理規則',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/13NNiO_cmzUF2T3egu8phmUijc-lFKASpeNjv-4pjobg/preview',
    description: '嚴格規範投資客戶個資的蒐集、處理、利用與保密措施。',
    category: 'org'
  },
  {
    id: 'reg_org_35',
    title: '35. 戰略與戰術會議規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1wMquAiR4Sso1svSW4yub_Bw1XjaZXe47JubtgdjrtgM/preview',
    description: '定義高階戰略會議與執行層面戰術會議的區別與運作模式。',
    category: 'org'
  },
  {
    id: 'reg_org_36',
    title: '36. 企業文件審核規範',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/14rlMJ89loSK-S_wFWkkKkM_xXc2TRKETlzKNDnohRew/preview',
    description: '建立對外發布或內部重要文件的層級審核機制與標準。',
    category: 'org'
  },
  {
    id: 'reg_org_37',
    title: '37. 簽約獎金政策規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/18D1Dp3E3zfajABxt8SenCrOY_in4ZWBziJQLU2mwbPs/preview',
    description: '說明業務或專案簽約達成後的獎金計算方式與發放條件。',
    category: 'org'
  },
  {
    id: 'reg_org_38',
    title: '38. 專案管理規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1eSRecDt0eCfGVVz0ggKvq35KBXEOsNRHmuFahvH9RXg/preview',
    description: '規範專案從立案、執行、監控到結案的全生命週期管理流程。',
    category: 'org'
  },
  {
    id: 'reg_org_39',
    title: '39. 合約規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1OO2wFVBE0IO6pPie8nCVRnd3BysVr2FcK13TuB6m_dc/preview',
    description: '定義公司各類合約的擬定、審閱、用印與歸檔管理辦法。',
    category: 'org'
  },
  {
    id: 'reg_org_40',
    title: '40. 年度目標展開與執行流程規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1zwgQyS4rba3aayyNZ8XQvM2wUQa6z1csKlTcozGi_bM/preview',
    description: '說明如何將公司年度目標拆解為部門與個人KPI的執行流程。',
    category: 'org'
  },
  {
    id: 'reg_org_41',
    title: '41. 人力招募與任用',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/13aSUbNn7gz1E-Gcn0Mlp5Tt8uTd6ukdWCXaZPNhE54E/preview',
    description: '規範人才需求申請、面試甄選、核薪至報到任用的標準程序。',
    category: 'org'
  },
  {
    id: 'reg_org_42',
    title: '42. 職員內部公關',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1vIk5lgpCBvVqkjR299-uq0mglQ4L_JFMVb8B96p1ljc/preview',
    description: '建立良好的內部溝通管道與員工關係維護活動之指導原則。',
    category: 'org'
  },
  {
    id: 'reg_org_43',
    title: '43. 感謝小卡',
    date: '2024-05-20',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSeZvkR5M8M31ryjYwSzj5f3tRnNFf17GVcmsqHo0VTDtufc2w/viewform',
    description: '推動內部感恩文化，提供同仁間互相表達感謝與肯定的機制。',
    category: 'org'
  },
  {
    id: 'reg_org_44',
    title: '44. 穩盈策略顧問股份有限公司_行政管理等級表',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/14ekkF3a2lNY5VGtdep5u6v4-usQ-lkeePc4txia_nHY/preview',
    description: '專屬於穩盈策略顧問的行政職級劃分與管理權限對照表。',
    category: 'org'
  },
  {
    id: 'reg_org_45',
    title: '45. 企業宣傳與教育發布規範',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1lBqwNgG_fX2mlANTlYeDgITpHOxWD8sVgv43t979nWk/preview',
    description: '規範對外行銷宣傳與對內教育訓練教材的製作與發布標準。',
    category: 'org'
  },
  {
    id: 'reg_org_46',
    title: '46. 職災處理辦法',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1vFL9JKH89MYZxtRJl7wOz88-I-Mna1-30y6inRJ9FIo/preview',
    description: '定義職業災害的通報、調查、醫療協助與補償申請流程。',
    category: 'org'
  },
  {
    id: 'reg_org_47',
    title: '47. 文書檔案管理',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1Wq7q3OQp-0LqPYOFmoUvmct5vyMiY2qd/preview',
    description: '規範公司各類紙本與電子檔案的編碼、存放、調閱與銷毀規則。',
    category: 'org'
  },
  {
    id: 'reg_org_48',
    title: '48. 文件審查規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/13BVLST5ywds1CTy91HU2498WJ2D1j9NRipKS2pJysRs/preview',
    description: '建立嚴謹的文件審查機制，確保發行文件的正確性與合規性。',
    category: 'org'
  },
  {
    id: 'reg_org_49',
    title: '49. 職員訓練規範與必要性',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1myS9midHkhTC4WIrJNMRld1wsB1sJ56OGxAttYs061g/preview',
    description: '闡述員工教育訓練的體系、必修課程與學習成效評估標準。',
    category: 'org'
  },
  {
    id: 'reg_org_50',
    title: '50. 會議規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1lr1oE7VFL8Csr5bWv00aC_-aPI-e9UWYz3PuGhIFJOI/preview',
    description: '規範各類會議的召集、議程安排、記錄與決議事項追蹤管理。',
    category: 'org'
  },
  {
    id: 'reg_org_51',
    title: '51. 流程圖製作與審核',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1zSHcN0Ticx7o375NBkU3M4bdYqv9wA2ge5jn8BSKWWU/preview',
    description: '定義標準作業流程圖(SOP)的繪製符號、格式要求與審核上架流程。',
    category: 'org'
  },
  {
    id: 'reg_org_52',
    title: '52. 法律案件責任與協作管理',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/11oKV6mLijdVG5L9cNJdi0wmhce3MKhLp49s5DB05XOQ/preview',
    description: '規範涉及法律訴訟案件的處理權責、外部律師協作與進度回報機制。',
    category: 'org'
  },
  {
    id: 'reg_org_53',
    title: '53. 獎金與激勵辦法',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1LaZNZfvdwmx3SJicbm8l22j-UHfGJPG7pZzUeEcgVz0/preview',
    description: '說明各類績效獎金、專案獎金的核發標準與激勵制度設計原則。',
    category: 'org'
  },
  {
    id: 'reg_org_54',
    title: '54. 績效管理與考核辦法',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1o8f_penur56ymLaKpJke3cYBGrcjqxB6KDjFSI7q8NE/preview',
    description: '建立公平透明的績效考核制度，包含目標設定、面談與結果應用。',
    category: 'org'
  },
  {
    id: 'reg_org_55',
    title: '55. 薪酬結構辦法',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1qJfjUte_VEVqwMjIYi1vA9Lm_8sRYOD34zBiwpaRUgg/preview',
    description: '定義公司的薪資架構，包含本薪、津貼、獎金等項目的組成原則。',
    category: 'org'
  },
  {
    id: 'reg_org_56',
    title: '56. 職員培訓辦法',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1I-RB7rBn99vvmQMNyh9BVevA13UW3po4LMU6iGZ5Wno/preview',
    description: '詳細規範內外部培訓的申請、費用補助、公假核給與受訓義務。',
    category: 'org'
  },
  {
    id: 'reg_org_57',
    title: '57. 職員發展與晉升辦法',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1NnMTD1e8xLOemtLwQzqVJhkHIm1FX9dvnBPChEGfHAo/preview',
    description: '規劃員工職涯發展路徑，明確定義晉升條件、評選流程與資格認證。',
    category: 'org'
  },

  // --- 技術系列 (Technology) - 保留原有資料 ---
  {
    id: 'reg_tech_1',
    title: '1. 公佈欄發布規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1-xUgpXYp5hVb4IYzvmq4KJtxyOwa9Z00YBytMvqPi54/preview',
    description: '規範公司實體與數位公佈欄的資訊張貼、管理維護與下架規則。',
    category: 'tech'
  },
  {
    id: 'reg_tech_2',
    title: '2. 應收帳款分期客戶合約到期展期',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1Ksv32RKYyyloO12G1adtfgZ7A3WQTTNzc_olZAXExLs/preview',
    description: '處理客戶分期合約到期後的續約評估、展期條件與簽約作業流程。',
    category: 'tech'
  },
  {
    id: 'reg_tech_3',
    title: '3. 帳務系統操作手冊',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1xMCeaP-ayd9O6AGueHyTMRS0bbJGvPGLZmz4JNoJslI/preview',
    description: '提供公司內部帳務管理系統的完整操作指南與故障排除說明。',
    category: 'tech'
  },
  {
    id: 'reg_tech_4',
    title: '4. 不動產鑑價作業規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1_82d8VjrequcHkIJKNryNNBlOTBYp7Cs9O3ReyChSPU/preview',
    description: '建立標準化的不動產價值評估流程、參考依據與鑑價報告製作規範。',
    category: 'tech'
  },
  {
    id: 'reg_tech_5',
    title: '5. 財富奧秘之旅玩家指南規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/15S_ZiwellhyuMvi_6ZqkU9UIhjHYvx_beaeY_5P4fj8/preview',
    description: '財富遊戲化教育訓練的學員參與規則、積分機制與獎勵辦法。',
    category: 'tech'
  },
  {
    id: 'reg_tech_6',
    title: '6. 銀行金鑰管理規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1meaTo3hZrCpbVr3utXUu_2G_WI-fAYElqq2HaYv2AKE/preview',
    description: '嚴格控管網路銀行憑證(金鑰)的保管、使用權限與定期更換機制。',
    category: 'tech'
  },
  {
    id: 'reg_tech_7',
    title: '7. 客戶借款違約金減免規範',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/17HSjUqnDgEdTwR3dr_hZjs8fMoTNEcSC/preview',
    description: '定義客戶申請違約金減免的審核標準、授權額度與簽核流程。',
    category: 'tech'
  },
  {
    id: 'reg_tech_8',
    title: '8. 案件授信準則',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1jD6f8k69cWaGDYW599A59oBXUXnPki4J/preview',
    description: '建立貸款案件的風險評估指標、核貸條件與授信額度審查準則。',
    category: 'tech'
  },
  {
    id: 'reg_tech_9',
    title: '9. 案件催收壓力等級表',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1SMH-AgOZAKoTICJj9OF-j6mPeLBx67lJ/preview',
    description: '根據逾期天數與還款狀況，將案件分類並對應不同強度的催收措施。',
    category: 'tech'
  },
  {
    id: 'reg_tech_10',
    title: '10. 個案合約審核及管理辦法',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1LKFe8k9ykFYdW-FKa1cNt2faqG8zczUrOFuNf7EOgZg/preview',
    description: '針對特殊個案合約條款的法務審核流程與後續履約管理規範。',
    category: 'tech'
  },
  {
    id: 'reg_tech_11',
    title: '11. 不動產擔保提供報酬規範',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1TB7iIazCdSpNTQ9xlbU9l4Owa1uYy0R9ZVL9m8aP52k/preview',
    description: '說明第三方提供不動產作為擔保時的報酬計算方式與支付條件。',
    category: 'tech'
  },
  {
    id: 'reg_tech_12',
    title: '12. 案件移轉辦法',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1ZIQ6u0c8melyW2qfIcfQjhNtrHr7RjCqcoBfOoij3HI/preview',
    description: '規範業務人員間案件權益移轉的申請程序、利益分配與責任歸屬。',
    category: 'tech'
  },
  {
    id: 'reg_tech_13',
    title: '13. 投資人會員分級規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1SinDUT_rduYlov2kbs32mhf3V6H-Ra1VcPgvRov1rkE/preview',
    description: '依據投資金額與資歷對投資人進行會員分級，並提供差異化服務。',
    category: 'tech'
  },
  {
    id: 'reg_tech_14',
    title: '14. 投資人投資流程規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1Mwde1iuceOSp-vRpXuGN5Sz8TwgbQ5rLJLEexVMSf8Y/preview',
    description: '詳細說明投資人從評估標的、簽約入資到完成投資的標準作業程序。',
    category: 'tech'
  },
  {
    id: 'reg_tech_15',
    title: '15. 投資人退資流程規章',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1XuOBsViU9XRXkdrWlZm7P9QDu2fY_DxD1brEmnJL5cg/preview',
    description: '規範投資人申請贖回或合約到期退資的申請期限、審核與撥款流程。',
    category: 'tech'
  },
  {
    id: 'reg_tech_16',
    title: '16. 投資通路管理規範',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1Es4kjY_Ka3feA-3Um3WeHkTLtn0AqoqoQ-drOkArrII/preview',
    description: '管理各類投資資金來源渠道的合作模式、佣金制度與績效評估。',
    category: 'tech'
  },
  {
    id: 'reg_tech_17',
    title: '17. 客戶逾期支付利息管理與減免辦法',
    date: '2024-05-20',
    url: 'https://docs.google.com/document/d/1v-PUTO8GOL4Xnca8bY2bGkPZU5ezo4Dd7N-1SWF9l2Q/preview',
    description: '處理客戶逾期利息的計算、催繳程序以及特殊情況下的減免申請規範。',
    category: 'tech'
  },

  // --- 財務系列 (Finance) ---
  {
    id: 'reg_fin_1',
    title: '1. 財務計畫3.0規章',
    date: '2024-06-01',
    url: 'https://docs.google.com/document/d/1d1Y96RYF7BVznr67jlPZeK-G7l0NoLJCmJzS48js-uU/preview',
    description: '規範公司財務規劃、預算編列及執行監控的第三版核心準則。',
    category: 'finance'
  },
  {
    id: 'reg_fin_2',
    title: '2. 集團內部借貸規則',
    date: '2024-06-01',
    url: 'https://docs.google.com/document/d/1Y4Z7HRLAmPXZst3Bzt3ZFLpgszUcUqFQJyBoN9c_fNE/preview',
    description: '管理集團各子公司間資金調度的借貸程序、利息計算與還款條件。',
    category: 'finance'
  },
  {
    id: 'reg_fin_3',
    title: '3. 借款案件報價與獎勵規章',
    date: '2024-06-01',
    url: 'https://docs.google.com/document/d/1ZvVhP_00-W_KpbqmSRcZybi7TMb49YpFAHB7aPK4KnA/preview',
    description: '定義借款案件的利率定價模型以及業務推廣的獎勵分配機制。',
    category: 'finance'
  },
  {
    id: 'reg_fin_4',
    title: '4. 財務及會計規章',
    date: '2024-06-01',
    url: 'https://docs.google.com/document/d/1alDWigBxatL-w9pdk_OgBeRI7IH5uwqwWeiRbliqOD8/preview',
    description: '建立符合法規的會計帳務處理原則、財務報表編製與稅務申報規範。',
    category: 'finance'
  },

  // --- 行銷系列 (Marketing) ---
  {
    id: 'reg_mkt_1',
    title: '1. 行銷外包規定',
    date: '2024-06-01',
    url: 'https://docs.google.com/document/d/1HanQAEhbq2AwcUQ6si-zVPObSR00Hgxf-8vQGmJC8wA/preview',
    description: '規範行銷專案委外執行的廠商遴選、合約簽訂、驗收與成效評估流程。',
    category: 'marketing'
  },

  // --- 品格系列 (Integrity) ---
  {
    id: 'reg_int_1',
    title: '1. 示知報告規章',
    date: '2024-06-01',
    url: 'https://docs.google.com/document/d/1DQwl2vBspWVvss4bI_8jblDjPAm9-C7s4T9jGPgdteE/preview',
    description: '用於主動通報異常狀況、潛在風險或道德疑慮的標準報告程序。',
    category: 'integrity'
  },
  {
    id: 'reg_int_2',
    title: '2. 品格梯度階層規章',
    date: '2024-06-01',
    url: 'https://docs.google.com/document/d/1fdNprYV3AAqPJ5Lb-DgroRNose8N1vzOpoT1tqXbUMg/preview',
    description: '定義企業內部品格道德的層次標準，作為員工行為準則與獎懲依據。',
    category: 'integrity'
  },
  {
    id: 'reg_int_3',
    title: '3. 狀況公式',
    date: '2024-06-01',
    url: 'https://docs.google.com/document/d/1n3NZnFDRYbCKX2HdfmFNzyDXt0uiSi2OUnE9iaBjAN4/preview',
    description: '應用管理技術中的狀況公式，協助同仁判斷處境並採取正確行動。',
    category: 'integrity'
  },
  {
    id: 'reg_int_4',
    title: '4. 如何清字',
    date: '2024-06-01',
    url: 'https://docs.google.com/document/d/1l_y605Cbgb5ov2dR660sHLWi4TMrZK7QuprJqMeqHyk/preview',
    description: '學習技術：指導如何釐清不懂的字詞，提升學習效率與理解能力。',
    category: 'integrity'
  },
  {
    id: 'reg_int_5',
    title: '5. 多事資料',
    date: '2024-06-01',
    url: 'https://docs.google.com/document/d/10Nt-wP8WNBX80ZcLmna7eodAo5J9p-0V97Jvg4wJgZw/preview',
    description: '說明如何識別與處理組織內部的潛在麻煩製造源與負面影響。',
    category: 'integrity'
  },
  {
    id: 'reg_int_6',
    title: '6. 阻止口頭技術規章',
    date: '2024-06-01',
    url: 'https://docs.google.com/document/d/1GjFhHPYZcbLptKCphDnFzevhC5n0tTmuZU6bYrdPS04/preview',
    description: '強調書面溝通的重要性，減少口頭傳達造成的資訊落差與責任不清。',
    category: 'integrity'
  },
  {
    id: 'reg_int_7',
    title: '7. 生存與動機',
    date: '2024-06-01',
    url: 'https://docs.google.com/document/d/1_krjuq4XBAViuTjQM55EgW51TwJ0bks06uyBu6lvg3Q/preview',
    description: '探討個人與組織生存的動力來源，激發員工正向積極的工作態度。',
    category: 'integrity'
  },
  {
    id: 'reg_int_8',
    title: '8. 快速流動行動週期與品格',
    date: '2024-06-01',
    url: 'https://docs.google.com/document/d/1S5dxCdUybg45vQMCQ6t5QJn0xCbH98dwPdnu6Grc8iY/preview',
    description: '結合高效率執行力與高尚品格，建立正向循環的組織行動週期。',
    category: 'integrity'
  },
  {
    id: 'reg_int_9',
    title: '9. 辦公室戀愛管理規章',
    date: '2024-06-01',
    url: 'https://docs.google.com/document/d/1T6yOfQ3vPctMfPnPXr7vr0B1wQOiYOY5czlbEO48KQ8/preview',
    description: '規範辦公室戀情的申報機制與行為準則，避免公私利益衝突。',
    category: 'integrity'
  },
  {
    id: 'reg_int_10',
    title: '10. 檢視職員的必要性',
    date: '2024-06-01',
    url: 'https://docs.google.com/document/d/1FEuce0ZZtDbDjs9LdDljIzl1p8RT1Qtcqfx9lVAEgmQ/preview',
    description: '定期評估職位存在價值與人員適任性的檢核標準。',
    category: 'integrity'
  },
];

export const FLOWCHARTS_DATA: ParticleFlow[] = [
  // --- 一部門 (Dept 1) ---
  { 
    id: 'flow_d1_1', 
    title: '1. 薪資發放粒子流程表', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1debhkhgq-GItRL5_73hLP184O41lrvPQijXTXL5akaU/preview',
    description: '圖解每月薪資結算、審核、稅務扣繳至銀行發放的完整作業流程。',
    category: 'dept1'
  },
  { 
    id: 'flow_d1_2', 
    title: '2. 請假粒子流程表', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1A7gUZfBoFCOIG05gK5n4e9aCaAArmaLH/preview',
    description: '詳細說明員工請假申請、職務代理人確認與主管簽核的步驟。',
    category: 'dept1'
  },

  // --- 二部門 (Dept 2) ---
  { 
    id: 'flow_d2_1', 
    title: '1. 投資人投資粒子流程表', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1osLdqtDlozKHgtQSlnJ54p17yiqXWH277jE3g6AJ6oY/preview',
    description: '展示投資人從諮詢、評估、簽約到資金入帳的標準服務流程。',
    category: 'dept2'
  },
  { 
    id: 'flow_d2_2', 
    title: '2. 投資人退資粒子流程表', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1G7ydw_fUQVtqOnERpv6YGF0BVr5QSHyLP-IfpYSngTw/preview',
    description: '規範退資申請的受理、合約檢視、資金結算與匯款返還步驟。',
    category: 'dept2'
  },

  // --- 三部門 (Dept 3) ---
  { 
    id: 'flow_d3_1', 
    title: '1. 採購單流程表', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1OfZqaBb1Qtf70nP294GgAm9wlz_2TKmQ28MubXyvwQo/preview',
    description: '說明採購需求的提出、詢比議價、訂單發出與驗收付款的流程。',
    category: 'dept3'
  },
  { 
    id: 'flow_d3_2', 
    title: '2. 客戶清償流程表', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1Aj0ywbHU1yEmETEThFRCw0g7vwA8ZMUpOwzUmr-uB3U/preview',
    description: '詳解客戶結清債務的金額試算、繳款確認與清償證明開立步驟。',
    category: 'dept3'
  },
  { 
    id: 'flow_d3_3', 
    title: '3. 財務計畫粒子流程表', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/14g1tBbm0y3CcPher_leU-l4vKxGqha_LMLt4bT0H3ps/preview',
    description: '展示財務預算編列、資金分配與定期績效檢討的循環流程。',
    category: 'dept3'
  },
  { 
    id: 'flow_d3_4', 
    title: '4. 案件催收流程表', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/18tiSDDb__ThxiY8Db8AjCAtOZPSKhcSFmDyVOxPmbxA/preview',
    description: '規範從逾期通知、電話催收、法務函證到強制執行的階段性處置。',
    category: 'dept3'
  },

  // --- 四部門 (Dept 4) ---
  { 
    id: 'flow_d4_1', 
    title: '1. 案件代償流程表', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1lfRdOaJCPXihBizer5SsMYin8Ia_yYmkiwK6NzjyHe8/preview',
    description: '說明代償案件的申請審核、資金代墊與債權移轉確認流程。',
    category: 'dept4'
  },
  { 
    id: 'flow_d4_2', 
    title: '2. 案件對保撥款流程表', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1W3SvKNV9c9oSKrg0gH_qbx5mEIkhlsOaBSLtOUNA8zE/preview',
    description: '詳解核准案件的簽約對保、抵押設定與款項撥付的作業步驟。',
    category: 'dept4'
  },

  // --- 五部門 (Dept 5) ---
  { 
    id: 'flow_d5_1', 
    title: '1. 訓練申請粒子流程表', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1uY4Ha0NnTNnUeDLSc-eJVTy59vl9SNIvsliexrCLvIw/preview',
    description: '展示員工提出培訓需求、主管審核、課程安排與訓後回饋的流程。',
    category: 'dept5'
  },

  // --- 七部門 (Dept 7) ---
  { 
    id: 'flow_d7_1', 
    title: '1. 合約簽立粒子流程表', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1h6lNL7Ndd3njY11bm7f6AT5NmN7244EFdUXOk73Zjo4/preview',
    description: '規範各類合約從草擬、法務審閱、雙方用印到歸檔的標準步驟。',
    category: 'dept7'
  },
  { 
    id: 'flow_d7_2', 
    title: '2. 發布審核粒子流程表', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1LxdbMT10tslZIKkA92RepntSr8qcAptatr5yUGjn1nU/preview',
    description: '說明對外公告或行銷素材的製作、內容審查與發布上架流程。',
    category: 'dept7'
  },
];

export const FORMS_DATA: SharedForm[] = [
  // --- 文書檔案 (Docs) ---
  { 
    id: 'form_doc_1', 
    title: '1. 結案標籤格式', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1xhSOS_syFtsDOGfFzAZPoCo3onUYi-dz/preview',
    description: '專案或案件結案歸檔時，文件夾脊背與封面的標準標籤格式範本。',
    category: 'docs'
  },
  { 
    id: 'form_doc_2', 
    title: '2. 融鎰多孔夾封面命名格式', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1D5a0yClbA4CP53BrWFvTgph4sEUj3jPK/preview',
    description: '統一規範多孔夾封面的命名規則與排版樣式，便利資料檢索。',
    category: 'docs'
  },

  // --- 印鑑相關 (Seals) ---
  { 
    id: 'form_seal_1', 
    title: '1. 印鑑刻製申請單', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1o1FYHaDyp0hg-e8sTuer0vdKAqvJdEGnQaTCatj1POE/preview',
    description: '申請新刻公司章、部門章或職務章時需填寫的標準申請表格。',
    category: 'seals'
  },
  { 
    id: 'form_seal_2', 
    title: '2. 印鑑遺失/報銷申請單', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1f7aIZMYtX-S5ZNcJd5XoR8Z3NMtCFlm8/preview',
    description: '印鑑遺失申報或磨損報廢時使用的正式紀錄與審核單據。',
    category: 'seals'
  },
  { 
    id: 'form_seal_3', 
    title: '3. 用印申請CSW', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1aU1da1CnhxbQAO_BUCgWdaAZM029mVb9/preview',
    description: '符合CSW標準的用印申請文件，確保用印權限與文件內容經完整審核。',
    category: 'seals'
  },

  // --- 財務相關 (Finance) ---
  { 
    id: 'form_fin_1', 
    title: '1. 資金申請單', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1UdVNHe4b4dT9XJkyX0kUUT_OXnPFmacc/preview',
    description: '各部門申請專案資金、採購費用或日常支出的標準請款表格。',
    category: 'finance_form'
  },

  // --- 人事相關 (HR) ---
  { 
    id: 'form_hr_1', 
    title: '1. 招聘需求單', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1chwykCKL08v2k8QzlTZqniP37TUUIl52/preview',
    description: '用人單位提出增補人力需求時，詳述職缺條件與工作內容的申請單。',
    category: 'hr'
  },
  { 
    id: 'form_hr_2', 
    title: '2. 溝通單', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1jwIEgdwQvwUYsjSUlEqRkOC8e0WynBUA/preview',
    description: '公司內部跨部門或上下級間正式書面溝通的標準格式。',
    category: 'hr'
  },
  { 
    id: 'form_hr_3', 
    title: '3. 遵從報告', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1ZD-A5xPpkrGIEP6oxuKGnYkjJkqCbpoJ/preview',
    description: '員工確認已閱讀並理解公司新發布政策或規章的簽署報告。',
    category: 'hr'
  },
  { 
    id: 'form_hr_4', 
    title: '4. 示知報告', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/11R39D2Bd_5UPdnJxbSw7CHunIdsUnDWu/preview',
    description: '主動回報工作進度、異常狀況或潛在問題的標準報告格式。',
    category: 'hr'
  },
  { 
    id: 'form_hr_5', 
    title: '5. CSW', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1yM4C22M7ErtO0hwMLC9Nl9cky6HiCwYa/preview',
    description: '完成職員工作(Completed Staff Work)的標準提案格式，供主管決策使用。',
    category: 'hr'
  },
  { 
    id: 'form_hr_6', 
    title: '6. 職務說明', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1DeQfGr3CFfz9IIdu_VDDXdfDaGavtcj3/preview',
    description: '詳細記錄特定職位的職責範圍、績效指標與所需技能的說明文件。',
    category: 'hr'
  },
  { 
    id: 'form_hr_7', 
    title: '7. 職務移轉兩週工作測試', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/19_ufwOIANpPWNdFjg4h6NWRE11IZtJvI/preview',
    description: '評估職務交接或輪調人員在適應期內工作表現的測試紀錄表。',
    category: 'hr'
  },
  { 
    id: 'form_hr_8', 
    title: '8. 加速員30天挑戰賽任務清單', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1r5un0pHsIkkKPgGKTX_0MEXC97vpg2Q4/preview',
    description: '新進加速員在首月需完成的各項學習任務與挑戰目標檢核表。',
    category: 'hr'
  },
  { 
    id: 'form_hr_9', 
    title: '9. 主管推薦函(通過試用期)', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1RCtF8JUVlgAAnYyPdgM_wios_xmQcQph734hH_MMFrY/preview',
    description: '主管評估新進員工試用期表現，建議予以正式任用的推薦文件。',
    category: 'hr'
  },
  { 
    id: 'form_hr_10', 
    title: '10. 職員晉升-主管推薦函', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1kF5A-z1UIBtMTJQcgFuHtiA9NlsbX32a/preview',
    description: '主管提名優秀部屬晉升職等時填寫的績效舉證與推薦理由書。',
    category: 'hr'
  },
  { 
    id: 'form_hr_11', 
    title: '11. 職員晉升-自我推薦函', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1oYX__cOc5ycyhrfLwP7KSwmvIpL2O8nx/preview',
    description: '員工主動爭取晉升機會，闡述個人貢獻與未來展望的自薦信。',
    category: 'hr'
  },
  { 
    id: 'form_hr_12', 
    title: '12. 部門主管-終止契約訪談表', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1su7ELrkeOIRr7S9QxzYS3v8597yPQCO4/preview',
    description: '主管與離職員工進行最後訪談的紀錄表，用於了解離職原因與交接狀況。',
    category: 'hr'
  },
  { 
    id: 'form_hr_13', 
    title: '13. 離職移轉專案及職位清單', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1cj7yBzIk1qcUvU4OOX9BbtLE85vc2fFJ/preview',
    description: '詳細列出離職員工負責的待辦專案、資產與權限的移轉清單。',
    category: 'hr'
  },

  // --- 公關相關 (PR) ---
  { 
    id: 'form_pr_1', 
    title: '1. 活動紀錄素材需求表', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1pi3k1dCCAPDp-UzEy6wxnJXACH0Z8raU_aRrmxwNxu4/preview',
    description: '申請活動攝影、錄影或文案紀錄時，詳列需求細節的表格。',
    category: 'pr'
  },
  { 
    id: 'form_pr_2', 
    title: '2. 公關需求表', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1KLIjDbDxfOQljzTkPmpzD8Dh9vCBTDv9iQYzn8l39q4/preview',
    description: '各部門申請對外公關發布、媒體聯繫或品牌宣傳資源的需求單。',
    category: 'pr'
  },

  // --- 管理相關 (Mgmt) ---
  { 
    id: 'form_mgmt_1', 
    title: '1. 任命狀', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1uAj3EA2oU9mrsOFcWIbm2vzakTKt80rsxO1k2Jx5bkQ/preview',
    description: '正式發布人事任命、職務調動或晉升公告的標準文件格式。',
    category: 'mgmt'
  },

  // --- 穩盈相關 (Profit) ---
  { 
    id: 'form_profit_1', 
    title: '1. 顧問服務完成確認單', 
    date: '2024-06-01', 
    url: 'https://docs.google.com/document/d/1u3OXM2cAV829ZROE2y-wDK6s3X-V8PkL/preview',
    description: '顧問服務結束後，由客戶簽署確認服務內容已交付並滿意的單據。',
    category: 'profit'
  },
];