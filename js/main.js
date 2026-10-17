const pecaImg = (n, alt) => `<img src="images/pecas/${n}.svg" alt="${alt}">`;

function renderConfigs() {
  $("#configGrid").innerHTML = CONFIGS.map((c) => `<article class="card" id="cfg${c.id}">
    <h3>${c.nome}</h3><p class="muted">${c.objetivo}</p>
    <ul class="parts">${c.itens.map((i) => `<li class="part">${pecaImg(i[2], i[0])}<div><small class="cat">${i[0]}</small><b class="model">${i[1]}</b></div></li>`).join("")}</ul>
    <b>Vantagens</b><ul class="c pro">${c.pros.map((p) => `<li>${p}</li>`).join("")}</ul>
    <b>Limitações</b><ul class="c con">${c.contras.map((p) => `<li>${p}</li>`).join("")}</ul>
  </article>`).join("");
}

let filtroAtual = "todos";
function renderJogos() {
  $("#filtros").innerHTML = FILTROS.map((f) => `<button data-f="${f[0]}" aria-pressed="${filtroAtual === f[0]}">${f[1]}</button>`).join("");
  document.querySelectorAll("#filtros button").forEach((b) => { b.onclick = () => { filtroAtual = b.dataset.f; renderJogos(); }; });
  const lista = JOGOS.filter((g) => filtroAtual === "todos" || g[2].includes(filtroAtual));
  $("#games").innerHTML = lista.length ? lista.map((g) => `<div class="card">
    <div class="thumb" data-n="${g[0]}"><img src="images/jogos/${slug(g[0])}.jpg" alt="Capa de ${g[0]}" loading="lazy" onerror="console.warn('Imagem não encontrada:', this.src); this.remove()"></div>
    <h3>${g[0]}</h3><span class="badge">${g[1]}</span>
    <p style="margin:10px 0 0"><small class="muted">PC A (integrado)</small><br><span class="r r${g[3]}">${NIVEIS[g[3]]}</span><br>
    <small class="muted">PC B (RX 6600)</small><br><span class="r r${g[4]}">${NIVEIS[g[4]]}</span></p>
    <p class="muted" style="margin:0">${g[5]}</p></div>`).join("") : '<p class="empty">Nenhum jogo nesse filtro.</p>';
}

function renderLojas() {
  $("#stores").innerHTML = LOJAS.map((l) => `<div class="card store">
    <div class="thumb logo" data-n="${l[0]}" style="background:${l[2]}"><img src="images/lojas/${slug(l[0])}.png" alt="Logo ${l[0]}" loading="lazy" onerror="console.warn('Imagem não encontrada:', this.src); this.remove()"></div>
    <a class="btn" href="${l[1]}" target="_blank" rel="noopener noreferrer">Abrir ${l[0]}</a></div>`).join("");
}

function renderGuia() {
  $("#guide").innerHTML = GUIA.map((g) => `<details><summary>${g[0]}</summary>
    <div class="part">${g[2] ? pecaImg(g[2], g[0]) : ""}<p>${g[1]}</p></div></details>`).join("");
}

renderConfigs(); renderJogos(); renderLojas(); renderGuia();
