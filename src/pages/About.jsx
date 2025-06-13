import React, { useContext, useEffect, useRef } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import './About.css';

// 导入图片
import phone1 from '../assets/img/phone1.png';
import phone2 from '../assets/img/phone2.png';
import phone3 from '../assets/img/phone3.png';
import phone4 from '../assets/img/phone4.png';
import phone5 from '../assets/img/phone5.png';
import phone6 from '../assets/img/phone6.png';
import javaME from '../assets/img/java-me.png';

function About() {
  const { translations } = useContext(LanguageContext);
  const carouselRef = useRef(null);
  const carouselInitializedRef = useRef(false);
  
  useEffect(() => {
    // 滚动到页面顶部
    window.scrollTo(0, 0);
    
    // 设置页面标题
    document.title = translations.about.title;
    
    // 初始化手机轮播 - 只在第一次挂载时执行，不在语言切换时重复执行
    if (carouselRef.current && !carouselInitializedRef.current) {
      // 复制元素以实现无缝滚动效果
      const phoneItems = carouselRef.current.querySelectorAll('.phone-item');
      if (phoneItems.length > 0) {
        phoneItems.forEach(item => {
          carouselRef.current.appendChild(item.cloneNode(true));
        });
        
        // 再次克隆前几个项目以确保滚动效果顺畅
        const visibleItems = Math.ceil(window.innerWidth / 200);
        for (let i = 0; i < visibleItems && i < phoneItems.length; i++) {
          carouselRef.current.appendChild(phoneItems[i].cloneNode(true));
        }
      }
      
      // 标记初始化完成
      carouselInitializedRef.current = true;
    }
    
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
  }, [translations.about.title]);
  
  return (
    <main className="about-page">
      <div className="about-intro">
        <div className="container">
          <p className="intro-text animate-on-scroll">{translations.about.intro1}</p>
          <p className="intro-text animate-on-scroll">{translations.about.intro2}</p>
          <p className="intro-text animate-on-scroll">{translations.about.intro3}</p>
          <p className="intro-text animate-on-scroll">{translations.about.intro4}</p>
          <p className="intro-text animate-on-scroll">{translations.about.intro5}</p>
        </div>
      </div>

      <div className="phone-showcase animate-on-scroll">
        <div className="container">
          <div className="phone-carousel" ref={carouselRef}>
            <div className="phone-item">
              <img src={phone1} alt="Nokia phone" />
            </div>
            <div className="phone-item">
              <img src={phone2} alt="Sony Ericsson phone" />
            </div>
            <div className="phone-item">
              <img src={phone3} alt="Nokia E72 phone" />
            </div>
            <div className="phone-item">
              <img src={phone4} alt="Motorola phone" />
            </div>
            <div className="phone-item">
              <img src={phone5} alt="Sony Ericsson Walkman phone" />
            </div>
            <div className="phone-item">
              <img src={phone6} alt="Samsung phone" />
            </div>
          </div>
        </div>
      </div>

      <div className="about-statement">
        <div className="container">
          <h1 className="animate-on-scroll">{translations.about.statement}</h1>
        </div>
      </div>

      <div className="about-description">
        <div className="container">
          <div className="about-content">
            <div className="text-content">
              <p className="animate-on-scroll">{translations.about.description1}</p>
              <p className="animate-on-scroll">{translations.about.description2}</p>
              <p className="animate-on-scroll">{translations.about.description3}</p>
            </div>
            <div className="image-content animate-on-scroll">
              <img src={javaME} alt="Java ME Logo" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;