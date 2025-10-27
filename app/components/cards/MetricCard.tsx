import React from 'react';
import { Card } from '../ui/Card';

interface MetricCardProps {
  title: string;
  value: string;
  detail: string;
}

export const MetricCard = ({ title, value, detail }: MetricCardProps) => (
  <Card>
    <div style={{ fontSize: '14px' }}>{title}</div>
    <div style={{ fontSize: '32px', fontWeight: 'bold', margin: '5px 0' }}>{value}</div>
    <div style={{ fontSize: '12px' }}>{detail}</div>
  </Card>
);
