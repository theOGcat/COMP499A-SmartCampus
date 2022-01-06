import React from 'react';
import uwindsor from '../images/uwindsor.jpg';
import './AboutStyle.css'

function About() {
    return (
        <>
        <div className = "container">
            <div className = "about-content">
                <div>
                <img src={uwindsor} alt='uwindsor'/>
                </div>
                    <div className = "about-text">
                        <div className = "title">
                            <h2>About the University</h2>
                            <p>145,000+ Alumni Strong</p>
                        </div>
                <p>The University of Windsor is a comprehensive, student-focused university, with more than 16,000 students enrolled in a broad range of undergraduate and graduate programs, including:</p>
                <p>We have strong student-faculty relationships, exceptional award-winning faculty and innovative staff. It creates a unifying atmosphere of excellence across all of our faculties to encourage lifelong learning, teaching, research and discovery.The University of Windsor also ushered in a new era in September 2015 with the opening of classes at the first phase of its downtown campus in the heart of Windsor’s core. The new building—which retains the historic facade of the former Windsor Star newspaper building—houses the School of Social Work and the Centre for Executive and Professional Education. The second phase of the downtown campus includes the School of Creative Arts, located in the century-old site of the Windsor Armouries and the Alan Wildeman Centre for Creative Arts.</p>
                </div>
            </div>
      </div>
        </>
    )
}

export default About
