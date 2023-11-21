// import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div>
        <div id="rodape" className="row">
            <div className="col-md sobreNos">
                <h3 className="centralizarItens">Sobre Nós</h3>

                <ul>
                    <li className="listItem"><a className="linkBrancoAzul" href="./sobre.html#Historia">História</a></li>
                    <li className="listItem"><a className="linkBrancoAzul" href="./sobre.html#Valores">Valores</a></li>
                    <li className="listItem"><a className="linkBrancoAzul" href="./sobre.html#Equipe">Equipe</a></li>
                </ul>
            </div>

            <div className="col-md contato">
                <h3 className="centralizarItens">Contato</h3>

                <ul className="listMenuNone">
                    <li className="listItem"><i className="fa-brands fa-instagram" style={{ color: 'white' }}></i><a className="linkBrancoAzul" href="#"> Instagram</a></li>
                    <li className="listItem"><i className="fa-brands fa-whatsapp" style={{ color: 'white' }}></i><a className="linkBrancoAzul" href="#"> WhatsApp</a></li>
                    <li className="listItem"><i className="fa-regular fa-envelope" style={{ color: 'white' }}></i><a className="linkBrancoAzul" href="#"> Email</a></li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Footer