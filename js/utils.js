const $ = (s) => document.querySelector(s);
// "Elden Ring" -> "elden-ring" (nome do arquivo de imagem)
const slug = (t) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
