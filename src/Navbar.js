const icones = [
  "paper-plane-outline",
  "compass-outline",
  "heart-outline",
  "person-outline",
];

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <Logo />
        <LogoMobile />
        <InstaMobile />
        <Pesquisa />
        <Icones />
        <IconesMobile />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div class="logo">
      <ion-icon name="logo-instagram"></ion-icon>
      <div class="separador"></div>
      <img src="assets/img/logo.png" />
    </div>
  );
}

function LogoMobile() {
  return (
    <div class="logo-mobile">
      <ion-icon name="logo-instagram"></ion-icon>
    </div>
  );
}

function InstaMobile() {
  return (
    <div class="instagram-mobile">
      <img src="assets/img/logo.png" />
    </div>
  );
}

function Pesquisa() {
  return (
    <div class="pesquisa">
      <input type="text" placeholder="Pesquisar" />
    </div>
  );
}

function Icones() {
  return (
    <div class="icones">
      {icones.map((e) => {
        <ion-icon name={e}></ion-icon>;
      })}
    </div>
  );
}

function IconesMobile() {
  return (
    <div class="icones-mobile">
      <ion-icon name={icones[0]}></ion-icon>
    </div>
  );
}
