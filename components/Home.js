import Layout from './Layout'
import Safe from "react-safe"

const Home = () => (
    <Layout>
        <main>
            <div id="Sobre" className="parallax-container valign-wrapper">
                <div className="col s12 container">
                    <h2 className="header white-text"><u style={{textDecoration: "purple underline"}}>Sobre</u></h2>
                    <div className="card horizontal">
                        <div className="card-image size-screen">
                            <img src={require('./assets/roberto.jpg')} alt="Roberto Souza" height="205px" />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p style={{textAlign: "justify"}}>Programo por hobby desde que me conheço por gente, quando pequeno eu já mostrava interesse por números e por tecnologia. Resolvi seguir a carreira de programador há pouco mais de dois anos, quando decidi abrir meu próprio negócio. De lá até aqui a jornada de aprendizado foi grande e satisfatória, hoje me considero um profissional ainda em fase de aprendizado, porém com experiência e muita vontade de crescer.</p>
                            </div>
                            <div className="card-action size-screen-card">
                                <a href="https://drive.google.com/file/d/1UN0gEY2ZFO6b865x2i4ysyTUrZNl--5k/view?usp=sharing" className="waves-effect waves-light btn purple"><i className="material-icons left">cloud_download</i>Baixar currículo</a>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="parallax">
                    <img src={require('./assets/background.jpg')} />
                </div>
            </div>

            <div className="container" style={{marginTop: "50px"}}>   
                <div id="Skills" className="center-align">
                    <h2 className="header"><u style={{textDecoration: "purple underline"}}>Skills</u></h2>
                    <div className="row">
                        <div className="col s12 l3 separate-icon">
                            <i className="devicon-nodejs-plain-wordmark really-big-icon"></i>
                        </div>
                        <div className="col s12 l3 separate-icon">
                            <i className="devicon-html5-plain-wordmark really-big-icon"></i>
                        </div>
                        <div className="col s12 l3 separate-icon">
                            <i className="devicon-css3-plain-wordmark really-big-icon"></i>
                        </div>
                        <div className="col s12 l3 separate-icon">
                            <i className="devicon-mongodb-plain-wordmark really-big-icon"></i>
                        </div>
                    </div>
                    <div className="row center-align">
                        <div className="col s12 l3 separate-icon">
                            <i className="devicon-react-original-wordmark really-big-icon"></i>
                        </div>
                        <div className="col s12 l3 separate-icon">
                            <i className="devicon-nginx-original-wordmark really-big-icon"></i>
                        </div>
                        <div className="col s12 l3 separate-icon">
                            <i className="devicon-postgresql-plain-wordmark really-big-icon"></i>
                        </div>
                        <div className="col s12 l3 separate-icon">
                            <i className="devicon-sass-original  really-big-icon"></i>
                        </div>
                    </div>
                    <div className="row center-align">
                        <div className="col s12 l3 separate-icon">
                            <i className="devicon-github-plain-wordmark really-big-icon"></i>
                        </div>
                        <div className="col s12 l3 separate-icon">
                            <i className="devicon-amazonwebservices-plain-wordmark really-big-icon"></i>
                        </div>
                        <div className="col s12 l3 separate-icon">
                            <i className="devicon-docker-plain-wordmark really-big-icon"></i>
                        </div>
                        <div className="col s12 l3 separate-icon">
                            <i className="devicon-express-original-wordmark really-big-icon"></i>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container" style={{marginTop: "120px"}}>   
                <div id="Projetos" className="col s12">
                    <h2 className="header"><u style={{textDecoration: "purple underline"}}>Projetos</u></h2>
                    <div className="row">
                        <div className="col s12 l4">
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator"  src={require('./assets/TM1.png')} />
                                </div>
                                <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">TRÊS MAIS TRÊS<i className="material-icons right">more_vert</i></span>
                                    <p style={{textAlign: "justify"}}>Três Mais Três é uma agência impulsionadora de redes sociais, excelente para empresas que buscam mais espaço e destaque no meio digital.</p>
                                </div>
                                <div className="card-action">
                                    <a className="purple-text" href="https://tresmaistres.com.br"><i className="material-icons right">link</i> Ver site</a>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Serviços prestados<i className="material-icons right">close</i></span>
                                    <p style={{textAlign: "justify"}}>Construção de site com tema exclusivo e eCommerce com integração com gateways de pagamento.</p>
                                </div>
                            </div>
                        </div>                        
                        <div className="col s12 l4">
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator"  src={require('./assets/FD1.png')} />
                                </div>
                                <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">FULLDNA<i className="material-icons right">more_vert</i></span>
                                    <p style={{textAlign: "justify"}}>O portal FullDNA pertence a uma startup israelense que atua na área da saúde e oferece testes de DNA que podem diagnosticar centenas de milhares de doenças.</p>
                                </div>
                                <div className="card-action">
                                    <a className="purple-text" href="https://fulldna.com.br"><i className="material-icons right">link</i> Ver site</a>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Serviços prestados<i className="material-icons right">close</i></span>
                                    <p style={{textAlign: "justify"}}>Construção de site com tema exclusivo e desenvolvimento completo Back-End. Integração total com o PayPal e envio em massa de comissões.</p>
                                </div>
                            </div>
                        </div>                   
                        <div className="col s12 l4">
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator"  src={require('./assets/GL1.png')} />
                                </div>
                                <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">GAMESLL<i className="material-icons right">more_vert</i></span>
                                    <p style={{textAlign: "justify"}}>A loja GamesLL oferece jogos em diversas mídias, consoles e acessórios para gamers e entusiastas. Com lançamentos e preços baixos, a loja promete ser um sucesso!</p>
                                </div>
                                <div className="card-action">
                                    <a className="purple-text" href="https://gamesll.com.br/"><i className="material-icons right">link</i> Ver site</a>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Serviços prestados<i className="material-icons right">close</i></span>
                                    <p style={{textAlign: "justify"}}>Construção de site com tema exclusivo e eCommerce com integração com gateways de pagamento.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media screen and (max-width: 992px) {
                    .size-screen {
                        display: none;
                    }

                    .size-screen-card {
                        text-align: center;
                    }
                }

                .really-big-icon {
                    font-size: 120px;
                }

                @media screen and (max-width: 992px) {
                    .really-big-icon {
                        display: inline-block;
                        margin-top: 30px;
                    }
                }
            `}</style>

            <Safe.script>{`
                document.addEventListener('DOMContentLoaded', function() {
                    const elems = document.querySelectorAll('.parallax')
                    const instances = M.Parallax.init(elems, {})
                })
            `}</Safe.script>
        </main>
    </Layout>
)

export default Home