import React, { useState } from 'react';
import { Search, MessageCircle, X, Layers, FileText, Settings, HelpCircle } from 'lucide-react';

interface FloatingWidgetProps {
  scrollToSection: (id: string) => void;
}

const FloatingWidget: React.FC<FloatingWidgetProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => setIsOpen(!isOpen);

  const handleQuickLink = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* 展開的面板 (Panel) */}
      <div 
        className={`
          mb-4 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden origin-bottom-right transition-all duration-300 ease-out
          ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-10 pointer-events-none'}
        `}
      >
        {/* Header */}
        <div className="bg-brand-gray p-4 flex items-center justify-between">
          <span className="text-white font-medium">快速助手</span>
          <Settings size={16} className="text-gray-400 cursor-pointer hover:text-white" />
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="搜尋知識庫..." 
              className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="p-2 grid grid-cols-3 gap-2">
          <button onClick={() => handleQuickLink('regulations')} className="flex flex-col items-center justify-center p-3 hover:bg-green-50 rounded-lg transition-colors group">
            <div className="bg-green-100 p-2 rounded-full mb-1 group-hover:bg-brand-green transition-colors">
              <Layers size={18} className="text-brand-green group-hover:text-white" />
            </div>
            <span className="text-xs text-brand-gray">規章</span>
          </button>
          <button onClick={() => handleQuickLink('flowcharts')} className="flex flex-col items-center justify-center p-3 hover:bg-green-50 rounded-lg transition-colors group">
             <div className="bg-green-100 p-2 rounded-full mb-1 group-hover:bg-brand-green transition-colors">
              <Settings size={18} className="text-brand-green group-hover:text-white" />
            </div>
            <span className="text-xs text-brand-gray">流程</span>
          </button>
          <button onClick={() => handleQuickLink('forms')} className="flex flex-col items-center justify-center p-3 hover:bg-green-50 rounded-lg transition-colors group">
             <div className="bg-green-100 p-2 rounded-full mb-1 group-hover:bg-brand-green transition-colors">
              <FileText size={18} className="text-brand-green group-hover:text-white" />
            </div>
            <span className="text-xs text-brand-gray">表格</span>
          </button>
        </div>

        {/* CTA Footer */}
        <div className="bg-gray-50 p-3 border-t border-gray-100">
           <button className="w-full flex items-center justify-center gap-2 text-sm text-brand-gray hover:text-brand-green font-medium py-2 rounded-md hover:bg-white transition-colors">
             <HelpCircle size={16} />
             找不到資料？聯繫管理員
           </button>
        </div>
      </div>

      {/* 懸浮按鈕 (FAB) */}
      <button 
        onClick={toggleWidget}
        className={`
          flex items-center justify-center w-14 h-14 rounded-full shadow-lg shadow-brand-green/40 transition-all duration-300 z-50
          ${isOpen ? 'bg-brand-gray rotate-90' : 'bg-brand-green hover:scale-110'}
        `}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={28} className="text-white" />
        )}
      </button>
    </div>
  );
};

export default FloatingWidget;