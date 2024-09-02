import { Button } from "../Button/Button"

import "./index.css"
const Header = () => {
    return(
    <header>
        <div className="image_container">
        <img  src="src\assets\images\profile.jpeg"/>
        </div>
        <Button clasName={"contato_button"} title={"Contato"}/>
    </header>
    )
}

export {Header}