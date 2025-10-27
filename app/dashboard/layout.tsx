import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard do Professor',
  description: 'Painel de controle para professores acompanharem o desempenho dos alunos',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
    </main>
  );
}
