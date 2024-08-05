import React from 'react';
import htmlImage from '.';        // Adjust paths as needed
import bootstrapImage from './bs.png';
import cssImage from './css.png';
import jqueryImage from './jquery.png';
import jsImage from './js.png';
import pythonImage from './py.png';

const Skills = () => {
  return (
    <section id="skills" className="bg-light py-5 skills-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="text-center pb-4">Skills</h4>
          </div>
        </div>
        <div className="row">
          {/* HTML Skill Card */}
          <div className="col-md-4">
            <div className="card text-center mb-4" style={{ width: '20rem' }}>
              <img
                src={htmlImage}
                className="card-img-top w-25 h-50 pt-4 m-auto"
                alt="HTML"
              />
              <div className="card-body">
                <h5 className="card-title">HTML</h5>
                <p className="card-text">
                  Expert in HTML, creating well-structured and accessible web pages as the foundation for web development.
                </p>
              </div>
            </div>
          </div>
          {/* Bootstrap Skill Card */}
          <div className="col-md-4">
            <div className="card text-center mb-4" style={{ width: '20rem' }}>
              <img
                src={bootstrapImage}
                className="card-img-top w-25 h-50 pt-4 m-auto"
                alt="Bootstrap"
              />
              <div className="card-body">
                <h5 className="card-title">BOOTSTRAP</h5>
                <p className="card-text">
                  Adept at using Bootstrap to quickly develop responsive, mobile-first websites with consistent, modern designs.
                </p>
              </div>
            </div>
          </div>
          {/* CSS Skill Card */}
          <div className="col-md-4">
            <div className="card text-center mb-4" style={{ width: '20rem' }}>
              <img
                src={cssImage}
                className="card-img-top w-25 h-50 pt-4 m-auto"
                alt="CSS"
              />
              <div className="card-body">
                <h5 className="card-title">CSS</h5>
                <p className="card-text">
                  Skilled in CSS, transforming HTML into visually appealing, responsive designs using modern techniques.
                </p>
              </div>
            </div>
          </div>
          {/* jQuery Skill Card */}
          <div className="col-md-4">
            <div className="card text-center mb-4" style={{ width: '20rem' }}>
              <img
                src={jqueryImage}
                className="card-img-top w-25 h-50 pt-4 m-auto"
                alt="jQuery"
              />
              <div className="card-body">
                <h5 className="card-title">JQUERY</h5>
                <p className="card-text">
                  Experienced with jQuery, simplifying JavaScript tasks like event handling and animations for efficient coding.
                </p>
              </div>
            </div>
          </div>
          {/* JavaScript Skill Card */}
          <div className="col-md-4">
            <div className="card text-center mb-4" style={{ width: '20rem' }}>
              <img
                src={jsImage}
                className="card-img-top w-25 h-50 pt-4 m-auto"
                alt="JavaScript"
              />
              <div className="card-body">
                <h5 className="card-title">JAVASCRIPT</h5>
                <p className="card-text">
                  Proficient in JavaScript, adding interactivity and functionality to web pages for dynamic user experiences.
                </p>
              </div>
            </div>
          </div>
          {/* Python Skill Card */}
          <div className="col-md-4">
            <div className="card text-center mb-4" style={{ width: '20rem' }}>
              <img
                src={pythonImage}
                className="card-img-top w-25 h-50 pt-4 m-auto"
                alt="Python"
              />
              <div className="card-body">
                <h5 className="card-title">PYTHON</h5>
                <p className="card-text">
                  Versatile in Python, handling web development, data analysis, and automation with a focus on readability and simplicity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
