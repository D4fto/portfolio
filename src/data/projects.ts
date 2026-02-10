import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 11,
    name: "D4fto's Planner",
    description: "Projeto próprio desenvolvido para estudo de React. Esse projeto é um calendário onde se pode anotar eventos ou tarefas que vão acontecer em certo dia. Com cores personalizadas, uma interface amigável e dinâmica.",
    technologies: ['react', 'tailwind', 'css3', 'javascript'],
    imageUrl: 'https://d4fto.github.io/images/plannercover.png',
    demoUrl: 'https://d4fto.github.io/planner/',
    repoUrl: 'https://github.com/D4fto/planner',
    status: 'completed',
    featured: true
  },
  {
    id: 13,
    name: "Investec",
    description: "Projeto acadêmico criado com o objetivo de auxiliar no controle de despesas do usuário. Utilizando o framework React e consumindo a API google charts.",
    technologies: ['react', 'css3', 'javascript'],
    imageUrl: 'https://d4fto.github.io/images/gastoscover.png',
    demoUrl: 'https://d4fto.github.io/ControleDeGastosDW2',
    repoUrl: 'https://github.com/D4fto/ControleDeGastosDW2',
    status: 'completed',
    featured: true
  },
  {
    id: 4,
    name: "Agroview",
    description: "Projeto feito em 48 horas para o hackathon 'NASA Space Apps 2024', com o tema 'Leveraging Earth Observation Data for Informed Agricultural Decision-Making'. Desenvolvido com a função de auxiliar agricultores em suas tomadas de decisão. utilizando dados climáticos, para dizer se é um tempo bom para plantio/colheita/pulverização.",
    technologies: ['nodejs', 'html5', 'css3', 'javascript'],
    imageUrl: 'https://d4fto.github.io/images/agroviewcover.png',
    demoUrl: 'https://agroview-sjsk.onrender.com/',
    repoUrl: 'https://github.com/gimenezhiago/hackathon-vibranium',
    status: 'completed',
    featured: true
  },
  {
    id: 1,
    name: "Epic Gomes",
    description: "Epic Gomes é um projeto que inicialmente surgiu como um trabalho relacionado à banco de dados. Originalmente era feito com PHP mas o projeto foi migrado para Javascript, utilizando Node.js. Inspirado por lojas de jogos online como: Steam, Epic Games e outros.",
    technologies: ['nodejs', 'html5', 'css3', 'javascript', 'mysql'],
    imageUrl: 'https://d4fto.github.io/images/epicgomescover.png',
    demoUrl: 'https://epicgomes.onrender.com/',
    repoUrl: 'https://github.com/D4fto/epic_gomes',
    status: 'in-progress'
  },
  {
    id: 12,
    name: "Linux Defender",
    description: "Projeto próprio originalmente feito para aprender à utilizar a game engine Godot e para ter o meu primeiro contato com a linguagem C#.",
    technologies: ['csharp', 'mysql'],
    imageUrl: 'https://d4fto.github.io/images/linuxdefendercover.png',
    demoUrl: 'https://d4fto.itch.io/linuxdefender',
    status: 'in-progress'
  },
  {
    id: 3,
    name: "flappyIA",
    description: "Projeto pessoal inspirado em um vídeo do canal Universo Programado, com o intuito de estudar sobre redes neurais e algoritmo genético. Atualmente em seu site mostra uma IA já treinada.",
    technologies: ['html5', 'css3', 'javascript'],
    imageUrl: 'https://d4fto.github.io/images/flappyIAcover.png',
    demoUrl: 'https://d4fto.github.io/flappyIA/',
    repoUrl: 'https://github.com/D4fto/flappyIA',
    status: 'in-progress'
  },
  {
    id: 2,
    name: "Comcam",
    description: "Projeto que surgiu a partir de um trabalho de geografia, onde agrupamos dados de algumas cidades da região da Comcam. E com orientação da professora, expandimos o trabalho para esse site que reune e expõe informações de todas as cidades da Comcam.",
    technologies: ['html5', 'css3', 'javascript'],
    imageUrl: 'https://d4fto.github.io/images/comcamcover.png',
    demoUrl: 'https://comcam24-utfpr.onrender.com/',
    repoUrl: 'https://github.com/D4fto/comcam24',
    status: 'completed'
  },
  {
    id: 5,
    name: "Reaction",
    description: "Projeto pessoal de um teste de tempo de reação. Esse projeto foi feito com o intuito de criar minha própria versão do site humanbenchmark.",
    technologies: ['html5', 'css3', 'javascript'],
    imageUrl: 'https://d4fto.github.io/images/reactioncover.png',
    demoUrl: 'https://d4fto.github.io/reaction/',
    repoUrl: 'https://github.com/D4fto/reaction',
    status: 'completed'
  },
  {
    id: 6,
    name: "Linux Defender Legacy",
    description: "Projeto pessoal de um jogo do tipo roguelike. Inspirado em um professor do meu ensino técnico que defendia o uso do Linux, criei esse jogo onde você derrota várias versões do Windows utilizando o pinguim do Linux como arma.",
    technologies: ['html5', 'css3', 'javascript'],
    imageUrl: 'https://d4fto.github.io/images/linuxdefenderlegacycover.png',
    demoUrl: 'https://d4fto.github.io/linuxDefender/',
    repoUrl: 'https://github.com/D4fto/linuxDefender',
    status: 'in-progress'
  },
  {
    id: 7,
    name: "Pong da Vida",
    description: "Projeto feito para um trabalho da matéria de algoritmos que mistura um jogo pong com o 'Jogo da vida de Conway'. Feito em python com pygame e transferido para web com Pygbag.",
    technologies: ['python'],
    imageUrl: 'https://d4fto.github.io/images/pongcover.png',
    demoUrl: 'https://d4fto.github.io/pong/',
    repoUrl: 'https://github.com/D4fto/pong',
    status: 'completed'
  },
  {
    id: 8,
    name: "Sapataria Passo Fino",
    description: "Projeto feito para um trabalho da matéria de Banco de dados, com o intuito de modelar e desenvolver um sistema para uso interno em uma sapataria. Foi utilizado Node.js, MySQL e também foi necessário o uso de um servidor websocket para comunicação em tempo real.",
    technologies: ['nodejs', 'html5', 'css3', 'javascript', 'mysql'],
    imageUrl: 'https://d4fto.github.io/images/sapatariacover.png',
    demoUrl: 'https://sapatariapf.onrender.com/',
    repoUrl: 'https://github.com/D4fto/sapatariaPF',
    status: 'completed'
  },
  {
    id: 9,
    name: "Gyroscopic Mouse",
    description: "Projeto pessoal pensado a partir de um problema para o controle de mouse durante uma apresentação. Para resolver isso desenvolvi um programa que controla o mouse remotamente utilizando o giroscópio do celular, se comunicando por rede WI-FI (não é necessário estar na mesma rede).",
    technologies: ['html5', 'css3', 'javascript', 'python'],
    imageUrl: 'https://d4fto.github.io/images/mousecover.png',
    repoUrl: 'https://github.com/D4fto/gyroscopicMouse',
    status: 'completed'
  },
  {
    id: 10,
    name: "UniAlert",
    description: "Projeto desenvolvido para a disciplina de geografia do ensino técnico em Informática. O projeto é uma landing page que mostra a importância de realizar um curso superior nos tempos de hoje.",
    technologies: ['html5', 'css3', 'javascript'],
    imageUrl: 'https://d4fto.github.io/images/unialertcover.png',
    demoUrl: 'https://d4fto.github.io/uniAlert/',
    repoUrl: 'https://github.com/D4fto/uniAlert',
    status: 'completed'
  }
];
