import './home.css'
import Header from '../../components/header/header.tsx'
import Menu from '../../components/menu/menu.tsx'
import Footer from '../../components/footer/footer.tsx'

import noticia1 from '../../assets/img/capas/noticia-1.png';
import noticia2 from '../../assets/img/capas/noticia-2.png';
import noticia3 from '../../assets/img/capas/noticia-3.png';

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
                        <h1 className="titulo centralizarItens">Destaques</h1>
                    
                         {/* <!-- Carrossel: Slides dos destaques --> */}
                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel-sm">
                            {/* <!-- Navegador na parte inferior do slider --> */}
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>

                            {/* <!-- Slides em si --> */}
                            <div className="carousel-inner">
                                {/* <!-- Primeiro slide --> */}
                                <div className="carousel-item active">
                                    <img src={noticia1} className="d-block w-100" alt="noticia-01"/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Título Notícia 01</h5>
                                        <p>Breve descrição da notícia 01.</p>
                                    </div>
                                </div>

                                {/* <!-- Segundo slide --> */}
                                <div className="carousel-item">
                                    <img src={noticia2} className="d-block w-100" alt="noticia-02"/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Título Notícia 02</h5>
                                        <p>Breve descrição da notícia 02.</p>
                                    </div>
                                </div>

                                {/* <!-- Terceiro slide --> */}
                                <div className="carousel-item">
                                    <img src={noticia3} className="d-block w-100" alt="noticia-03"/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Título Notícia 03</h5>
                                        <p>Breve descrição da notícia 03.</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Botão para voltar --> */}
                            <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Anterior</span>
                            </button>

                            {/* <!-- Botão para avançar --> */}
                            <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Próximo</span>
                            </button>
                        </div>

                        <hr/>

                        {/* <!-- Destaques, somente 3 no total --> */}
                        <div className="destaquesItem">
                            <div className="row">
                                <div className="col-4 centralizarItens"><img className="imgCapaPequena " src={noticia1} alt="noticia-01"/></div>
                                <div className="col">
                                    <h3 className="destaquesItemTitulo">Título Notícia 01</h3>
                                    <p className="destaquesItemTexto">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum erat ac erat porttitor, quis rhoncus tortor luctus. Sed sollicitudin lorem quis luctus pulvinar. Cras rutrum tincidunt ante, vestibulum vestibulum leo. Ut in hendrerit neque. Sed tristique finibus sapien eget tristique. Mauris sed commodo diam, quis euismod mi. Sed non mattis velit. Phasellus tincidunt tortor cursus, pellentesque nibh at, pulvinar massa. Pellentesque semper in ex at facilisis. Nulla neque massa, cursus laoreet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum erat ac erat porttitor, quis rhoncus tortor luctus. Sed sollicitudin lorem quis luctus pulvinar. Cras rutrum tincidunt ante, vestibulum vestibulum leo. Ut in hendrerit neque. Sed tristique finibus sapien eget tristique. Mauris sed commodo diam, quis euismod mi. Sed non mattis velit. Phasellus tincidunt tortor cursus, pellentesque nibh at, pulvinar massa. Pellentesque semper in ex at facilisis. Nulla neque massa, cursus laoreet
                                        <div className="gradientHidden"></div>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="destaquesItem">
                            <div className="row">
                                <div className="col-4 centralizarItens"><img className="imgCapaPequena " src={noticia2} alt="noticia-02"/></div>
                                <div className="col">
                                    <h3 className="destaquesItemTitulo">Título Notícia 02</h3>
                                    <p className="destaquesItemTexto">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum erat ac erat porttitor, quis rhoncus tortor luctus. Sed sollicitudin lorem quis luctus pulvinar. Cras rutrum tincidunt ante, vestibulum vestibulum leo. Ut in hendrerit neque. Sed tristique finibus sapien eget tristique. Mauris sed commodo diam, quis euismod mi. Sed non mattis velit. Phasellus tincidunt tortor cursus, pellentesque nibh at, pulvinar massa. Pellentesque semper in ex at facilisis. Nulla neque massa, cursus laoreet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum erat ac erat porttitor, quis rhoncus tortor luctus. Sed sollicitudin lorem quis luctus pulvinar. Cras rutrum tincidunt ante, vestibulum vestibulum leo. Ut in hendrerit neque. Sed tristique finibus sapien eget tristique. Mauris sed commodo diam, quis euismod mi. Sed non mattis velit. Phasellus tincidunt tortor cursus, pellentesque nibh at, pulvinar massa. Pellentesque semper in ex at facilisis. Nulla neque massa, cursus laoreet
                                        <div className="gradientHidden"></div>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="destaquesItem">
                            <div className="row">
                                <div className="col-4 centralizarItens"><img className="imgCapaPequena " src={noticia3} alt="noticia-03"/></div>
                                <div className="col">
                                    <h3 className="destaquesItemTitulo">Título Notícia 03</h3>
                                    <p className="destaquesItemTexto">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum erat ac erat porttitor, quis rhoncus tortor luctus. Sed sollicitudin lorem quis luctus pulvinar. Cras rutrum tincidunt ante, vestibulum vestibulum leo. Ut in hendrerit neque. Sed tristique finibus sapien eget tristique. Mauris sed commodo diam, quis euismod mi. Sed non mattis velit. Phasellus tincidunt tortor cursus, pellentesque nibh at, pulvinar massa. Pellentesque semper in ex at facilisis. Nulla neque massa, cursus laoreet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum erat ac erat porttitor, quis rhoncus tortor luctus. Sed sollicitudin lorem quis luctus pulvinar. Cras rutrum tincidunt ante, vestibulum vestibulum leo. Ut in hendrerit neque. Sed tristique finibus sapien eget tristique. Mauris sed commodo diam, quis euismod mi. Sed non mattis velit. Phasellus tincidunt tortor cursus, pellentesque nibh at, pulvinar massa. Pellentesque semper in ex at facilisis. Nulla neque massa, cursus laoreet
                                        <div className="gradientHidden"></div>
                                    </p>
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