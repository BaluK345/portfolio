// src/App.js
import React from 'react';
import Navbar from './Navbar';
import './App.css';
import './Index.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="banner text-center">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="mx-auto text-container">
          <h1 className="pb-3 text-white">Hello and welcome! I'm Balu K</h1>
          <h4 className="pb-4 text-white">
            <br /> Currently in my second year of B.Tech at Karunya Institute of Technology and Sciences, I am a dedicated developer eager to collaborate on projects or simply connect. Feel free to reach out!
          </h4>
          <a
            href="mailto:bbalu0420@gmail.com"
            className="btn btn-dark btn-lg text-uppercase"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONNECT
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h4 className="pb-3">About me</h4>
            <p className="pb-3 text-justify">
              Welcome to my portfolio! My name is Balu, and I am a dedicated and innovative AI & DS Student @ KITS, with a passion for web development, programming, and mobile app development. With adequate experience in the industry, I have honed my skills in HTML, CSS, JavaScript, jQuery, Bootstrap, Python,figma ui, React and Flutter delivering high-quality projects that not only meet but exceed client expectations. My journey began with a strong foundation in computer science and has since evolved into a dynamic career filled with exciting challenges and rewarding achievements.
            </p>
            <p className="pb-3 text-justify">
            I specialize in frontend web development, utilizing languages and frameworks such as HTML, CSS, Bootstrap, JavaScript, and React to create visually appealing and responsive websites. My expertise includes crafting intuitive user interfaces, ensuring cross-browser compatibility, and optimizing web applications for performance and accessibility.

In addition to web development, I have a strong background in mobile application development using Flutter. This allows me to build dynamic, cross-platform apps with a seamless user experience on both Android and iOS devices. My work in Flutter combines efficient coding practices with a keen eye for design, resulting in mobile applications that are both functional and aesthetically pleasing.
            </p>
          </div>
          <div className="col-md-6 text-center">
          <div className="about-image"></div>
          </div>
        </div>
      </div>
    </section>
    <section id="skills" className="py-5 skills-padding">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h4 className="text-center pb-4">Skills</h4>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 col-sm-6">
        <div className="card text-center mb-4 skill-card html-card">
          <div className="card-body">
            <h5 className="card-title">HTML</h5>
            <p className="card-text">
              Expert in HTML, creating well-structured and accessible web pages as the foundation for web development.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="card text-center mb-4 skill-card bootstrap-card">
          <div className="card-body">
            <h5 className="card-title">BOOTSTRAP</h5>
            <p className="card-text">
              Adept at using Bootstrap to quickly develop responsive, mobile-first websites with consistent, modern designs.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="card text-center mb-4 skill-card css-card">
          <div className="card-body">
            <h5 className="card-title">CSS</h5>
            <p className="card-text">
              Skilled in CSS, transforming HTML into visually appealing, responsive designs using modern techniques.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="card text-center mb-4 skill-card jquery-card">
          <div className="card-body">
            <h5 className="card-title">JQUERY</h5>
            <p className="card-text">
              Experienced with jQuery, simplifying JavaScript tasks like event handling and animations for efficient coding.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="card text-center mb-4 skill-card javascript-card">
          <div className="card-body">
            <h5 className="card-title">JAVASCRIPT</h5>
            <p className="card-text">
              Proficient in JavaScript, adding interactivity and functionality to web pages for dynamic user experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="card text-center mb-4 skill-card python-card">
          <div className="card-body">
            <h5 className="card-title">PYTHON</h5>
            <p className="card-text">
              Versatile in Python, handling web development, data analysis, and focus on readability and simplicity.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="card text-center mb-4 skill-card react-card">
          <div className="card-body">
            <h5 className="card-title">REACT</h5>
            <p className="card-text">
              React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="card text-center mb-4 skill-card figma-card">
          <div className="card-body">
            <h5 className="card-title">FIGMA</h5>
            <p className="card-text">
              Figma is a popular online design tool used by designers all over the world. It allows you to create, share, and collaborate on designs in real-time.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="card text-center mb-4 skill-card flutter-card">
          <div className="card-body">
            <h5 className="card-title">FLUTTER</h5>
            <p className="card-text">
              Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="projects" className="projects-section container">
  <h2 className="text-center">Projects</h2>
  <div className="row">
    <div className="col-md-6 col-12 d-flex">
      <div className="project-item text-center flex-fill">
        <h3>E-commerce Website</h3>
        <p>
          E-commerce Website Development: Built a shopping website using HTML, CSS, and Bootstrap to facilitate online purchasing.
          Responsive Design: Ensured the website is fully responsive and accessible on various devices using Bootstrap's grid system.
        </p>
      </div>
    </div>
    <div className="col-md-6 col-12 d-flex">
      <div className="project-item text-center flex-fill">
        <h3>Agrogenesis</h3>
        <p>
          Developed an agri-based application to support farmers by designing the UI in Figma and converting it to Flutter code.
          Transformed Figma designs into functional Flutter applications, ensuring a seamless user experience.
          Demonstrated expertise in both UI/UX design and mobile app development with a focus on agricultural solutions.
        </p>
      </div>
    </div>
  </div>
</section>





    <section id="contact" className="bg-black text-white skills-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="text-center pb-4">Contact</h4>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="number" className="form-label">Mobile Number</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    id="number" 
                    name="number" 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                  />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    name="message"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
        </div>
      </section>
      <footer className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="text-center m-0">Copyright: 2024. Designed and developed by Balu</p>
          </div>
        </div>
      </div>
    </footer>
      
    
    </div>
  );
}

export default App;
