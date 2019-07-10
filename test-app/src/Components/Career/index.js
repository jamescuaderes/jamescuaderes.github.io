import React from 'react';
import {Container} from 'reactstrap';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import '../../index.css';

class Career extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Header/>
        <div className='common-background'>
          <div className='dividers'>
            <h2 className='headings'> General Interests</h2>
            <h6 className='common-div'>
              Currently my favorite topics in computer science and engineering lie in quantum computing, deep neural
                networks, and analysis of algorithm boundary conditions. I also am interested in the usage of local
                geometries to approximate multidimensional data spaces. This is quite the broad spectrum, but I am
                currently only a rising sophomore and have not narrowed down my interests to a single topic just yet. I
                also enjoy studying physics in my freetime, reading things like Richard Feynman's <i>The Feynman Lectures
                on Physics</i> and Stephen Hawking's <i>A Brief History of Time</i>. I personally find modern physics
                very interesting, which is why my current favroite area of interest lies in quantum computing, a
                fantastic collaboration between, among other things, physics and computer science.
            </h6>
          </div>
          <div className='dividers'>
            <h2 className='headings'> More Specific Research Interests</h2>
            <ul>
              <li><b>Computer Science</b></li>
              <ul><li>Real world interpretations of various deep neural networks</li></ul>
              <ul><li>Performance of algorithms under various boundary conditions</li></ul>
            </ul>
            <ul>
              <li><b>Physics</b> (There are a lot more than those listed!)</li>
              <ul><li>Quantum Computing, Quantum Information Theory, and Quantum Algorithms</li></ul>
              <ul><li>Particle Physics, Quantum Field Theory, and the Standard Model</li></ul>
              <ul><li>Relations between quantum mechanics and general relativity</li></ul>
            </ul>
          </div>
          <div className='dividers'>
            <h2 className='headings'>Current Career Plans</h2>
            <h6 className='common-div'>
              Being only a rising sophomore in college, my career plans are also not quite set in stone. Currently, I
                would really like to pursue a PhD in any of the following fields: Physics, Computer Science, Computer
                Engineering. I currently feel that physics is my favorite subject, so if I had to choose one subject to
                study, it would most likely be theoretical particle physics. However, for many reasons, I know that
                getting a PhD can be very difficult. Because of this difficulty, I could also see myself entering
                industry after graduating and spending some time as a software engineer. Ultimately, I currently wish to
                obtain a doctoral degree, whether it be immediately after undegraduate studies, or after several years
                in industry.
            </h6>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Career;