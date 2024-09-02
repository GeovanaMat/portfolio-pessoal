import { useState } from "react";
import style from "./Menu.module.css"
import { Button } from "../Button/Button";
const Menu = () =>{

    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

   
    
    return(
        <>
        
        <div className={style.nav_container_desk}>
        <div className={style.nav_items}>
        <p>Sobre</p>
        <p>Projetos</p>
          </div>
        </div>
        <div className={style.nav_container}>

        <div className={`${style.menu_btn} ${isOpen ? style.open : ''}`} id="menuBtn" onClick={toggleMenu}>
        <div className={style.menu_btn__line}></div>
        <div className={style.menu_btn__line}></div>
        </div>

        <div className={`${style.nav} ${isOpen ? style.nav_open : ''}` }>
          <div className={style.nav_items}>
          <p>Sobre</p>
          <p>Projetos</p>
          <Button title={"Contato"} clasName={"btn_contact"} />
          </div>

        </div>

        </div>

        </>
    )
}

export {Menu}