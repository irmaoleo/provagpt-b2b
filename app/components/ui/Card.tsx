import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  style?: React.CSSProperties;
}

export const Card = ({ children, title, style = {} }: CardProps) => (
  <div
    style={{
      borderRadius: '8px',
      padding: '15px 20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      ...style
    }}
  >
    {title && <h3 style={{ margin: '0 0 15px 0' }}>{title}</h3>}
    {children}
  </div>
);
