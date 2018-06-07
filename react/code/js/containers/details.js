import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
  render(){
    if (!this.props.contact) {
      return (<p>Выберите контакт...</p>)
    }
    return (
      <div>
        <h2>{this.props.contact.name}</h2>
        <img src={this.props.contact.img} /><br />
        <p>{this.props.contact.desc}</p>
        <p>Скорость: {this.props.contact.speed}, вес: {this.props.contact.weight}</p>
      </div>
    );
  }
}

function mapStateToProps (state){
  return {
    car: state.active
  };
}

export default connect (mapStateToProps)(Details);
