const imagem_usuario = [
  { nome: "9gag", img: "assets/img/9gag.svg" },
  { nome: "meowed", img: "assets/img/meowed.svg" },
  { nome: "barked", img: "assets/img/barked.svg" },
  {
    nome: "nathanwpylestrangeplanet",
    img: "assets/img/nathanwpylestrangeplanet.svg",
  },
  { nome: "wawawicomics", img: "assets/img/wawawicomics.svg" },
  { nome: "respondeai", img: "assets/img/respondeai.svg" },
  { nome: "filomoderna", img: "assets/img/filomoderna.svg" },
  { nome: "memeriagourmet", img: "assets/img/memeriagourmet.svg" },
];

export default function Stories() {
  return (
    <div class="stories">
      {imagem_usuario.map((e) => (
        <div class="story">
          <div class="imagem">
            <img src={e.img} alt="imagem do story" />
          </div>
          <div class="usuario">{e.nome}</div>
        </div>
      ))}
      <SetinhaStorie />
    </div>
  );
}

function SetinhaStorie() {
  return (
    <div class="setinha">
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  );
}
