import Styles from './Header.module.css'
import Logo from '../2172.jpg'
import { useState } from 'react'
function Header(){
    const [isOpen,setIsOpen]=useState(true)
    let Offcanvas=(
        <div id={Styles.Offcanvas}>
             <div className={Styles.offcanvasleft}>
                    <img src={Logo} alt="profile Pic" id={Styles.logo} />
                    <button onClick={()=>setIsOpen(true)}>X</button>
                </div>
                <p>Creative and self-starting Front-End Developer with 5 years experience building stable eCommerce websites and apps in fast-paced, collaborative environments</p>
                <hr />
                <ul id={Styles.offcanvasnav}>
                    <li  ><a href='#welcome'>I Am</a></li>
                    <li><a href="#feature">Features</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="">portfolio</a></li>
                    <li><a href="">Certificate</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
                <div id={Styles.socials}>
                    <h2>Find With Me</h2>
                    <div className={Styles.socialbtns}>
                        <button>F</button>
                        <button>X</button>
                        <button>In</button>
                    </div>
                </div>
        </div>
    )
    return(
        <>
        <header className={Styles.header} >
                <div className={Styles.logoleft}>
                    <img src={Logo} alt="profile Pic" id={Styles.logo} />
                    <h3>Shoaib</h3>
                </div>
                <ul id={Styles.nav}>
                    <li  ><a href='#welcome'>I Am</a></li>
                    <li><a href="#feature">Features</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="">portfolio</a></li>
                    <li><a href="">Certificate</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
                <div className={Styles.right}>
                    <button id={Styles.btn}>Hire Me</button>
                  <img onClick={()=>setIsOpen(false)}  id={Styles.menu} src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png" alt="" />
                </div>
            </header>
                    {!isOpen && Offcanvas}         

                    </>

    )
}
export default Header