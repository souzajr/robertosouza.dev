import { Button } from 'react-materialize'
import Safe from "react-safe"

const Footer = () => (
    <footer id="Contato" className="page-footer grey lighten-3">
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <h5 className="indigo-text">Ficou com dúvida?</h5>
                    <p className="indigo-text text-darken-4">Entre em contato através das redes sociais ou mande um Email :)</p>
                </div>
                <div className="col l4 offset-l2 s12 btn-social-buttons">
                    <Button
                        waves="light"
                        node="a"
                        href="https://www.facebook.com/robertosouza1995"
                        tooltip="Facebook"
                        tooltipOptions={{position: 'top'}}
                        style={{
                            padding: '0 13px',
                            borderRadius: '5px',
                            marginLeft: '8px',
                            background: '#3b5999'
                        }}
                        >
                        <i className="fab fa-facebook-square icon"></i>
                    </Button>
                    <Button
                        waves="light"
                        node="a"
                        href="https://github.com/souzajr"
                        tooltip="Github"
                        tooltipOptions={{position: 'top'}}
                        style={{
                            padding: '0 13px',
                            borderRadius: '5px',
                            marginLeft: '8px',
                            background: '#222'
                        }}
                        >
                        <i className="fab fa-github icon"></i>
                    </Button>
                    <Button
                        waves="light"
                        node="a"
                        href="https://wa.me/5519995877791"
                        tooltip="WhatsApp"
                        tooltipOptions={{position: 'top'}}
                        style={{
                            padding: '0 13px',
                            borderRadius: '5px',
                            marginLeft: '8px',
                            background: '#25d366'
                        }}
                        >
                        <i className="fab fa-whatsapp icon"></i>
                    </Button>
                    <Button
                        waves="light"
                        node="a"
                        href="https://www.linkedin.com/in/roberto-souza1/"
                        tooltip="LinkedIn"
                        tooltipOptions={{position: 'top'}}
                        style={{
                            padding: '0 13px',
                            borderRadius: '5px',
                            marginLeft: '8px',
                            background: '#283e4a'
                        }}
                        >
                        <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                        waves="light"
                        node="a"
                        href="mailto:robertos.cps@gmail.com"
                        tooltip="Email"
                        tooltipOptions={{position: 'top'}}
                        style={{
                            padding: '0 13px',
                            borderRadius: '5px',
                            marginLeft: '8px',
                            background: '#ea4c89'
                        }}
                        >
                        <i className="fas fa-envelope icon"></i>
                    </Button>
                </div>
            </div>
        </div>
        <div className="footer-copyright indigo-text ">
            <div className="container">© 2019 Roberto Souza
                <a className="grey-text text-darken-3 right" href="https://github.com/souzajr/robertosouza.dev/">Veja este projeto no Github</a>
            </div>
        </div>

        <style jsx>{`
            p {
                font-size: 20px;
            }

            .btn-social-buttons {
                margin-top: 50px;
            }

            .icon {
                font-size: 14px;
            }
        `}</style>

        <Safe.script>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'UA-120240872-2');
        `}</Safe.script>
    </footer>
)

export default Footer