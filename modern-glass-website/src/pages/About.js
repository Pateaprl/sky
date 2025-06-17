// filepath: modern-glass-website/src/pages/About.js

import React from 'react';
import TwoColumn from '../layouts/TwoColumn';

const About = () => {
    return (
        <TwoColumn>
            <div className="about-content">
                <h1>关于我们</h1>
                <p>欢迎来到我们的网站！我们致力于提供最前沿的科技解决方案，帮助您实现您的目标。</p>
                <p>我们的团队由经验丰富的专业人士组成，专注于创新和卓越。</p>
                <p>感谢您访问我们的网站，期待与您合作！</p>
            </div>
        </TwoColumn>
    );
};

export default About;