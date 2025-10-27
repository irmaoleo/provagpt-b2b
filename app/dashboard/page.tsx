'use client';
import React, { useState } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';
import { SelectDropdown } from '@/components/ui/SelectDropdown';
import { MetricCard } from '@/components/cards/MetricCard';
import { PerformanceChart } from '@/components/charts/PerformanceChart';
import { DifficultItemsCard } from '@/components/cards/DifficultItemsCard';
import { 
  mockTurmas, 
  mockPeriodos, 
  mockMaterias, 
  mockCards, 
  mockDesempenhoENEM, 
  mockTopItensDificeis,
  mockPadroesResposta,
  mockAlunosInativos,
  mockListaAlunos
} from '@/data/mockData';
import { ResponsePatternsCard } from '@/components/cards/ResponsePatternsCard';
import { InactiveStudentsCard } from '@/components/cards/InactiveStudentsCard';

const DashboardPage = () => {
  const [turmaSelecionada, setTurmaSelecionada] = useState(mockTurmas[0]);
  const [periodoSelecionado, setPeriodoSelecionado] = useState(mockPeriodos[0]);
  const [materiaSelecionada, setMateriaSelecionada] = useState(mockMaterias[0]);

  const handleExportCSV = () => alert('CSV exportado (Mock)');
  const handleNudge = () => alert('Nudge enviado (Mock)');
  const handleViewAllDifficultItems = () => alert('Ver todos os itens (Mock)');
  const handleNudge = () => alert('Lembretes enviados para todos os alunos inativos!');

  return (
    <PageContainer>
      <Header />

      {/* Filtros e Exportação */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '25px',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <SelectDropdown
          options={mockTurmas}
          defaultValue={turmaSelecionada}
          onChange={(e) => setTurmaSelecionada(e.target.value)}
        />
        <SelectDropdown
          options={mockPeriodos}
          defaultValue={periodoSelecionado}
          onChange={(e) => setPeriodoSelecionado(e.target.value)}
        />
        <Button onClick={handleExportCSV}>
          Exportar CSV
        </Button>
      </div>

      {/* Cards de Métricas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {Object.entries(mockCards).map(([key, data]) => (
          <MetricCard
            key={key}
            title={key === 'engajamento' ? 'Engajamento' :
                   key === 'desempenhoMedio' ? 'Desempenho Médio' :
                   key === 'questoesResolvidas' ? 'Questões Resolvidas' : 'Alertas'}
            value={data.value}
            detail={data.detail}
          />
        ))}
      </div>

      {/* Seções de Desempenho e Itens Difíceis */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <PerformanceChart
          data={mockDesempenhoENEM}
          selectedSubject={materiaSelecionada}
          onSubjectChange={setMateriaSelecionada}
          subjects={mockMaterias}
        />

        <DifficultItemsCard 
          items={mockTopItensDificeis} 
          onViewAll={handleViewAllDifficultItems} 
        />
      </div>

      {/* Padrões de Resposta e Alunos Inativos */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <ResponsePatternsCard patterns={mockPadroesResposta} />
        <InactiveStudentsCard 
          students={mockAlunosInativos} 
          onNudge={handleNudge} 
        />
      </div>
    </PageContainer>
  );
};

export default DashboardPage;
