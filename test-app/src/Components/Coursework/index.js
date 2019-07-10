import React from 'react';
import {Container} from 'reactstrap';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import '../../index.css';

class Coursework extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
     <div>
      <Header/>
      <div className='common-background'>
        <div className='dividers'>
          <h2 className='headings'>Computer Science and Engineering Classes Already Taken</h2>
          <ul>
            <li><b>ENGR 102</b> - Engineering Lab I</li>
            <ul><li>An introduction to Python, various helpful libraries, and the engineering design process</li></ul>
            <li><b>CSCE 121</b> - Introduction to Program Design</li>
            <ul><li>An introduction to OOP and basic datastructures</li></ul>
            <li><b>ENGR 216</b> - Engineering Lab II</li>
            <ul><li>A mechanics lab course that teaches the use of various tools and experimental procedures</li></ul>
          </ul>
        </div>
        <div className='dividers'>
          <h2 className='headings'>Computer Science and Engineering Courses in Progress</h2>
          <h6 className='common-div'> None. I am focusing on my internship and not taking any summer classes.</h6>
        </div>
        <div className='dividers'>
          <h2 className='headings'>Computer Science and Engineering Classes Planned for Next Semester</h2>
          <ul>
            <li><b>CSCE 221</b> - Data Structures and Algorithms</li>
            <li><b>CSCE 222</b> - Discrete Mathematics</li>
            <li><b>ECEN 248</b> - Introduction to Digital System Design</li>
            <ul><li>An introductory electrical engineering course in logic gates and circuit design/analysis</li></ul>
            <li><b>ENGR 217</b> - Engineering Lab III</li>
            <ul><li>A continutation of ENGR 216, but with electricity and magnetism substitued for mechanics</li></ul>
          </ul>
        </div>
      </div>
      <Footer/>
     </div>
    );
  }
}

export default Coursework;