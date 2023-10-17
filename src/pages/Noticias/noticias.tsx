import './noticias.css'
import Header from '../../components/header/header.tsx'
import Menu from '../../components/menu/menu.tsx'
import Footer from '../../components/footer/footer.tsx'

import noticia1 from '../../assets/img/capas/noticia-1.png';
import noticia2 from '../../assets/img/capas/noticia-2.png';
import noticia3 from '../../assets/img/capas/noticia-3.png';
import noticia4 from '../../assets/img/capas/noticia-4.png';
import noticia5 from '../../assets/img/capas/noticia-5.png';
import noticia6 from '../../assets/img/capas/noticia-6.png';

export default function Home(){
return(
    <div className="container-fluid">
       <Header/>
       <div className="conteudo">
            <div className="row">
                <Menu/>

                {/* <!-- Conteúdo --> */}
                <div className="col">
                    <div className="container">
                        <h1 className="titulo centralizarItens">Notícias</h1>
                        
                        <div className="espaco-50"></div>

                        <div className="input-group mb-5">
                            <div className="input-group-prepend">
                                <label className="input-group-text" for={filtro}>Filtro de busca</label>
                            </div>
                            <select className="custom-select" id="filtro" name="filtro">
                                <option selected>Nenhum</option>
                                <option value="1">Ensino</option>
                                <option value="2">Pesquisa</option>
                                <option value="3">Extensão</option>
                                <option value="4">Eventos</option>
                            </select>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-xl-4">
                                <div className="noticiaCard">
                                    <div className="tituloNoticia">Título Notícia 01</div>
                                    <img className="imgNoticia d-block w-100" src={noticia1} alt="noticia-01"/>
                                </div>
                            </div>
                            
                            <div className="col-sm-12 col-md-6 col-xl-4">
                                <div className="noticiaCard">
                                    <div className="tituloNoticia">Título Notícia 02</div>
                                    <img className="imgNoticia d-block w-100" src={noticia2} alt="noticia-02"/>
                                </div>
                            </div>
                            
                            <div className="col-sm-12 col-md-6 col-xl-4">
                                <div className="noticiaCard">
                                    <div className="tituloNoticia">Título Notícia 03</div>
                                    <img className="imgNoticia d-block w-100" src={noticia3} alt="noticia-03"/>
                                </div>
                            </div>
                            
                            <div className="col-sm-12 col-md-6 col-xl-4">
                                <div className="noticiaCard">
                                    <div className="tituloNoticia">Título Notícia 04</div>
                                    <img className="imgNoticia d-block w-100" src={noticia4} alt="noticia-04"/>
                                </div>
                            </div>
                            
                            <div className="col-sm-12 col-md-6 col-xl-4">
                                <div className="noticiaCard">
                                    <div className="tituloNoticia">Título Notícia 05</div>
                                    <img className="imgNoticia d-block w-100" src={noticia5} alt="noticia-05"/>
                                </div>
                            </div>
                            
                            <div className="col-sm-12 col-md-6 col-xl-4">
                                <div className="noticiaCard">
                                    <div className="tituloNoticia h-auto hm-100">Título Notícia 05</div>
                                    <img className="imgNoticia d-block w-100" src={noticia6} alt="noticia-06"/>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <a className="voltarAoTopo linkPretoAzul centralizarItens" href="#top">Voltar ao topo</a>
                </div>
            </div>
       </div>
        <Footer/>

    </div>
);
}