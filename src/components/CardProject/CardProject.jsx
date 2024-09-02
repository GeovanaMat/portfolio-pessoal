import style from "./CardProject.module.css"
import template from "/assets/images/4905662.jpg"
import "./index.css"
const CardProject = () => {
    return(
        <>
        <div className={style.card_container}>
                <div className={style.img_containe}>
                    <img src={template}/>
                </div>
                <h1>Less is more</h1>
                <p>Website landing page</p>
        </div>
        </>
    )
}

export {CardProject}
