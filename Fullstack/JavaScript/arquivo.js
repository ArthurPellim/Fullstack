window.alert("ALERTA!!! Está página pode conter vírus. Deseja abri-la mesmo assim?")
console.log("Dado escondidinho")

let entrada = prompt("Entre com a sua idade (Você deve ser 18+ para acessar o site):")
console.log("Sua idade é:")
console.log(entrada)

if (entrada == 9){
console.log("Você é muito novo para este site")
}

else if(entrada > 9){
console.log("Você pode utilizar o site")
}

else {
console.log("Você sequer tem CPF?")
}

let i = 0

while(i < 10){
    window.alert(i);
    i++;
}