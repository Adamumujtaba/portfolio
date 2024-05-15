import React from 'react';
interface TextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export default function Text({ children, h1, h2, h3, style }: TextProps) {
  return (
    <div
      style={{
        fontSize: h1 ? '24px' : h2 ? '18px' : h3 ? '16px' : '14px',
        fontWeight: h1 ? 'bold' : h2 ? '800' : h3 ? '600' : '400',
        fontFamily: ' var(--font-mono)',
        color: '#d0d0d0d0',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
