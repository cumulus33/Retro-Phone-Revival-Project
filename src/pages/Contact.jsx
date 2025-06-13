import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import './Contact.css';
import avatarImg from '../assets/img/avatar.png';

function Contact() {
  const { translations } = useContext(LanguageContext);
  
  useEffect(() => {
    // 滚动到页面顶部
    window.scrollTo(0, 0);
    
    // 设置页面标题
    document.title = translations.contact.title;
    
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
  }, [translations.contact.title]);
  
  return (
    <main className="contact-page">
      <div className="container">
        <div className="personal-intro">
          <div className="avatar animate-on-scroll">
            <div className="avatar-circle">
              <img src={avatarImg} alt="Avatar" className="avatar-image" />
            </div>
          </div>
          
          <h1 className="greeting animate-on-scroll">{translations.contact.greeting}</h1>
          
          <div className="intro-content">
            <p className="job-title animate-on-scroll">{translations.contact.jobTitle}</p>
            <p className="background animate-on-scroll">{translations.contact.background}</p>
            <p className="interests animate-on-scroll">{translations.contact.interests}</p>
            <p className="hobby animate-on-scroll">{translations.contact.hobby}</p>
            <p className="project-description animate-on-scroll">{translations.contact.projectDescription}</p>
            <p className="call-to-action animate-on-scroll">{translations.contact.callToAction}</p>
          </div>
          
          <div className="contact-info animate-on-scroll">
            <div className="contact-item">
              <a href="mailto:2329537967@qq.com" className="email-link">
                <span>{translations.contact.email}</span>
              </a>
            </div>
            <div className="social-links">
              <a href="https://www.xiaohongshu.com/user/profile/5a4e45f911be105b8539ec9e" target="_blank" rel="noopener noreferrer" className="social-link">{translations.contact.recentPosts}</a>
              <a href="https://www.goofish.com/item?spm=a21ybx.personal.feeds.1.364e6ac21rle0i&id=925988958394&categoryId=50023914" target="_blank" rel="noopener noreferrer" className="social-link">{translations.contact.replayProject}</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact; 