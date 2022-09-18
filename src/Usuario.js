import React from "react";

export default function Usuario() {
  const fotoPadrao = "assets/img/catanacomics.svg";
  const [nome, setNome] = React.useState("catanacomics");
  const [foto, setFoto] = React.useState(fotoPadrao);
  const [usuario, setUsuario] = React.useState("Catana");

  function InserirNome() {
    const nomePrompt = prompt("Qual seu nome?");
    const usuarioPrompt = prompt("Qual seu usuario?");
    setNome(nomePrompt);
    setUsuario(usuarioPrompt);
  }

  function InserirFoto() {
    const fotoPrompt = prompt("Insira o link da sua foto!");
    setFoto(fotoPrompt);
  }

  return (
    <div class="usuario">
      <img src={foto} onClick={InserirFoto} />
      <div class="texto">
        <strong>{nome}</strong>
        <span>
          {usuario}

          <ion-icon name="pencil" onClick={InserirNome}></ion-icon>
        </span>
      </div>
    </div>
  );
}
