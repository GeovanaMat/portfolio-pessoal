import style from "./CardProject.module.css"
import template from "/dist/assets/4905662-CIXYz7JK.jpg"
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
