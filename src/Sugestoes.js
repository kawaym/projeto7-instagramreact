const suggestions = [
  {
    nome: "bad.vibes.memes",
    img: "assets/img/bad.vibes.memes.svg",
    info: "Segue você",
  },
  {
    nome: "chibirdart",
    img: "assets/img/chibirdart.svg",
    info: "Segue você",
  },
  {
    nome: "razoesparaacreditar",
    img: "assets/img/razoesparaacreditar.svg",
    info: "Novo no Instagram",
  },
  {
    nome: "adorable_animals",
    img: "assets/img/adorable_animals.svg",
    info: "Segue você",
  },
  {
    nome: "smallcutecats",
    img: "assets/img/smallcutecats.svg",
    info: "Segue você",
  },
];
export default function Sugestoes() {
  return (
    <div class="sugestoes">
      <Titulo />
      {suggestions.map((e) => <Sugestao imagem={e.img} nome={e.nome} informacao={e.info}/> )}
    </div>
  );
}

function Titulo() {
  return (
    <div class="titulo">
      Sugestões para você
      <div>Ver tudo</div>
    </div>
  );
}

function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imagem} />
        <div class="texto">
          <div class="nome">{props.nome}</div>
          <div class="razao">{props.informacao}</div>
        </div>
      </div>
      <div class="seguir">Seguir</div>
    </div>
  );
}
