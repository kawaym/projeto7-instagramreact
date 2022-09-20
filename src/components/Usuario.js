import React from "react";

export default function Usuario(props) {
  const [nomeDoUsuario, setNomeDoUsuario] = React.useState(props.name);
  const [usuario, setUsuario] = React.useState(props.username);
  const [fotoAtual, setFotoAtual] = React.useState(props.imagem);

  function mudaNome() {
    const novoNome = prompt("Insira aqui seu nome");
    const novoUsuario = prompt("Insira aqui seu usuário");
    if (!novoNome) {
      alert("Preencha um nome válido");
    } else {
      setNomeDoUsuario(novoNome);
      setUsuario(novoUsuario);
    }
  }

  function mudaFoto() {
    const novaFoto = prompt("Insira o link da sua foto");
    if (!novaFoto) {
      alert("Insira um link válido");
    } else {
      setFotoAtual(novaFoto);
    }
  }

  return (
    <div class="usuario">
      <img src={fotoAtual} onClick={mudaFoto} />
      <div class="texto">
        <strong>{nomeDoUsuario}</strong>
        <span>
          {usuario}
          <ion-icon onClick={mudaNome} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
