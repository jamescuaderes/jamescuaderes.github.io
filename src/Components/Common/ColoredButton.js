import React from 'react';
import {Button, Container} from 'reactstrap';

class ColoredButton extends React.Component {

	constructor(props) {
		super(props);
		this.state={
			color: this.props.color
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.color !== 'undefined' && nextProps.color !== this.state.color) {
			this.setState({
				color: nextProps.color
			});
		}
	}

  showAlert() {
    alert("ALERT");
  }

	render() {
		return(
		  <Container>
			  <Button color={this.state.color} onClick={this.showAlert}> {this.props.message} </Button>
			</Container>
		);
	}
}

export default ColoredButton;