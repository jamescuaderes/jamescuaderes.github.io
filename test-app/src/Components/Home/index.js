import React from 'react';
import {Collapse, Button} from 'reactstrap';
import Header from "../Common/Header";
import '../../index.css'
import Footer from '../Common/Footer';

class Home extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return(
      <div>
        <Header/>
        <div className='common-background'>
          <div className='dividers'>
           <h2 className='headings'>About Me</h2>
             <h6 className='common-div'> I am a rising sophomore honors engineering student at Texas A&M University
                                           majoring in computer engineering and minoring in physics.
             </h6>
          </div>
          <div className='dividers'>
            <h2 className='headings'>Current Work Status</h2>
            <h6 className='common-div'> I am currently interning with Amazon in their Seattle headquarters for
                                          the summer of 2019 as an Amazon Future Engineer Software Development
                                          Engineering Intern.
            </h6>
          </div>
          <div className='dividers'>
            <h2 className='headings'>Projects</h2>
            <ul>
              <li>This Website</li>
              <li>AI Tic-Tac-Toe</li>
              <li>AI Snake</li>
            </ul>
          </div>
          <div className='dividers'>
            <h2 className='headings'>Skills</h2>
            <ul>
              <li>Programming Languages</li>
              <ul>
                <li>Python</li>
                <li>C++</li>
                <li>Java</li>
                <li>Web Development with HTML, CSS, JavaScript</li>
                <li>Basic MATLAB</li>
                <li>Basic LaTex</li>
              </ul>
              <li>Frameworks/Tools</li>
              <ul>
                <li>ReactJS</li>
                <li>Redux</li>
                <li>Spring MVC</li>
              </ul>
              <li>Other</li>
              <ul>
                <li>Proficient in Microsoft Office Suite</li>
              </ul>
            </ul>
          </div>
          <div className='dividers'>
            <h2 className='headings'> Other Information </h2>
            <h6 className='common-div'>
              Bachelor of Science Computer Engineering, Texas A&M University, GPA: 4.0/4.0
            </h6>
            <h6 className='common-div'>
              For an alternate description of myself check out my HireAggies profile
              <a href='https://tamu-csm.symplicity.com/profiles/james.cuaderes' target='_blank'> here</a>
              .
            </h6>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;