const desafios =[
    "Resolver problemas de lógica",
    "Aprender novas funções",
    "Criar novas soluções",
    "Aprender padrões",
    "Criar uma invenção"
];

function iniciarDesafio() {
    const name=document.getElementById("name").value;

    if (name === "") {
        alert("Digite seu nome para começar!");
        return;
    }    

    const numero = Math.floor(Math.random()*desafios.length)
    const desafio = desafios[numero];

    document.getElementById("resultado").innerHTML =
    "<h2>Olá ${name}!</h2>"
   "<p>Seu desafio é: ${desafio}!</p>"
}
