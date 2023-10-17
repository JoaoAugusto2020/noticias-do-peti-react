// import { useState } from "react";
import "./header.css";
import logo from '../../assets/img/logos/Logo Transparente Branca.png';

// const trocarBtn = ({ trocarBtn, valor }) => { return ()};

const Header = () => {

    // const [valor, trocarbtn] = useState("");

    return(
        <div>
            <div id="cabecalho" className="row">
                
                {/* <!-- Logo --> */}
                <div className="Logo col-2">
                    <a href="./index.html"><img className="logoImg" src={logo}/></a>
                </div>

                {/* <!-- Pesquisar --> */}
                <div id="Pesquisar" className="col">
                    <div className="row">
                        <form action="" className="input-group mb-1">
                            <input type="search" className="form-control inputPesquisar" placeholder="Pesquisar" aria-label="Pesquisar" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button type="submit" className="btn submitPesquisar"><i className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </form>

                        <a className="filtroAvancado linkBrancoAzul" href="#">Filtro Avançado</a>
                    </div>
                </div>

                {/* <!-- Login e Acessibilidade --> */}
                <div id="Login" className="col-2">
                        
                    {/* <!-- Login --> */}
                    <div className="Autenticacao">
                        <a href="./autenticar.html"><button className="btnEntrar"><h5>Autenticar</h5></button></a>
                    </div>
                
                
                    {/* <!-- Acessibilidade --> */}
                    <div className="Acessibilidade">
                        <div className="acessibilidadeTexto">
                            <button className="btn linkBrancoAzul">+A &nbsp;</button>
                            <button className="btn linkBrancoAzul">-A</button>
                        </div>

                        <div className="modoNoturno">
                            <button id="btnLua" value="1" onClick={() => trocarBtn(1)}>
                                <i className="fa-solid fa-moon fa-2xl" style={{ color: 'white' }}></i>
                            </button>
                            <button id="btnSol" value="2" onClick={() => trocarBtn(2)}>
                                <i className="fa-solid fa-sun fa-xl" style={{ color: 'white' }}></i>
                            </button>
                        </div>
                    </div>
                        
                </div>

            </div>
        </div>
    )
}

export default Header