

import { CardProject } from "../../components"
import style  from "./Home.module.css"
const Home = () => {
   
    return(
        <>
        <div className={style.home_container} >

        <div className={style.banner_container}>
            <h1 ><span>Olá, sou </span>  <br  className={style.linha}></br>
                Geovana Matias <br></br>
                <span className={style.dev}>Desenvolvedora Front-End</span>
                </h1>
            <p>Dedicada a criar interfaces de usuário modernas, intuitivas e responsivas.</p>
            <div className={style.social_container}>
                <a href="https://github.com/GeovanaMat">
                <img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"/>   
                </a>
                <a href="https://www.linkedin.com/in/geovana-matias-comp/"><img src="https://img.icons8.com/?size=100&id=8808&format=png&color=1D1D1D"/> </a>
                  
                </div>
        </div>

        <div className={style.projetos_container}>
            <h2>Meus projetos</h2>
            <div className={style.projects_gallery}>
                <a href="https://geovanamat.github.io/blue-weather-react-app/">
                <CardProject titulo="Blue Weather - Aplicativo Web de Previsão do Tempo " desc="JavaScript, React, Html, CSS" url="assets/images/screenshot.png"/>
                </a>
            </div>
        </div>

      
        </div>
       
        </>
    )
}

export {Home}