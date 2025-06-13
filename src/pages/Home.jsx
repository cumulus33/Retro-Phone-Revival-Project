import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import './Home.css';

// 导入图片
import bannerImg from '../assets/img/banner.png';
import tomatoneIcon from '../assets/img/Tomatone.png';
import tomatone1 from '../assets/img/Tomatone1.png';
import tomatone2 from '../assets/img/Tomatone2.png';
import tomatone3 from '../assets/img/Tomatone3.png';
import tomatone4 from '../assets/img/Tomatone4.png';
import pocketkeyIcon from '../assets/img/Pocketkey.png';
import noisioIcon from '../assets/img/Noisio.png';
import tagshotIcon from '../assets/img/Tagshot.png';
import nextApplicationIcon from '../assets/img/Next Application.png';
import nowAvailableImg from '../assets/img/Now Available.png';
import comingSoonImg from '../assets/img/Coming Soon.png';

function Home() {
  const { translations } = useContext(LanguageContext);
  
  useEffect(() => {
    // 滚动到页面顶部
    window.scrollTo(0, 0);
    
    // 设置页面标题
    document.title = translations.apps.title;
    
    // 添加滚动动画效果
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeInUp');
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      scrollObserver.observe(el);
    });
    
    return () => {
      scrollObserver.disconnect();
    };
  }, [translations.apps.title]);
  
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text animate-on-scroll">
            <h1>
              {translations.apps.heroTitle}<br />
              {translations.apps.heroTitleSecond}
            </h1>
            <p>{translations.apps.heroSubtitle}</p>
          </div>
          <div className="hero-image animate-on-scroll">
            <img src={bannerImg} alt="Retro Phones" />
          </div>
        </div>
      </section>

      {/* Tomatone App Section */}
      <section className="tomatone-section">
        <div className="container">
          <div className="app-intro animate-on-scroll">
            <div className="app-icon">
              <img src={tomatoneIcon} alt="Tomatone" />
            </div>
            <div className="app-info">
              <h2>{translations.apps.tomatone.name}</h2>
              <p>{translations.apps.tomatone.description}</p>
              <img src={nowAvailableImg} alt="Now Available" className="status-image" />
            </div>
          </div>
          
          <div className="app-screenshots animate-on-scroll">
            <div className="screenshot">
              <img src={tomatone1} alt="Tomatone Screenshot 1" />
            </div>
            <div className="screenshot">
              <img src={tomatone2} alt="Tomatone Screenshot 2" />
            </div>
            <div className="screenshot">
              <img src={tomatone3} alt="Tomatone Screenshot 3" />
            </div>
            <div className="screenshot">
              <img src={tomatone4} alt="Tomatone Screenshot 4" />
            </div>
          </div>
          
          <div className="download-section animate-on-scroll">
            <h3>{translations.apps.download}</h3>
            <div className="download-links">
              <a href="https://pan.quark.cn/s/49bfd8942066" target="_blank" rel="noopener noreferrer" className="download-link">
                {translations.apps.downloadLinks.blackberry}
              </a>
              <a href="https://pan.quark.cn/s/1a83d96543f8" target="_blank" rel="noopener noreferrer" className="download-link">
                {translations.apps.downloadLinks.nokia320}
              </a>
              <a href="https://pan.quark.cn/s/f9759bfd1099" target="_blank" rel="noopener noreferrer" className="download-link">
                {translations.apps.downloadLinks.nokia240}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Apps Section */}
      <section className="other-apps-section">
        <div className="container">
          <div className="app-item animate-on-scroll">
            <div className="app-icon">
              <img src={pocketkeyIcon} alt="Pocketkey" />
            </div>
            <div className="app-info">
              <h3>{translations.apps.pocketkey.name}</h3>
              <p>{translations.apps.pocketkey.description}</p>
              <img src={comingSoonImg} alt="Coming Soon" className="status-image" />
            </div>
          </div>
          
          <div className="app-item animate-on-scroll">
            <div className="app-icon">
              <img src={noisioIcon} alt="Noisio" />
            </div>
            <div className="app-info">
              <h3>{translations.apps.noisio.name}</h3>
              <p>{translations.apps.noisio.description}</p>
              <img src={comingSoonImg} alt="Coming Soon" className="status-image" />
            </div>
          </div>
          
          <div className="app-item animate-on-scroll">
            <div className="app-icon">
              <img src={tagshotIcon} alt="Tagshot" />
            </div>
            <div className="app-info">
              <h3>{translations.apps.tagshot.name}</h3>
              <p>{translations.apps.tagshot.description}</p>
              <img src={comingSoonImg} alt="Coming Soon" className="status-image" />
            </div>
          </div>
          
          <div className="app-item animate-on-scroll">
            <div className="app-icon">
              <img src={nextApplicationIcon} alt="Next Application" />
            </div>
            <div className="app-info">
              <h3>{translations.apps.nextApplication.name}</h3>
              <p>
                {translations.apps.nextApplication.description} 
                <a href="mailto:2329537967@qq.com">{translations.apps.nextApplication.link}</a> !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="learn-more-section">
        <div className="container">
          <Link to="/about" className="learn-more-link animate-on-scroll">
            {translations.apps.learnMore} →
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home; 