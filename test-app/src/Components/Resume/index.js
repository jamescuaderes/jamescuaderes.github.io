import React from 'react';
import Header from "../Common/Header";
import CollegeResume from './CollegeResume.png';
import Footer from '../Common/Footer';
import '../../index.css';

class Resume extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Header/>
        <div>
          <img src={CollegeResume} id='resume'/>
        </div>
        <Footer/>
      </div>
    );
  }

}

export default Resume;