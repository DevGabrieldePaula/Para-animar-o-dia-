const mensagemCompleta = `Oi, Lari! Sei que seu dia está sendo meio corrido e que provavelmente já está chegando perto do seu horário de almoço, mas fiquei sabendo que ele não está sendo dos melhores por causa da dor do aparelho. Então decidi tentar te fazer rir um pouquinho e, de quebra, te lembrar do quão legal você é!

Quero que você lembre sempre que o seu jeitinho é único e especial. Admito que, às vezes, eu até fico pensando: “O que caraca eu vou falar com essa mulher???” KKKKKKKK, e olha que eu sou do tipo que fala pelos cotovelos.

Mas falando sério, quero que você saiba que hoje você está incrivelmente linda e espero que já tenha tirado da cabeça essa ideia de que não está bonita por causa do aparelho. Você continua sendo você, e isso já é mais do que suficiente. ❤️

Você tem qualidades incríveis, é uma pessoa extremamente divertida e, provavelmente, todos os seus amigos agradecem por terem você na vida deles. :)

Então continue sendo essa menina agradável, gentil e, principalmente, sorridente, porque esse sorriso é uma das coisas mais bonitas que eu poderia ver hoje.

E eu não quero ninguém triste não, hein... Porque se eu for para Teresina City, quero poder te fazer rir com as minhas piadas ruins KKKKKKKKK. Então trata de continuar sorrindo, porque eu preciso de uma plateia para as minhas piadas ruins.

E, por favor, não deixa um aparelho te convencer do contrário. Você continua linda. ❤️`;

function mostrarMensagem() {

    const mensagem = document.getElementById("mensagem");

    mensagem.innerText = mensagemCompleta;

    mensagem.classList.remove("hidden");

    criarCoracoes();
}
