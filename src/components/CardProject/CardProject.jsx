import style from "./CardProject.module.css"
import "./index.css"
const CardProject = (props) => {
    const{titulo,desc,url} = props;
    return(
        <>
        <div className={style.card_container}>
                <div className={style.img_containe}>
                    <img src={url}/>
                </div>
                <h1>{titulo}</h1>
                <p>{desc}</p>
        </div>
        </>
    )
}

export {CardProject}
