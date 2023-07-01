class Livro {
  constructor(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }

  obterInformacoes() {
    return `Título: ${this.titulo}\nAutor: ${this.autor}\nAno de Publicação: ${this.anoPublicacao}`;
  }
}

// Criando três objetos da classe Livro
const livro1 = new Livro("Dom Quixote", "Miguel de Cervantes", 1605);
const livro2 = new Livro("1984", "George Orwell", 1949);
const livro3 = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943);

// Exibindo as informações de cada livro
console.log(livro1.obterInformacoes());
console.log(livro2.obterInformacoes());
console.log(livro3.obterInformacoes());

