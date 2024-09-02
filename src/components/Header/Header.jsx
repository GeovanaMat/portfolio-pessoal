import { Button } from "../Button/Button"
import profile from "/dist/assets/profile-B1gpS7HG.jpeg"
import "./index.css"
const Header = () => {
    return(
    <header>
        <div className="image_container">
        <img  src={profile}/>
        </div>
        <Button clasName={"contato_button"} title={"Contato"}/>
    </header>
    )
}

export {Header}