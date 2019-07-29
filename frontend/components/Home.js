import Layout from './Layout'

const Home = () => (
    <Layout>
        <main>
            <div className="container">
                <div id="Sobre" className="col s12">
                    <h2 className="header">Sobre</h2>
                    <div className="card horizontal">
                        <div className="card-image size-screen">
                            <img src={require('./assets/roberto.jpg')} alt="Roberto Souza" height="205px" />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p style={{textAlign: "justify"}}>Programo por hobby desde que me conheço por gente, quando pequeno eu já mostrava interesse por números e por tecnologia. Resolvi seguir a carreira de programador há pouco mais de dois anos, quando decidi abrir meu próprio negócio. De lá até aqui a jornada de aprendizado foi grande e satisfatória, hoje me considero um profissional ainda em fase de aprendizado, porém com experiência e muita vontade de crescer.</p>
                            </div>
                            <div className="card-action size-screen-card">
                                <a href="#" className="waves-effect waves-light btn purple"><i className="material-icons left">cloud_download</i>Baixar currículo</a>
                            </div>
                        </div>
                    </div>
                </div>                
                <div id="Skills" className="col s12">
                    <h2 className="header">Sobre</h2>
                    <div className="card horizontal">
                        <div className="card-image size-screen">
                            <img src={require('./assets/roberto.jpg')} alt="Roberto Souza" height="205px" />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p style={{textAlign: "justify"}}>Programo por hobby desde que me conheço por gente, quando pequeno eu já mostrava interesse por números e por tecnologia. Resolvi seguir a carreira de programador há pouco mais de dois anos, quando decidi abrir meu próprio negócio. De lá até aqui a jornada de aprendizado foi grande e satisfatória, hoje me considero um profissional ainda em fase de aprendizado, porém com experiência e muita vontade de crescer.</p>
                            </div>
                            <div className="card-action size-screen-card">
                                <a href="#" className="waves-effect waves-light btn purple"><i className="material-icons left">cloud_download</i>Baixar currículo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Projetos" className="col s12">
                    <h2 className="header">Sobre</h2>
                    <div className="card horizontal">
                        <div className="card-image size-screen">
                            <img src={require('./assets/roberto.jpg')} alt="Roberto Souza" height="205px" />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p style={{textAlign: "justify"}}>Programo por hobby desde que me conheço por gente, quando pequeno eu já mostrava interesse por números e por tecnologia. Resolvi seguir a carreira de programador há pouco mais de dois anos, quando decidi abrir meu próprio negócio. De lá até aqui a jornada de aprendizado foi grande e satisfatória, hoje me considero um profissional ainda em fase de aprendizado, porém com experiência e muita vontade de crescer.</p>
                            </div>
                            <div className="card-action size-screen-card">
                                <a href="#" className="waves-effect waves-light btn purple"><i className="material-icons left">cloud_download</i>Baixar currículo</a>
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
            `}</style>
        </main>
    </Layout>
)

export default Home