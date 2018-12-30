// $('.card').toggle('active');

$('.card').click(function() {
  $(this).toggleClass("active");
});


// vai no banco de dados pegar as informações
$('.personagens-container').html = [{
  image: '...',
  nome: 'Esqueleto',
  coisaRuim: '...'
}];