import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LoginContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 600px;
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  overflow: hidden;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const LeftPanel = styled.div`
  flex: 5.5;
  padding: 60px;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/code-bg.jpg') center/cover;
    opacity: 0.1;
    z-index: -1;
  }
`;

export const RightPanel = styled.div`
  flex: 4.5;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BrandSection = styled.div`
  margin-bottom: 60px;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const BrandName = styled.h1`
  font-size: 24px;
  color: white;
  margin: 10px 0;
`;

export const Tagline = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`;

export const MainContent = styled.div`
  margin-top: 80px;
`;

export const Title = styled.h2`
  font-size: 48px;
  color: white;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

export const LoginForm = styled.form`
  width: 100%;
`;

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 16px;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    border-color: #405BFF;
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const FormTitle = styled.h3`
  font-size: 24px;
  color: white;
  margin-bottom: 8px;
`;

export const FormSubtitle = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 32px;
`;

export const UtilityRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const RememberMe = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
`;

export const ForgotPassword = styled.a`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  transition: color 0.3s;

  &:hover {
    color: white;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #405BFF;
  color: white;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s;

  &:hover {
    background: #5069FF;
    transform: translateY(-2px);
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
  color: rgba(255, 255, 255, 0.6);

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
  }

  span {
    padding: 0 16px;
  }
`;

export const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
`;

export const SocialButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export const RegisterPrompt = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;

  a {
    color: #405BFF;
    font-weight: 600;
    margin-left: 4px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
