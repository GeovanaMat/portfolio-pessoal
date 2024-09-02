import style from "./CardProject.module.css"
const CardProject = () => {
    return(
        <>
        <div className={style.card_container}>
                <div className={style.img_containe}>
                    <img src="/portifolio-pessoal/assets/4905662.jpg"/>
                </div>
                <h1>Less is more</h1>
                <p>Website landing page</p>
        </div>
        </>
    )
}

export {CardProject}
