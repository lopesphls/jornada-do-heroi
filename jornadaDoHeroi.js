const prompt = require("prompt-sync");

console.log();

let teclado = prompt();
let heroiNome = "";
heroiNome = teclado("Digite o nome do heroi:  ");

//Pergunta 1
console.log(
  `${heroiNome} Quando você inicia sua jornada tem que tomar decisões que nem sempre serão faceis. Você foi invocado para lutar contra o lorde demonio.`
);
console.log();

let resposta = "";
let acumulador = 0;

while (resposta !== "sim" && resposta !== "nao") {
  console.log(
    `${heroiNome} Sua jornada consiste em derrotar o dragão que aflige este local. Deseja enfrentalo? (sim ou nao)`
  );
  resposta = teclado().toLowerCase();
  if (resposta === "sim") {
    console.log();
    console.log("Obrigado por derrotar o dragão.");
    acumulador += 1;
  }
  if (resposta !== "sim" && resposta !== "nao") {
    console.log(
      "Suas respostas consistem em 'sim' ou 'nao', qualquer alteração a resposta não será armazenada."
    );
  }
}

//Pergunta 2
console.log();
resposta = "";
while (resposta !== "sim" && resposta !== "nao") {
  console.log(
    `${heroiNome} Um exercito gigantesco vem destruir o pais. Deseja enfrentalos? (sim ou não)`
  );
  resposta = teclado().toLowerCase();
  if (resposta === "sim") {
    console.log();
    console.log("Obrigado por derrotar o exercito inimigo.");
    acumulador += 1;
  }
  if (resposta !== "sim" && resposta !== "nao") {
    console.log(
      "Suas respostas consistem em 'sim' ou 'nao', qualquer alteração a resposta não será armazenada."
    );
  }
}

//Pergunta 3
resposta = "";
console.log();
while (resposta !== "sim" && resposta !== "nao") {
  console.log(
    `${heroiNome} A população foi envenenada, precisamos que você vá buscar os antidotos. Deseja ajudar? (sim ou não)`
  );
  resposta = teclado().toLowerCase();
  if (resposta === "sim") {
    console.log();
    console.log("Obrigado por trazer os antidotos.");
    acumulador += 1;
  }
  if (resposta !== "sim" && resposta !== "nao") {
    console.log(
      "Suas respostas consistem em 'sim' ou 'nao', qualquer alteração a resposta não será armazenada."
    );
  }
}

//Pergunta 4
console.log();
resposta = "";
while (resposta !== "sim" && resposta !== "nao") {
  console.log(
    `${heroiNome} Os principais guerreiros inimigos estão destruindo nossos exercitos. Deseja ajudar? (sim ou não)`
  );
  resposta = teclado().toLowerCase();
  if (resposta === "sim") {
    console.log();
    console.log("Obrigado por derrotar os inimigos.");
    acumulador += 1;
  }
  if (resposta !== "sim" && resposta !== "nao") {
    console.log(
      "Suas respostas consistem em 'sim' ou 'nao', qualquer alteração a resposta não será armazenada."
    );
  }
}

//Pergunta 5
console.log();
resposta = "";
while (resposta !== "sim" && resposta !== "nao") {
  console.log(
    `${heroiNome} O lorde demonio vai destruir a toda a humanidade. Deseja ajudar? (sim ou nao)`
  );
  resposta = teclado().toLowerCase();
  if (resposta === "sim") {
    console.log();
    console.log("Obrigado por impedir o lorde demonio.");
    acumulador += 1;
  }
  if (resposta !== "sim" && resposta !== "nao") {
    console.log(
      "Suas respostas consistem em 'sim' ou 'nao', qualquer alteração a resposta não será armazenada."
    );
  }
}

console.log();

if (acumulador === 0) {
  console.log("O lorde demonio destruiu o pais.");
  console.log("Você falhou miseravelmente");
} else if (acumulador === 1 || acumulador === 2) {
  console.log("Milhões de pessoas morreram.");
  console.log("Você falhou, mas ainda conseguimos escapar da situação.");
} else if (acumulador === 3) {
  console.log("Centenas de pessoas morreram.");
  console.log(
    "Você quase conseguiu vencer o lorde demonio, você falhou por pouco."
  );
} else if (acumulador === 4) {
  console.log("Dezenas pessoas morreram.");
  console.log(
    "Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita."
  );
} else {
  console.log(
    "Você destruiu o exercito inimigo e matou o lorde demonio sem deixar vitimas."
  );
  console.log(
    "Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações."
  );
}
