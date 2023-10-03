// AboutPage.js
import React from 'react';

function About() {
  return (
    <div className="container">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              About nSavebook
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
              nSavebook is a note Storing Web Application. You can Store and Access Your Notes Securely.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              About Me
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body">
              I am Shahbaz a Computer Engineering Student From Jamia Millia Islamia.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Contact Us
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body">
            <i className="fa-regular fa-envelope"></i>
              <div>mr.famous.up92@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <p>All Right Reserved &copy; 2023 Shahbaz Inc.</p>
      </div>
    </div>
  );
}

export default About;


