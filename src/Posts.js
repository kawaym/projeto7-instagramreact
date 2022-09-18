import React from "react";
const posts = [
  {
    nome: "meowed",
    img: "assets/img/meowed.svg",
    post: "assets/img/gato-telefone.svg",
    curtidaUser: "assets/img/respondeai.svg",
    user: "respondeai",
    numeroCurtidas: 101523,
  },
  {
    nome: "barked",
    img: "assets/img/barked.svg",
    post: "assets/img/dog.svg",
    curtidaUser: "assets/img/adorable_animals.svg",
    user: "adorable_animals",
    numeroCurtidas: 200541,
  },
];

export default function Posts() {
  const [curtido, setCurtido] = React.useState(false);
  const [salvo, setSalvo] = React.useState(false);

  function curtir() {
    setCurtido(!curtido);
    if (!curtido) {
    }
  }

  return (
    <div class="posts">
      {posts.map((e) => (
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={e.img} />
              <p>{e.nome}</p>
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
                {curtido ? (
                  <ion-icon
                    onClick={curtir}
                    name="heart"
                    style={{ color: "red" }}
                  ></ion-icon>
                ) : (
                  <ion-icon onClick={curtir} name="heart-outline"></ion-icon>
                )}
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                {salvo ? (
                  <ion-icon
                    onClick={() => setSalvo(!salvo)}
                    name="bookmark"
                  ></ion-icon>
                ) : (
                  <ion-icon
                    onClick={() => setSalvo(!salvo)}
                    name="bookmark-outline"
                  ></ion-icon>
                )}
              </div>
            </div>

            <div class="curtidas">
              <img src={e.curtidaUser} />
              <div class="texto">
                Curtido por <strong class="strong">{e.user}</strong> e outras
                <strong class="strong">
                  {" "}
                  {curtido ? e.numeroCurtidas + 1 : e.numeroCurtidas} pessoas
                </strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
