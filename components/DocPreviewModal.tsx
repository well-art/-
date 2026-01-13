import React from 'react';
import { X, ExternalLink, Download, FileText, Printer } from 'lucide-react';

interface DocPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
}

const DocPreviewModal: React.FC<DocPreviewModalProps> = ({ isOpen, onClose, title, url }) => {
  if (!isOpen) return null;

  // 輔助函式：將 Google Doc 預覽連結轉換為下載連結
  const getDownloadUrl = (docUrl: string, format: 'pdf' | 'docx') => {
    try {
      // 提取文件 ID (位於 /d/ 和下一個 / 之間)
      const match = docUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
      if (match && match[1]) {
        return `https://docs.google.com/document/d/${match[1]}/export?format=${format}`;
      }
    } catch (e) {
      console.error("URL 解析錯誤", e);
    }
    // 若無法解析，回傳原始連結 (或可視需求隱藏按鈕)
    return docUrl;
  };

  const pdfUrl = getDownloadUrl(url, 'pdf');
  const wordUrl = getDownloadUrl(url, 'docx');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* 背景遮罩 */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity modal-overlay"
        onClick={onClose}
      ></div>

      {/* 浮動視窗 */}
      <div className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300 modal-container">
        
        {/* 標題列 */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50 modal-header">
          <h3 className="text-lg font-bold text-brand-gray truncate pr-4">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
          >
            <X size={24} />
          </button>
        </div>

        {/* 內容區域 (Iframe) */}
        <div className="flex-1 bg-gray-100 relative modal-iframe-container">
          <iframe 
            src={url} 
            title={title}
            className="w-full h-full border-0"
            allow="autoplay"
          ></iframe>
        </div>

        {/* 底部功能列 */}
        <div className="px-6 py-4 border-t border-gray-100 bg-white flex flex-col sm:flex-row justify-end gap-3 modal-footer">
          
          {/* 列印按鈕 (Print) - 新增 */}
          <button
            onClick={() => window.print()}
            className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-brand-gray px-5 py-2.5 rounded-lg font-medium transition-colors"
            title="列印文件"
          >
            <Printer size={18} />
            <span>列印</span>
          </button>

          {/* 下載 Word 按鈕 */}
          <a 
            href={wordUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white border border-blue-200 text-blue-700 hover:bg-blue-50 px-5 py-2.5 rounded-lg font-medium transition-colors"
            title="下載為 Word 檔案"
          >
            <FileText size={18} />
            <span>下載 Word</span>
          </a>

          {/* 下載 PDF 按鈕 */}
          <a 
            href={pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-brand-gray px-5 py-2.5 rounded-lg font-medium transition-colors"
            title="下載為 PDF 檔案"
          >
            <Download size={18} />
            <span>下載 PDF</span>
          </a>

          {/* 線上閱讀按鈕 */}
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-brand-green hover:bg-[#1f8c3c] text-white px-5 py-2.5 rounded-lg font-medium transition-transform active:scale-95 shadow-md shadow-brand-green/20"
          >
            <ExternalLink size={18} />
            <span>線上閱讀</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocPreviewModal;