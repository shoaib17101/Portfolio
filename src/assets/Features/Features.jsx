import Style from '../Features/Features.module.css'
function Features(){
    return(
        <>
    <span id='feature'></span>
        <div id={Style.feature} >
            <h3 id={Style.red}>Features</h3>
            <h1>What I Do</h1>
            <div id={Style.container} >
                <div className={Style.cont}>
                    <img src="https://hucoder.netlify.app/Images/icon1.png" alt="" />
                    <h3 >Front-End Development</h3>
                    <p>I'm Professional Frontend Web Developer with long time experience in this field</p>
                </div>
                <div className={Style.cont}>
                    <img src="https://hucoder.netlify.app/Images/icon1.png" alt="" />
                    <h3 >WordPress Development</h3>
                    <p>I will design, and implement technical specifications for projects based on user requirements
                         as indicated in the scope of work, wireframes, and sitemap documents.

</p>
                </div>
                <div className={Style.cont}>
                    <img src="https://hucoder.netlify.app/Images/icon1.png" alt="" />
                    <h3 >Front-End Development</h3>
                    <p>I'm Professional Frontend Web Developer with long time experience in this field</p>
                </div>
                 </div>
        </div>
        </>
    )
}
export default Features