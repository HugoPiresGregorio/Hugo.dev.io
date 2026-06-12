export const projects = [
  {
    id: "Imagine",
    name: "IMAGINE",
    description: "Um site onde você não tem controle do que as cores podem criar. Uma demo interativa que simula tinta escorrendo e se acumulando em um quadro.",
    image: "./img/image.png",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    github: "https://github.com/HugoPiresGregorio/IMAGINE",
    demo: "https://hugopiresgregorio.github.io/IMAGINE/",
    long: "Um site onde você não tem controle do que as cores podem criar. Uma demo interativa que simula tinta escorrendo e se acumulando em um quadro. O código usa canvas 2D, pool de partículas, offscreen canvas para splats suaves, pointer events e ajustes de alta resolução para telas HiDPI. Ideal para experimentos visuais, protótipos artísticos e estudos de física simples de partículas.",
  },
  {
    id: "Re-Registro",
    name: "Re-Registro",
    description: "Sistema web de gestão de documentos no estilo Google Drive. Cada funcionário tem sua própria pasta pessoal e protegida para enviar e organizar relatórios, e a coordenação tem acesso de leitura a todas as pastas, podendo imprimir os relatórios em PDF. Toda a interface é em português do Brasil.",
    image: "./img/Re-Registro.png",
    tech: ["Monorepo", "React","Vite", "Express 5", "Backend", "PostgreSQL", "Drizzle ORM", "Zod", "Orval", "Esbuild"],
    category: "Full Stack",
    github: "https://github.com/HugoPiresGregorio/Re-Regsitro",
    demo: "https://github.com/HugoPiresGregorio/Re-Regsitro",
    long: "Sistema web de gestão de documentos no estilo Google Drive. Cada funcionário tem sua própria pasta pessoal e protegida para enviar e organizar relatórios, e a coordenação tem acesso de leitura a todas as pastas, podendo imprimir os relatórios em PDF. Toda a interface é em português do Brasil.",
  },
  {
    id: "TRETYFT",
    name: "TRETYFT",
    description: "Meu jogo de tetris, com o tema de matrix.",
    image: "./img/TETRYFT.png",
    tech: ["html", "css", "JavaScript"],
    category: "Full Stack",
    github: "https://github.com/HugoPiresGregorio/TRETYFT",
    demo: "https://hugopiresgregorio.github.io/TRETYFT/",
    long: "SE BATER MEU RECORDE EU TE PAGO UMA PIZZA.",
  },
];

export const articles = [
  {
    slug: "Intelience-Artificial",
    title: "Inteligência Artificial",
    date: "2026-09-06",
    readTime: "1h",
    category: "IA",
    tags: ["IA", "Machine Learning", "Deep Learning"],
    excerpt: "Como a IA muda a forma de pensar a resolução de problemas em aplicações modernas.",
    content: `Modelos de Inteligência Artificial permitem automatizar o processamento de dados e a geração de conteúdo, reduzindo o esforço manual e expandindo as capacidades do software.

## Quando usar

Use IA para fluxos que lidam com dados não estruturados, interpretação de texto livre, visão computacional ou reconhecimento de padrões complexos. Misture com a lógica de programação tradicional em etapas que exigem regras de negócios estritas e determinísticas.

## Performance

A delegação de tarefas cognitivas para modelos de IA costuma render ganhos massivos de produtividade e engajamento do usuário. Mas atenção: cada chamada a uma API de IA externa (como LLMs) adiciona latência considerável à resposta e possui um custo atrelado por uso.

## Conclusão

IA não é bala de prata, mas resolve um problema real de gargalo produtivo e abre novas possibilidades de interação em sistemas complexos.`,
  },
];
