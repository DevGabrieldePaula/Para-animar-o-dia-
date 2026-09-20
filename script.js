const mensagemCompleta = `Sei que seu dia hoje foi corrido e provavelmente bem cansativo, mas eu não poderia deixar de te perturbar um pouquinho, né? 😂

Quero que você continue sendo essa mulher forte que você é. Sei que nem todos os dias vão ser bons, que às vezes o cansaço pesa, as coisas não saem como a gente gostaria e tudo o que queremos é simplesmente ficar quietos no nosso canto.

Mas, mesmo nesses dias, quero que você saiba que não precisa passar por tudo sozinha.

Se em algum momento você precisar de alguém para conversar, desabafar, reclamar da vida, esquecer um pouco dos problemas ou simplesmente ter alguém do outro lado te perturbando, pode contar comigo. Dizem que eu sou um ótimo ouvinte… às vezes eu mesmo tenho minhas dúvidas, haha. 😂

Mas vou estar aqui para te ouvir, mesmo quando você não souber exatamente o que dizer.

Continue sorrindo e sendo essa mulher doce, gentil e especial que você é. Talvez você nem perceba, mas esse seu jeito de ser é algo muito bonito e que merece ser preservado.

E pode ter certeza de que você continua nas minhas orações, para que esse pé melhore logo e você possa voltar a ficar 100%. 🙏🏻🤍

Até porque eu ainda não desisti da missão de perturbar a Letícia Martins todos os dias. 😂 Então você vai ter que me aguentar por bastante tempo ainda.

Mas, brincadeiras à parte, conta comigo para o que precisar, Lê. De verdade.

Se um dia precisar me ligar de madrugada, pode ligar.

Se quiser conversar, eu converso.
Se quiser reclamar, eu escuto.
Se quiser esquecer tudo por algumas horas, me chama para jogar um UNO. 😂

Às vezes nem precisamos resolver nada. Basta ter alguém por perto.

E quero que você tenha certeza de uma coisa:

Onde quer que a Letícia Martins esteja, se eu puder estar lá para ajudar, eu vou estar.

Não importa se for em um dia bom ou em um daqueles dias em que tudo parece dar errado.

Você não precisa enfrentar tudo sozinha. 🤍

Espero que você consiga descansar hoje e que amanhã seja um dia muito mais leve.

Mas, se amanhã não for, tudo bem também.

Você já sabe que pode me perturbar, porque eu vou continuar aqui para te perturbar de volta. 😂🤍

Cuida desse pé, descansa bastante e não esquece de sorrir.

E, principalmente, nunca esquece que você tem alguém aqui torcendo de verdade para que tudo fique bem.

Agora melhora logo esse pé, porque eu ainda tenho muitos dias de perturbação pela frente. 😂💜`;

function mostrarMensagem() {

    const mensagem = document.getElementById("mensagem");

    mensagem.innerText = mensagemCompleta;

    mensagem.classList.remove("hidden");

    criarCoracoes();
}