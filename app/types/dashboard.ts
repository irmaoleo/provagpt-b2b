export interface CardData {
  [key: string]: {
    value: string;
    detail: string;
    icon: string;
  };
}

export interface PerformanceData {
  area: string;
  progresso: number;
}

export interface DifficultItem {
  titulo: string;
  subtitulo: string;
  acertos: string;
  tempoMedio: string;
}

export interface PatternItem {
  padrao: string;
  alunos: number;
  icon: string;
}

export interface InactiveStudent {
  nome: string;
  atividade: string;
}

export interface Student {
  nome: string;
  streak: string;
  engajamento: string;
  desempenho: string;
  questoes: number;
  padroes: string;
}
