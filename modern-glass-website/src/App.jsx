import React, { useState, useEffect, useCallback, memo } from 'react';
import './App.css';

// 抽离登录表单为独立组件
const LoginForm = memo(({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onSubmit(new FormData(e.target));
  }, [onSubmit]);

  const togglePassword = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <i className="input-icon user-icon">👤</i>
        <input type="text" placeholder="用户名" name="username" required />
      </div>
      
      <div className="input-group">
        <i className="input-icon lock-icon">🔒</i>
        <input 
          type={showPassword ? 'text' : 'password'} 
          placeholder="密码" 
          name="password"
          autoComplete="current-password"
          required
        />
        <i 
          className="input-icon toggle-password"
          onClick={togglePassword}
        >
          {showPassword ? '👁' : '👁‍🗨'}
        </i>
      </div>
      
      <div className="form-options">
        <label className="remember-me">
          <input type="checkbox" name="remember" />
          <span>记住我</span>
        </label>
        <a href="#" className="forgot-password">忘记密码?</a>
      </div>
      
      <button type="submit" className="login-button">
        <span>登录</span>
      </button>
      
      <div className="social-divider">
        <span>或</span>
      </div>
      
      <div className="social-login">
        <button type="button" className="social-btn wechat">微信</button>
        <button type="button" className="social-btn qq">QQ</button>
        <button type="button" className="social-btn google">Google</button>
      </div>
    </form>
  );
});

// 主组件
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleLogin = useCallback((formData) => {
    // 处理登录逻辑
    console.log('Login attempt', Object.fromEntries(formData));
  }, []);

  return (
    <div className={`container ${isLoaded ? 'fade-in' : ''}`}>
      <div className="content-wrapper">
        {/* 左栏：品牌信息 */}
        <div className="left-column">
          <div className="brand-header">
            <div className="logo">
              <span className="logo-symbol">✦</span>
              <span className="logo-text">Skyhome</span>
            </div>
          </div>
          <h1>加入我们的社区</h1>
          <p className="brand-description">
            交流，成长，未来<br />
            在这里，与志同道合者一起探索无限可能
          </p>
          <div className="brand-values">
            <div className="value-item">分享</div>
            <div className="value-item">学习</div>
            <div className="value-item">创新</div>
          </div>
        </div>
        
        {/* 右栏：登录表单 */}
        <div className="right-column">
          <div className="glass-panel">
            <h2>欢迎回来</h2>
            <p className="form-subtitle">请登录您的账户</p>
            
            <LoginForm onSubmit={handleLogin} />
            
            <p className="footer-text">
              还没有账号？<a href="#" className="signup-link">立即注册</a>
            </p>
          </div>
        </div>
      </div>
      <footer className="site-footer">
        <div className="footer-content">
          <p className="copyright">© 2025 Skyhome 保留所有权利</p>
          <div className="legal-links">
            <a href="#" className="legal-link">隐私政策</a>
            <span className="separator">|</span>
            <a href="#" className="legal-link">用户协议</a>
            <span className="separator">|</span>
            <a href="#" className="legal-link">京ICP备XXXXXXXX号</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
