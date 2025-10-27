import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { InactiveStudent } from '@/types/dashboard';

interface InactiveStudentsCardProps {
  students: InactiveStudent[];
  onNudge: () => void;
}

export const InactiveStudentsCard = ({ students, onNudge }: InactiveStudentsCardProps) => (
  <Card title="Alunos Inativos">
    <Button 
      onClick={onNudge}
      style={{
        marginBottom: '15px',
        width: '100%',
        backgroundColor: '#007bff',
        color: 'white'
      }}
    >
      Enviar Lembrete para Todos
    </Button>
    {students.map((student, index) => (
      <div 
        key={index}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 0',
          borderBottom: index < students.length - 1 ? '1px solid #eee' : 'none'
        }}
      >
        <div>
          <div style={{ fontWeight: '600' }}>{student.nome}</div>
          <div style={{ fontSize: '12px' }}>{student.atividade}</div>
        </div>
        <Button 
          onClick={() => alert(`Lembrete enviado para ${student.nome}`)}
          style={{
            padding: '4px 8px',
            fontSize: '12px',
            backgroundColor: '#f8f9fa',
            color: '#212529'
          }}
        >
          Lembrar
        </Button>
      </div>
    ))}
  </Card>
);
