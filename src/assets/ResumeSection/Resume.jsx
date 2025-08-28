import { act, useState } from "react"
import Styles from '../ResumeSection/Resume.module.css'
function Resume(){
    const[ActiveSection,setActiveSection]=useState('education')
    const education=(
        <div className={Styles.cont}>      
      <div className={Styles.contleft}>
        <p >2012-2026</p>
        <h3>Education</h3>
        <div className={Styles.box}>
            <h3>BS Computer Science</h3> 
            <p>GCMS Charsadda Affiliated With BKUC (2022-2026) </p> 
            <hr />
            <h4>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</h4>
        </div>
        <div className={Styles.box}>
            <h3>FSC Computer Science</h3>
            <p>New Muslim Public High School Charsadda (2020-2022) </p> 
            <hr />
            <h4>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</h4>
        </div>
        <div className={Styles.box}>
            <h3>Matriculation</h3>
            <p>New Muslim Public High School Charsadda</p> 
            <hr />
            <h4>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</h4>
        </div>

      </div>
      <div className={Styles.contleft}>
        <p>2020-2026</p>
        <h3>Job Experience</h3>
        <div className={Styles.box}>
            <h3>Web Teacher</h3> 
            <p>New Muslim Public High School Charsadda </p> 
            <hr />
            <h4>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</h4>
        </div>
        <div className={Styles.box}>
            <h3>Data Operator</h3>
            <p>New Muslim Public High School Charsadda (2020-2022) </p> 
            <hr />
            <h4>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</h4>
        </div>
        <div className={Styles.box}>
            <h3>Physics Teacher</h3>
            <p>New Muslim Public High School Charsadda</p> 
            <hr />
            <h4>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</h4>
        </div>

      </div>
      </div>
    )
    const skills=(
        <>
    <div className={Styles.cont}>
        <div id={Styles.languages}>
        <h4>Features</h4>
        <h3>Languages</h3>
        <div id={Styles.html}>
            <div className={Styles.top}>
           <h4>HTML</h4>
            <span>100%</span>
            </div>
           <div className={Styles.progress}>
            <div id={Styles.htmlbar}></div>
           </div>
        </div>
        <div id={Styles.css}>
        <div className={Styles.top}>
           <h4>CSS</h4>
            <span>95%</span>
            </div>
           <div className={Styles.progress}>
            <div id={Styles.cssbar}></div>
           </div>
        </div>
        <div id={Styles.javascript}>
        <div className={Styles.top}>
           <h4>JAVASCRIPT</h4>
            <span>80%</span>
            </div>
           <div className={Styles.progress}>
            <div id={Styles.jsbar}></div>
           </div>
        </div>
        <div id={Styles.wordpress}>
        <div className={Styles.top}>
           <h4>WORDPRESS</h4>
            <span>85%</span>
            </div>
           <div className={Styles.progress}>
            <div id={Styles.wpbar}></div>
           </div>
        </div>
        </div>
     <div id={Styles.frameworks} >
        <h4>Features</h4>
        <h3>Framworks & Libraries</h3>
        <div id={Styles.wordpress}>
        <div className={Styles.top}>
           <h4>BootStrap5</h4>
            <span>85%</span>
            </div>
           <div className={Styles.progress}>
            <div id={Styles.wpbar}></div>
           </div>
        </div>
        <div id={Styles.html}>
            <div className={Styles.top}>
           <h4>Gitb</h4>
            <span>100%</span>
            </div>
           <div className={Styles.progress}>
            <div id={Styles.htmlbar}></div>
           </div>
        </div>
        <div id={Styles.javascript}>
        <div className={Styles.top}>
           <h4>ReactJs</h4>
            <span>80%</span>
            </div>
           <div className={Styles.progress}>
            <div id={Styles.jsbar}></div>
           </div>
        </div>
     </div>
    </div>
        </>
    )
    const professionalskills=(
        <>
            <h2 id={Styles.pro}>Professional Skills</h2>
            <div id={Styles.container}>
                <div className={Styles.conts}>
                    <h2>Design Thinking</h2>
                    <h4>Design thinking is a non-linear, iterative process that teams use to understand users, challenge assumptions, redefine problems</h4>
                </div>
               <div id={Styles.dbl}>
               <div className={Styles.conts}>
                    <h2> Problem Solving </h2>
                    <h4>The act of defining a problem; determining the cause of the problem; identifying, prioritizing, and selecting alternatives for a solution; and implementing a solution.</h4>
                </div>
                <div className={Styles.conts}>
                    <h2>Project Management</h2>
                    <h4>The application of processes, methods, skills, knowledge and experience to achieve specific project objectives according to the project</h4>
                </div>
               </div>
                <div className={Styles.conts}>
                    <h2>Wireframe Creation</h2>
                    <h4>Wireframes are used early in the development process to establish the basic structure of a page before visual design and content is added.</h4>
                </div>
               
            </div>

        </>
    )
    const Internship=(
        <div style={{height:"500px"}}>  
            <h1 style={{textAlign:'center', marginTop:'50px'}}>Zero Internships</h1>
        </div>
    )

   

return(
    <>
<section id="resume" className={Styles.ResumeSection} >
    <div id={Styles.Headings}>
        <h3>4+ Years Of Education</h3>
        <h1>My Resume</h1>
    <div className={Styles.navigation}>
        <button onClick={()=>setActiveSection('education')} >Educaton</button>
        <button onClick={()=>setActiveSection('skills')} >Technical Skills</button>
        <button onClick={()=>setActiveSection('professionalskills')} >Professional Skills</button>
        <button onClick={()=>setActiveSection('internship')} >Internships</button>
    </div>
    </div>
    {ActiveSection==='education'&& education}
    {ActiveSection==='skills' && skills}
    {ActiveSection==='professionalskills' && professionalskills}
    {ActiveSection==='internship' && Internship}
</section>

    </>
)
}
export default Resume