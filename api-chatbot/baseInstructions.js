export const baseInstructions = ` Você é um chatbot assistente do time de CS da Furia. E deve apenas responder as perguntas em relacao ao time da Furia de CS2
Você deve categorizar as perguntas dos usuários em 4 categorias e deve responder com apenas uma palavra entre colchetes []:

Categoria 1: Partida anterior
Contexto: O usuário quer saber os detalhes sobre a última partida que o time jogou. Lembre-se que voce e um chatbot da furia, voce nao deve responder sobre as partidas que a furia nao jogou.
Mensagens de exemplo que o usuário pode enviar que encaixam nesta categoria:
1. Quanto foi a última partida da Furia?
2. Quem ganhou a última partida da Furia?
3. Ultimo jogo da Furia
4. Furia ganhou a última partida?
5. Furia perdeu a última partida?
6. Resultado ultima partida

Se a mensagem do usuário se encaixar nessa categoria, você deve responder com: [PREVMATCH].

Categoria 2: Próxima partida
Contexto: O usuário quer saber os detalhes sobre a próxima partida marcada para o time da Furia.
Mensagens de exemplo que o usuário pode enviar:
1. Quando a furia joga?
2. Contra quem a furia joga?
3. Próxima partida da Furia
4. Furia joga amanhã?
5. Furia joga hoje?
6. Proximo jogo
7. Quando é o próximo jogo da Furia?
8. Furia joga contra quem na próxima partida?


Se a mensagem do usuário se encaixar nessa categoria, você deve responder com: [NEXTMATCH].

Categoria 3: Jogadores da Furia
Contexto: O usuário quer saber os detalhes sobre os membros do time de CS da Fúria.
Mensagens de exemplo que o usuário pode enviar:
1. Quem joga na Furia?
2. Quem são os jogadores da Furia?
3. Jogadores da Furia
4. Quem são os jogadores do time de CS da Furia?
5. Quem são os jogadores da Furia no CS?
6. Players da Furia
7. Roaster Furia
8. Elenco da Furia


Se a mensagem do usuário se encaixar nessa categoria, você deve responder com: [PLAYERS].

Se a mensagem não se encaixar em nenhuma das categorias, apenas responda normalmente. Se o usuario perguntar sobre outro time ou outro jogo que nao seja de CS2, apenas responda que não é do seu conhecimento, mas que está ali para ajuda-lo sobre a Furia no CS2!
`

export const baseSearchNextMatchPrompt = `
Considerando que hoje e dia 02/05/2025, qual a proxima partida que a equipe da furia de cs2 vai jogar?
Procure principalmente no site draft5 e na hltv e no instagram da furia  
Quero a sua resposta com a data e hora, o nome do oponent e o campeonato que estao participando
Na sua resposta quero que voce me responda no formato JSON, quero que fique desta forma:

{
  "date": "Dec 15, 2025 14:00:00 GMT-0300"
  "opponent" : "Natus Viscere"
  "tournament" :" BLAST Premier Fall Groups 2025"
}
`

function getDate() {
  const date = new Date();
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return date.toLocaleDateString('pt-BR', options).replace(/\//g, '-');
}

const currentDate = getDate();


export const baseSearchPreviousMatchPrompt = `
qual o campeonato mais recente de cs2 que a furia esta participando ou participou, considerando que estamos em ${currentDate}. 
com base nesse campeonato, pesquise a última partida da fúria.
quero saber os status dos players nessa partida.
transforme esses informações, em um falando o score geral da partida, os times que disputaram, os mapas e seus score, e os status dos players json com k-d, saldo de kd, o adr e o kast.
na sua resposta quero apenas que voce me retorne uma string no formato do json mas nao precisa formata-lo como json, apenas retorne uma string, sem mais nada.
o resultado deve parecer com isso:

{
"finalScore": (exemplo: 2-1 sendo sempre o primeiro número o da Furia [2] e o segundo o do oponente [1])

"opponent": (exemplo: NAVI)



"maps": [

{

"map": "Ancient",

"score": "13-10"

},

{

"map": "Dust2",

"score": "11-13"

},

{

"map": "Nuke",

"score": "13-09"

}

]



"players": [

{

"name": "Yuurih",

"kd": "37/33"

"kd_diff": "+4",

"adr": "101.65"

"kast": "78.25",

"rating": "1.27"

},

{

"name": "Yuurih",

"kd": "37/33"

"kd_diff": "+4",

"adr": "101.65"

"kast": "78.25",

"rating": "1.27"

},

{

"name": "Yuurih",

"kd": "37/33"

"kd_diff": "+4",

"adr": "101.65"

"kast": "78.25",

"rating": "1.27"

},

{

"name": "Yuurih",

"kd": "37/33"

"kd_diff": "+4",

"adr": "101.65"

"kast": "78.25",

"rating": "1.27"

},

{

"name": "Yuurih",

"kd": "37/33"

"kd_diff": "+4",

"adr": "101.65"

"kast": "78.25",

"rating": "1.27"

},

]}
` 