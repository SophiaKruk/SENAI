let biblioteca = [
    {titulo:'Patinho Feio', autor:'Hans Christian Andersen', paginas: 32, lido: false},
    {titulo:'O Pequeno Príncipe', autor:'Antoine de Saint-Exupéry', paginas:96, lido: true},
    {titulo:'João pé de Feijão', autor: 'Joseph Jacobs', paginas:22, lido: true},
    {titulo:'Chapeuzinho Vermelho', autor:'Charles Perrault', paginas:20, lido: true},
    {titulo:'O Mágico de Oz', autor:'L. Frank Baum', paginas:170, lido: true},
];

biblioteca.forEach(function(livro) {
  console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`)
}
);

console.log("Propriedades de primeiro livro: ", Object.keys(biblioteca[0]));

for(let chave in biblioteca[0]) {
    console.log(`${chave}: ${biblioteca[0][chave]}`)
};