// Array de alunos
const alunos = [
    { nome: 'João', nota1: 8, nota2: 7 },
    { nome: 'Maria', nota1: 9, nota2: 6 },
    { nome: 'Pedro', nota1: 7, nota2: 9 },
    { nome: 'Ana', nota1: 10, nota2: 8 },
  ];
  
  // Função para calcular a média das notas
  const calcularMedia = aluno => {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    return {
      nome: aluno.nome,
      media: media,
    };
  };
  
  // Array resultante com nome e média dos alunos
  const alunosComMedia = alunos.map(calcularMedia);
  
  // Ordenar em ordem decrescente de média
  alunosComMedia.sort((a, b) => b.media - a.media);
  
  // Exibir o array resultante no console
  console.log(alunosComMedia);
  