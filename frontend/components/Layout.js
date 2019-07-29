import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (props) => (
    <div>
        <Head>
            <title>Roberto Souza</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" />
            <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            <link rel="shortcut icon" href={require('./assets/favico.ico')} />
            <link rel="apple-touch-icon" href={require('./assets/apple-touch-icon.png')} />
        </Head>
        <Navbar/>
        {props.children}
        <Footer/>
    </div>
)

export default Layout