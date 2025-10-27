import React from 'react';
import { Card } from '../ui/Card';

interface DifficultItem {
  titulo: string;
  subtitulo: string;
  acertos: string;
  tempoMedio: string;
}

interface DifficultItemsCardProps {
  items: DifficultItem[];
  onViewAll?: () => void;
}

export const DifficultItemsCard = ({ items, onViewAll }: DifficultItemsCardProps) => (
  <Card title="Top 5 Itens Difíceis">
    <div style={{ textAlign: 'right', marginBottom: '10px' }}>
      <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          onViewAll?.();
        }} 
        style={{ fontSize: '12px', textDecoration: 'none' }}
      >
        Ver Todos
      </a>
    </div>
    {items.map((item, index) => (
      <div 
        key={index} 
        style={{ 
          marginBottom: '15px', 
          paddingBottom: '15px', 
          borderBottom: index < items.length - 1 ? '1px solid #eee' : 'none' 
        }}
      >
        <div style={{ fontSize: '16px', fontWeight: '600' }}>{item.titulo}</div>
        <div style={{ fontSize: '12px', marginBottom: '5px' }}>{item.subtitulo}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
          <span>{item.acertos}</span>
          <span>{item.tempoMedio}</span>
        </div>
      </div>
    ))}
  </Card>
);
