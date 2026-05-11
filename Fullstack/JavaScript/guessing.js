const numeroAleatorio = Math.floor(Math.random() * 100) + 1;


let jogoFinalizado = false;

function verificarNumero() {

 
  if (jogoFinalizado) {
    return;
  }


  const numeroUsuario = Number(
    document.getElementById("numeroUsuario").value
  );


  const resultado = document.getElementById("resultado");

 
  if (numeroUsuario === numeroAleatorio) {

    resultado.innerHTML =
      "Parabéns! Você acertou o número!";

    resultado.style.setProperty(
      "background-color",
      "lightgreen"
    );

   
    jogoFinalizado = true;

  } else if (numeroUsuario > numeroAleatorio) {

    resultado.innerHTML =
      "Errado! O número secreto é MENOR.";

    resultado.style.setProperty(
      "background-color",
      "red"
    );

  } else {

    resultado.innerHTML =
      "Errado! O número secreto é MAIOR.";

    resultado.style.setProperty(
      "background-color",
      "red"
    );
  }
}