
import React from 'react';
import '../styles/components/pages/HomePage.css';
import Example from '../components/carousel/Example';
import Cards from '../components/card/Cards';

function HomePage(props) {
  return (

    <div className="bienvenidos">

      <Example />

      <div className="container">
        <div className="row">
              <div className="col-sm">
                <img src="./img/home/medios de pago.png" alt="medio de pago" />
                Medios de pagos
              </div>
              <div className="col-sm">
                <img src="./img/home/atencion al cliente.png" alt="atencion al cliente" />
                Atención al cliente
              </div>
              <div className="col-sm">
                <img src="./img/home/envios.png" alt="envios" />
                Envíos a todo el País
              </div>
              <div className="col-sm">
                <img src="./img/home/whatsapp.png" alt="whatsapp" />
                WhatSapp
              </div>
        </div>

      </div>


      <div className='cards'>
        <Cards />
      </div>

    </div>


  );
}
export default HomePage;