import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => (
  <div
    style={{
      padding: '30px',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}
  >
    {children}
  </div>
);
