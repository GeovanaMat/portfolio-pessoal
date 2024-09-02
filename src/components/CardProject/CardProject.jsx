import style from "./CardProject.module.css"
const CardProject = () => {
    return(
        <>
        <div className={style.card_container}>
                <div className={style.img_containe}>
                    <img src="https://github.com/GeovanaMat/portifolio-pessoal/blob/701ecae66429a1c78e68d4621102ad67009b5dc0/src/assets/images/4905662.jpg"/>
                </div>
                <h1>Less is more</h1>
                <p>Website landing page</p>
        </div>
        </>
    )
}

export {CardProject}
