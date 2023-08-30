export default function Header(){
return(
    <div>
        <div className="container-fluid">
            <div id="cabecalho" className="row">
                
                {/* <!-- Logo --> */}
                <div className="Logo col-2">
                    <a href="./index.html"></a>
                </div>

                {/* <!-- Pesquisar --> */}
                <div id="Pesquisar" className="col">
                    <div className="row">
                        <div className="input-group mb-1">
                            
                            <div className="input-group-append">
                                <button type="submit" className="btn submitPesquisar"><i className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                    
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
                            <button className="btn linkBrancoAzul">+A</button>
                            <button className="btn linkBrancoAzul">-A</button>
                        </div>

                        <div className="modoNoturno">
                            <button id="btnLua" value="1" >
                                <i className="fa-solid fa-moon fa-2xl"></i>
                            </button>
                            <button id="btnSol" value="2" >
                                <i className="fa-solid fa-sun fa-xl"></i>
                            </button>
                        </div>
                    </div>
                        
                </div>

            </div>
        </div>
    </div>
);
}