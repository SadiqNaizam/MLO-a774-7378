import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import CardContainer from '../components/Auth/CardContainer';
import LoginForm from '../components/Auth/LoginForm';

/**
 * LoginPage serves as the main authentication screen for the application.
 * It utilizes a centered layout to present the login form within a card container.
 * 
 * As per the component hierarchy:
 * - Template: CenteredLayout (fulfilled by MainLayout)
 * - Composition: LoginForm nested within CardContainer.
 */
const LoginPage: React.FC = () => {
  return (
    <MainLayout>
      <CardContainer>
        <LoginForm />
      </CardContainer>
    </MainLayout>
  );
};

export default LoginPage;
