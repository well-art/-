import React, { useState, useEffect } from 'react';
import { Activity, ChevronRight, ArrowLeft, GitMerge, Share2, MousePointerClick } from 'lucide-react';
import { ParticleFlow } from '../types';
import { FLOWCHART_CATEGORIES } from '../constants';

interface Props {
  data: ParticleFlow[];
  onItemClick: (item: ParticleFlow) => void;
  searchTerm: string;
}

const SectionFlowcharts: React.FC<Props> = ({ data, onItemClick, searchTerm }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  useEffect(() => {
    if (searchTerm) setSelectedCategoryId(null);
  }, [searchTerm]);

  const handleCategoryClick = (id: string | null) => {
    setSelectedCategoryId(id);
    if (id) {
       const element = document.getElementById('flowcharts');
       if(element) {
         const yOffset = -80; 
         const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
         window.scrollTo({ top: y, behavior: 'smooth' });
       }
    }
  };

  const isSearching = searchTerm.length > 0;
  const isCategorySelected = selectedCategoryId !== null;
  
  const displayData = isSearching 
    ? data 
    : (selectedCategoryId ? data.filter(item => item.category === selectedCategoryId) : []);

  const selectedCategoryName = FLOWCHART_CATEGORIES.find(c => c.id === selectedCategoryId)?.name;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-visible min-h-[300px] relative z-20 transition-all duration-300 hover:shadow-md hover:border-brand-green/30">
      
      {/* Sticky Header */}
      <div className="sticky top-16 z-40 p-6 border-b border-gray-100 flex justify-between items-center bg-white/95 backdrop-blur-md rounded-t-xl transition-all shadow-sm h-[88px]">
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-lg text-brand-green">
            <Activity size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-gray flex items-center gap-2">
              粒子流程表 
              <span className="text-sm font-normal text-gray-400 ml-1 hidden sm:inline">Workflows</span>
            </h2>
            {/* 麵包屑導航 */}
            {selectedCategoryName && !isSearching && (
              <div className="text-sm text-brand-green font-medium flex items-center animate-in fade-in slide-in-from-left-2">
                <ChevronRight size={14} className="mx-1" />
                {selectedCategoryName}
              </div>
            )}
          </div>
        </div>

        {isCategorySelected && !isSearching && (
          <button 
            onClick={() => handleCategoryClick(null)}
            className="group flex items-center text-sm font-medium text-gray-500 hover:text-brand-green transition-colors px-4 py-2 rounded-full hover:bg-green-50 border border-transparent hover:border-green-100"
          >
            <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" />
            返回部門
          </button>
        )}
      </div>

      <div className="p-6">
        {/* 情境 A: 顯示分類卡片網格 */}
        {!isSearching && !isCategorySelected && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {FLOWCHART_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="flex flex-col items-center justify-center p-6 border border-gray-100 rounded-xl hover:border-brand-green hover:shadow-lg hover:shadow-brand-green/10 hover:-translate-y-1 transition-all duration-300 group bg-white h-40"
              >
                <div className="bg-gray-50 p-4 rounded-full mb-3 group-hover:bg-brand-green transition-colors duration-300">
                  <Share2 size={32} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-bold text-gray-600 group-hover:text-brand-green transition-colors">{cat.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* 情境 B: 顯示文件列表 */}
        {(isSearching || isCategorySelected) && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {displayData.length === 0 ? (
               <div className="flex flex-col items-center justify-center text-center py-12 opacity-60">
                <div className="bg-gray-50 p-4 rounded-full mb-3">
                  <MousePointerClick size={32} className="text-gray-300" />
                </div>
                <p className="text-gray-400">此部門暫無流程文件</p>
                {isCategorySelected && (
                   <button onClick={() => handleCategoryClick(null)} className="mt-4 text-brand-green hover:underline">返回部門列表</button>
                )}
              </div>
            ) : (
              <div className="grid gap-3">
                {displayData.map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => onItemClick(item)}
                    className="p-5 border border-gray-100 rounded-lg hover:bg-green-50/30 hover:border-brand-green/30 transition-all group cursor-pointer bg-white shadow-sm hover:shadow-md"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                           <GitMerge size={16} className="text-brand-green/70" />
                           <h3 className="text-lg font-bold text-brand-gray group-hover:text-brand-green transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        {/* 流程說明 */}
                        <p className="text-sm text-gray-500 leading-relaxed pl-6 border-l-2 border-gray-100 group-hover:border-brand-green/30 transition-colors">
                          {item.description}
                        </p>
                      </div>
                      <ChevronRight size={20} className="text-gray-300 group-hover:text-brand-green group-hover:translate-x-1 transition-all mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionFlowcharts;