import {
  reacticon,
  fronticon,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  omnifood,
  todolist,
  metaproj,
  quizproj,
  pigproj,
  guessproj,
  projetoproj,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Sobre mim',
  },
  {
    id: 'work',
    title: 'Projetos',
  },
  {
    id: 'contact',
    title: 'Contato',
  },
];

const services = [
  {
    title: 'Desenvolvedor Web',
    icon: web,
  },
  {
    title: 'Desenvolvimento React',
    icon: reacticon,
  },
  {
    title: 'CSS, HTML, JS',
    icon: fronticon,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
];

const experiences = [
  {
    title: 'Desenvolvimento web',
    company_name: 'Frontend',
    icon: fronticon,
    iconBg: '#383E56',
    date: '2023',
    points: [
      'Estruturação de páginas web com HTML.',
      'Estilização de páginas web com CSS.',
      'Implementação de lógica em páginas web através do JavaScript.',
      'Utilização de componentes, JSX, Hooks, etc. com React.',
    ],
  },
  {
    title: 'Desenvolvimento web(estudando)',
    company_name: 'Frontend & Lógica',
    icon: web,
    iconBg: '#E6DEDD',
    date: '2023~',
    points: ['TypeScript', 'Tailwind', 'Algoritmos', 'Design Patterns'],
  },
  {
    title: 'Desenvolvimento web(estudarei)',
    company_name: 'Backend & Lógica',
    icon: reacticon,
    iconBg: '#383E56',
    date: '2023~',
    points: ['Java/Go/Outros', 'Algoritmos', 'Design Patterns'],
  },
];

const projects = [
  {
    name: 'Metaversus Landing Page',
    description:
      'Landing Page com diversos tipos de animações utilizando o Framer-Motion',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'text-amber-200',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
    ],
    image: metaproj,
    source_code_link: 'https://github.com/RodrigoMacDev/Metaversus-Landing-Page',
    deploy_code_link: 'https://metaversusrmd.vercel.app/',
  },
  {
    name: 'To-do list App',
    description:
      'Aplicativo de To-do list com funcionalidades de CRUD e de Drag and Drop, feito utilizando TypeScript.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
    ],
    image: todolist,
    source_code_link: 'https://github.com/RodrigoMacDev/To-Do-List-App',
    deploy_code_link: 'https://todolistrmd.vercel.app/',
  },
  {
    name: 'Quiz App',
    description:
      'Quiz app com perguntas em relação ao desenvolvimento Frontend com 4 categorias: React, JavaScript, HTML, e CSS ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'text-amber-200',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
    ],
    image: quizproj,
    source_code_link: 'https://github.com/RodrigoMacDev/Frontend-Quiz',
    deploy_code_link: 'https://quizrmd.vercel.app/',
  },
  {
    name: 'OmniFood Landing Page',
    description:
      'Projeto de uma startup fictícia de delivery de comida, com um complexo layout e uso de diversas formas de estilização.',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
    ],
    image: omnifood,
    source_code_link: 'https://github.com/RodrigoMacDev/food-startup-project',
    deploy_code_link: 'https://omnifoodrmd.vercel.app/',
  },
  {
    name: 'Portfólio',
    description:
      'Este portfólio que utiliza de diversas animações 3D e de efeitos de movimento. Utilizando de bibliotecas como Three.Js e Framer-Motion.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'text-amber-200',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
    ],
    image: projetoproj,
    source_code_link: 'https://github.com/RodrigoMacDev/Portfolio-React',
    deploy_code_link: 'https://rodrigodesenvolvedor.vercel.app/',
  },
  {
    name: 'Pig Game',
    description:
      'Jogo com rolagem de dados e somatória dos resultados para determinar o vencedor, com funções de segurar o atual score e passar a vez e de reiniciar o jogo',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'text-amber-200',
      },
    ],
    image: pigproj,
    source_code_link: 'https://github.com/RodrigoMacDev/Pig-Game',
    deploy_code_link: 'https://pigrmd.vercel.app/',
  },
  {
    name: 'Guess Game',
    description:
      'Jogo para advinhar o número aleatório que foi gerado, com função se alertar se o palpite foi mais alto ou mais baixo que o número certo',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'text-amber-200',
      },
    ],
    image: guessproj,
    source_code_link: 'https://github.com/RodrigoMacDev/Guess-My-Number',
    deploy_code_link: 'https://adivinhenumerormd.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
