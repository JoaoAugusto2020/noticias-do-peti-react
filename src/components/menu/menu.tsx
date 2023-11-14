// import { useState } from "react";
import "./menu.css";

import noticias from './../../pages/Noticias/noticias';

const Menu = () => {
    return(
        <div className="col-2" style={{padding: "0px", margin: "0px"}}>

            {/* <!-- Menu --> */}
            <div id="Menu">

                {/* <!-- Hamburguer --> */}
                <button id="hamburguerBtn" className="btn" onClick={() => menuShow(1)}><i id="iconHide" className="fa-solid fa-regular fa-bars fa-2x1" style={{ color: 'white' }}></i></button>

                {/* <button id="hamburguerBtn" className="btn" onClick={() => menuShow(1)}><i id="iconHide" className="fa-regular fa-x fa-2x1" style={{ color: 'white' }}></i></button> */}


                <div id="paginas">
                    <a className="linkBrancoLaranja" href="./index.html">Início</a><br/>
                    <a className="linkBrancoLaranja" href={noticias}>Notícias</a><br/><br/>

                    <i id="iconAngleDrop" className="fa-sharp fa-solid fa-angle-down" onClick={() => dropdownList(1)}></i>
                    <button className="dropText desistilizacao textoBranco" type="button" onClick={() => dropdownList(1)}>Categorias</button><br/>
                    
                    <div id="dropItens">
                        <a className="linkBrancoLaranja" href="./ensino.html">Ensino</a><br/>
                        <a className="linkBrancoLaranja" href="./pesquisa.html">Pesquisa</a><br/>
                        <a className="linkBrancoLaranja" href="./extensao.html">Extensão</a><br/>
                    </div>
                    
                    <a className="linkBrancoLaranja" href="./sobre.html">Sobre nós</a><br/>
                    <a className="linkBrancoLaranja" href="#rodape">Contato</a>
                </div>

            </div>
            {/* <!-- Fim do Menu --> */}

        </div>
    )
}

export default Menu;