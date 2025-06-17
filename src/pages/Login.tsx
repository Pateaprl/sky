import React, { useState } from 'react';
import {
  LoginContainer,
  LeftPanel,
  RightPanel,
  BrandSection,
  Logo,
  BrandName,
  Tagline,
  MainContent,
  Title,
  Description,
  LoginForm,
  InputGroup,
  Input,
  FormTitle,
  FormSubtitle,
  UtilityRow,
  RememberMe,
  ForgotPassword,
  LoginButton,
  Divider,
  SocialLogin,
  SocialButton,
  RegisterPrompt
} from '../styles/LoginStyles';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 实现登录逻辑
    console.log('登录信息:', { username, password, rememberMe });
  };

  return (
    <LoginContainer>
      <LeftPanel>
        <BrandSection>
          <Logo src="/logo.svg" alt="Skyhome" />
          <BrandName>Skyhome</BrandName>
          <Tagline>理想的社区，发出你我的声音</Tagline>
        </BrandSection>

        <MainContent>
          <Title>加入我们的社区</Title>
          <Description>
            在这里，你可以找到志同道合的伙伴，分享你的想法，
            获得成长的机会。让我们一起创造未来。
          </Description>
        </MainContent>
      </LeftPanel>

      <RightPanel>
        <LoginForm onSubmit={handleSubmit}>
          <FormTitle>欢迎回来</FormTitle>
          <FormSubtitle>请登录您的账户</FormSubtitle>

          <InputGroup>
            <Input
              type="text"
              placeholder="用户名"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Input
              type="password"
              placeholder="密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>

          <UtilityRow>
            <RememberMe>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>记住我</span>
            </RememberMe>
            <ForgotPassword href="/forgot-password">忘记密码？</ForgotPassword>
          </UtilityRow>

          <LoginButton type="submit">
            登录
          </LoginButton>
        </LoginForm>

        <Divider>
          <span>或</span>
        </Divider>

        <SocialLogin>
          <SocialButton>
            <img src="/wechat.svg" alt="微信登录" />
          </SocialButton>
          <SocialButton>
            <img src="/qq.svg" alt="QQ登录" />
          </SocialButton>
          <SocialButton>
            <img src="/google.svg" alt="Google登录" />
          </SocialButton>
        </SocialLogin>

        <RegisterPrompt>
          还没有账户？
          <a href="/register">立即注册</a>
        </RegisterPrompt>
      </RightPanel>
    </LoginContainer>
  );
};

export default Login;
