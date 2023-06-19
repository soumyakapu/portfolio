import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons' 
import { Instagram, Linkedin, Twitter, Whatsapp, Wifi } from 'react-bootstrap-icons';
const Portfolio = ()=>{
  return(
        <div className='container'>
            <div className='text-center  p-4  
            bg-secondary text-dark'>
                Soumya Kapu
                </div>
            
            <div className='text-left border border-right
             w-25 p-3   bg-secondary text-dark '>
            About Me</div>
             <hr/>
           
            <div className='text-dark'>
            I am a highly skilled and dedicated Java developer with over 2.5 years of experience in designing 
            and developing robust software solutions. My passion for programming, combined with a strong problem-solving mindset, 
            allows me to create efficient and scalable applications.
            I am experienced in working with frameworks such as Spring and springboot, 
            utilizing their powerful features to build scalable and modular applications. 
            I am well-versed in database technologies, 
            including SQL and NoSQL databases 
           
            </div>
           
            <div className=''>
              <div style={{fontStyle:'italic'}}className='text-dark border border-right
             w-25 p-3   bg-secondary text-dark'>
                    Experiences</div>
              <hr/>
              <div className='d-flex flex-row bg-secondary'>
              <div class="d-flex justify-content-start p-2 w-75 ">Nexwave Talent Management</div>
              <div class="d-flex justify-content-end p-2 w-75">2021 - till now</div>
              </div>
              {/* <p className='font-weight-bold'>Project Name</p> */}
              <div className='list'>
               <li>Project name : Shamba Digital</li>
               <li>Client : Empire Digital Solutions, Kenya.</li>
                <li>Organization : NexWave Talent Management Solutions</li>
               <li>Role : Developer.</li>
               <li>Duration : Jan 2021 -Present</li>
               <li>Environment :SpringBoot, ReactJs, MongoTemplate,Logback, Tomcat server,</li>
              <li>Apache web server, MongoDb.</li>
             </div>
             <div >
             <div className='Roles'>Roles and Responsibilites :</div>
              Developed the Controller, Service, DAO classes using SpringBootand Mongo Template.
              Involved in writing the backend code using java
              Integrated with weather info API to fetch weather information
              simultaneously tested the rest APIs at Controller level, Service
              level using Mockito Junit5. Designed
              developed UI components.
             </div>

            </div>
            <div className='bg-secondary p-2 w-25 '>Skills</div><hr/>
            <div className='d-flex flex-row skills'>
                
            <div className="d-flex justify-content-start p-2 ">Java</div>
            <div className="d-flex justify-content-end p-2 ">Java 8</div>
            <div className="d-flex justify-content-end p-2 ">Spring</div>
            <div className="d-flex justify-content-end p-2 ">SpringBoot</div>
            <div className="d-flex justify-content-end p-2 ">JavaScript</div>
            <div className="d-flex justify-content-end p-2 ">TypeScript</div>
            <div className="d-flex justify-content-end p-2 ">React</div>
            <div className="d-flex justify-content-end p-2 ">Kafka</div>
            <div className="d-flex justify-content-end p-2 ">SQL</div>
            <div className="d-flex justify-content-end p-2 ">NoSQL</div>
            </div>
            <div className='border  bg-secondary'>
            <div className='text-center'>Contact</div>
            <div className='text-left'>Email : soumyakapu@gmail.com</div>
            {/* <div className='text-left'>Email : soumyakapu@gmail.com</div> */}
            <div className='icons'>
                <a href="https://www.twitter.com/" target="_blank">
            <Twitter size={'30'} className='twitter'/>
            </a>
             <a href="https://www.instagram.com/" target="_blank">
            <Instagram size={'30'} className='insta'/>
            </a>  
            <a href="https://www.linked.com/" target="_blank">
          <Linkedin  size={'30'} className='linked'/></a>
           </div>
            
            </div>

        </div>
    )
}
export default Portfolio