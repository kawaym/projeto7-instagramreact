import React from 'react';
export default function Usuario(props) {


    return (
        <div class="usuario">
            <img src={props.imagemUsuario} />
            <div class="texto">
              <strong>{props.nomeUsuario}</strong>
              <span>
                {props.Usuario}
                <ion-icon name="pencil"></ion-icon>
              </span>
            </div>
          </div>
    )
}
