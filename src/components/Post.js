import React from "react";

export default function Post(props) {
  const [foiSalvo, setFoiSalvo] = React.useState(props.isSaved)
  const [curtido, setCurtido] = React.useState(props.isLiked)
  const [contador, setContador] = React.useState(props.initialLikesAmount)

  function mudaSalvo() {
    setFoiSalvo(!foiSalvo);
  }

  function mudaLike() {
    if(!curtido) {
      setContador(contador + 1)
    } else {
      setContador(contador - 1)
    }
    setCurtido(!curtido)
  }

  function mudaLikeImagem() {
    if(!curtido) {
      setCurtido(true)
      setContador(contador + 1)
    }
  }
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.userImage} />
          {props.userName}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <div class="conteudo" onClick={mudaLikeImagem}>
        <img src={props.contentImage} />
      </div>
      <div class="fundo">
        <div class="acoes">
          <div>
          {curtido ? (
              <ion-icon onClick={mudaLike} class="liked" name="heart"></ion-icon>
            ) : (
              <ion-icon onClick={mudaLike} name="heart-outline"></ion-icon>
            )}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div onClick={mudaSalvo}>
            {foiSalvo ? (
              <ion-icon  name="bookmark"></ion-icon>
            ) : (
              <ion-icon name="bookmark-outline"></ion-icon>
            )}
          </div>
        </div>
        <div class="curtidas">
          <img src={props.likedByImage} />
          <div clas="texto">
            Curtido por <strong>{props.likedByText}</strong> e{" "}
            <strong> outras {contador} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
