// Dados organizados por turma
const turmas = {
  'Turma 3A': {
    cards: {
      engajamento: { value: '72%', detail: '26 de 36 ativos', icon: '👤' },
      desempenhoMedio: { value: '68%', detail: '↑ 5% vs. semana anterior', icon: '📈' },
      questoesResolvidas: { value: '1,248', detail: '34.7 por aluno', icon: '❓' },
      alertas: { value: '8', detail: 'Padrões de risco', icon: '🚨' },
    },
    desempenhoENEM: [
      { area: 'Matemática', progresso: 72 },
      { area: 'Linguagens', progresso: 68 },
      { area: 'C. Natureza', progresso: 54 },
      { area: 'C. Humanas', progresso: 76 },
    ],
    itensDificeis: [
      {
        titulo: 'Função Quadrática - Item #347',
        subtitulo: 'Matemática • Funções',
        acertos: '28% acertos',
        tempoMedio: '4.2min médio',
      },
      {
        titulo: 'Interpretação Textual - Item #156',
        subtitulo: 'Linguagens • Interpretação',
        acertos: '31% acertos',
        tempoMedio: '6.8min médio',
      },
      {
        titulo: 'Genética - Item #289',
        subtitulo: 'C. Natureza • Biologia',
        acertos: '35% acertos',
        tempoMedio: '3.1min médio',
      },
    ],
    padroesResposta: [
      { padrao: 'Tempo muito baixo', alunos: 12, icon: '⏱️' },
      { padrao: 'Possível chute', alunos: 8, icon: '🎲' },
      { padrao: 'Mudança resposta', alunos: 15, icon: '✍️' },
      { padrao: 'Múltiplas revistas', alunos: 6, icon: '🔁' },
    ],
    alunos: [
      {
        nome: 'Maria Oliveira',
        streak: '12 dias',
        engajamento: 'Alta',
        desempenho: '82%',
        questoes: 47,
        padroes: 'Normal',
      },
      {
        nome: 'José Almeida',
        streak: '5 dias',
        engajamento: 'Média',
        desempenho: '65%',
        questoes: 31,
        padroes: 'Risco',
      },
      {
        nome: 'Carolina Lima',
        streak: '25 dias',
        engajamento: 'Alta',
        desempenho: '91%',
        questoes: 55,
        padroes: 'Normal',
      },
    ],
    inativos: [
      { nome: 'João Silva', atividade: 'Última atividade: 5 dias' },
      { nome: 'Ana Costa', atividade: 'Última atividade: 3 dias' },
      { nome: 'Pedro Santos', atividade: 'Última atividade: 7 dias' },
    ]
  },
  'Turma 3B': {
    cards: {
      engajamento: { value: '65%', detail: '20 de 31 ativos', icon: '👤' },
      desempenhoMedio: { value: '72%', detail: '↑ 3% vs. semana anterior', icon: '📈' },
      questoesResolvidas: { value: '1,050', detail: '33.9 por aluno', icon: '❓' },
      alertas: { value: '5', detail: 'Padrões de risco', icon: '🚨' },
    },
    desempenhoENEM: [
      { area: 'Matemática', progresso: 75 },
      { area: 'Linguagens', progresso: 72 },
      { area: 'C. Natureza', progresso: 68 },
      { area: 'C. Humanas', progresso: 78 },
    ],
    itensDificeis: [
      {
        titulo: 'Geometria Analítica - Item #215',
        subtitulo: 'Matemática • Geometria',
        acertos: '32% acertos',
        tempoMedio: '5.5min médio',
      },
      {
        titulo: 'Literatura Brasileira - Item #189',
        subtitulo: 'Linguagens • Literatura',
        acertos: '28% acertos',
        tempoMedio: '7.2min médio',
      },
    ],
    padroesResposta: [
      { padrao: 'Tempo muito baixo', alunos: 8, icon: '⏱️' },
      { padrao: 'Possível chute', alunos: 5, icon: '🎲' },
      { padrao: 'Mudança resposta', alunos: 10, icon: '✍️' },
    ],
    alunos: [
      {
        nome: 'Carlos Eduardo',
        streak: '8 dias',
        engajamento: 'Alta',
        desempenho: '85%',
        questoes: 42,
        padroes: 'Normal',
      },
      {
        nome: 'Fernanda Lima',
        streak: '15 dias',
        engajamento: 'Alta',
        desempenho: '78%',
        questoes: 38,
        padroes: 'Normal',
      },
    ],
    inativos: [
      { nome: 'Rafael Souza', atividade: 'Última atividade: 4 dias' },
      { nome: 'Patrícia Gomes', atividade: 'Última atividade: 6 dias' },
    ]
  },
  'Turma 3C': {
    cards: {
      engajamento: { value: '82%', detail: '28 de 34 ativos', icon: '👤' },
      desempenhoMedio: { value: '75%', detail: '↑ 7% vs. semana anterior', icon: '📈' },
      questoesResolvidas: { value: '1,420', detail: '41.8 por aluno', icon: '❓' },
      alertas: { value: '3', detail: 'Padrões de risco', icon: '🚨' },
    },
    desempenhoENEM: [
      { area: 'Matemática', progresso: 79 },
      { area: 'Linguagens', progresso: 74 },
      { area: 'C. Natureza', progresso: 71 },
      { area: 'C. Humanas', progresso: 82 },
    ],
    itensDificeis: [
      {
        titulo: 'Trigonometria - Item #201',
        subtitulo: 'Matemática • Trigonometria',
        acertos: '42% acertos',
        tempoMedio: '4.8min médio',
      },
      {
        titulo: 'Química Orgânica - Item #312',
        subtitulo: 'C. Natureza • Química',
        acertos: '38% acertos',
        tempoMedio: '5.2min médio',
      },
    ],
    padroesResposta: [
      { padrao: 'Tempo muito baixo', alunos: 5, icon: '⏱️' },
      { padrao: 'Possível chute', alunos: 3, icon: '🎲' },
      { padrao: 'Múltiplas revistas', alunos: 4, icon: '🔁' },
    ],
    alunos: [
      {
        nome: 'Lucas Martins',
        streak: '20 dias',
        engajamento: 'Alta',
        desempenho: '88%',
        questoes: 62,
        padroes: 'Excelente',
      },
      {
        nome: 'Beatriz Rocha',
        streak: '18 dias',
        engajamento: 'Alta',
        desempenho: '92%',
        questoes: 58,
        padroes: 'Excelente',
      },
    ],
    inativos: [
      { nome: 'Gustavo Henrique', atividade: 'Última atividade: 2 dias' },
    ]
  }
};

export const mockTurmas = Object.keys(turmas) as Array<keyof typeof turmas>;
export const mockPeriodos = ['Esta Semana', 'Últimas 4 Semanas', 'Este Mês'];
export const mockMaterias = ['Todas as Matérias', 'Matemática', 'Linguagens', 'C. Natureza', 'C. Humanas'];

// Funções para obter dados específicos por turma
export const getTurmaData = (turma: keyof typeof turmas) => {
  return turmas[turma] || turmas['Turma 3A'];
};

export const getCards = (turma: keyof typeof turmas) => getTurmaData(turma).cards;
export const getDesempenhoENEM = (turma: keyof typeof turmas) => getTurmaData(turma).desempenhoENEM;
export const getTopItensDificeis = (turma: keyof typeof turmas) => getTurmaData(turma).itensDificeis;
export const getPadroesResposta = (turma: keyof typeof turmas) => getTurmaData(turma).padroesResposta;
export const getAlunos = (turma: keyof typeof turmas) => getTurmaData(turma).alunos;
export const getAlunosInativos = (turma: keyof typeof turmas) => getTurmaData(turma).inativos;
