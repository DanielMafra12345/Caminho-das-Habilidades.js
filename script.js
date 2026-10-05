const desafios =[
    "Resolver problemas de lógica",
    "Aprender novas funções",
    "Criar novas soluções",
    "Aprender padrões",
    "Criar uma invenção"
];

function iniciarDesafio() {
    const name=document.getElementById("name").value;

    if (name.trim() === "") {
        alert("Digite seu nome para começar!");
        return;
    }    

    const numero = Math.floor(Math.random()*desafios.length)
    const desafio = desafios[numero];

    document.getElementById("resultado").innerHTML =
    `<h2>Olá ${name}!</h2>
   <p>Seu desafio é: </p>
   <h3> ${desafio}!</h3>
   
   <label for ="resposta">
   Qual projeto para este desafio?
   </label>
   
   <br></br>

   <textarea
   id ="resposta"
   rows = "5"
   cols = "40"
   placeholder = "Digite aqui o seu projeto">
   </textarea>
   
   <br></br>
  
   <button onclick="avaliarResposta()">🚀Enviar</button>`;
}

function avaliarResposta(){
    const name = document.getElementById("name").value;
    const resposta = document.getElementById("resposta").value;
    const textoDesafio = document.querySelector("#resultado h3");

    if (resposta.trim() === "") {
        alert("Digite seu projeto para enviar!");
        return;
    }    

    let pontos = 0;

    //1- critério de avaliação - quantidades de letras
    if(resposta.length >= 30){
        pontos += 30;
    }

    //2-
    const texto = resposta.toLowerCase();

    if(
        texto.includes("desenvolver")||
        texto.includes("criar")||
        texto.includes("praticar")
    ){
      pontos += 35;
    }

    if(
        texto.includes("resolver")||
        texto.includes("analisar")||
        texto.includes("pão")
    ){
      pontos += 35;
    }

    let nível;

    if(pontos >= 100){
        nível = "HACKER!";
    }

    else if (pontos >= 70){
        nível = "Inventor de Idéias";
    }

    else if (pontos >= 65){
        nível = "Desenvolvedor";
    }

    else{
        nível = "Explorador";
    }

    // Resultado aparece quando o botão Enviar for clicado
    document.getElementById("resultado").innerHTML += `
        <h2>Para ver seu resultado, selecione a área abaixo:</h2>
        <h4>Participante: ${name}</h4>
        <h4>Pontos: ${pontos}</h4>
        <h4>${nível}</h4>
    `;
}