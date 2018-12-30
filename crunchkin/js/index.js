var selecionaPersonagem = function() {
  var c = this.classList;

  if (c.contains('active')) {
    return c.remove('active');
  }

  c.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
  // ou seja, só executa o que estiver aqui dentro quando todos os 
  // elementos do HTML carregarem na DOM ("tela")

  var cards = document.getElementsByClassName("card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', selecionaPersonagem);
  }

});

