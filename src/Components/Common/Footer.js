import React from 'react';
import '../../index.css';
import Header from './Header'

class Footer extends React.Component {

constructor(props) {
  super(props);
}

render() {
  return(
    <div >
        {/*}
      <h6>
        Bachelor of Science Computer Engineering, Texas A&M University, GPA: 4.0/4.0
      </h6>
      <h6>
        For an alternate description of myself, view my profile on HireAggies here:
          <a href='https://tamu-csm.symplicity.com/profiles/james.cuaderes' target='_blank' style={{textDecoration: 'underline', color: '#000000'}}> HireAggies </a>
      </h6>
      */}
      <Header/>
    </div>
  );
}

}

export default Footer;