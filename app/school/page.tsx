'use client';

import { useState } from 'react';
import { professores, materias, rankingAlunos, atividades } from '../data/mockData';

export default function PainelInstitucional() {
  const [serie, setSerie] = useState("Todas as Séries");
  const [turma, setTurma] = useState("Todas as Turmas");
  const [professor, setProfessor] = useState("Todos os Professores");
  const [materia, setMateria] = useState("Todas as Matérias");
  const [periodo, setPeriodo] = useState("Últimos 7 dias");

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Visão Geral da Escola</h1>
          <p className="text-sm text-gray-500">Análise de desempenho e métricas</p>
        </div>

        <div className="flex gap-2">
          <select
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Últimos 7 dias</option>
            <option>Últimos 30 dias</option>
            <option>Último trimestre</option>
          </select>
          <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white hover:bg-gray-50 transition-colors">
            <span>📊</span> Exportar
          </button>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-3 mb-8">
        <select
          value={serie}
          onChange={(e) => setSerie(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>📚 Todas as Séries</option>
          <option>1º Ano</option>
          <option>2º Ano</option>
          <option>3º Ano</option>
        </select>

        <select
          value={turma}
          onChange={(e) => setTurma(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>👥 Todas as Turmas</option>
          <option>Turma A</option>
          <option>Turma B</option>
        </select>

        <select
          value={professor}
          onChange={(e) => setProfessor(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>👨‍🏫 Todos os Professores</option>
          <option>Prof. Silva</option>
          <option>Prof. Santos</option>
        </select>

        <select
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>📝 Todas as Matérias</option>
          <option>Matemática</option>
          <option>Português</option>
          <option>Física</option>
        </select>
      </div>

      {/* Cards Principais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card de Engajamento */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Taxa de Engajamento</p>
              <p className="text-2xl font-bold mt-1">87%</p>
              <p className="text-xs text-green-600 mt-1">↑ 12% em relação ao mês passado</p>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg">
              <span className="text-2xl">📈</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '87%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Card de Desempenho */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Média de Desempenho</p>
              <p className="text-2xl font-bold mt-1">8.2</p>
              <p className="text-xs text-green-600 mt-1">↑ 0.5 pontos na média</p>
            </div>
            <div className="p-2 bg-green-50 rounded-lg">
              <span className="text-2xl">🎯</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '82%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0</span>
              <span>10</span>
            </div>
          </div>
        </div>

        {/* Card de Frequência */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Taxa de Frequência</p>
              <p className="text-2xl font-bold mt-1">94%</p>
              <p className="text-xs text-green-600 mt-1">↑ 2% em relação ao mês passado</p>
            </div>
            <div className="p-2 bg-purple-50 rounded-lg">
              <span className="text-2xl">✅</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: '94%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gráficos e Tabelas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Gráfico de Desempenho por Matéria */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-lg mb-4">Desempenho por Matéria</h3>
          <div className="h-64 flex items-center justify-around">
            {materias.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-5xl mb-2" style={{ fontSize: `${item.nota * 8}px` }}>
                  {item.emoji}
                </span>
                <span className="text-sm font-medium mt-2">{item.materia}</span>
                <span className="text-sm text-gray-600">{item.nota.toFixed(1)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ranking de Alunos */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Top Alunos</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded-full">Mensal</button>
              <button className="px-3 py-1 text-xs border border-gray-300 rounded-full">Anual</button>
            </div>
          </div>
          <div className="space-y-4">
            {rankingAlunos.map((aluno, index) => (
              <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-lg mr-3 w-6 h-6 flex items-center justify-center">
                    {aluno.medalha}
                  </span>
                  <div>
                    <p className="font-medium text-sm">{aluno.nome}</p>
                    <p className="text-xs text-gray-500">{aluno.turma}</p>
                  </div>
                </div>
                <span className="font-semibold">{aluno.pontos} pts</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabela de Professores */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-lg">Desempenho dos Professores</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b border-gray-200">
                <th className="p-4">Professor</th>
                <th className="p-4">Matéria</th>
                <th className="p-4">Turmas</th>
                <th className="p-4">Média da Turma</th>
                <th className="p-4">Satisfação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {professores.map((prof, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        {prof.nome.split(' ')[1].charAt(0)}
                      </div>
                      <span className="font-medium">{prof.nome}</span>
                    </div>
                  </td>
                  <td className="p-4">{prof.materia}</td>
                  <td className="p-4">{prof.turmas}</td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <span className="w-12">{prof.media.toFixed(1)}</span>
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden ml-2">
                        <div 
                          className={`h-full ${
                            prof.media >= 8.5 ? 'bg-green-500' : 
                            prof.media >= 7.5 ? 'bg-blue-500' : 'bg-yellow-500'
                          }`}
                          style={{ width: `${prof.media * 10}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400">
                        {'★'.repeat(Math.floor(prof.satisfacao))}
                        {'☆'.repeat(5 - Math.floor(prof.satisfacao))}
                      </span>
                      <span className="ml-1 text-sm text-gray-500">({prof.satisfacao})</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Seção de Atividades Recentes */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-lg mb-4">Atividades Recentes</h3>
        <div className="space-y-4">
          {atividades.map((atividade, index) => (
            <div key={index} className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-50 text-blue-600 text-lg mr-3">
                {atividade.icon}
              </div>
              <div className="flex-1">
                <p className="font-medium">{atividade.titulo}</p>
                <p className="text-sm text-gray-500">{atividade.turma} • {atividade.data}</p>
              </div>
              <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                Ver
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
