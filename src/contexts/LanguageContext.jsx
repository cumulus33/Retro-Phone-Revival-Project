import React, { createContext, useState, useEffect } from 'react';
import enTranslations from '../i18n/en.json';
import zhTranslations from '../i18n/zh.json';

// 创建语言上下文
export const LanguageContext = createContext();

// 翻译文件映射
const translations = {
  en: enTranslations,
  zh: zhTranslations
};

export const LanguageProvider = ({ children }) => {
  // 从localStorage获取或设置默认语言
  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en'; // 默认英文
  };

  // 状态钩子
  const [language, setLanguage] = useState(getInitialLanguage);

  // 语言切换处理函数
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'zh' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    // 更新文档的lang属性
    document.documentElement.lang = newLang;
  };

  // 组件挂载时设置文档语言属性
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        toggleLanguage, 
        translations: translations[language] 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider; 