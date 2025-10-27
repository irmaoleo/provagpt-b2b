import React from 'react';
import { Card } from '../ui/Card';
import { SelectDropdown } from '../ui/SelectDropdown';

interface PerformanceItem {
  area: string;
  progresso: number;
}

interface PerformanceChartProps {
  data: PerformanceItem[];
  selectedSubject: string;
  onSubjectChange: (value: string) => void;
  subjects: string[];
}

export const PerformanceChart = ({
  data,
  selectedSubject,
  onSubjectChange,
  subjects
}: PerformanceChartProps) => (
  <Card title="Desempenho por Competência ENEM">
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
      <SelectDropdown
        options={subjects}
        defaultValue={selectedSubject}
        onChange={(e) => onSubjectChange(e.target.value)}
      />
    </div>
    {data.map((item) => (
      <div key={item.area} style={{ marginBottom: '15px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          fontSize: '14px', 
          fontWeight: '600', 
          marginBottom: '5px' 
        }}>
          <span>{item.area}</span>
          <span>{item.progresso}%</span>
        </div>
        <div style={{ height: '8px', borderRadius: '4px', background: '#eee' }}>
          <div
            style={{
              width: `${item.progresso}%`,
              height: '100%',
              borderRadius: '4px',
              background: '#007bff'
            }}
          />
        </div>
      </div>
    ))}
  </Card>
);
