import { Navbar } from "./Navbar";

export function Resume(text: string, color: string) {
    return ` 
     ${Navbar()}
    <div class="container">
       

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" type="text/css" href="dep/normalize.css/normalize.css" />
        <link rel="stylesheet" type="text/css" href="dep/Font-Awesome/css/font-awesome.css" />
        <link rel="stylesheet" type="text/css" href="style.css" />
      </head>
      <body lang="en">
      <img src=" http://localhost:4002/images/baner.jpg" alt="">
        <section id="main">
          <header id="title">
            <h1>Azizah Mohamed Alshehri</h1>
            <span class="subtitle"> Information System </span>
            
          </header>
          <section class="main-block">
            <h2>
              <i class="fa fa-suitcase"></i> Experiences
            </h2>
            <section class="blocks">
              <div class="date">
                <span>2022</span><span></span>
              </div>
              <div class="decorator">
              </div>
              <div class="details">
                <header>
                  <h3>JavaScript-Developer-Boot-Camp</h3>
                  
                  
                </header>
                <div>
                  <ul>
                    <h4>Tuwaiq Academy
                      June-July  2022
                       Building Web APP using MERN-Stack</h4>
                      
                  
                  </ul>
                  </div>
              </div>
            </section>
            <section class="blocks">
              <div class="date">
                <span>2022</span>
              </div>
              <div class="decorator">
              </div>
              <div class="details">
                <header>
                  <h3>React-js course</h3>
                
                </header>
                <div>
                  <ul>
                    <h4>Lorem building web site using React.js</h4>
                   
                  </ul>
                </div>
              </div>
            </section>
            <section class="blocks">
              <div class="date">
                <span>2021</span>
              </div>
              <div class="decorator">
              </div>
              <div class="details">
                <header>
                  <h3>Internship DevOps bootcamp
                  </h3>
                  <span class="place">Saudi Digital Academy
                  </span>
                  
                </header>
                <div>
                  <ul>
                    <h4>
                      Major Duties                                                                                                                                                                 
                      Infrastructure & Operations-488 hrs<br>
                      Docker & Kubernetes 348 hrs<br>
                      CICD & Distributed Systems-288 hrs.<br>
                    </h4>
                  </ul>
                  </div>
              </div>
            </section>
          </section>
         
         
                     
             
    
    
    
    
    
          <section class="main-block concise">
            <h2>
              <i class="fa fa-graduation-cap"></i> Education
            </h2>
            <section class="blocks">
              <div class="date">
                <span>2016</span><span>2012</span>
              </div>
              <div class="decorator">
              </div>
              <div class="details">
                <header>
                  <h3>Information System</h3>
                  <span class="place">Kinng khlied University</span>
                  
                </header>
                <div></div>
              </div>
            
      </body>
    </html>
    
        
        
    </div>`

    


    
}