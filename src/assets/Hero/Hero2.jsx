import heroimg from '../2172.jpg'
import Styles from './Hero2.module.css'
function Hero2(){
    return(
        
        <div id={Styles.welcome}>
        <div id={Styles.left} className='col-6 col-md-12'>
            <div id={Styles.Headings}>
            <h3  >Welcome to my world</h3>
            <h2>Hi, I’m</h2><span id={Styles.red}>  Muhammad Shoaib </span>
            <h2>a Frontend Developer</h2>
            </div>
            <p id={Styles.para}>“Innovative FrontEnd Developer with 3 years experience building and maintaining 
                responsive websites in the recruiting industry. Proficient in HTML, CSS, Bootstrap, JavaScript ReactJS.
                Plus modern libraries and frameworks. Passionate about usability and possess working knowledge of Adobe Photoshop & Sketch.““
</p>
<div id={Styles.btns}>
    <button id={Styles.cv}>Dowload CV</button>
    <button id={Styles.hire}>Hire Me</button>
</div>
</div>
 <div id={Styles.right} className='container-fluid'>
        <img src={heroimg} id={Styles.heroimg}  className='img-fluid' />
        </div>
        </div>
    
    )
}
export default Hero2