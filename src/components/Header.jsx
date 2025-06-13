import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import './Header.css';
import logoImg from '../assets/img/logo.svg';

function Header() {
  const { language, translations, toggleLanguage } = useContext(LanguageContext);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  // 检测滚动状态，更新header样式
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // 组件卸载时移除事件监听
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // 判断当前路由是否激活
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };
  
  return (
    <header className={`${language} ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logoImg} alt="Logo" />
            <span>{translations.common.projectName}</span>
          </Link>
        </div>
        <nav>
          <ul>
            <li className={isActive('/') ? 'active' : ''}>
              <Link to="/">{translations.nav.apps}</Link>
            </li>
            <li className={isActive('/about') ? 'active' : ''}>
              <Link to="/about">{translations.nav.about}</Link>
            </li>
            <li className={isActive('/contact') ? 'active' : ''}>
              <Link to="/contact">{translations.nav.contact}</Link>
            </li>
            <li className="lang-switch" onClick={toggleLanguage}>
              <div className="lang-switch-content">中｜En</div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 