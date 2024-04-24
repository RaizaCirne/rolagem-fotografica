var intervalo = 2000; // Intervalo de 2 segundos
var imagens = [];

for (var i = 1; i <= 14; i++) {
  imagens.push('/assets/images/' + (i < 10 ? '0' : '') + i + '.jpg');
}

var contador = 0;

function trocarImagem() {
  document.getElementById('music-img').src = imagens[contador];
  contador = (contador + 1) % imagens.length; // Avança para a próxima imagem ou volta ao início do array se atingir o final
  setTimeout(trocarImagem, intervalo);
}

// Inicia o slide
trocarImagem();

