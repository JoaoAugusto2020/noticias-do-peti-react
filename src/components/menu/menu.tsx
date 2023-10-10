// import { useState } from "react";
import "./menu.css";

const Menu = () => {
    return(
        <div className="col-2" style={{ padding: '0px' }}>
            {/* O MENU ESTÁ DANDO UM PROBLEMA NO HAMBURGUER */}
            
            {/* <!-- Menu --> */}
                {/* <!-- Hamburguer --> */}
                <div className="hamburguer">
                    <button id="hamburguerBtn" className="btn" onClick={() => menuShow(1)}><i id="iconAngleHide" className="fa-solid fa-angle-left fa-xl"></i></button>
                </div>

                {/* <!-- Menu em si --> */}
                <div style={{ height: '100%' }}>
                    <div id="Menu">
                        <div id="paginas">
                            <a className="linkBrancoLaranja" href="./index.html">Início</a><br/>
                            <a className="linkBrancoLaranja" href="./noticias.html">Notícias</a><br/><br/>

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
                </div>
            {/* <!-- Fim do Menu --> */}
        </div>
    )
}

export default Menu;