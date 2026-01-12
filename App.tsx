import React, { useState, useEffect } from 'react';
import LoginGate from './components/LoginGate';
import Navbar from './components/Navbar';
import SectionRegulations from './components/SectionRegulations';
import SectionFlowcharts from './components/SectionFlowcharts';
import SectionForms from './components/SectionForms';
import DocPreviewModal from './components/DocPreviewModal';
import { REGULATIONS_DATA, FLOWCHARTS_DATA, FORMS_DATA } from './constants';
import { BaseDocument } from './types';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Search State
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDoc, setCurrentDoc] = useState<{title: string, url: string} | null>(null);

  useEffect(() => {
    // 檢查 LocalStorage 登入狀態
    const storedAuth = localStorage.getItem('km_auth');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
    // 模擬初始化加載
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('km_auth');
    setIsAuthenticated(false);
    setSearchTerm(''); // 清空搜尋
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Navbar height offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleDocClick = (item: BaseDocument) => {
    setCurrentDoc({ title: item.title, url: item.url });
    setIsModalOpen(true);
  };

  // 搜尋過濾邏輯
  const filteredRegulations = REGULATIONS_DATA.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredFlowcharts = FLOWCHARTS_DATA.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredForms = FORMS_DATA.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 顯示邏輯：如果沒有搜尋詞 (預設狀態)，顯示所有區塊。
  // 如果有搜尋詞，只顯示有結果的區塊。
  const hasSearch = searchTerm.length > 0;
  const showRegulations = !hasSearch || filteredRegulations.length > 0;
  const showFlowcharts = !hasSearch || filteredFlowcharts.length > 0;
  const showForms = !hasSearch || filteredForms.length > 0;

  // 判斷是否完全沒有結果
  const noResults = hasSearch && !showRegulations && !showFlowcharts && !showForms;

  if (isLoading) return null;

  return (
    <div className="min-h-screen relative font-sans">
      {/* 安全登入閘門 */}
      {!isAuthenticated && <LoginGate onAuthenticated={handleAuthenticated} />}

      {/* 文件預覽視窗 */}
      {currentDoc && (
        <DocPreviewModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          title={currentDoc.title} 
          url={currentDoc.url} 
        />
      )}

      {/* 主內容 (登入後可見) */}
      <div className={`transition-opacity duration-1000 ${isAuthenticated ? 'opacity-100' : 'opacity-0'}`}>
        {isAuthenticated && (
          <>
            <Navbar 
              scrollToSection={scrollToSection} 
              searchTerm={searchTerm}
              onSearch={setSearchTerm}
              onLogout={handleLogout}
            />
            
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 space-y-16">
              
              {/* 歡迎橫幅 */}
              <div className="bg-gradient-to-r from-brand-gray to-gray-700 rounded-2xl p-8 md:p-12 text-white shadow-xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">歡迎回到智匯中心</h1>
                <p className="text-gray-200 text-lg max-w-2xl">
                  在此查找最新的規章制度、粒子流程表以及共用表格。
                  <br className="hidden md:block"/>致力於打造透明、高效的資訊共享環境。
                </p>
              </div>

              {/* 搜尋結果提示 (僅在有搜尋時顯示) */}
              {searchTerm && (
                <div className="text-gray-500 text-sm">
                  搜尋結果：包含 "{searchTerm}" 的資料
                </div>
              )}

              {/* 完全無結果的提示 */}
              {noResults && (
                <div className="text-center py-20 text-gray-400 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                  <p className="text-xl font-medium mb-2">找不到符合的資料</p>
                  <p className="text-sm">請嘗試其他關鍵字</p>
                </div>
              )}

              {/* 規章制度 */}
              {showRegulations && (
                <section id="regulations">
                  <SectionRegulations 
                    data={filteredRegulations} 
                    onItemClick={handleDocClick}
                    searchTerm={searchTerm}
                  />
                </section>
              )}

              {/* 粒子流程表 */}
              {showFlowcharts && (
                <section id="flowcharts">
                  <SectionFlowcharts 
                    data={filteredFlowcharts} 
                    onItemClick={handleDocClick}
                    searchTerm={searchTerm}
                  />
                </section>
              )}

              {/* 共用表格 */}
              {showForms && (
                <section id="forms">
                  <SectionForms 
                    data={filteredForms} 
                    onItemClick={handleDocClick}
                    searchTerm={searchTerm}
                  />
                </section>
              )}

            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 py-10">
                <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
                    <p>&copy; 2024 Corporate Knowledge Portal. Internal Use Only.</p>
                </div>
            </footer>
          </>
        )}
      </div>
    </div>
  );
}

export default App;