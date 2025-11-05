'use client'
import React, { useState } from 'react';
import { 
  mockTurmas, 
  mockPeriodos, 
  mockMaterias,
  getCards,
  getDesempenhoENEM,
  getTopItensDificeis,
  getPadroesResposta,
  getAlunos,
  getAlunosInativos
} from './data/mockData';

// Tipos para os dados
interface CardData {
  engajamento: { value: string; detail: string; icon: string };
  desempenhoMedio: { value: string; detail: string; icon: string };
  questoesResolvidas: { value: string; detail: string; icon: string };
  alertas: { value: string; detail: string; icon: string };
}

interface Aluno {
  nome: string;
  streak: string;
  engajamento: string;
  desempenho: string;
  questoes: number;
  padroes: string;
}

interface AlunoInativo {
  nome: string;
  atividade: string;
}

interface ItemDificil {
  titulo: string;
  subtitulo: string;
  acertos: string;
  tempoMedio: string;
}

interface PadraoResposta {
  padrao: string;
  alunos: number;
  icon: string;
}

type Turma = 'Turma 3A' | 'Turma 3B' | 'Turma 3C';

export default function ProfessorDashboard() {
  const [turmaSelecionada, setTurmaSelecionada] = useState<Turma>('Turma 3A');
  const [periodoSelecionado, setPeriodoSelecionado] = useState<string>(mockPeriodos[0]);
  const [materiaSelecionada, setMateriaSelecionada] = useState<string>(mockMaterias[0]);

  // Obter dados dinâmicos com base na turma selecionada
  const cards = getCards(turmaSelecionada);
  const desempenhoENEM = getDesempenhoENEM(turmaSelecionada);
  const topItensDificeis: ItemDificil[] = getTopItensDificeis(turmaSelecionada);
  const padroesResposta: PadraoResposta[] = getPadroesResposta(turmaSelecionada);
  const listaAlunos: Aluno[] = getAlunos(turmaSelecionada);
  const alunosInativos: AlunoInativo[] = getAlunosInativos(turmaSelecionada);

  // Função para lidar com a mudança de turma
  const handleTurmaChange = (turma: Turma) => {
    setTurmaSelecionada(turma);
  };

  // Função para lidar com a mudança de período
  const handlePeriodoChange = (periodo: string) => {
    setPeriodoSelecionado(periodo);
  };

  // Função para lidar com a mudança de matéria
  const handleMateriaChange = (materia: string) => {
    setMateriaSelecionada(materia);
  };

  // Função para lidar com o clique no botão de notificação
  const handleNudge = (aluno: string) => {
    alert(`Notificação enviada para ${aluno}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Cabeçalho */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Painel do Professor</h1>
        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-4">
            <select 
              value={turmaSelecionada}
              onChange={(e) => handleTurmaChange(e.target.value as Turma)}
              className="px-4 py-2 border rounded-md text-gray-800"
            >
              {mockTurmas.map((turma) => (
                <option key={turma} value={turma} className="text-gray-800">
                  {turma}
                </option>
              ))}
            </select>
            <select 
              value={periodoSelecionado}
              onChange={(e) => handlePeriodoChange(e.target.value)}
              className="px-4 py-2 border rounded-md text-gray-800"
            >
              {mockPeriodos.map((periodo) => (
                <option key={periodo} value={periodo} className="text-gray-800">
                  {periodo}
                </option>
              ))}
            </select>
            <select 
              value={materiaSelecionada}
              onChange={(e) => handleMateriaChange(e.target.value)}
              className="px-4 py-2 border rounded-md text-gray-800"
            >
              {mockMaterias.map((materia) => (
                <option key={materia} value={materia} className="text-gray-800">
                  {materia}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-800">Professor(a) Silva</span>
            <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
              <span className="text-blue-800 font-bold">PS</span>
            </div>
          </div>
        </div>
      </header>

      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {Object.entries(cards).map(([key, data]) => (
          <div key={key} className="p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="sm text-gray-800">
                  {key === 'engajamento' ? 'Engajamento' : 
                   key === 'desempenhoMedio' ? 'Desempenho Médio' :
                   key === 'questoesResolvidas' ? 'Questões Resolvidas' : 'Alertas'}
                </p>
                <p className="text-2xl font-bold text-gray-800">{data.value}</p>
                <p className="text-sm text-gray-800">{data.detail}</p>
              </div>
              <div className="text-3xl text-gray-800">{data.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Gráfico de Desempenho */}
      <div className="p-6 rounded-lg shadow mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Desempenho por Competência ENEM</h2>
        <div className="space-y-4">
          {desempenhoENEM.map((item) => (
            <div key={item.area}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-800">{item.area}</span>
                <span className="text-gray-800">{item.progresso}%</span>
              </div>
              <div className="w-full  rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${item.progresso}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Conteúdo em Duas Colunas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Itens Difíceis */}
        <div className="lg:col-span-2 p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Top 5 Itens Difíceis</h2>
            <button className="text-blue-600 text-sm hover:text-blue-800">Ver Todos</button>
          </div>
          <div className="space-y-4">
            {topItensDificeis.map((item, index) => (
              <div 
                key={index} 
                className={`pb-4 ${index < topItensDificeis.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <p className="font-medium text-gray-800">{item.titulo}</p>
                <p className="text-sm text-gray-800 mb-2">{item.subtitulo}</p>
                <div className="flex justify-between text-sm text-gray-700">
                  <span>{item.acertos}</span>
                  <span>{item.tempoMedio}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Padrões de Resposta */}
        <div className="p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Padrões de Resposta</h2>
          <div className="space-y-3">
            {padroesResposta.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-800">{item.icon}</span>
                  <span className="text-gray-800">{item.padrao}</span>
                </div>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-800">
                  {item.alunos} alunos
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alunos Inativos */}
      <div className="p-6 rounded-lg shadow mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Alunos Inativos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {alunosInativos.map((aluno, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium text-gray-800">{aluno.nome}</p>
                <p className="text-sm text-gray-800">{aluno.atividade}</p>
              </div>
              <button 
                onClick={() => handleNudge(aluno.nome)}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md text-sm hover:bg-blue-200"
              >
                Notificar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lista de Alunos */}
      <div className="p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Lista de Alunos</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Aluno</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Streak</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Engajamento</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Desempenho</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Questões</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Padrões</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {listaAlunos.map((aluno, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">
                          {aluno.nome.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{aluno.nome}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{aluno.streak}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      aluno.engajamento === 'Alta' ? 'bg-green-100 text-green-800' :
                      aluno.engajamento === 'Média' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {aluno.engajamento}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{aluno.desempenho}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{aluno.questoes}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      aluno.padroes === 'Normal' ? 'bg-blue-100 text-blue-800' :
                      aluno.padroes === 'Risco' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {aluno.padroes}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      onClick={() => handleNudge(aluno.nome)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Notificar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}