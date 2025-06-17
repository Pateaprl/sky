import React from 'react';

const ContentArea = () => {
    return (
        <div className="content-area">
            <h1>欢迎来到我们的现代科技网站</h1>
            <p>请登录以访问更多内容：</p>
            <form>
                <div>
                    <label htmlFor="username">用户名：</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password">密码：</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">登录</button>
            </form>
        </div>
    );
};

export default ContentArea;