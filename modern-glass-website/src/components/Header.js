import React from 'react';
import './Header.css'; // Assuming you have a separate CSS file for header styles

const Header = () => {
    return (
        <header className="header">
            <div className="logo">现代科技感网站</div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">首页</a></li>
                    <li><a href="/about">关于我们</a></li>
                    <li><a href="/contact">联系我们</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;