import Safe from "react-safe"

const Navbar = () => (
    <div>
        <div className="navbar-fixed">
            <nav className="purple">
                <div className="nav-wrapper container">
                    <a href="#"><img className="logo-img" alt="Logo" src={require('./assets/logo.svg')} /></a>
                    <a href="#" data-target="nav-mobile" className="right sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#Sobre">Sobre</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#Projetos">Projetos</a></li>
                        <li><a href="#Contato">Contato</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <ul className="sidenav" id="nav-mobile">
            <li><a className="sidenav-close right btn purple" href="#!">X</a></li>
            <li><a href="#Sobre">Sobre</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Projetos">Projetos</a></li>
            <li><a href="#Contato">Contato</a></li>
        </ul>

        <style jsx>{`
            @media screen and (min-width: 992px) {
                .logo-img {
                    height: 60px;
                    padding: 4px 0!important;
                }
            }

            @media screen and (max-width: 992px) {
                .logo-img {
                    height: 55px;
                    padding: 5px 0!important;
                }
            }
        `}</style>

        <Safe.script>{`
            document.addEventListener('DOMContentLoaded', function() {
                const elems = document.querySelectorAll('.sidenav')
                const instances = M.Sidenav.init(elems, { preventScrolling: false })
            })
        `}</Safe.script>
    </div>
)

export default Navbar