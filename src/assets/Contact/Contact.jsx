import style from './contact.module.css'
function Contact(){


 return(
    <>
    <section>
        <p className={style.para1 } >Contact Us</p>
        <h1 className={`${style.mainhed} text-center ` }>Contact With Me</h1>
        <div className="cont d-flex gap-5 p-5" id={style.contact}>
            <div className="left col-lg-4">
                <div className="card p-2" id={style.cd}>
                
                        <img src="https://hucoder.netlify.app/Images/contact1.png" alt="Contact us image" className=" img-fluid p-2" />
                        <h3 id={style.myname}>Muhammad Shoaib</h3>
                        <p id={style.job} >FrontEnd Web Developer</p>
                        <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                        <p>Phone: 03069605369</p>
                        <p>Email: shoaibkhan171015393@gmail.com</p>
                    
                    <div className="d-flex gap-3 p-3">
                        <button className="btn btn-primary">LinkedIn</button>
                        <button className="btn btn-secondary">Facebook</button>
                        <button className="btn btn-secondary">Indeed</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-6" id={style.right}>
                <form action="">
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" name="name" id={style.nm} />
                    <label htmlFor="tel">Your Number:</label>
                    <input type="tel" name="tel" id={style.nmb} />
                    <label htmlFor="email">Your Email:</label>
                    <input type="email" name="email" id="" />
                    <label htmlFor="sub">Subject:</label>
                    <input type="text" name="sub" id="" />
                    <label htmlFor="msg">Your Message:</label>
                    <textarea name="msg" id=""></textarea>
                    <button className="btn btn-primary">Send Message</button>
                </form>
                </div>
        </div>
    </section>
    </>
 )
    
}
export default Contact