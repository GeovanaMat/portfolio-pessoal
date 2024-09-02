import "./index.css"
import github from "/portifolio-pessoal/github.png"
const Footer = () => {
    return(
        <footer>
            <div className="footer_container">
                <p>Desenvolvido por <span>Geovana Matias</span></p>
                <div className="social_container">
                <img src={github}/>   
                <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000"/>   
                </div>
               
                
            </div>
        </footer>
    )
}

export {Footer}