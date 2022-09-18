const posts = [
  {
    nome: "meowed",
    img: "assets/img/meowed.svg",
    post: "assets/img/gato-telefone.svg",
    curtidaUser: "assets/img/respondeai.svg",
    user: "respondeai",
  },
  {
    nome: "barked",
    img: "assets/img/barked.svg",
    post: "assets/img/dog.svg",
    curtidaUser: "assets/img/adorable_animals.svg",
    user: "adorable_animals",
  },
];

export default function Posts() {
  return (
    <div class="posts">
      {posts.map((e) => (
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={e.img} />
              {e.nome}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={e.post} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={e.curtidaUser} />
              <div class="texto">
                Curtido por <strong>{e.user}</strong> e{" "}
                <strong>outras 101.523 pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
