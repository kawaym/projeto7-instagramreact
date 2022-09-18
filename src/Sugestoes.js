const suggestions = [
  {
    nome: "bad.vibes.memes",
    img: "assets/img/bad.vibes.memes.svg",
  },
  {
    nome: "chibirdart",
    img: "assets/img/chibirdart.svg",
  },
  {
    nome: "razoesparaacreditar",
    img: "assets/img/razoesparaacreditar.svg",
  },
  {
    nome: "adorable_animals",
    img: "assets/img/adorable_animals.svg",
  },
  {
    nome: "smallcutecats",
    img: "assets/img/smallcutecats.svg",
  },
];
export default function Sugestoes() {
  return (
    <div class="sugestoes">
      {suggestions.map((e) => (
        <div class="constainer-suggestion">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src={e.img} />
              <div class="texto">
                <div class="nome">{e.nome}</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
        </div>
      ))}
    </div>
  );
}
