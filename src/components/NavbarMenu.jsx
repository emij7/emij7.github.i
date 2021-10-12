import React,{useState} from 'react'
import menuIcon from '../images/menu.png'
import cancel from '../images/cancel.png'
import useWidth from '../hooks/useWidth';

const NavbarMenu = () =>{
    const [menu,setMenu] = useState(false);
    const [firstLoad,setFirstLoad] = useState(true);
    const handleClick = ()=>{
        setMenu(!menu)
        setFirstLoad(false)
    }
    let currentWidth = useWidth()
    return(
        <nav className='navbar__links'>
            <button className='navbar__menu-icon' onClick={()=>handleClick()}>
                <div className='navbar__button-container'>
                    <img src={menu?cancel:menuIcon} alt="Deploy menu icon" />
                </div>
            </button>
            <div className={currentWidth<768?
             menu?
                    'navbar__links--appear'
                    :firstLoad?
                        'navbar__links--empty'
                        :'navbar__links--disappear'
            :'navbar__links--row'
            }>
                <a href="#about" onClick={()=>handleClick()}>SOBRE MI</a>
                <a href="#projects" onClick={handleClick}>PROYECTOS</a>
                <a href="#certifications" onClick={handleClick}>CERTIFICADOS</a>
                <a href="#contact" onClick={handleClick}>CONTACTO</a>
            </div>
        </nav>
    )
}

export default NavbarMenu