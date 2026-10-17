// Peça: [nome, descrição, arquivo da imagem em images/pecas/]
const CONFIGS = [
  {
    id: "A", img: "processador", nome: "Configuração A — PC econômico",
    objetivo: "Estudar, jogar jogos leves e poder fazer upgrade depois.",
    itens: [
      ["Processador", "AMD Ryzen 5 5600GT (com gráficos integrados)", "processador"],
      ["Placa-mãe", "A520M compatível, com BIOS adequada", "placa-mae"],
      ["Memória RAM", "16 GB DDR4 3200 MHz (2×8 GB)", "memoria-ram"],
      ["SSD", "NVMe 500 GB", "ssd"],
      ["Fonte", "MSI MAG A550BN ou equivalente confiável", "fonte"],
      ["Gabinete", "Micro-ATX com boa ventilação", "gabinete"],
      ["Monitor", "Full HD, 100 Hz, 24 polegadas", "monitor"],
      ["Headset (opcional)", "Modelo de entrada", "headset"]
    ],
    pros: ["Mais barato para montar", "Bom para estudar e jogar jogos leves", "Permite melhorar o PC no futuro"],
    contras: ["Dificuldade com jogos mais pesados", "Alguns jogos precisarão de gráficos reduzidos"]
  },
  {
    id: "B", img: "placa-video", nome: "Configuração B — PC com placa de vídeo",
    objetivo: "Desempenho superior em jogos variados, inclusive 3D exigentes em Full HD.",
    itens: [
      ["Processador", "AMD Ryzen 5 5500 (sem vídeo integrado)", "processador"],
      ["Placa-mãe", "A520M compatível, com BIOS adequada", "placa-mae"],
      ["Placa de vídeo", "AMD Radeon RX 6600 8 GB", "placa-video"],
      ["Memória RAM", "16 GB DDR4 3200 MHz (2×8 GB)", "memoria-ram"],
      ["SSD", "NVMe 500 GB", "ssd"],
      ["Fonte", "MSI MAG A550BN ou equivalente confiável", "fonte"],
      ["Gabinete", "Micro-ATX ventilado", "gabinete"],
      ["Monitor", "Full HD, 100 Hz", "monitor"],
    ],
    pros: ["Roda mais jogos e oferece melhor desempenho", "Mais indicado para jogos pesados", "Boa experiência em Full HD"],
    contras: ["Mais caro para montar", "Pode ultrapassar o orçamento de R$ 4.000"]
  }
];

const NIVEIS = ["Bom desempenho esperado", "Roda com ajustes", "Desempenho limitado", "Não recomendado", "Requisitos não verificados"];

// Jogo: [nome, gênero, categorias, nível PC A, nível PC B, observação]
// A capa é lida de images/jogos/<nome-do-jogo>.jpg (ex.: images/jogos/minecraft.jpg)
const JOGOS = [
  ["Minecraft", "Sandbox", ["leve", "indie"], 0, 0, "Sem shaders: bom nas duas. Com shaders pesados: A limitado, B com ajustes."],
  ["Roblox", "Variado", ["leve"], 0, 0, "Depende do mapa e do jogo dentro do Roblox."],
  ["Valorant", "FPS tático", ["leve", "comp"], 0, 0, "Jogo competitivo leve."],
  ["Counter-Strike 2", "FPS", ["comp"], 1, 0, "Desempenho variável conforme mapa e configurações."],
  ["Fortnite", "Battle royale", ["comp"], 1, 0, "Use o modo desempenho no PC A."],
  ["GTA V", "Mundo aberto", ["aberto"], 1, 0, "A versão original é mais leve; a atualizada exige mais."],
  ["EA SPORTS FC 25", "Futebol", ["futebol"], 1, 0, "Desempenho variável."],
  ["The Sims 4", "Simulação", ["sim", "leve"], 0, 0, "Leve."],
  ["Terraria", "Aventura 2D", ["indie", "leve"], 0, 0, "Muito leve."],
  ["Stardew Valley", "Fazenda / simulação", ["indie", "sim", "leve"], 0, 0, "Muito leve."],
  ["Hollow Knight", "Metroidvania", ["indie", "leve"], 0, 0, "Leve."],
  ["Rocket League", "Futebol com carros", ["comp", "futebol"], 1, 0, "Competitivo e leve; no PC A, reduza a qualidade para manter a fluidez."],
  ["Sea of Thieves", "Aventura / mundo aberto", ["aberto"], 1, 0, "Mundo aberto no mar; no PC A, use qualidade baixa e resolução reduzida."],
  ["Overwatch", "FPS de heróis", ["comp"], 1, 0, "Sem teste confiável do vídeo integrado encontrado. No PC A, use qualidade baixa."],
  ["Cuphead", "Run and gun 2D", ["indie", "leve"], 0, 0, "Requisito mínimo de vídeo muito baixo (GeForce 9600 GT)."]
];

const FILTROS = [["todos", "Todos"], ["leve", "Jogos leves"], ["comp", "Competitivos"], ["futebol", "Futebol e esportes"], ["aberto", "Mundo aberto"], ["sim", "Simulação"], ["indie", "Indie"]];

// [nome, link, cor de fundo da imagem]. O logo é lido de images/lojas/<nome-da-loja>.png (ex.: images/lojas/kabum.png)
const LOJAS = [
  ["KaBuM!", "https://www.kabum.com.br/", "#ffffff"],
  ["TerabyteShop", "https://www.terabyteshop.com.br/", "#383838"],
  ["Pichau", "https://www.pichau.com.br/", "#ffffff"]
];

// Guia: [título, texto, imagem opcional]
const GUIA = [
  ["Processador (CPU)", "É o cérebro do PC. Executa as tarefas e os cálculos. Ex.: abrir o jogo e controlar o que acontece nele.", "processador"],
  ["Placa de vídeo (GPU)", "Desenha as imagens do jogo. Quanto mais pesado o jogo, mais ela faz diferença.", "placa-video"],
  ["Memória RAM", "Memória de trabalho rápida. Guarda o que está em uso agora. 16 GB é um bom ponto de partida.", "memoria-ram"],
  ["SSD", "Onde ficam o sistema e os jogos. É bem mais rápido que HD: o PC liga e carrega jogos em menos tempo.", "ssd"],
  ["Placa-mãe", "Conecta todas as peças. Precisa ser compatível com o processador (soquete AM4) e ter BIOS que o reconheça.", "placa-mae"],
  ["Fonte confiável", "Alimenta tudo. Fonte ruim pode danificar peças. Prefira marcas conhecidas e potência adequada.", "fonte"],
  ["Full HD e 100 Hz", "Full HD = 1920×1080 pixels. 100 Hz = a tela atualiza 100 vezes por segundo, o que deixa o movimento mais fluido que 60 Hz.", "monitor"],
  ["Vídeo integrado × dedicado", "Integrado: parte do processador (Ryzen 5 5600GT), mais barato e mais fraco. Dedicado: placa separada (RX 6600), bem mais forte.", null],
  ["Por que 2×8 GB e não 1×16 GB?", "Dois módulos usam <b>dual channel</b>, que dobra o caminho de dados. Isso importa muito com vídeo integrado, que usa a RAM como memória gráfica.", null],
  ["Como checar compatibilidade", "1) Soquete AM4 no processador e na placa-mãe. 2) A BIOS da placa precisa suportar o modelo. 3) RAM DDR4. 4) Fonte com potência e conectores para a GPU. 5) Gabinete Micro-ATX para a placa A520M. Veja a lista de CPUs suportadas no site do fabricante da placa-mãe.", null]
];
