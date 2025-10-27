import React from 'react';
import { Card } from '../ui/Card';
import { PatternItem } from '@/types/dashboard';

interface ResponsePatternsCardProps {
  patterns: PatternItem[];
}

export const ResponsePatternsCard = ({ patterns }: ResponsePatternsCardProps) => (
  <Card title="Padrões de Resposta">
    {patterns.map((item, index) => (
      <div 
        key={index} 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 0',
          borderBottom: index < patterns.length - 1 ? '1px solid #eee' : 'none'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
          <span style={{ marginRight: '10px' }}>{item.icon}</span>
          {item.padrao}
        </div>
        <span style={{ fontWeight: '600' }}>{item.alunos} alunos</span>
      </div>
    ))}
  </Card>
);
